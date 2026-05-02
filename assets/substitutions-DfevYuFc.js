/**
 * Autodrills Preview Asset: substitutions-DfevYuFc.js
 * 
 * Runs: Browser-side on the public sample site.
 * Responsibility: Part of the bundled preview application.
 */
var module$2 = { exports: {} };
function clone$1(value) {
  return JSON.parse(JSON.stringify(value));
}
function normalizeText(value, fallback = "") {
  if (value === void 0 || value === null) {
    return fallback;
  }
  const text = String(value).trim();
  return text || fallback;
}
function normalizeBoolean(value, fallback = false) {
  if (value === void 0 || value === null || value === "") {
    return fallback;
  }
  return Boolean(value);
}
function normalizeInteger(value, fallback = null) {
  if (value === void 0 || value === null || value === "") {
    return fallback;
  }
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}
function normalizeStringArray(value) {
  const source = Array.isArray(value) ? value : [];
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  source.forEach((entry) => {
    const text = normalizeText(entry);
    if (!text || seen.has(text)) {
      return;
    }
    seen.add(text);
    normalized.push(text);
  });
  return normalized;
}
function normalizeObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }
  return clone$1(value);
}
function coerceAttemptContextPayload(value) {
  if (value === void 0 || value === null || value === "") {
    return {
      present: false,
      payload: null,
      error: ""
    };
  }
  if (typeof value === "string") {
    try {
      return {
        present: true,
        payload: JSON.parse(value),
        error: ""
      };
    } catch (error) {
      return {
        present: true,
        payload: null,
        error: `attemptContextJson could not be parsed: ${error.message}`
      };
    }
  }
  if (typeof value === "object" && !Array.isArray(value)) {
    return {
      present: true,
      payload: value,
      error: ""
    };
  }
  return {
    present: true,
    payload: null,
    error: "attemptContextJson must be a JSON object or JSON string."
  };
}
function compactSection(section = {}) {
  return Object.entries(section).reduce((memo, [key, value]) => {
    if (value === void 0 || value === null || value === "") {
      return memo;
    }
    if (Array.isArray(value) && !value.length) {
      return memo;
    }
    if (value && typeof value === "object" && !Array.isArray(value) && !Object.keys(value).length) {
      return memo;
    }
    memo[key] = value;
    return memo;
  }, {});
}
function normalizeAttemptSection(attempt = {}) {
  const normalized = compactSection({
    attemptId: normalizeText(attempt.attemptId),
    studentId: normalizeText(attempt.studentId),
    sessionId: normalizeText(attempt.sessionId),
    clientSessionId: normalizeText(attempt.clientSessionId),
    attemptOrdinal: normalizeInteger(attempt.attemptOrdinal),
    sessionAttemptOrdinal: normalizeInteger(attempt.sessionAttemptOrdinal),
    startedAt: normalizeText(attempt.startedAt)
  });
  return normalized;
}
function normalizeCatalogSection(catalog = {}) {
  return compactSection({
    catalogVersion: normalizeText(catalog.catalogVersion),
    planVersion: normalizeText(catalog.planVersion),
    validationVersion: normalizeText(catalog.validationVersion),
    summaryPolicyVersion: normalizeText(catalog.summaryPolicyVersion),
    appVersion: normalizeText(catalog.appVersion),
    workbookSchemaVersion: normalizeText(catalog.workbookSchemaVersion)
  });
}
function normalizeSelectionSection(selection = {}) {
  const selectedUnitIds = normalizeStringArray(
    Array.isArray(selection.selectedUnitIds) && selection.selectedUnitIds.length ? selection.selectedUnitIds : Array.isArray(selection.selectedUnits) && selection.selectedUnits.length ? selection.selectedUnits : []
  );
  const selectedTopicIds = normalizeStringArray(
    Array.isArray(selection.selectedTopicIds) && selection.selectedTopicIds.length ? selection.selectedTopicIds : Array.isArray(selection.selectedTopics) && selection.selectedTopics.length ? selection.selectedTopics : []
  );
  const selectedSkillClusters = normalizeStringArray(
    Array.isArray(selection.selectedSkillClusters) && selection.selectedSkillClusters.length ? selection.selectedSkillClusters : Array.isArray(selection.selectedClusters) && selection.selectedClusters.length ? selection.selectedClusters : []
  );
  const selectedScopeSignature = normalizeText(selection.selectedScopeSignature, "");
  const selectedUnitSignature = normalizeText(
    selection.selectedUnitSignature,
    selectedUnitIds.slice().sort().join(",")
  );
  const selectedTopicSignature = normalizeText(
    selection.selectedTopicSignature,
    selectedTopicIds.slice().sort().join(",")
  );
  const selectedClusterSignature = normalizeText(
    selection.selectedClusterSignature,
    selectedScopeSignature || selectedSkillClusters.slice().sort().join(",")
  );
  const selectedScopeTokens = normalizeStringArray([
    ...selectedUnitIds,
    ...selectedTopicIds,
    ...selectedSkillClusters
  ]);
  return compactSection({
    practiceMode: normalizeText(selection.practiceMode, "normal"),
    selectedClusterSignature,
    selectedScopeSignature: selectedScopeSignature || selectedClusterSignature,
    selectedUnitSignature,
    selectedTopicSignature,
    selectedClusters: selectedScopeTokens,
    selectedUnitIds,
    selectedTopicIds,
    selectedSkillClusters,
    studentNudgeLevel: normalizeText(selection.studentNudgeLevel)
  });
}
function normalizeAssignmentSection(assignment = {}) {
  return compactSection({
    assignmentId: normalizeText(assignment.assignmentId),
    assignmentBatchId: normalizeText(assignment.assignmentBatchId),
    deliveryMode: normalizeText(assignment.deliveryMode),
    windowStartAt: normalizeText(assignment.windowStartAt),
    windowEndAt: normalizeText(assignment.windowEndAt),
    windowStatusAtStart: normalizeText(assignment.windowStatusAtStart)
  });
}
function normalizeDrillSection(drill = {}) {
  const primarySkillId = normalizeText(drill.primarySkillId);
  const skillIds = normalizeStringArray(
    Array.isArray(drill.skillIds) && drill.skillIds.length ? drill.skillIds : primarySkillId ? [primarySkillId] : []
  );
  const skillFamilyIds = normalizeStringArray(drill.skillFamilyIds);
  return compactSection({
    drillId: normalizeText(drill.drillId),
    sourceDrillId: normalizeText(drill.sourceDrillId),
    skillCluster: normalizeText(drill.skillCluster),
    primarySkillId,
    skillIds,
    skillFamilyIds,
    clusterId: normalizeText(drill.clusterId),
    validationType: normalizeText(drill.validationType)
  });
}
function normalizeRenderedSection(rendered = {}) {
  return compactSection({
    prompt: normalizeText(rendered.prompt),
    hintSequence: normalizeStringArray(rendered.hintSequence),
    correctSnippets: normalizeStringArray(rendered.correctSnippets),
    substitutions: normalizeObject(rendered.substitutions)
  });
}
function normalizeOutcomeSection(outcome = {}) {
  return compactSection({
    respondedAt: normalizeText(outcome.respondedAt),
    firstSubmittedAt: normalizeText(outcome.firstSubmittedAt),
    completedAt: normalizeText(outcome.completedAt),
    firstRawInput: normalizeText(outcome.firstRawInput),
    rawInput: normalizeText(outcome.rawInput),
    firstIsCorrect: normalizeBoolean(outcome.firstIsCorrect),
    isCorrect: normalizeBoolean(outcome.isCorrect),
    submissionCount: normalizeInteger(outcome.submissionCount),
    hintCount: normalizeInteger(outcome.hintCount),
    allHintsRevealed: normalizeBoolean(outcome.allHintsRevealed),
    answerRevealed: normalizeBoolean(outcome.answerRevealed),
    completionStatus: normalizeText(outcome.completionStatus),
    feedbackProvided: normalizeText(outcome.feedbackProvided)
  });
}
function buildAttemptContextPayload(input = {}) {
  const payload = {
    schemaVersion: 1,
    attempt: normalizeAttemptSection(input.attempt),
    catalog: normalizeCatalogSection(input.catalog),
    selection: normalizeSelectionSection(input.selection),
    assignment: normalizeAssignmentSection(input.assignment),
    drill: normalizeDrillSection(input.drill),
    rendered: normalizeRenderedSection(input.rendered),
    outcome: normalizeOutcomeSection(input.outcome)
  };
  return payload;
}
function parseAttemptContextPayload(value) {
  const coerced = coerceAttemptContextPayload(value);
  if (!coerced.present || coerced.error || !coerced.payload) {
    return null;
  }
  return normalizeAttemptContextPayload(coerced.payload);
}
function normalizeAttemptContextPayload(value = {}) {
  const parsed = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const payload = {
    schemaVersion: normalizeInteger(parsed.schemaVersion, 1) || 1,
    attempt: normalizeAttemptSection(parsed.attempt),
    catalog: normalizeCatalogSection(parsed.catalog),
    selection: normalizeSelectionSection(parsed.selection),
    assignment: normalizeAssignmentSection(parsed.assignment),
    drill: normalizeDrillSection(parsed.drill),
    rendered: normalizeRenderedSection(parsed.rendered),
    outcome: normalizeOutcomeSection(parsed.outcome)
  };
  return payload;
}
function deriveAttemptContextSkillLinks(value = {}) {
  const payload = normalizeAttemptContextPayload(value);
  const skillIds = normalizeStringArray(payload.drill.skillIds);
  const primarySkillId = normalizeText(payload.drill.primarySkillId) || skillIds[0] || "";
  const orderedSkillIds = skillIds.length ? skillIds : primarySkillId ? [primarySkillId] : [];
  const seen = /* @__PURE__ */ new Set();
  return orderedSkillIds.map((skillId) => normalizeText(skillId)).filter((skillId) => {
    if (!skillId || seen.has(skillId)) {
      return false;
    }
    seen.add(skillId);
    return true;
  }).map((skillId) => ({
    skillId,
    role: skillId === primarySkillId ? "primary" : "supporting",
    weight: skillId === primarySkillId ? 1 : 0.5,
    displayName: skillId,
    confidence: "attempt-context",
    notes: ""
  }));
}
function serializeAttemptContextPayload(value) {
  return JSON.stringify(normalizeAttemptContextPayload(value));
}
function validateAttemptContextPayload(value, row = {}) {
  const coerced = coerceAttemptContextPayload(value);
  const errors = [];
  if (coerced.error) {
    return {
      ok: false,
      errors: [coerced.error],
      payload: null
    };
  }
  const payload = normalizeAttemptContextPayload(coerced.payload);
  if (!payload.schemaVersion) {
    errors.push("attemptContextJson.schemaVersion is required.");
  }
  const comparisons = [
    ["attempt.attemptId", payload.attempt.attemptId, row.attemptId],
    ["attempt.studentId", payload.attempt.studentId, row.studentId],
    ["attempt.sessionId", payload.attempt.sessionId, row.sessionId],
    ["drill.drillId", payload.drill.drillId, row.drillId],
    ["selection.selectedClusterSignature", payload.selection.selectedClusterSignature, row.selectedClusterSignature],
    ["catalog.catalogVersion", payload.catalog.catalogVersion, row.catalogVersion],
    ["catalog.planVersion", payload.catalog.planVersion, row.planVersion],
    ["catalog.validationVersion", payload.catalog.validationVersion, row.validationVersion],
    ["outcome.respondedAt", payload.outcome.respondedAt, row.respondedAt],
    ["outcome.firstSubmittedAt", payload.outcome.firstSubmittedAt, row.firstSubmittedAt],
    ["outcome.completedAt", payload.outcome.completedAt, row.completedAt],
    ["outcome.firstRawInput", payload.outcome.firstRawInput, row.firstRawInput],
    ["outcome.rawInput", payload.outcome.rawInput, row.rawInput],
    ["outcome.firstIsCorrect", payload.outcome.firstIsCorrect, row.firstIsCorrect],
    ["outcome.isCorrect", payload.outcome.isCorrect, row.isCorrect],
    ["outcome.submissionCount", payload.outcome.submissionCount, row.submissionCount],
    ["outcome.hintCount", payload.outcome.hintCount, row.hintCount],
    ["outcome.allHintsRevealed", payload.outcome.allHintsRevealed, row.allHintsRevealed],
    ["outcome.answerRevealed", payload.outcome.answerRevealed, row.answerRevealed],
    ["outcome.completionStatus", payload.outcome.completionStatus, row.completionStatus]
  ];
  for (const [field, actual, expected] of comparisons) {
    const rowHasValue = expected !== void 0 && expected !== null && expected !== "";
    if (!rowHasValue) {
      continue;
    }
    const actualValue = typeof actual === "boolean" ? Number(actual) : normalizeText(actual, "");
    const expectedValue = typeof expected === "boolean" ? Number(expected) : normalizeText(expected, "");
    if (String(actualValue) !== String(expectedValue)) {
      errors.push(`${field} does not match the response row.`);
    }
  }
  return {
    ok: errors.length === 0,
    errors,
    payload
  };
}
function inspectAttemptContextPayload(value, row = {}) {
  const coerced = coerceAttemptContextPayload(value);
  if (!coerced.present) {
    return {
      present: false,
      ok: true,
      errors: [],
      payload: null
    };
  }
  const validation = validateAttemptContextPayload(coerced.payload || value, row);
  return {
    present: true,
    ok: validation.ok,
    errors: validation.errors,
    payload: validation.payload
  };
}
module$2.exports = {
  buildAttemptContextPayload,
  coerceAttemptContextPayload,
  deriveAttemptContextSkillLinks,
  inspectAttemptContextPayload,
  normalizeAttemptContextPayload,
  parseAttemptContextPayload,
  serializeAttemptContextPayload,
  validateAttemptContextPayload
};
const __CJS__export_default__$1 = (module$2.exports == null ? {} : module$2.exports).default || module$2.exports;
const attemptContextModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__$1
}, Symbol.toStringTag, { value: "Module" }));
var module$1 = { exports: {} };
function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
function stringifyStructuredValue(value) {
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => stringifyStructuredValue(entry)).join("\n");
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    if (!entries.length) {
      return "";
    }
    return entries.map(([key, entryValue]) => {
      const stringKey = stringifyStructuredValue(key);
      const stringValue = stringifyStructuredValue(entryValue);
      return stringValue ? `${stringKey}: ${stringValue}` : stringKey;
    }).join(" ");
  }
  return String(value);
}
function renderStructuredValue(value, substitutions = {}) {
  if (typeof value === "string") {
    return applySubstitutions(value, substitutions);
  }
  if (Array.isArray(value)) {
    return value.map((entry) => renderStructuredValue(entry, substitutions)).join("\n");
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    if (!entries.length) {
      return "";
    }
    return entries.map(([key, entryValue]) => {
      const renderedKey = applySubstitutions(String(key), substitutions);
      const renderedValue = renderStructuredValue(entryValue, substitutions);
      return renderedValue ? `${renderedKey}: ${renderedValue}` : renderedKey;
    }).join(" ");
  }
  return applySubstitutions(String(value), substitutions);
}
function applySubstitutions(text = "", substitutions = {}, formatHtml = false) {
  return String(text).replace(/\{\{([^}]+)\}\}/g, (_match, rawName) => {
    const name = rawName.trim();
    const value = Object.prototype.hasOwnProperty.call(substitutions, name) ? substitutions[name] : `{{${name}}}`;
    const stringValue = String(value);
    if (!formatHtml) {
      return stringValue;
    }
    return `<strong>${stringValue.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</strong>`;
  });
}
function getUniqueRandomValue(type, randomizationBank = {}, excludeValues = [], rng = Math.random) {
  const values = Array.isArray(randomizationBank[type]) ? randomizationBank[type] : [];
  const available = values.filter((value) => !excludeValues.includes(value));
  if (!available.length) {
    return null;
  }
  const index = Math.floor(rng() * available.length);
  return available[index];
}
function getRandomValue(type, randomizationBank = {}, rng = Math.random) {
  const values = Array.isArray(randomizationBank[type]) ? randomizationBank[type] : [];
  if (!values.length) {
    return null;
  }
  const index = Math.floor(rng() * values.length);
  return values[index];
}
function resolveCalculatedPlaceholder(calcRule, resolvedValues, randomizationBank, rng = Math.random) {
  const [dependencyName, offsetType] = String(calcRule || "").split("+").map((part) => part && part.trim());
  const dependencyValue = Number(resolvedValues[dependencyName]);
  if (!dependencyName || !offsetType || Number.isNaN(dependencyValue)) {
    return null;
  }
  const candidates = (randomizationBank[offsetType] || []).map((value) => Number(value)).filter((value) => !Number.isNaN(value));
  const offset = candidates.length ? candidates[Math.floor(rng() * candidates.length)] : 1;
  return dependencyValue + offset;
}
function generateSubstitutions(placeholderTypes = {}, randomizationBank = {}, options = {}) {
  const rng = typeof options.rng === "function" ? options.rng : Math.random;
  const substitutions = {};
  const chosenByType = {};
  Object.entries(placeholderTypes).forEach(([placeholderName, typeOrCalc]) => {
    if (typeof typeOrCalc !== "string" || typeOrCalc.startsWith("calc:")) {
      return;
    }
    if (!chosenByType[typeOrCalc]) {
      chosenByType[typeOrCalc] = [];
    }
    let value = getUniqueRandomValue(typeOrCalc, randomizationBank, chosenByType[typeOrCalc], rng);
    if (value === null) {
      value = getRandomValue(typeOrCalc, randomizationBank, rng);
    }
    substitutions[placeholderName] = value ?? `[${placeholderName}]`;
    if (value !== null && !chosenByType[typeOrCalc].includes(value)) {
      chosenByType[typeOrCalc].push(value);
    }
  });
  Object.entries(placeholderTypes).forEach(([placeholderName, typeOrCalc]) => {
    if (typeof typeOrCalc === "string" && typeOrCalc.startsWith("calc:")) {
      substitutions[placeholderName] = resolveCalculatedPlaceholder(typeOrCalc.slice(5), substitutions, randomizationBank, rng) ?? `[${placeholderName}]`;
    }
  });
  return substitutions;
}
function prepareDrillForSession(drill, randomizationBank, options = {}) {
  const substitutions = options.substitutions || generateSubstitutions(drill.placeholderTypes, randomizationBank, options);
  return {
    ...clone(drill),
    substitutions,
    renderedHintSequence: (drill.hintSequence || []).map((hint) => renderStructuredValue(hint, substitutions)),
    renderedCorrectSnippets: (drill.correctSnippets || []).map((snippet) => renderStructuredValue(snippet, substitutions)),
    renderedPrompt: applySubstitutions(drill.promptTemplate, substitutions)
  };
}
module$1.exports = {
  applySubstitutions,
  generateSubstitutions,
  getUniqueRandomValue,
  prepareDrillForSession,
  renderStructuredValue,
  stringifyStructuredValue
};
const __CJS__export_default__ = (module$1.exports == null ? {} : module$1.exports).default || module$1.exports;
const substitutionsModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__
}, Symbol.toStringTag, { value: "Module" }));
export {
  __CJS__export_default__ as _,
  __CJS__export_default__$1 as a,
  attemptContextModule as b,
  substitutionsModule as s
};
//# sourceMappingURL=substitutions-DfevYuFc.js.map
