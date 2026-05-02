/**
 * Autodrills Preview Asset: indexedDbClient-BhXpRefM.js
 * 
 * Runs: Browser-side on the public sample site.
 * Responsibility: Part of the bundled preview application.
 */
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(this.request);
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
const advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
const methodMap = {};
const advanceResults = /* @__PURE__ */ new WeakMap();
const ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
const cursorIteratorTraps = {
  get(target, prop) {
    if (!advanceMethodProps.includes(prop))
      return target[prop];
    let cachedFunc = methodMap[prop];
    if (!cachedFunc) {
      cachedFunc = methodMap[prop] = function(...args) {
        advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
      };
    }
    return cachedFunc;
  }
};
async function* iterate(...args) {
  let cursor = this;
  if (!(cursor instanceof IDBCursor)) {
    cursor = await cursor.openCursor(...args);
  }
  if (!cursor)
    return;
  cursor = cursor;
  const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
  ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
  reverseTransformCache.set(proxiedCursor, unwrap(cursor));
  while (cursor) {
    yield proxiedCursor;
    cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
    advanceResults.delete(proxiedCursor);
  }
}
function isIteratorProp(target, prop) {
  return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get(target, prop, receiver) {
    if (isIteratorProp(target, prop))
      return iterate;
    return oldTraps.get(target, prop, receiver);
  },
  has(target, prop) {
    return isIteratorProp(target, prop) || oldTraps.has(target, prop);
  }
}));
const STORAGE_ERROR_NAMES = /* @__PURE__ */ new Set([
  "AbortError",
  "ConstraintError",
  "DataError",
  "InvalidStateError",
  "NotFoundError",
  "QuotaExceededError",
  "TransactionInactiveError",
  "UnknownError",
  "VersionError"
]);
function isIndexedDbAvailable() {
  return typeof window !== "undefined" && typeof window.indexedDB !== "undefined";
}
function isStorageError(error) {
  if (!error) {
    return false;
  }
  const name = String(error.name || "");
  if (STORAGE_ERROR_NAMES.has(name)) {
    return true;
  }
  const message = String(error.message || "").toLowerCase();
  return message.includes("indexeddb") || message.includes("quota") || message.includes("transaction") || message.includes("storage");
}
const AUTODRILLS_BROWSER_CACHE_DB_NAME = "autodrills-browser-cache";
const AUTODRILLS_BROWSER_CACHE_DB_VERSION = 2;
const AUTODRILLS_BROWSER_CACHE_SCHEMA_VERSION = 2;
const AUTODRILLS_BROWSER_CACHE_STORE_NAMES = {
  meta: "meta",
  catalogSnapshots: "catalogSnapshots",
  catalogEntries: "catalogEntries",
  pendingResponses: "pendingResponses",
  previewResponses: "previewResponses"
};
let dbPromise = null;
function createStores(db) {
  if (!db.objectStoreNames.contains(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.meta)) {
    db.createObjectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.meta, { keyPath: "key" });
  }
  if (!db.objectStoreNames.contains(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.catalogSnapshots)) {
    const store = db.createObjectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.catalogSnapshots, { keyPath: "cacheKey" });
    store.createIndex("catalogRevision", "catalogRevision", { unique: false });
    store.createIndex("lastUsedAt", "lastUsedAt", { unique: false });
  }
  if (!db.objectStoreNames.contains(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.catalogEntries)) {
    const store = db.createObjectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.catalogEntries, { keyPath: "entryKey" });
    store.createIndex("cacheKey", "cacheKey", { unique: false });
    store.createIndex("name", "name", { unique: false });
  }
  if (!db.objectStoreNames.contains(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses)) {
    const store = db.createObjectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses, { keyPath: "queueId" });
    store.createIndex("studentId", "studentId", { unique: false });
    store.createIndex("createdAt", "createdAt", { unique: false });
    store.createIndex("expiresAt", "expiresAt", { unique: false });
    store.createIndex("flushState", "flushState", { unique: false });
  }
  if (!db.objectStoreNames.contains(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.previewResponses)) {
    const store = db.createObjectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.previewResponses, { keyPath: "recordId" });
    store.createIndex("studentId", "studentId", { unique: false });
    store.createIndex("respondedAt", "respondedAt", { unique: false });
    store.createIndex("sessionId", "sessionId", { unique: false });
    store.createIndex("drillId", "drillId", { unique: false });
    store.createIndex("attemptId", "attemptId", { unique: false });
  }
}
async function openAutodrillsDb() {
  if (!isIndexedDbAvailable()) {
    throw new Error("IndexedDB is not available.");
  }
  if (!dbPromise) {
    dbPromise = openDB(AUTODRILLS_BROWSER_CACHE_DB_NAME, AUTODRILLS_BROWSER_CACHE_DB_VERSION, {
      upgrade(db, oldVersion, newVersion, transaction) {
        createStores(db);
        transaction.objectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.meta).put({
          key: "schema",
          version: AUTODRILLS_BROWSER_CACHE_SCHEMA_VERSION,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    }).catch((error) => {
      dbPromise = null;
      throw error;
    });
  }
  return dbPromise;
}
function resetAutodrillsDbCache() {
  if (dbPromise) {
    dbPromise.then((db) => db.close()).catch(() => {
    });
  }
  dbPromise = null;
}
export {
  AUTODRILLS_BROWSER_CACHE_STORE_NAMES as A,
  isStorageError as a,
  AUTODRILLS_BROWSER_CACHE_SCHEMA_VERSION as b,
  isIndexedDbAvailable as i,
  openAutodrillsDb as o,
  resetAutodrillsDbCache as r
};
//# sourceMappingURL=indexedDbClient-BhXpRefM.js.map
