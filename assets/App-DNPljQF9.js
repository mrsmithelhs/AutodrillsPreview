/**
 * Autodrills Preview Asset: App-DNPljQF9.js
 * 
 * Runs: Browser-side on the public sample site.
 * Responsibility: Part of the bundled preview application.
 */
import { _ as _export_sfc, u as useAppBootstrap, a as useRoute, R as RouterLink, b as RouterView } from "./_plugin-vue_export-helper-CyL4RPqw.js";
import { o as onMounted, a as onUnmounted, r as ref, b as onBeforeUnmount, w as watchEffect, c as openBlock, d as createElementBlock, e as createBaseVNode, n as normalizeClass, F as Fragment, f as renderList, u as unref, g as createTextVNode, t as toDisplayString, h as createCommentVNode, i as createVNode, j as withCtx, k as computed, l as createBlock } from "./runtime-core.esm-bundler-C21_olk_.js";
import "./indexedDbClient-BhXpRefM.js";
const SESSION_STORAGE_KEY = "autodrills.simulate-gas-latency";
function isSessionStorageAvailable() {
  return typeof window !== "undefined" && typeof window.sessionStorage !== "undefined";
}
function isGasLatencySimulationEnabled() {
  if (!isSessionStorageAvailable()) {
    return false;
  }
  return window.sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";
}
function setGasLatencySimulationEnabled(enabled) {
  if (!isSessionStorageAvailable()) {
    return;
  }
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, enabled ? "true" : "false");
}
function useAutoHidingNavbar({ hideDelayMs = 3e3, triggerZoneHeight = 15, hoverZoneHeight = 60 } = {}) {
  const isNavbarVisible = ref(true);
  let hideTimeout = null;
  let mouseMoveHandler = null;
  function clearHideTimeout() {
    if (hideTimeout) {
      window.clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  }
  function startHideTimeout() {
    clearHideTimeout();
    hideTimeout = window.setTimeout(() => {
      isNavbarVisible.value = false;
    }, hideDelayMs);
  }
  function handleMouseMove(event) {
    const inTriggerZone = event.clientY <= triggerZoneHeight;
    const hoveringNavbar = isNavbarVisible.value && event.clientY <= hoverZoneHeight;
    if (inTriggerZone || hoveringNavbar) {
      isNavbarVisible.value = true;
      clearHideTimeout();
      return;
    }
    if (isNavbarVisible.value && !hideTimeout) {
      startHideTimeout();
    }
  }
  function attach() {
    mouseMoveHandler = handleMouseMove;
    window.addEventListener("mousemove", mouseMoveHandler);
    startHideTimeout();
  }
  function detach() {
    if (mouseMoveHandler) {
      window.removeEventListener("mousemove", mouseMoveHandler);
      mouseMoveHandler = null;
    }
    clearHideTimeout();
  }
  onMounted(attach);
  onUnmounted(detach);
  return {
    isNavbarVisible,
    clearHideTimeout,
    startHideTimeout,
    handleMouseMove,
    attach,
    detach
  };
}
const STORAGE_KEY = "autodrills.theme-mode";
const getStoredPreference = () => {
  if (typeof window === "undefined") return "system";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return ["system", "light", "dark"].includes(stored) ? stored : "system";
  } catch (e) {
    return "system";
  }
};
const preference = ref(getStoredPreference());
function useThemeMode() {
  function setPreference(value) {
    if (!["system", "light", "dark"].includes(value)) return;
    preference.value = value;
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, value);
      }
    } catch (e) {
    }
  }
  function getSystemTheme() {
    if (typeof window === "undefined" || !window.matchMedia) return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  const applyTheme = () => {
    if (typeof window === "undefined") return;
    const effectiveTheme = preference.value === "system" ? getSystemTheme() : preference.value;
    document.documentElement.dataset.bsTheme = effectiveTheme;
    document.documentElement.style.colorScheme = effectiveTheme;
  };
  const handleSystemChange = (e) => {
    if (preference.value === "system") {
      applyTheme();
    }
  };
  onMounted(() => {
    applyTheme();
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", handleSystemChange);
    }
  });
  onBeforeUnmount(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.removeEventListener("change", handleSystemChange);
    }
  });
  watchEffect(() => {
    applyTheme();
  });
  return {
    preference,
    setPreference
  };
}
const _hoisted_1$1 = { class: "dropdown theme-mode-toggle" };
const _hoisted_2$1 = {
  class: "btn btn-link nav-link dropdown-toggle d-flex align-items-center p-0 border-0",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false",
  title: "Toggle theme"
};
const _hoisted_3$1 = { class: "dropdown-menu dropdown-menu-end shadow-sm" };
const _hoisted_4$1 = ["onClick"];
const _sfc_main$1 = {
  __name: "ThemeModeToggle",
  setup(__props) {
    const { preference: preference2, setPreference } = useThemeMode();
    const themes = [
      { value: "light", label: "Light", icon: "bi-sun" },
      { value: "dark", label: "Dark", icon: "bi-moon-stars" },
      { value: "system", label: "System", icon: "bi-display" }
    ];
    const getActiveIcon = () => {
      return themes.find((t) => t.value === preference2.value)?.icon || "bi-circle-half";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("button", _hoisted_2$1, [
          createBaseVNode("i", {
            class: normalizeClass(["bi", getActiveIcon()])
          }, null, 2),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "ms-2 d-lg-none" }, "Theme", -1))
        ]),
        createBaseVNode("ul", _hoisted_3$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(themes, (theme) => {
            return createBaseVNode("li", {
              key: theme.value
            }, [
              createBaseVNode("button", {
                class: normalizeClass(["dropdown-item d-flex align-items-center gap-2", { active: unref(preference2) === theme.value }]),
                type: "button",
                onClick: ($event) => unref(setPreference)(theme.value)
              }, [
                createBaseVNode("i", {
                  class: normalizeClass(["bi", theme.icon])
                }, null, 2),
                createTextVNode(" " + toDisplayString(theme.label), 1)
              ], 10, _hoisted_4$1)
            ]);
          }), 64))
        ])
      ]);
    };
  }
};
const ThemeModeToggle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-84ed4c63"]]);
const _hoisted_1 = { class: "app-shell" };
const _hoisted_2 = {
  key: 0,
  class: "navbar-trigger"
};
const _hoisted_3 = { class: "container" };
const _hoisted_4 = { class: "brand-name" };
const _hoisted_5 = { class: "d-flex align-items-center gap-3" };
const _hoisted_6 = { class: "nav nav-pills" };
const _hoisted_7 = ["aria-pressed"];
const _hoisted_8 = { class: "ms-1 d-none d-md-inline" };
const _hoisted_10 = { class: "container py-4 flex-grow-1" };
const _hoisted_11 = {
  key: 0,
  class: "text-center py-5 text-muted small"
};
const _hoisted_12 = {
  key: 1,
  class: "alert alert-danger"
};
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const bootstrap = useAppBootstrap();
    const { isNavbarVisible } = useAutoHidingNavbar();
    useRoute();
    const showLatencyToggle = computed(() => false);
    const gasLatencySimulationEnabled = ref(isGasLatencySimulationEnabled());
    const previewFocusMode = ref(typeof window !== "undefined" ? window.localStorage.getItem("practice-focus-mode") === "true" : false);
    const previewNavItems = [
      { label: "Practice", to: "/practice" },
      { label: "About", to: "/about" },
      { label: "Full Version", to: "/upgrade" }
    ];
    const appBrandName = "Autodrills Preview";
    const isPreviewNavbarFixed = computed(() => previewFocusMode.value);
    const activeNavItems = computed(() => {
      {
        return previewNavItems;
      }
    });
    function toggleGasLatencySimulation() {
      gasLatencySimulationEnabled.value = !gasLatencySimulationEnabled.value;
      setGasLatencySimulationEnabled(gasLatencySimulationEnabled.value);
    }
    function handlePreviewFocusModeChange(event) {
      previewFocusMode.value = Boolean(event?.detail);
    }
    onMounted(() => {
      document.title = appBrandName;
      if (typeof window !== "undefined") {
        window.addEventListener("autodrills-focus-mode-change", handlePreviewFocusModeChange);
      }
      void bootstrap.loadBootstrap();
    });
    onBeforeUnmount(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("autodrills-focus-mode-change", handlePreviewFocusModeChange);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        isPreviewNavbarFixed.value ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("", true),
        createBaseVNode("nav", {
          class: normalizeClass(["navbar navbar-expand-lg bg-body border-bottom shadow-sm", {
            "navbar-hidden": previewFocusMode.value && !unref(isNavbarVisible),
            "navbar-preview-static": !previewFocusMode.value
          }])
        }, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(RouterLink), {
              class: "navbar-brand fw-semibold preview-brand",
              to: "/practice"
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_4, toDisplayString(unref(appBrandName)), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(activeNavItems.value, (item) => {
                  return openBlock(), createBlock(unref(RouterLink), {
                    key: item.to,
                    class: "nav-link",
                    to: item.to,
                    "active-class": "active"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ]),
              showLatencyToggle.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: normalizeClass(["btn btn-sm", gasLatencySimulationEnabled.value ? "btn-warning" : "btn-outline-secondary"]),
                "aria-pressed": gasLatencySimulationEnabled.value,
                title: "Toggle GAS latency simulation",
                onClick: toggleGasLatencySimulation
              }, [
                createBaseVNode("i", {
                  class: normalizeClass(["bi", gasLatencySimulationEnabled.value ? "bi-hourglass-split" : "bi-hourglass"])
                }, null, 2),
                createBaseVNode("span", _hoisted_8, toDisplayString(gasLatencySimulationEnabled.value ? "GAS delays on" : "GAS delays off"), 1)
              ], 10, _hoisted_7)) : createCommentVNode("", true),
              createVNode(ThemeModeToggle),
              createCommentVNode("", true)
            ])
          ])
        ], 2),
        createBaseVNode("main", _hoisted_10, [
          unref(bootstrap).loading.value && !unref(bootstrap).error.value ? (openBlock(), createElementBlock("div", _hoisted_11, [..._cache[0] || (_cache[0] = [
            createBaseVNode("div", {
              class: "spinner-border spinner-border-sm me-2",
              role: "status"
            }, null, -1),
            createTextVNode(" Bootstrapping environment... ", -1)
          ])])) : createCommentVNode("", true),
          unref(bootstrap).error.value ? (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(unref(bootstrap).error.value), 1)) : createCommentVNode("", true),
          createVNode(unref(RouterView))
        ])
      ]);
    };
  }
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de89fbbd"]]);
export {
  App as default
};
//# sourceMappingURL=App-DNPljQF9.js.map
