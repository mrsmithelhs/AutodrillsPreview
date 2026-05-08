/**
 * Autodrills Preview Asset: router-Cwl9w8wG.js
 * 
 * Runs: Browser-side on the public sample site.
 * Responsibility: Part of the bundled preview application.
 */
import { _ as _export_sfc, c as apiClient, u as useAppBootstrap, d as createRouter, e as createWebHashHistory } from "./_plugin-vue_export-helper-CyL4RPqw.js";
import { w as withModifiers, v as vModelText, T as Transition } from "./runtime-dom.esm-bundler-BMkBX2kS.js";
import { c as openBlock, d as createElementBlock, e as createBaseVNode, g as createTextVNode, m as nextTick, r as ref, F as Fragment, f as renderList, t as toDisplayString, p as watch, l as createBlock, j as withCtx, u as unref, q as withDirectives, h as createCommentVNode, k as computed, s as normalizeStyle, n as normalizeClass, v as resolveDynamicComponent, i as createVNode, o as onMounted, x as isRef, y as resolveComponent, z as createStaticVNode } from "./runtime-core.esm-bundler-C21_olk_.js";
import { _ as __CJS__export_default__$6, s as substitutionsModule$1, a as __CJS__export_default__$7, b as attemptContextModule } from "./substitutions-DfevYuFc.js";
import { _ as __CJS__export_default__$8, d as drillSelectionModule } from "./drillSelection-BI-qkrnO.js";
import { i as isIndexedDbAvailable, a as isStorageError, A as AUTODRILLS_BROWSER_CACHE_STORE_NAMES, o as openAutodrillsDb, r as resetAutodrillsDbCache } from "./indexedDbClient-BhXpRefM.js";
const _hoisted_1$c = { class: "answer-editor" };
const _hoisted_2$c = ["value", "disabled"];
const _sfc_main$c = {
  __name: "AnswerEditor",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    disabled: Boolean
  },
  emits: ["update:modelValue", "submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const inputRef = ref(null);
    function handleKeydown(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        emit("submit");
        return;
      }
      if (event.key !== "Tab") {
        return;
      }
      event.preventDefault();
      const input = event.target;
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const nextValue = `${input.value.slice(0, start)}  ${input.value.slice(end)}`;
      emit("update:modelValue", nextValue);
      nextTick(() => {
        input.selectionStart = start + 2;
        input.selectionEnd = start + 2;
      });
    }
    function focus() {
      inputRef.value?.focus();
    }
    __expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createBaseVNode("textarea", {
          ref_key: "inputRef",
          ref: inputRef,
          class: "form-control mono-block",
          rows: "8",
          value: __props.modelValue,
          disabled: __props.disabled,
          placeholder: "Type a Java expression or statement here",
          onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value)),
          onKeydown: handleKeydown
        }, null, 40, _hoisted_2$c),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "mt-2 text-muted small" }, [
          createTextVNode(" Use "),
          createBaseVNode("kbd", null, "Ctrl"),
          createTextVNode(" + "),
          createBaseVNode("kbd", null, "Enter"),
          createTextVNode(" to check your answer. ")
        ], -1))
      ]);
    };
  }
};
const AnswerEditor = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-3776d34a"]]);
const _hoisted_1$b = { class: "d-flex justify-content-between align-items-center mb-2" };
const _hoisted_2$b = { class: "btn-group btn-group-sm" };
const _hoisted_3$a = {
  key: 0,
  class: "text-muted small"
};
const _hoisted_4$8 = {
  key: 1,
  class: "d-grid gap-3"
};
const _hoisted_5$8 = { class: "d-flex justify-content-between align-items-start gap-3 mb-2" };
const _hoisted_6$7 = ["checked", "onChange"];
const _hoisted_7$7 = { class: "fw-semibold" };
const _hoisted_8$7 = { class: "badge text-bg-secondary-subtle" };
const _hoisted_9$7 = { class: "ps-4 d-grid gap-2" };
const _hoisted_10$7 = ["checked", "disabled", "onChange"];
const _hoisted_11$6 = { class: "badge text-bg-secondary-subtle" };
const _sfc_main$b = {
  __name: "CourseUnitTopicPicker",
  props: {
    modelValue: {
      type: Object,
      default: () => ({ unitIds: [], topicIds: [] })
    },
    options: {
      type: Array,
      default: () => []
    },
    loading: Boolean
  },
  emits: ["update:modelValue", "select-all", "clear-all"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function normalizeSelection(value = {}) {
      return {
        unitIds: Array.isArray(value.unitIds) ? [...new Set(value.unitIds.map((entry) => String(entry || "").trim()).filter(Boolean))] : [],
        topicIds: Array.isArray(value.topicIds) ? [...new Set(value.topicIds.map((entry) => String(entry || "").trim()).filter(Boolean))] : []
      };
    }
    function updateSelection(nextSelection) {
      emit("update:modelValue", normalizeSelection(nextSelection));
    }
    function isUnitSelected(unitId) {
      return normalizeSelection(props.modelValue).unitIds.includes(unitId);
    }
    function isTopicSelected(topicId) {
      return normalizeSelection(props.modelValue).topicIds.includes(topicId);
    }
    function isTopicChecked(unitId, topicId) {
      return isUnitSelected(unitId) || isTopicSelected(topicId);
    }
    function toggleUnit(unitId) {
      const selection = normalizeSelection(props.modelValue);
      const unitIds = new Set(selection.unitIds);
      if (unitIds.has(unitId)) {
        unitIds.delete(unitId);
      } else {
        unitIds.add(unitId);
      }
      updateSelection({ ...selection, unitIds: [...unitIds] });
    }
    function toggleTopic(topicId) {
      const selection = normalizeSelection(props.modelValue);
      const topicIds = new Set(selection.topicIds);
      if (topicIds.has(topicId)) {
        topicIds.delete(topicId);
      } else {
        topicIds.add(topicId);
      }
      updateSelection({ ...selection, topicIds: [...topicIds] });
    }
    function unitLabel(unit) {
      return unit.unitName || unit.displayName || unit.unitId;
    }
    function topicLabel(topic) {
      return topic.topicName || topic.displayName || topic.topicId;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$b, [
          _cache[2] || (_cache[2] = createBaseVNode("label", { class: "form-label fw-semibold mb-0" }, "Units and Topics", -1)),
          createBaseVNode("div", _hoisted_2$b, [
            createBaseVNode("button", {
              class: "btn btn-outline-secondary",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select-all"))
            }, "All units"),
            createBaseVNode("button", {
              class: "btn btn-outline-secondary",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("clear-all"))
            }, "None")
          ])
        ]),
        _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-muted small mb-3" }, " Select a whole unit, or pick one or more topics within a unit. Whole-unit selections include every topic in that unit. ", -1)),
        __props.loading ? (openBlock(), createElementBlock("div", _hoisted_3$a, "Loading AP CSA units and topics...")) : (openBlock(), createElementBlock("div", _hoisted_4$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (unit) => {
            return openBlock(), createElementBlock("div", {
              key: unit.unitId,
              class: "border rounded-3 p-3 bg-body"
            }, [
              createBaseVNode("label", _hoisted_5$8, [
                createBaseVNode("span", null, [
                  createBaseVNode("input", {
                    class: "form-check-input me-2",
                    type: "checkbox",
                    checked: isUnitSelected(unit.unitId),
                    onChange: ($event) => toggleUnit(unit.unitId)
                  }, null, 40, _hoisted_6$7),
                  createBaseVNode("span", _hoisted_7$7, toDisplayString(unitLabel(unit)), 1)
                ]),
                createBaseVNode("span", _hoisted_8$7, toDisplayString(unit.count || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_9$7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unit.topics || [], (topic) => {
                  return openBlock(), createElementBlock("label", {
                    key: topic.topicId,
                    class: "d-flex justify-content-between align-items-start gap-3"
                  }, [
                    createBaseVNode("span", null, [
                      createBaseVNode("input", {
                        class: "form-check-input me-2",
                        type: "checkbox",
                        checked: isTopicChecked(unit.unitId, topic.topicId),
                        disabled: isUnitSelected(unit.unitId),
                        onChange: ($event) => toggleTopic(topic.topicId)
                      }, null, 40, _hoisted_10$7),
                      createBaseVNode("span", null, toDisplayString(topic.topicNumber ? `${topic.topicNumber} ${topicLabel(topic)}` : topicLabel(topic)), 1)
                    ]),
                    createBaseVNode("span", _hoisted_11$6, toDisplayString(topic.count || 0), 1)
                  ]);
                }), 128))
              ])
            ]);
          }), 128))
        ]))
      ]);
    };
  }
};
var module$7 = { exports: {} };
const REPORT_ISSUE_AREAS = [
  { value: "prompt", label: "Prompt" },
  { value: "hints", label: "Hints" },
  { value: "solution", label: "Solution" },
  { value: "missing_information", label: "Missing information" },
  { value: "topic_alignment", label: "Topic alignment" },
  { value: "something_else", label: "Something else" }
];
const REPORT_STATUSES = [
  { value: "open", label: "Open" },
  { value: "investigating", label: "Investigating" },
  { value: "manual_review", label: "Manual review" },
  { value: "resolved", label: "Resolved" },
  { value: "duplicate", label: "Duplicate" },
  { value: "wont_fix", label: "Won't fix" }
];
const REPORT_ISSUE_AREA_VALUES = REPORT_ISSUE_AREAS.map((option) => option.value);
const REPORT_STATUS_VALUES = REPORT_STATUSES.map((option) => option.value);
const UNRESOLVED_REPORT_STATUS_VALUES = ["open", "investigating", "manual_review"];
function normalizeReportIssueAreas$1(value = []) {
  const source = Array.isArray(value) ? value : [];
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  source.forEach((entry) => {
    const issueArea = String(entry || "").trim();
    if (!issueArea || seen.has(issueArea) || !REPORT_ISSUE_AREA_VALUES.includes(issueArea)) {
      return;
    }
    seen.add(issueArea);
    normalized.push(issueArea);
  });
  return normalized;
}
function isKnownReportIssueArea(value) {
  return REPORT_ISSUE_AREA_VALUES.includes(String(value || "").trim());
}
function normalizeReportStatus(value, fallback = "open") {
  const normalized = String(value || "").trim();
  return REPORT_STATUS_VALUES.includes(normalized) ? normalized : fallback;
}
function isKnownReportStatus(value) {
  return REPORT_STATUS_VALUES.includes(String(value || "").trim());
}
function isUnresolvedReportStatus(value) {
  return UNRESOLVED_REPORT_STATUS_VALUES.includes(normalizeReportStatus(value, "open"));
}
module$7.exports = {
  REPORT_ISSUE_AREAS,
  REPORT_STATUSES,
  REPORT_ISSUE_AREA_VALUES,
  REPORT_STATUS_VALUES,
  UNRESOLVED_REPORT_STATUS_VALUES,
  normalizeReportIssueAreas: normalizeReportIssueAreas$1,
  isKnownReportIssueArea,
  normalizeReportStatus,
  isKnownReportStatus,
  isUnresolvedReportStatus
};
const __CJS__export_default__$5 = (module$7.exports == null ? {} : module$7.exports).default || module$7.exports;
const reportModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__$5
}, Symbol.toStringTag, { value: "Module" }));
function normalizeText(value, fallback = "") {
  const text = String(value ?? "").trim();
  return text || fallback;
}
function normalizeIssueAreaLabels(issueAreas = []) {
  const source = Array.isArray(issueAreas) ? issueAreas : [];
  return source.map((entry) => normalizeText(entry)).filter(Boolean).join(", ");
}
function getPrimarySkill(drill = {}) {
  const skillLinks = Array.isArray(drill.skills) ? drill.skills : [];
  const primaryLink = skillLinks.find((link) => String(link?.role || "").trim() === "primary") || skillLinks[0] || null;
  const skillId = normalizeText(primaryLink?.skillId || drill.skillId || drill.drillId);
  return {
    skillId,
    skillName: normalizeText(primaryLink?.displayName || drill.skillName || skillId, skillId)
  };
}
function buildPreviewDrillReportPayload({
  drill = {},
  reportDetails = {},
  currentUrl = typeof window !== "undefined" ? window.location.href : ""
} = {}) {
  const primarySkill = getPrimarySkill(drill);
  const issueAreas = Array.isArray(reportDetails.issueAreas) ? reportDetails.issueAreas.map((entry) => normalizeText(entry)).filter(Boolean) : [];
  const studentNote = normalizeText(reportDetails.studentNote, "");
  return {
    drillId: normalizeText(drill.drillId),
    primarySkillId: primarySkill.skillId,
    primarySkillName: primarySkill.skillName,
    unitId: normalizeText(drill.unitId),
    unitName: normalizeText(drill.unitName || drill.unitId),
    topicId: normalizeText(drill.topicId),
    topicName: normalizeText(drill.topicName || drill.topicId),
    catalogVersion: normalizeText(drill.catalogVersion || drill.previewCatalogVersion || ""),
    renderedPrompt: normalizeText(drill.renderedPrompt || drill.promptTemplate || ""),
    validationType: normalizeText(drill.validationType || ""),
    currentUrl: normalizeText(currentUrl, ""),
    issueAreas,
    issueAreaLabels: normalizeIssueAreaLabels(issueAreas),
    studentNote
  };
}
function buildPreviewIssueTitle(payload = {}) {
  const drillId = normalizeText(payload.drillId, "preview drill");
  const issueAreas = normalizeText(payload.issueAreaLabels, "");
  return issueAreas ? `[Drill report] ${drillId} - ${issueAreas}` : `[Drill report] ${drillId}`;
}
function buildPreviewIssueBody(payload = {}) {
  const lines = [
    "### Drill ID",
    normalizeText(payload.drillId, ""),
    "",
    "### Primary skill ID",
    normalizeText(payload.primarySkillId, ""),
    "",
    "### AP unit/topic",
    `${normalizeText(payload.unitName, payload.unitId)} / ${normalizeText(payload.topicName, payload.topicId)}`.trim(),
    "",
    "### Preview catalog version",
    normalizeText(payload.catalogVersion, ""),
    "",
    "### Rendered prompt",
    normalizeText(payload.renderedPrompt, ""),
    "",
    "### Selected issue areas",
    normalizeText(payload.issueAreaLabels || payload.studentNote, ""),
    "",
    "### Notes",
    normalizeText(payload.studentNote, "Not provided"),
    "",
    "### Current URL",
    normalizeText(payload.currentUrl, "")
  ];
  return lines.join("\n");
}
function buildPreviewIssueUrl(payload = {}) {
  const baseUrl = normalizeText(void 0, "");
  const repo = normalizeText(void 0, "");
  const targetUrl = baseUrl || (repo.includes("/") ? `https://github.com/${repo}/issues/new` : "");
  if (!targetUrl) {
    return "";
  }
  const issueUrl = targetUrl.startsWith("http") ? new URL(targetUrl) : new URL(targetUrl, typeof window !== "undefined" ? window.location.origin : "https://github.com");
  issueUrl.searchParams.set("template", "drill_report.yml");
  issueUrl.searchParams.set("title", buildPreviewIssueTitle(payload));
  issueUrl.searchParams.set("body", buildPreviewIssueBody(payload));
  issueUrl.searchParams.set("labels", "preview,drill-report");
  return issueUrl.toString();
}
function buildPreviewIssueCopyText(payload = {}) {
  const issueUrl = buildPreviewIssueUrl(payload);
  return [
    buildPreviewIssueTitle(payload),
    issueUrl ? `Issue URL: ${issueUrl}` : "",
    "",
    buildPreviewIssueBody(payload)
  ].filter(Boolean).join("\n");
}
const _hoisted_1$a = { class: "modal-content shadow-lg border-0 overflow-hidden" };
const _hoisted_2$a = {
  class: "modal-header text-white border-0 py-3 px-4",
  style: { "background-color": "#b42318" }
};
const _hoisted_3$9 = ["disabled"];
const _hoisted_4$7 = { class: "modal-body p-4" };
const _hoisted_5$7 = { class: "text-body-secondary mb-3" };
const _hoisted_6$6 = { key: 0 };
const _hoisted_7$6 = { key: 1 };
const _hoisted_8$6 = { class: "fw-semibold text-body" };
const _hoisted_9$6 = { class: "row g-2 mb-3" };
const _hoisted_10$6 = { class: "report-option d-flex align-items-center gap-2 rounded border p-2 h-100" };
const _hoisted_11$5 = ["checked", "value", "disabled", "onChange"];
const _hoisted_12$5 = { class: "fw-semibold" };
const _hoisted_13$5 = { class: "mb-2" };
const _hoisted_14$5 = ["disabled"];
const _hoisted_15$5 = {
  key: 0,
  class: "alert alert-danger py-2 px-3 small mb-0"
};
const _hoisted_16$5 = {
  key: 1,
  class: "alert alert-info py-2 px-3 small mb-0"
};
const _hoisted_17$5 = { class: "modal-footer border-0 p-3 bg-body-tertiary d-flex justify-content-between align-items-center" };
const _hoisted_18$4 = ["disabled"];
const _hoisted_19$4 = { class: "ms-auto d-flex flex-wrap gap-2" };
const _hoisted_20$4 = ["disabled"];
const _hoisted_21$4 = ["disabled"];
const _hoisted_22$4 = ["disabled"];
const _hoisted_23$4 = ["disabled"];
const _sfc_main$a = {
  __name: "DrillReportModal",
  props: {
    show: Boolean,
    drill: {
      type: Object,
      default: null
    },
    submitting: Boolean,
    errorMessage: {
      type: String,
      default: ""
    },
    previewMode: Boolean
  },
  emits: ["close", "submit"],
  setup(__props, { emit: __emit }) {
    const { REPORT_ISSUE_AREAS: REPORT_ISSUE_AREAS2 } = __CJS__export_default__$5 || reportModule;
    const props = __props;
    const emit = __emit;
    const selectedAreas = ref([]);
    const studentNote = ref("");
    const localError = ref("");
    const actionMessage = ref("");
    const submitDisabled = computed(() => props.submitting || !selectedAreas.value.length);
    const previewActionsDisabled = computed(() => props.submitting || !selectedAreas.value.length);
    const hasPreviewIssueUrl = computed(() => Boolean(buildPreviewIssueUrl(buildPreviewPayload())));
    function resetDraft() {
      selectedAreas.value = [];
      studentNote.value = "";
      localError.value = "";
      actionMessage.value = "";
    }
    watch(
      () => [props.show, props.drill?.drillId || ""],
      ([show]) => {
        if (show) {
          resetDraft();
        }
      },
      { immediate: true }
    );
    function toggleArea(area) {
      const index = selectedAreas.value.indexOf(area);
      if (index === -1) {
        selectedAreas.value = [...selectedAreas.value, area];
        return;
      }
      selectedAreas.value = selectedAreas.value.filter((entry) => entry !== area);
    }
    function buildPreviewPayload() {
      return buildPreviewDrillReportPayload({
        drill: props.drill || {},
        reportDetails: {
          issueAreas: selectedAreas.value,
          studentNote: studentNote.value
        }
      });
    }
    function ensureSelectedAreas() {
      if (selectedAreas.value.length) {
        return true;
      }
      localError.value = "Choose at least one issue area.";
      actionMessage.value = "";
      return false;
    }
    function submitReport() {
      if (!ensureSelectedAreas()) {
        return;
      }
      localError.value = "";
      emit("submit", {
        issueAreas: [...selectedAreas.value],
        studentNote: studentNote.value.trim()
      });
    }
    async function copyPreviewDetails() {
      if (!ensureSelectedAreas()) {
        return;
      }
      const payload = buildPreviewPayload();
      const issueUrl = buildPreviewIssueUrl(payload);
      const copyText = buildPreviewIssueCopyText(payload);
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(copyText);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = copyText;
          textarea.setAttribute("readonly", "true");
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        actionMessage.value = issueUrl ? "Report details copied. You can paste them into the GitHub issue if needed." : "Report details copied.";
        localError.value = "";
      } catch (error) {
        localError.value = error?.message || "Copy failed.";
        actionMessage.value = "";
      }
    }
    function openPreviewIssue() {
      if (!ensureSelectedAreas()) {
        return;
      }
      const payload = buildPreviewPayload();
      const issueUrl = buildPreviewIssueUrl(payload);
      if (!issueUrl) {
        localError.value = "Set VITE_AUTODRILLS_PREVIEW_ISSUES_URL or VITE_AUTODRILLS_PREVIEW_REPO to enable GitHub issue links.";
        actionMessage.value = "";
        return;
      }
      const opened = window.open(issueUrl, "_blank", "noopener,noreferrer");
      if (!opened) {
        window.location.assign(issueUrl);
      }
      localError.value = "";
      actionMessage.value = "GitHub issue opened in a new tab.";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "modal-fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-backdrop",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("close"))
          }, [
            createBaseVNode("div", {
              class: "modal-dialog modal-dialog-centered",
              onClick: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_1$a, [
                createBaseVNode("div", _hoisted_2$a, [
                  _cache[6] || (_cache[6] = createBaseVNode("div", null, [
                    createBaseVNode("h5", { class: "modal-title text-white mb-0" }, "Report drill"),
                    createBaseVNode("div", { class: "small text-white-50" }, "Thanks for helping improve Autodrills.")
                  ], -1)),
                  createBaseVNode("button", {
                    type: "button",
                    class: "btn-close btn-close-white",
                    disabled: __props.submitting,
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
                  }, null, 8, _hoisted_3$9)
                ]),
                createBaseVNode("div", _hoisted_4$7, [
                  createBaseVNode("p", _hoisted_5$7, [
                    __props.previewMode ? (openBlock(), createElementBlock("span", _hoisted_6$6, "Preview mode opens a prefilled GitHub issue in the public preview repo.")) : (openBlock(), createElementBlock("span", _hoisted_7$6, [
                      _cache[7] || (_cache[7] = createTextVNode(" What seemed wrong about ", -1)),
                      createBaseVNode("span", _hoisted_8$6, toDisplayString(__props.drill?.drillId || "this drill"), 1),
                      _cache[8] || (_cache[8] = createTextVNode("? ", -1))
                    ]))
                  ]),
                  createBaseVNode("div", _hoisted_9$6, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(REPORT_ISSUE_AREAS2), (area) => {
                      return openBlock(), createElementBlock("div", {
                        key: area.value,
                        class: "col-12 col-md-6"
                      }, [
                        createBaseVNode("label", _hoisted_10$6, [
                          createBaseVNode("input", {
                            checked: selectedAreas.value.includes(area.value),
                            class: "form-check-input m-0",
                            type: "checkbox",
                            value: area.value,
                            disabled: __props.submitting,
                            onChange: ($event) => toggleArea(area.value)
                          }, null, 40, _hoisted_11$5),
                          createBaseVNode("span", _hoisted_12$5, toDisplayString(area.label), 1)
                        ])
                      ]);
                    }), 128))
                  ]),
                  createBaseVNode("div", _hoisted_13$5, [
                    _cache[9] || (_cache[9] = createBaseVNode("label", {
                      class: "form-label fw-semibold",
                      for: "studentReportNote"
                    }, "Short note (optional)", -1)),
                    withDirectives(createBaseVNode("textarea", {
                      id: "studentReportNote",
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => studentNote.value = $event),
                      class: "form-control",
                      disabled: __props.submitting,
                      maxlength: "280",
                      rows: "3",
                      placeholder: "Tell us what felt off, if you want."
                    }, null, 8, _hoisted_14$5), [
                      [vModelText, studentNote.value]
                    ]),
                    _cache[10] || (_cache[10] = createBaseVNode("div", { class: "form-text" }, "Keep it brief. This is optional.", -1))
                  ]),
                  localError.value || __props.errorMessage ? (openBlock(), createElementBlock("div", _hoisted_15$5, toDisplayString(localError.value || __props.errorMessage), 1)) : actionMessage.value ? (openBlock(), createElementBlock("div", _hoisted_16$5, toDisplayString(actionMessage.value), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_17$5, [
                  __props.previewMode ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("button", {
                      class: "btn btn-outline-secondary",
                      disabled: __props.submitting,
                      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close"))
                    }, " Close ", 8, _hoisted_18$4),
                    createBaseVNode("div", _hoisted_19$4, [
                      createBaseVNode("button", {
                        class: "btn btn-outline-primary",
                        disabled: previewActionsDisabled.value,
                        onClick: copyPreviewDetails
                      }, " Copy report details ", 8, _hoisted_20$4),
                      createBaseVNode("button", {
                        class: "btn btn-danger",
                        disabled: previewActionsDisabled.value || !hasPreviewIssueUrl.value,
                        onClick: openPreviewIssue
                      }, " Open GitHub issue ", 8, _hoisted_21$4)
                    ])
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createBaseVNode("button", {
                      class: "btn btn-outline-secondary",
                      disabled: __props.submitting,
                      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("close"))
                    }, " Cancel ", 8, _hoisted_22$4),
                    createBaseVNode("button", {
                      class: "btn btn-danger",
                      disabled: submitDisabled.value,
                      onClick: submitReport
                    }, toDisplayString(__props.submitting ? "Submitting..." : "Submit report"), 9, _hoisted_23$4)
                  ], 64))
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const DrillReportModal = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-20a649a7"]]);
const _hoisted_1$9 = { class: "practice-toolbar border rounded p-3 h-100 bg-body d-flex flex-column gap-3 transition-colors duration-300" };
const _hoisted_2$9 = {
  key: 0,
  class: "progress-section"
};
const _hoisted_3$8 = { class: "d-flex justify-content-between small text-body-secondary mb-1" };
const _hoisted_4$6 = ["aria-valuenow"];
const _hoisted_5$6 = {
  key: 1,
  class: "metadata-section small border-bottom pb-3"
};
const _hoisted_6$5 = { class: "metadata-heading mb-3" };
const _hoisted_7$5 = {
  class: "fw-bold",
  title: "Topic",
  "data-testid": "topic-title"
};
const _hoisted_8$5 = {
  key: 0,
  class: "text-body-secondary small mt-1"
};
const _hoisted_9$5 = { class: "metadata-pair-grid" };
const _hoisted_10$5 = { class: "metadata-pair" };
const _hoisted_11$4 = { class: "fw-semibold" };
const _hoisted_12$4 = { class: "metadata-pair" };
const _hoisted_13$4 = { class: "fw-semibold" };
const _hoisted_14$4 = { class: "metadata-pair" };
const _hoisted_15$4 = { class: "fw-semibold" };
const _hoisted_16$4 = { class: "drill-id-block mt-3 pt-2 border-top" };
const _hoisted_17$4 = {
  class: "text-body-secondary font-monospace mt-1",
  "data-testid": "drill-id",
  title: "Drill ID"
};
const _hoisted_18$3 = {
  key: 0,
  class: "mt-3 pt-2 border-top metadata-extra"
};
const _hoisted_19$3 = {
  class: "text-body-secondary text-uppercase",
  style: { "font-size": "0.7rem", "letter-spacing": "0.05em" }
};
const _hoisted_20$3 = { class: "fw-semibold text-end" };
const _hoisted_21$3 = {
  class: "fw-bold d-flex align-items-center gap-2 text-uppercase",
  style: { "font-size": "0.85rem" }
};
const _hoisted_22$3 = { key: 0 };
const _hoisted_23$3 = { key: 1 };
const _hoisted_24$3 = { key: 2 };
const _hoisted_25$3 = {
  key: 0,
  class: "small mt-2"
};
const _hoisted_26$3 = {
  key: 1,
  class: "small fw-semibold mt-2"
};
const _hoisted_27$3 = { class: "actions-section d-grid gap-2" };
const _hoisted_28$3 = ["disabled"];
const _hoisted_29$3 = ["disabled"];
const _hoisted_30$1 = ["disabled"];
const _hoisted_31$1 = { class: "d-flex gap-2" };
const _hoisted_32$1 = ["disabled"];
const _hoisted_33$1 = ["disabled"];
const _hoisted_34$1 = ["disabled"];
const _hoisted_35 = { class: "small text-body-secondary mt-auto pt-3 border-top" };
const _hoisted_36 = {
  key: 0,
  class: "mb-1 text-uppercase fw-semibold",
  style: { "letter-spacing": "0.08em", "font-size": "0.7rem" }
};
const _hoisted_37 = { key: 1 };
const _hoisted_38 = { key: 2 };
const _hoisted_39 = { key: 3 };
const _hoisted_40 = { key: 4 };
const _hoisted_41 = { key: 5 };
const _hoisted_42 = { key: 6 };
const _sfc_main$9 = {
  __name: "PracticeToolbar",
  props: {
    hasFeedback: Boolean,
    hintAvailable: Boolean,
    remainingHints: {
      type: Number,
      default: 0
    },
    prefetching: Boolean,
    saving: Boolean,
    saveState: {
      type: String,
      default: "idle"
    },
    saveMessage: {
      type: String,
      default: ""
    },
    queueDepth: {
      type: Number,
      default: 0
    },
    canSubmit: {
      type: Boolean,
      default: true
    },
    canShowSolution: {
      type: Boolean,
      default: true
    },
    canReportCurrentDrill: {
      type: Boolean,
      default: true
    },
    canGoPreviousDrill: {
      type: Boolean,
      default: false
    },
    canGoNextDrill: {
      type: Boolean,
      default: true
    },
    reportState: {
      type: String,
      default: "idle"
    },
    reportMessage: {
      type: String,
      default: ""
    },
    reportButtonLabel: {
      type: String,
      default: "Report drill"
    },
    currentPosition: {
      type: String,
      default: ""
    },
    progressPercent: {
      type: Number,
      default: 0
    },
    drillMetadata: {
      type: Object,
      default: () => ({})
    },
    feedback: {
      type: Object,
      default: null
    },
    focusMode: Boolean,
    reviewMode: Boolean
  },
  emits: ["submit", "next", "previous", "report", "hint", "solution"],
  setup(__props) {
    const props = __props;
    const topicHeading = computed(() => {
      const metadata = props.drillMetadata || {};
      return metadata.topicTitle || metadata.topicDisplayName || metadata.topicName || metadata.topicId || "AP CSA drill";
    });
    const primaryTags = computed(() => {
      const tags = props.drillMetadata?.tags || {};
      return {
        concept: tags.concept ?? "",
        difficulty: tags.difficulty ?? "",
        syntax: tags.syntax ?? ""
      };
    });
    const extraTags = computed(() => {
      const tags = props.drillMetadata?.tags || {};
      return Object.entries(tags).filter(([key, value]) => value !== null && value !== void 0 && String(value).trim() !== "" && !["concept", "difficulty", "syntax"].includes(key)).map(([key, value]) => ({ key, value }));
    });
    const hintButtonLabel = computed(() => {
      if (props.reviewMode) {
        return "Hint unavailable in review";
      }
      if (!props.hintAvailable) {
        return props.remainingHints > 0 ? "Hint already shown" : "No More Hints";
      }
      return props.remainingHints > 0 ? `Show Hint (${props.remainingHints} left)` : "No More Hints";
    });
    const feedbackHeadline = computed(() => {
      if (props.feedback?.status === "correct") return "Correct";
      if (props.feedback?.status === "incorrect") return "Incorrect";
      if (props.feedback?.status === "revealed") return "Solution revealed";
      return "";
    });
    const feedbackBodyCopy = computed(() => {
      const message = String(props.feedback?.message || "").trim();
      if (!message) {
        return "";
      }
      if (props.feedback?.status === "correct" && message === "Correct!") {
        return "";
      }
      if (props.feedback?.status === "incorrect" && message === "Not quite. Check the prompt, then try again or reveal a hint.") {
        return "";
      }
      return message;
    });
    const feedbackSupportCopy = computed(() => {
      if (props.feedback?.status === "correct") {
        return "Move to the next drill when you are ready.";
      }
      if (props.feedback?.status === "incorrect") {
        return "Try again, check the prompt, or reveal a hint.";
      }
      if (props.feedback?.status === "revealed") {
        return "Review the solution, then keep practicing.";
      }
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        !__props.focusMode ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
          createBaseVNode("div", _hoisted_3$8, [
            _cache[6] || (_cache[6] = createBaseVNode("span", { class: "fw-semibold" }, "Progress", -1)),
            createBaseVNode("span", null, toDisplayString(__props.currentPosition), 1)
          ]),
          createBaseVNode("div", {
            class: "progress session-progress",
            role: "progressbar",
            "aria-valuenow": __props.progressPercent,
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            style: { "height": "6px" }
          }, [
            createBaseVNode("div", {
              class: "progress-bar",
              style: normalizeStyle({ width: `${__props.progressPercent}%` })
            }, null, 4)
          ], 8, _hoisted_4$6)
        ])) : createCommentVNode("", true),
        !__props.focusMode ? (openBlock(), createElementBlock("div", _hoisted_5$6, [
          createBaseVNode("div", _hoisted_6$5, [
            _cache[7] || (_cache[7] = createBaseVNode("div", {
              class: "text-uppercase text-body-secondary fw-bold mb-1",
              style: { "font-size": "0.7rem", "letter-spacing": "0.08em" }
            }, "Topic", -1)),
            createBaseVNode("div", _hoisted_7$5, toDisplayString(topicHeading.value), 1),
            props.drillMetadata?.unitName ? (openBlock(), createElementBlock("div", _hoisted_8$5, toDisplayString(props.drillMetadata.unitName), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_9$5, [
            createBaseVNode("div", _hoisted_10$5, [
              _cache[8] || (_cache[8] = createBaseVNode("div", {
                class: "text-uppercase text-body-secondary fw-bold mb-1",
                style: { "font-size": "0.7rem", "letter-spacing": "0.05em" }
              }, "Concept", -1)),
              createBaseVNode("div", _hoisted_11$4, toDisplayString(primaryTags.value.concept || "—"), 1)
            ]),
            createBaseVNode("div", _hoisted_12$4, [
              _cache[9] || (_cache[9] = createBaseVNode("div", {
                class: "text-uppercase text-body-secondary fw-bold mb-1",
                style: { "font-size": "0.7rem", "letter-spacing": "0.05em" }
              }, "Difficulty", -1)),
              createBaseVNode("div", _hoisted_13$4, toDisplayString(primaryTags.value.difficulty || "—"), 1)
            ]),
            createBaseVNode("div", _hoisted_14$4, [
              _cache[10] || (_cache[10] = createBaseVNode("div", {
                class: "text-uppercase text-body-secondary fw-bold mb-1",
                style: { "font-size": "0.7rem", "letter-spacing": "0.05em" }
              }, "Syntax", -1)),
              createBaseVNode("div", _hoisted_15$4, toDisplayString(primaryTags.value.syntax || "—"), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_16$4, [
            _cache[11] || (_cache[11] = createBaseVNode("div", {
              class: "text-body-secondary small fw-semibold text-uppercase",
              style: { "font-size": "0.7rem", "letter-spacing": "0.05em" }
            }, "Drill ID", -1)),
            createBaseVNode("div", _hoisted_17$4, toDisplayString(props.drillMetadata?.drillId || "Unknown drill"), 1)
          ]),
          extraTags.value.length ? (openBlock(), createElementBlock("div", _hoisted_18$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(extraTags.value, (tag) => {
              return openBlock(), createElementBlock("div", {
                key: tag.key,
                class: "d-flex justify-content-between gap-2 mb-1"
              }, [
                createBaseVNode("span", _hoisted_19$3, toDisplayString(tag.key), 1),
                createBaseVNode("span", _hoisted_20$3, toDisplayString(tag.value), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        __props.feedback ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(["feedback-alert p-3 rounded border", __props.feedback.status])
        }, [
          createBaseVNode("div", _hoisted_21$3, [
            __props.feedback.status === "correct" ? (openBlock(), createElementBlock("span", _hoisted_22$3, "✅ " + toDisplayString(feedbackHeadline.value), 1)) : __props.feedback.status === "incorrect" ? (openBlock(), createElementBlock("span", _hoisted_23$3, "❌ " + toDisplayString(feedbackHeadline.value), 1)) : __props.feedback.status === "revealed" ? (openBlock(), createElementBlock("span", _hoisted_24$3, "🔍 " + toDisplayString(feedbackHeadline.value), 1)) : createCommentVNode("", true)
          ]),
          feedbackBodyCopy.value ? (openBlock(), createElementBlock("div", _hoisted_25$3, toDisplayString(feedbackBodyCopy.value), 1)) : createCommentVNode("", true),
          feedbackSupportCopy.value ? (openBlock(), createElementBlock("div", _hoisted_26$3, toDisplayString(feedbackSupportCopy.value), 1)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_27$3, [
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "fw-semibold small text-body-secondary mb-1" }, "Actions", -1)),
          createBaseVNode("button", {
            class: "btn btn-primary",
            disabled: !__props.canSubmit,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("submit"))
          }, "Check Answer", 8, _hoisted_28$3),
          createBaseVNode("button", {
            class: "btn btn-outline-secondary",
            disabled: !__props.canShowSolution,
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("solution"))
          }, "Show Solution", 8, _hoisted_29$3),
          createBaseVNode("button", {
            class: "btn btn-outline-secondary",
            disabled: !__props.hintAvailable,
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("hint"))
          }, toDisplayString(hintButtonLabel.value), 9, _hoisted_30$1),
          createBaseVNode("div", _hoisted_31$1, [
            createBaseVNode("button", {
              class: "btn btn-outline-primary flex-fill",
              disabled: !__props.canGoPreviousDrill,
              onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("previous"))
            }, "Previous Drill", 8, _hoisted_32$1),
            createBaseVNode("button", {
              class: "btn btn-outline-primary flex-fill",
              disabled: !__props.canGoNextDrill,
              onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("next"))
            }, "Next Drill", 8, _hoisted_33$1)
          ]),
          createBaseVNode("button", {
            class: normalizeClass(["btn btn-sm mt-2", {
              "btn-outline-danger": __props.reportState === "idle" || __props.reportState === "error",
              "btn-secondary": __props.reportState === "reporting",
              "btn-success": __props.reportState === "reported"
            }]),
            title: "Flag a drill that looks wrong so it can be reviewed and fixed.",
            disabled: !__props.canReportCurrentDrill,
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("report"))
          }, toDisplayString(__props.reportButtonLabel), 11, _hoisted_34$1),
          __props.reportMessage ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["small", {
              "text-body-secondary": __props.reportState === "idle",
              "text-danger": __props.reportState === "error",
              "text-success": __props.reportState === "reported",
              "text-success": __props.reportState === "reported",
              "text-primary": __props.reportState === "reporting"
            }])
          }, toDisplayString(__props.reportMessage), 3)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_35, [
          __props.reviewMode ? (openBlock(), createElementBlock("div", _hoisted_36, " Review mode ")) : createCommentVNode("", true),
          __props.saveState === "saving" ? (openBlock(), createElementBlock("div", _hoisted_37, toDisplayString(__props.saveMessage || "Saving response..."), 1)) : __props.saveState === "saved" ? (openBlock(), createElementBlock("div", _hoisted_38, toDisplayString(__props.saveMessage || "Answer saved."), 1)) : __props.saveState === "error" ? (openBlock(), createElementBlock("div", _hoisted_39, toDisplayString(__props.saveMessage || "Saving failed."), 1)) : __props.queueDepth ? (openBlock(), createElementBlock("div", _hoisted_40, "Queued " + toDisplayString(__props.queueDepth) + " response" + toDisplayString(__props.queueDepth === 1 ? "" : "s") + ".", 1)) : __props.prefetching ? (openBlock(), createElementBlock("div", _hoisted_41, "Preparing next slice...")) : (openBlock(), createElementBlock("div", _hoisted_42, "Ready"))
        ])
      ]);
    };
  }
};
const PracticeToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e0dc862f"]]);
var module$6 = { exports: {} };
const { applySubstitutions: applySubstitutions$1 } = __CJS__export_default__$6 || substitutionsModule$1;
function splitInlineMonospace(text = "") {
  const source = String(text);
  if (!source.includes("`")) {
    return [{ type: "text", value: source }];
  }
  const segments = [];
  let textBuffer = "";
  let codeBuffer = "";
  let inCode = false;
  for (const character of source) {
    if (character === "`") {
      if (inCode) {
        segments.push({ type: "code", value: codeBuffer });
        codeBuffer = "";
        inCode = false;
      } else {
        if (textBuffer) {
          segments.push({ type: "text", value: textBuffer });
          textBuffer = "";
        }
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBuffer += character;
    } else {
      textBuffer += character;
    }
  }
  if (inCode) {
    textBuffer += `\`${codeBuffer}`;
  }
  if (textBuffer) {
    segments.push({ type: "text", value: textBuffer });
  }
  return segments.length ? segments : [{ type: "text", value: source }];
}
function splitPlaceholderTokens(text = "", substitutions = {}) {
  const source = String(text);
  if (!source.includes("{{")) {
    return [{ type: "text", value: source }];
  }
  const segments = [];
  let lastIndex = 0;
  const pattern = /\{\{([^}]+)\}\}/g;
  for (const match of source.matchAll(pattern)) {
    const placeholder = match[1].trim();
    const start = match.index ?? 0;
    if (start > lastIndex) {
      segments.push({ type: "text", value: source.slice(lastIndex, start) });
    }
    const value = Object.prototype.hasOwnProperty.call(substitutions, placeholder) ? substitutions[placeholder] : `{{${placeholder}}}`;
    segments.push({ type: "code", value: String(value) });
    lastIndex = start + match[0].length;
  }
  if (lastIndex < source.length) {
    segments.push({ type: "text", value: source.slice(lastIndex) });
  }
  return segments.length ? segments : [{ type: "text", value: source }];
}
function splitInlineTextWithPlaceholders(text = "", substitutions = {}) {
  const segments = splitInlineMonospace(text);
  const rendered = [];
  segments.forEach((segment) => {
    if (segment.type === "code") {
      rendered.push({ type: "code", value: applySubstitutions$1(segment.value, substitutions) });
      return;
    }
    rendered.push(...splitPlaceholderTokens(segment.value, substitutions));
  });
  return rendered.length ? rendered : [{ type: "text", value: String(text) }];
}
module$6.exports = {
  splitInlineMonospace,
  splitInlineTextWithPlaceholders
};
const __CJS__export_default__$4 = (module$6.exports == null ? {} : module$6.exports).default || module$6.exports;
const inlineFormattingModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__$4
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$8 = {
  key: 0,
  class: "inline-text-error d-block rounded border border-danger-subtle bg-danger-subtle px-2 py-1 small text-danger-emphasis",
  role: "alert"
};
const _hoisted_2$8 = {
  key: 0,
  class: "inline-code"
};
const _hoisted_3$7 = { key: 1 };
const _sfc_main$8 = {
  __name: "InlineText",
  props: {
    text: {
      type: String,
      default: ""
    },
    substitutions: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(__props) {
    const { splitInlineTextWithPlaceholders: splitInlineTextWithPlaceholders2 } = __CJS__export_default__$4 || inlineFormattingModule;
    const props = __props;
    const segments = computed(() => splitInlineTextWithPlaceholders2(props.text, props.substitutions));
    const hasUnresolvedPlaceholders = computed(() => segments.value.some((segment) => segment.type === "code" && /\{\{[^}]+\}\}/.test(String(segment.value || ""))));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), { class: "inline-text" }, {
        default: withCtx(() => [
          hasUnresolvedPlaceholders.value ? (openBlock(), createElementBlock("span", _hoisted_1$8, " This practice content could not be rendered safely. ")) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(segments.value, (segment, index) => {
            return openBlock(), createElementBlock(Fragment, {
              key: `${segment.type}-${index}`
            }, [
              segment.type === "code" ? (openBlock(), createElementBlock("code", _hoisted_2$8, toDisplayString(segment.value), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$7, toDisplayString(segment.value), 1))
            ], 64);
          }), 128))
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "drill-content mb-4"
};
const _hoisted_2$7 = { class: "prompt-display mb-4" };
const _hoisted_3$6 = { class: "fs-5 lh-base" };
const _hoisted_4$5 = {
  key: 0,
  class: "mt-4 pt-3 border-top"
};
const _hoisted_5$5 = { class: "d-flex justify-content-between align-items-center mb-2" };
const _hoisted_6$4 = {
  key: 0,
  class: "badge rounded-pill bg-body-tertiary text-body border"
};
const _hoisted_7$4 = {
  key: 0,
  class: "ps-3 mb-0"
};
const _hoisted_8$4 = {
  key: 1,
  class: "mt-4 pt-3 border-top"
};
const _hoisted_9$4 = {
  key: 0,
  class: "d-grid gap-3"
};
const _hoisted_10$4 = {
  key: 1,
  class: "text-body-secondary italic small"
};
const _sfc_main$7 = {
  __name: "PromptCard",
  props: {
    drill: {
      type: Object,
      default: null
    },
    revealedHints: {
      type: Array,
      default: () => []
    },
    hintAvailable: Boolean,
    remainingHints: Number,
    solutionVisible: Boolean,
    solutionSnippets: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const { stringifyStructuredValue } = __CJS__export_default__$6 || substitutionsModule$1;
    return (_ctx, _cache) => {
      return __props.drill ? (openBlock(), createElementBlock("section", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          _cache[0] || (_cache[0] = createBaseVNode("div", {
            class: "text-body-secondary small fw-bold text-uppercase mb-2",
            style: { "font-size": "0.7rem", "letter-spacing": "0.05em" }
          }, " Prompt ", -1)),
          createBaseVNode("div", _hoisted_3$6, [
            createVNode(_sfc_main$8, {
              text: __props.drill.promptTemplate,
              substitutions: __props.drill.substitutions || {}
            }, null, 8, ["text", "substitutions"])
          ])
        ]),
        __props.revealedHints.length || __props.hintAvailable ? (openBlock(), createElementBlock("div", _hoisted_4$5, [
          createBaseVNode("div", _hoisted_5$5, [
            _cache[1] || (_cache[1] = createBaseVNode("div", {
              class: "fw-bold small text-body-secondary text-uppercase",
              style: { "font-size": "0.7rem" }
            }, "Hints", -1)),
            !__props.revealedHints.length && __props.hintAvailable ? (openBlock(), createElementBlock("div", _hoisted_6$4, toDisplayString(__props.remainingHints) + " available ", 1)) : createCommentVNode("", true)
          ]),
          __props.revealedHints.length ? (openBlock(), createElementBlock("ul", _hoisted_7$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.revealedHints, (hint, index) => {
              return openBlock(), createElementBlock("li", {
                key: index,
                class: "mb-2"
              }, [
                createVNode(_sfc_main$8, {
                  text: unref(stringifyStructuredValue)(hint),
                  substitutions: __props.drill.substitutions || {},
                  tag: "span"
                }, null, 8, ["text", "substitutions"])
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        __props.solutionVisible ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
          _cache[2] || (_cache[2] = createBaseVNode("div", {
            class: "fw-bold small text-body-secondary text-uppercase mb-2",
            style: { "font-size": "0.7rem" }
          }, "Solution", -1)),
          __props.solutionSnippets.length ? (openBlock(), createElementBlock("div", _hoisted_9$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.solutionSnippets, (snippet, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "p-3 bg-body-tertiary rounded border mono-block"
              }, [
                createVNode(_sfc_main$8, {
                  text: unref(stringifyStructuredValue)(snippet),
                  substitutions: __props.drill.substitutions || {}
                }, null, 8, ["text", "substitutions"])
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_10$4, "No canonical solution snippet available.")),
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-body-secondary small mt-2" }, [
            createBaseVNode("i", { class: "bi bi-info-circle me-1" }),
            createTextVNode(" Solution revealed. This drill is marked as revealed, not solved. ")
          ], -1))
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
};
const PromptCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-72ff0395"]]);
const _hoisted_1$6 = { class: "card panel-card h-100 border-0 shadow-sm" };
const _hoisted_2$6 = { class: "card-body p-4" };
const _hoisted_3$5 = { class: "d-flex justify-content-between align-items-start mb-3" };
const _hoisted_4$4 = {
  class: "text-uppercase text-muted fw-bold small",
  style: { "letter-spacing": "0.08em" }
};
const _hoisted_5$4 = { class: "h5 fw-bold mb-1" };
const _hoisted_6$3 = { class: "text-muted small mb-0" };
const _hoisted_7$3 = { class: "badge rounded-pill text-bg-body-tertiary border" };
const _hoisted_8$3 = {
  key: 0,
  class: "text-muted small"
};
const _hoisted_9$3 = { class: "d-flex flex-wrap gap-2 mb-3" };
const _hoisted_10$3 = { class: "badge rounded-pill text-bg-primary-subtle text-primary border" };
const _hoisted_11$3 = { class: "badge rounded-pill text-bg-success-subtle text-success border" };
const _hoisted_12$3 = { class: "badge rounded-pill text-bg-warning-subtle text-warning-emphasis border" };
const _hoisted_13$3 = { class: "mb-3" };
const _hoisted_14$3 = {
  key: 0,
  class: "d-grid gap-2"
};
const _hoisted_15$3 = { class: "fw-semibold" };
const _hoisted_16$3 = { class: "text-muted small" };
const _hoisted_17$3 = {
  key: 1,
  class: "text-muted small"
};
const _hoisted_18$2 = { class: "mb-3" };
const _hoisted_19$2 = {
  key: 0,
  class: "d-grid gap-2"
};
const _hoisted_20$2 = { class: "fw-semibold" };
const _hoisted_21$2 = { class: "text-muted small" };
const _hoisted_22$2 = {
  key: 1,
  class: "text-muted small"
};
const _hoisted_23$2 = {
  key: 0,
  class: "d-grid gap-2"
};
const _hoisted_24$2 = { class: "fw-semibold" };
const _hoisted_25$2 = { class: "text-muted small" };
const _hoisted_26$2 = {
  key: 1,
  class: "text-muted small"
};
const _hoisted_27$2 = {
  key: 1,
  class: "rounded border bg-body-tertiary p-3"
};
const _hoisted_28$2 = { class: "text-muted small" };
const _hoisted_29$2 = {
  key: 2,
  class: "text-muted small"
};
const _sfc_main$6 = {
  __name: "StudentMomentumCard",
  props: {
    analytics: {
      type: Object,
      default: null
    },
    loading: Boolean,
    previewMode: Boolean
  },
  setup(__props) {
    const props = __props;
    const accuracyLabel = computed(() => {
      const accuracy = props.analytics?.totals?.accuracy;
      if (accuracy === null || accuracy === void 0) {
        return "Not enough data yet";
      }
      return `${Math.round(accuracy * 100)}%`;
    });
    const topStrengths = computed(() => props.analytics?.strengthSkills || []);
    const topFocus = computed(() => props.analytics?.focusSkills || []);
    const topGrowth = computed(() => props.analytics?.growthSkills || []);
    const hasDetailedMomentum = computed(() => Boolean(topStrengths.value.length || topFocus.value.length || topGrowth.value.length));
    const emptyMomentumCopy = computed(() => props.previewMode ? "Keep practicing to build this browser’s momentum. After a few responses, we’ll start showing steady areas, review targets, and growth trends." : "Keep practicing to build momentum. After a few responses, we’ll start showing steady areas, review targets, and growth trends.");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_4$4, toDisplayString(__props.previewMode ? "Preview momentum" : "Your momentum"), 1),
              createBaseVNode("h2", _hoisted_5$4, toDisplayString(__props.analytics?.summaryLabel || (__props.previewMode ? "Preview progress stays in this browser" : "Keep building your sample")), 1),
              createBaseVNode("p", _hoisted_6$3, toDisplayString(__props.previewMode ? "This card summarizes only the responses stored in this browser." : __props.analytics?.overallStatus === "ready for review" ? "A few skills look ready for a focused review." : "Keep practicing, and this area will have some information about how you are doing."), 1)
            ]),
            createBaseVNode("span", _hoisted_7$3, toDisplayString(__props.previewMode ? "browser only" : __props.analytics?.overallConfidence || "low"), 1)
          ]),
          __props.loading ? (openBlock(), createElementBlock("div", _hoisted_8$3, "Loading your study snapshot...")) : __props.analytics ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("div", _hoisted_9$3, [
              createBaseVNode("span", _hoisted_10$3, toDisplayString(__props.analytics?.totals?.attempts ?? 0) + " " + toDisplayString(__props.previewMode ? "preview responses" : "responses"), 1),
              createBaseVNode("span", _hoisted_11$3, toDisplayString(accuracyLabel.value), 1),
              createBaseVNode("span", _hoisted_12$3, toDisplayString(__props.analytics?.totals?.skillCount ?? 0) + " " + toDisplayString(__props.previewMode ? "preview skills" : "skills with data"), 1)
            ]),
            hasDetailedMomentum.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_13$3, [
                _cache[0] || (_cache[0] = createBaseVNode("div", {
                  class: "small text-uppercase text-muted fw-bold mb-2",
                  style: { "letter-spacing": "0.08em" }
                }, "Steady right now", -1)),
                topStrengths.value.length ? (openBlock(), createElementBlock("div", _hoisted_14$3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(topStrengths.value.slice(0, 3), (skill) => {
                    return openBlock(), createElementBlock("div", {
                      key: skill.skillId,
                      class: "rounded border p-2 bg-body-tertiary"
                    }, [
                      createBaseVNode("div", _hoisted_15$3, toDisplayString(skill.displayName), 1),
                      createBaseVNode("div", _hoisted_16$3, toDisplayString(skill.status) + " • " + toDisplayString(Math.round((skill.accuracy ?? 0) * 100)) + "% accuracy", 1)
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_17$3, "Keep going. Once a few skills have enough data, we’ll start showing steady areas here."))
              ]),
              createBaseVNode("div", _hoisted_18$2, [
                _cache[1] || (_cache[1] = createBaseVNode("div", {
                  class: "small text-uppercase text-muted fw-bold mb-2",
                  style: { "letter-spacing": "0.08em" }
                }, "Good next review", -1)),
                topFocus.value.length ? (openBlock(), createElementBlock("div", _hoisted_19$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(topFocus.value.slice(0, 3), (skill) => {
                    return openBlock(), createElementBlock("div", {
                      key: skill.skillId,
                      class: "rounded border p-2 bg-body"
                    }, [
                      createBaseVNode("div", _hoisted_20$2, toDisplayString(skill.displayName), 1),
                      createBaseVNode("div", _hoisted_21$2, toDisplayString(skill.status) + " • " + toDisplayString(skill.confidence) + " confidence • " + toDisplayString(skill.attempts) + " responses ", 1)
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_22$2, "No review-heavy skills yet. That usually means you’re still building a good sample."))
              ]),
              createBaseVNode("div", null, [
                _cache[2] || (_cache[2] = createBaseVNode("div", {
                  class: "small text-uppercase text-muted fw-bold mb-2",
                  style: { "letter-spacing": "0.08em" }
                }, "Getting stronger", -1)),
                topGrowth.value.length ? (openBlock(), createElementBlock("div", _hoisted_23$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(topGrowth.value.slice(0, 3), (skill) => {
                    return openBlock(), createElementBlock("div", {
                      key: skill.skillId,
                      class: "rounded border p-2 bg-body"
                    }, [
                      createBaseVNode("div", _hoisted_24$2, toDisplayString(skill.displayName), 1),
                      createBaseVNode("div", _hoisted_25$2, toDisplayString(skill.trend) + " • " + toDisplayString(skill.attempts) + " responses", 1)
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("div", _hoisted_26$2, "No clear growth trend is standing out yet."))
              ])
            ], 64)) : (openBlock(), createElementBlock("div", _hoisted_27$2, [
              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "fw-semibold mb-1" }, "Momentum will appear after a few sessions", -1)),
              createBaseVNode("div", _hoisted_28$2, toDisplayString(emptyMomentumCopy.value), 1)
            ]))
          ], 64)) : (openBlock(), createElementBlock("div", _hoisted_29$2, toDisplayString(__props.previewMode ? "Try a few preview drills to build this browser’s momentum." : "Try some practice problems to build your momentum!"), 1))
        ])
      ]);
    };
  }
};
const _hoisted_1$5 = { class: "modal-content shadow-lg border-0 overflow-hidden" };
const _hoisted_2$5 = {
  class: "modal-header text-white border-0 py-3 px-4",
  style: { "background-color": "#1e40af" }
};
const _hoisted_3$4 = { class: "modal-footer border-0 p-3 bg-body-tertiary d-flex justify-content-center" };
const _sfc_main$5 = {
  __name: "HelpModal",
  props: {
    show: Boolean
  },
  emits: ["close"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "modal-fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-backdrop",
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("close"))
          }, [
            createBaseVNode("div", {
              class: "modal-dialog modal-lg modal-dialog-centered",
              onClick: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_1$5, [
                createBaseVNode("div", _hoisted_2$5, [
                  _cache[4] || (_cache[4] = createBaseVNode("h5", { class: "modal-title d-flex align-items-center text-white" }, [
                    createBaseVNode("i", { class: "bi bi-question-circle-fill me-2" }),
                    createTextVNode(" How to Practice AP CSA ")
                  ], -1)),
                  createBaseVNode("button", {
                    type: "button",
                    class: "btn-close btn-close-white",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
                  })
                ]),
                _cache[5] || (_cache[5] = createBaseVNode("div", {
                  class: "modal-body p-4 overflow-auto",
                  style: { "max-height": "70vh" }
                }, [
                  createBaseVNode("section", { class: "mb-4" }, [
                    createBaseVNode("h6", { class: "fw-bold text-primary mb-2" }, "1. Choosing topics"),
                    createBaseVNode("p", { class: "text-muted small" }, " Start by selecting one or more AP CSA units or topics from the list. Autodrills builds a short practice set around the ideas you picked so the drills stay focused. ")
                  ]),
                  createBaseVNode("section", { class: "mb-4" }, [
                    createBaseVNode("h6", { class: "fw-bold text-primary mb-2" }, "2. Iterative learning"),
                    createBaseVNode("p", { class: "text-muted small" }, " Don't worry about being wrong. If your answer isn't quite right: "),
                    createBaseVNode("ul", { class: "text-muted small" }, [
                      createBaseVNode("li", null, "The editor stays open so you can fix your answer right away."),
                      createBaseVNode("li", null, "A new hint will automatically reveal to guide you."),
                      createBaseVNode("li", null, "Your response is saved so progress tracking can update as you practice.")
                    ])
                  ]),
                  createBaseVNode("section", { class: "mb-4" }, [
                    createBaseVNode("h6", { class: "fw-bold text-primary mb-2" }, "3. The interface"),
                    createBaseVNode("div", { class: "row g-3" }, [
                      createBaseVNode("div", { class: "col-md-6" }, [
                        createBaseVNode("div", { class: "p-3 bg-body-tertiary rounded h-100" }, [
                          createBaseVNode("div", { class: "fw-bold small mb-1" }, [
                            createBaseVNode("i", { class: "bi bi-layout-sidebar-inset me-1" }),
                            createTextVNode(" Sticky sidebar")
                          ]),
                          createBaseVNode("div", { class: "x-small text-muted" }, "Your progress, drill details, and actions stay on the right for quick access.")
                        ])
                      ]),
                      createBaseVNode("div", { class: "col-md-6" }, [
                        createBaseVNode("div", { class: "p-3 bg-body-tertiary rounded h-100" }, [
                          createBaseVNode("div", { class: "fw-bold small mb-1" }, [
                            createBaseVNode("i", { class: "bi bi-lightbulb me-1" }),
                            createTextVNode(" Focus mode")
                          ]),
                          createBaseVNode("div", { class: "x-small text-muted" }, "Click the lightbulb icon to hide everything except the prompt and the editor.")
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("section", null, [
                    createBaseVNode("h6", { class: "fw-bold text-primary mb-2" }, "4. Keyboard shortcuts"),
                    createBaseVNode("div", { class: "d-flex align-items-center bg-body-tertiary p-3 rounded" }, [
                      createBaseVNode("kbd", { class: "me-2" }, "Ctrl"),
                      createTextVNode(" + "),
                      createBaseVNode("kbd", { class: "me-2" }, "Enter"),
                      createBaseVNode("span", { class: "text-muted small" }, "Check your answer without leaving the keyboard.")
                    ])
                  ])
                ], -1)),
                createBaseVNode("div", _hoisted_3$4, [
                  createBaseVNode("button", {
                    class: "btn btn-primary px-4",
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
                  }, "Got it, let's go!")
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const HelpModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b37d3de2"]]);
const _hoisted_1$4 = { class: "modal-content shadow-lg border-0 overflow-hidden" };
const _hoisted_2$4 = {
  class: "modal-header text-white border-0 py-3 px-4",
  style: { "background-color": "#0f766e" }
};
const _hoisted_3$3 = { class: "modal-body p-4" };
const _hoisted_4$3 = { class: "text-muted mb-2" };
const _hoisted_5$3 = { class: "modal-footer border-0 p-3 bg-body-tertiary d-flex flex-wrap justify-content-end gap-2" };
const _sfc_main$4 = {
  __name: "SessionCompleteModal",
  props: {
    show: Boolean,
    completedCount: {
      type: Number,
      default: 0
    },
    totalCount: {
      type: Number,
      default: 0
    }
  },
  emits: ["practice-more", "topics-list", "review-session"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "modal-fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-backdrop",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("review-session"))
          }, [
            createBaseVNode("div", {
              class: "modal-dialog modal-dialog-centered",
              onClick: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_1$4, [
                createBaseVNode("div", _hoisted_2$4, [
                  _cache[6] || (_cache[6] = createBaseVNode("h5", { class: "modal-title text-white mb-0" }, "Nice work", -1)),
                  createBaseVNode("button", {
                    type: "button",
                    class: "btn-close btn-close-white",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("review-session"))
                  })
                ]),
                createBaseVNode("div", _hoisted_3$3, [
                  createBaseVNode("p", _hoisted_4$3, [
                    _cache[7] || (_cache[7] = createTextVNode(" You finished ", -1)),
                    createBaseVNode("strong", null, toDisplayString(__props.completedCount), 1),
                    _cache[8] || (_cache[8] = createTextVNode(" of ", -1)),
                    createBaseVNode("strong", null, toDisplayString(__props.totalCount), 1),
                    _cache[9] || (_cache[9] = createTextVNode(" drills in this session. ", -1))
                  ]),
                  _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-muted mb-0" }, " You can start a fresh practice set, go back to the topics list, or review the session you just completed. ", -1))
                ]),
                createBaseVNode("div", _hoisted_5$3, [
                  createBaseVNode("button", {
                    class: "btn btn-outline-secondary",
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("topics-list"))
                  }, "Topics list"),
                  createBaseVNode("button", {
                    class: "btn btn-outline-primary",
                    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("review-session"))
                  }, "Review this session"),
                  createBaseVNode("button", {
                    class: "btn btn-primary",
                    onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("practice-more"))
                  }, "Practice more")
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const SessionCompleteModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ef21fb51"]]);
const _hoisted_1$3 = { class: "modal-content shadow-lg border-0 text-center p-4" };
const _hoisted_2$3 = { class: "d-grid gap-2" };
const _sfc_main$3 = {
  __name: "WelcomeModal",
  props: {
    show: Boolean
  },
  emits: ["close", "show-help"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "welcome-fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal-backdrop",
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("close"))
          }, [
            createBaseVNode("div", {
              class: "modal-dialog modal-md modal-dialog-centered",
              onClick: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", _hoisted_1$3, [
                _cache[5] || (_cache[5] = createBaseVNode("div", { class: "mb-3 mt-2" }, [
                  createBaseVNode("div", { class: "display-6 fw-bold text-primary mb-1" }, "Welcome to Autodrills"),
                  createBaseVNode("div", { class: "text-muted" }, "A project by Orion Smith, East Lansing High School")
                ], -1)),
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "card bg-body-tertiary border-0 mb-4" }, [
                  createBaseVNode("div", { class: "card-body py-3 px-4 text-start" }, [
                    createBaseVNode("p", { class: "mb-0 small text-muted lh-base" }, ' Autodrills is designed to help you build "muscle memory" for common Java patterns. Pick a few topics, jump into a session, and work through drills until the syntax feels like second nature. ')
                  ])
                ], -1)),
                createBaseVNode("div", _hoisted_2$3, [
                  createBaseVNode("button", {
                    class: "btn btn-primary btn-lg",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
                  }, " Choose Topics & Start "),
                  createBaseVNode("button", {
                    class: "btn btn-outline-secondary",
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("show-help"))
                  }, [..._cache[4] || (_cache[4] = [
                    createBaseVNode("i", { class: "bi bi-question-circle me-1" }, null, -1),
                    createTextVNode(" How does it work? ", -1)
                  ])])
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const WelcomeModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8229a108"]]);
var module$5 = {};
(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
  var canUsePaths = typeof Path2D === "function" && typeof DOMMatrix === "function";
  var canDrawBitmap = (function() {
    if (!global.OffscreenCanvas) {
      return false;
    }
    try {
      var canvas = new OffscreenCanvas(1, 1);
      var ctx = canvas.getContext("2d");
      ctx.fillRect(0, 0, 1, 1);
      var bitmap = canvas.transferToImageBitmap();
      ctx.createPattern(bitmap, "no-repeat");
    } catch (e) {
      return false;
    }
    return true;
  })();
  function noop() {
  }
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
    if (typeof Prom === "function") {
      return new Prom(func);
    }
    func(noop, noop);
    return null;
  }
  var bitmapMapper = /* @__PURE__ */ (function(skipTransform, map) {
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }
        if (map.has(bitmap)) {
          return map.get(bitmap);
        }
        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(bitmap, 0, 0);
        map.set(bitmap, canvas);
        return canvas;
      },
      clear: function() {
        map.clear();
      }
    };
  })(canDrawBitmap, /* @__PURE__ */ new Map());
  var raf = (function() {
    var TIME = Math.floor(1e3 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;
    if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
      frame = function(cb) {
        var id = Math.random();
        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];
            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });
        return id;
      };
      cancel = function(id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function(cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function(timer) {
        return clearTimeout(timer);
      };
    }
    return { frame, cancel };
  })();
  var getWorker = /* @__PURE__ */ (function() {
    var worker;
    var prom;
    var resolves = {};
    function decorate(worker2) {
      function execute(options, callback) {
        worker2.postMessage({ options: options || {}, callback });
      }
      worker2.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker2.postMessage({ canvas: offscreen }, [offscreen]);
      };
      worker2.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }
        var id = Math.random().toString(36).slice(2);
        prom = promise(function(resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }
            delete resolves[id];
            worker2.removeEventListener("message", workerDone);
            prom = null;
            bitmapMapper.clear();
            done();
            resolve();
          }
          worker2.addEventListener("message", workerDone);
          execute(options, id);
          resolves[id] = workerDone.bind(null, { data: { callback: id } });
        });
        return prom;
      };
      worker2.reset = function resetWorker() {
        worker2.postMessage({ reset: true });
        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }
    return function() {
      if (worker) {
        return worker;
      }
      if (!isWorker && canUseWorker) {
        var code = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + main.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join("\n");
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          typeof console !== "undefined" && typeof console.warn === "function" ? console.warn("🎊 Could not load worker", e) : null;
          return null;
        }
        decorate(worker);
      }
      return worker;
    };
  })();
  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };
  function convert(val, transform) {
    return transform ? transform(val) : val;
  }
  function isOk(val) {
    return !(val === null || val === void 0);
  }
  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }
  function onlyPositiveInt(number) {
    return number < 0 ? 0 : Math.floor(number);
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function toDecimal(str) {
    return parseInt(str, 16);
  }
  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }
  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, "");
    if (val.length < 6) {
      val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
    }
    return {
      r: toDecimal(val.substring(0, 2)),
      g: toDecimal(val.substring(2, 4)),
      b: toDecimal(val.substring(4, 6))
    };
  }
  function getOrigin(options) {
    var origin = prop(options, "origin", Object);
    origin.x = prop(origin, "x", Number);
    origin.y = prop(origin, "y", Number);
    return origin;
  }
  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }
  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  function getCanvas(zIndex) {
    var canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = zIndex;
    return canvas;
  }
  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }
  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);
    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
      angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }
  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;
    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + 10 * fetti.scalar;
      fetti.wobbleY = fetti.y + 10 * fetti.scalar;
      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
      fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }
    var progress = fetti.tick++ / fetti.totalTicks;
    var x1 = fetti.x + fetti.random * fetti.tiltCos;
    var y1 = fetti.y + fetti.random * fetti.tiltSin;
    var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
    var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
    context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
    context.beginPath();
    if (canUsePaths && fetti.shape.type === "path" && typeof fetti.shape.path === "string" && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === "bitmap") {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;
      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), "no-repeat");
      pattern.setTransform(matrix);
      context.globalAlpha = 1 - progress;
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - width / 2,
        fetti.y - height / 2,
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === "circle") {
      context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === "star") {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;
      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;
        x = fetti.x + Math.cos(rot) * innerRadius;
        y = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }
    context.closePath();
    context.fill();
    return fetti.tick < fetti.totalTicks;
  }
  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext("2d");
    var animationFrame;
    var destroy;
    var prom = promise(function(resolve) {
      function onDone() {
        animationFrame = destroy = null;
        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();
        done();
        resolve();
      }
      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }
        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }
        context.clearRect(0, 0, size.width, size.height);
        animatingFettis = animatingFettis.filter(function(fetti) {
          return updateFetti(context, fetti);
        });
        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }
      animationFrame = raf.frame(update);
      destroy = onDone;
    });
    return {
      addFettis: function(fettis2) {
        animatingFettis = animatingFettis.concat(fettis2);
        return prom;
      },
      canvas,
      promise: prom,
      reset: function() {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }
        if (destroy) {
          destroy();
        }
      }
    };
  }
  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, "resize");
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
    var animationObj;
    function fireLocal(options, size, done) {
      var particleCount = prop(options, "particleCount", onlyPositiveInt);
      var angle = prop(options, "angle", Number);
      var spread = prop(options, "spread", Number);
      var startVelocity = prop(options, "startVelocity", Number);
      var decay = prop(options, "decay", Number);
      var gravity = prop(options, "gravity", Number);
      var drift = prop(options, "drift", Number);
      var colors = prop(options, "colors", colorsToRgb);
      var ticks = prop(options, "ticks", Number);
      var shapes = prop(options, "shapes");
      var scalar = prop(options, "scalar");
      var flat = !!prop(options, "flat");
      var origin = getOrigin(options);
      var temp = particleCount;
      var fettis = [];
      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;
      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle,
            spread,
            startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks,
            decay,
            gravity,
            drift,
            scalar,
            flat
          })
        );
      }
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }
      animationObj = animate(canvas, fettis, resizer, size, done);
      return animationObj.promise;
    }
    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean);
      var zIndex = prop(options, "zIndex", Number);
      if (disableForReducedMotion && preferLessMotion) {
        return promise(function(resolve) {
          resolve();
        });
      }
      if (isLibCanvas && animationObj) {
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }
      if (allowResize && !initialized) {
        resizer(canvas);
      }
      var size = {
        width: canvas.width,
        height: canvas.height
      };
      if (worker && !initialized) {
        worker.init(canvas);
      }
      initialized = true;
      if (worker) {
        canvas.__confetti_initialized = true;
      }
      function onResize() {
        if (worker) {
          var obj = {
            getBoundingClientRect: function() {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };
          resizer(obj);
          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }
        size.width = size.height = null;
      }
      function done() {
        animationObj = null;
        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener("resize", onResize);
        }
        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
          canvas = null;
          initialized = false;
        }
      }
      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener("resize", onResize, false);
      }
      if (worker) {
        return worker.fire(options, size, done);
      }
      return fireLocal(options, size, done);
    }
    fire.reset = function() {
      if (worker) {
        worker.reset();
      }
      if (animationObj) {
        animationObj.reset();
      }
    };
    return fire;
  }
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }
  function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);
    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));
    var t2 = new Path2D();
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x,
      y
    ]));
    return t2;
  }
  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error("path confetti are not supported in this browser");
    }
    var path, matrix;
    if (typeof pathData === "string") {
      path = pathData;
    } else {
      path = pathData.path;
      matrix = pathData.matrix;
    }
    var path2d = new Path2D(path);
    var tempCanvas = document.createElement("canvas");
    var tempCtx = tempCanvas.getContext("2d");
    if (!matrix) {
      var maxSize = 1e3;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;
      for (var x = 0; x < maxSize; x += 2) {
        for (var y = 0; y < maxSize; y += 2) {
          if (tempCtx.isPointInPath(path2d, x, y, "nonzero")) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }
      width = maxX - minX;
      height = maxY - minY;
      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize / width, maxDesiredSize / height);
      matrix = [
        scale,
        0,
        0,
        scale,
        -Math.round(width / 2 + minX) * scale,
        -Math.round(height / 2 + minY) * scale
      ];
    }
    return {
      type: "path",
      path,
      matrix
    };
  }
  function shapeFromText(textData) {
    var text, scalar = 1, color = "#000000", fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    if (typeof textData === "string") {
      text = textData;
    } else {
      text = textData.text;
      scalar = "scalar" in textData ? textData.scalar : scalar;
      fontFamily = "fontFamily" in textData ? textData.fontFamily : fontFamily;
      color = "color" in textData ? textData.color : color;
    }
    var fontSize = 10 * scalar;
    var font = "" + fontSize + "px " + fontFamily;
    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext("2d");
    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);
    var padding = 2;
    var x = size.actualBoundingBoxLeft + padding;
    var y = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;
    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext("2d");
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    var scale = 1 / scalar;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }
  module.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function() {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
  module.exports.shapeFromPath = shapeFromPath;
  module.exports.shapeFromText = shapeFromText;
})((function() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return this || {};
})(), module$5, false);
const confetti = module$5.exports;
module$5.exports.create;
var module$4 = { exports: {} };
const substitutionsModule = __CJS__export_default__$6 || substitutionsModule$1;
function buildRegex(pattern, substitutions) {
  const source = substitutionsModule.applySubstitutions(
    String(pattern).replace(/\\\{\\\{([^}]+)\\\}\\\}/g, "{{$1}}"),
    substitutions
  );
  return new RegExp(source, "i");
}
function validateAnswer$1(input, drill) {
  const trimmedInput = String(input || "").trim();
  const substitutions = drill.substitutions || {};
  const correctPatterns = Array.isArray(drill.correctPatterns) ? drill.correctPatterns : [];
  const mistakePatterns = Array.isArray(drill.mistakePatterns) ? drill.mistakePatterns : [];
  for (const pattern of correctPatterns) {
    try {
      if (buildRegex(pattern, substitutions).test(trimmedInput)) {
        return { isCorrect: true, feedback: "Correct!" };
      }
    } catch {
    }
  }
  for (const mistake of mistakePatterns) {
    try {
      if (buildRegex(mistake.pattern, substitutions).test(trimmedInput)) {
        return {
          isCorrect: false,
          feedback: mistake.feedback || "Incorrect. Check for common mistakes."
        };
      }
    } catch {
    }
  }
  return {
    isCorrect: false,
    feedback: "Not quite. Check the prompt, then try again or reveal a hint."
  };
}
module$4.exports = {
  validateAnswer: validateAnswer$1
};
const __CJS__export_default__$3 = (module$4.exports == null ? {} : module$4.exports).default || module$4.exports;
const validationModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__$3
}, Symbol.toStringTag, { value: "Module" }));
const RESPONSE_QUEUE_KEY_PREFIX = "autodrills.practice.pending-responses";
const RESPONSE_QUEUE_VERSION = 1;
const RESPONSE_QUEUE_TTL_MS = 60 * 60 * 1e3;
function normalizeStudentId(studentId) {
  return String(studentId || "").trim().toLowerCase();
}
function normalizeAttemptId(attemptId) {
  return String(attemptId || "").trim();
}
function getLocalStorageKey(studentId) {
  const normalizedStudentId = normalizeStudentId(studentId);
  return normalizedStudentId ? `${RESPONSE_QUEUE_KEY_PREFIX}:${normalizedStudentId}` : null;
}
function getQueueId(studentId, attemptId) {
  return `${normalizeStudentId(studentId)}:${normalizeAttemptId(attemptId)}`;
}
function cloneEntry(entry) {
  return entry ? JSON.parse(JSON.stringify(entry)) : entry;
}
function pruneEntries(entries, now = Date.now()) {
  return entries.filter((entry) => Number(entry?.expiresAt || 0) > now);
}
function readLocalStorageEntries(studentId) {
  const key = getLocalStorageKey(studentId);
  if (typeof window === "undefined" || !key) {
    return [];
  }
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "[]");
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter((entry) => entry && entry.schemaVersion === RESPONSE_QUEUE_VERSION);
  } catch {
    return [];
  }
}
function writeLocalStorageEntries(studentId, entries) {
  const key = getLocalStorageKey(studentId);
  if (typeof window === "undefined" || !key) {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(entries));
}
function removeLocalStorageQueue(studentId) {
  const key = getLocalStorageKey(studentId);
  if (typeof window === "undefined" || !key) {
    return;
  }
  window.localStorage.removeItem(key);
}
function makeQueueEntry(studentId, payload, options = {}) {
  const now = options.now ?? Date.now();
  const attemptId = normalizeAttemptId(payload?.attemptId || options.attemptId);
  if (!normalizeStudentId(studentId)) {
    throw new Error("Missing student ID.");
  }
  if (!attemptId) {
    throw new Error("Missing attempt ID.");
  }
  return {
    queueId: getQueueId(studentId, attemptId),
    studentId: normalizeStudentId(studentId),
    attemptId,
    schemaVersion: RESPONSE_QUEUE_VERSION,
    createdAt: options.createdAt || now,
    updatedAt: now,
    expiresAt: options.expiresAt || now + (options.ttlMs || RESPONSE_QUEUE_TTL_MS),
    payload: cloneEntry(payload),
    flushState: options.flushState || "pending",
    lastError: options.lastError || ""
  };
}
function upgradeLegacyQueueEntry(studentId, entry, options = {}) {
  const normalizedStudentId = normalizeStudentId(studentId);
  const attemptId = normalizeAttemptId(entry?.attemptId || entry?.payload?.attemptId);
  const now = options.now ?? Date.now();
  return {
    queueId: getQueueId(normalizedStudentId, attemptId),
    studentId: normalizedStudentId,
    attemptId,
    schemaVersion: RESPONSE_QUEUE_VERSION,
    createdAt: entry?.createdAt || now,
    updatedAt: entry?.updatedAt || entry?.createdAt || now,
    expiresAt: entry?.expiresAt || now + RESPONSE_QUEUE_TTL_MS,
    payload: cloneEntry(entry?.payload),
    flushState: entry?.flushState || "pending",
    lastError: entry?.lastError || ""
  };
}
async function withResponseDb(task) {
  if (!isIndexedDbAvailable()) {
    throw new Error("IndexedDB is not available.");
  }
  try {
    const db = await openAutodrillsDb();
    return await task(db);
  } catch (error) {
    resetAutodrillsDbCache();
    throw error;
  }
}
async function writeEntriesToDb(entries) {
  if (!entries.length) {
    return;
  }
  await withResponseDb(async (db) => {
    await Promise.all(
      entries.map((entry) => db.put(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses, cloneEntry(entry)))
    );
  });
}
async function readEntriesFromDb(studentId) {
  const normalizedStudentId = normalizeStudentId(studentId);
  if (!normalizedStudentId || !isIndexedDbAvailable()) {
    return [];
  }
  return withResponseDb(async (db) => {
    const entries = await db.getAllFromIndex(
      AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses,
      "studentId",
      normalizedStudentId
    );
    return pruneEntries(entries.map(cloneEntry)).sort((left, right) => String(left.createdAt || 0).localeCompare(String(right.createdAt || 0)));
  });
}
async function mutateEntries(studentId, mutateFn) {
  const normalizedStudentId = normalizeStudentId(studentId);
  if (!normalizedStudentId) {
    return [];
  }
  const localCurrent = pruneEntries(readLocalStorageEntries(normalizedStudentId));
  if (isIndexedDbAvailable()) {
    try {
      return await withResponseDb(async (db) => {
        const current = pruneEntries(
          (await db.getAllFromIndex(
            AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses,
            "studentId",
            normalizedStudentId
          )).map(cloneEntry)
        );
        if (!current.length && localCurrent.length) {
          const next3 = pruneEntries(await mutateFn(localCurrent.map(cloneEntry)));
          writeLocalStorageEntries(normalizedStudentId, next3);
          return next3;
        }
        const next2 = pruneEntries(await mutateFn(current));
        const currentQueueIds = new Set(current.map((entry) => entry.queueId));
        const nextQueueIds = new Set(next2.map((entry) => entry.queueId));
        for (const entry of current) {
          if (!nextQueueIds.has(entry.queueId)) {
            await db.delete(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses, entry.queueId);
          }
        }
        for (const entry of next2) {
          if (!currentQueueIds.has(entry.queueId) || JSON.stringify(current.find((item) => item.queueId === entry.queueId)) !== JSON.stringify(entry)) {
            await db.put(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses, cloneEntry(entry));
          }
        }
        return next2;
      });
    } catch (error) {
      if (!isStorageError(error)) {
        throw error;
      }
    }
  }
  const next = pruneEntries(await mutateFn(localCurrent.map(cloneEntry)));
  writeLocalStorageEntries(normalizedStudentId, next);
  return next;
}
async function enqueueResponse(studentId, payload, options = {}) {
  const entry = makeQueueEntry(studentId, payload, options);
  await mutateEntries(studentId, async (current) => {
    const next = current.filter((queued) => queued.queueId !== entry.queueId);
    next.push(entry);
    return next;
  });
  return cloneEntry(entry);
}
async function listPendingResponses(studentId, options = {}) {
  const normalizedStudentId = normalizeStudentId(studentId);
  if (!normalizedStudentId) {
    return [];
  }
  const now = options.now ?? Date.now();
  if (isIndexedDbAvailable()) {
    try {
      const entries2 = await readEntriesFromDb(normalizedStudentId);
      if (entries2.length) {
        return entries2;
      }
    } catch (error) {
      if (!isStorageError(error)) {
        throw error;
      }
    }
  }
  const entries = pruneEntries(readLocalStorageEntries(normalizedStudentId), now).sort(
    (left, right) => String(left.createdAt || 0).localeCompare(String(right.createdAt || 0))
  );
  if (entries.length) {
    writeLocalStorageEntries(normalizedStudentId, entries);
  }
  return entries.map(cloneEntry);
}
async function updateQueuedResponse(studentId, attemptId, updater) {
  const normalizedStudentId = normalizeStudentId(studentId);
  const normalizedAttemptId = normalizeAttemptId(attemptId);
  if (!normalizedStudentId || !normalizedAttemptId) {
    return false;
  }
  const updated = await mutateEntries(normalizedStudentId, async (current) => {
    const next = current.map((entry) => {
      if (entry.attemptId !== normalizedAttemptId) {
        return entry;
      }
      const updatedEntry = cloneEntry(entry);
      const nextPayload = updater(cloneEntry(entry.payload));
      if (nextPayload === void 0) {
        return entry;
      }
      updatedEntry.payload = nextPayload;
      updatedEntry.updatedAt = Date.now();
      updatedEntry.lastError = "";
      return updatedEntry;
    });
    return next;
  });
  return updated.some((entry) => entry.attemptId === normalizedAttemptId);
}
async function deleteQueuedResponses(studentId, attemptIds) {
  const normalizedStudentId = normalizeStudentId(studentId);
  const ids = new Set((attemptIds || []).map(normalizeAttemptId).filter(Boolean));
  if (!normalizedStudentId || !ids.size) {
    return 0;
  }
  const next = await mutateEntries(
    normalizedStudentId,
    async (current) => current.filter((entry) => !ids.has(entry.attemptId))
  );
  return next.length;
}
async function pruneExpiredResponses(now = Date.now()) {
  const removedCounts = { db: 0, local: 0 };
  if (isIndexedDbAvailable()) {
    try {
      await withResponseDb(async (db) => {
        const entries = await db.getAll(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses);
        for (const entry of entries) {
          if (Number(entry?.expiresAt || 0) <= now) {
            await db.delete(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.pendingResponses, entry.queueId);
            removedCounts.db += 1;
          }
        }
      });
    } catch (error) {
      if (!isStorageError(error)) {
        throw error;
      }
    }
  }
  if (typeof window !== "undefined") {
    const keys = [];
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);
      if (key && key.startsWith(`${RESPONSE_QUEUE_KEY_PREFIX}:`)) {
        keys.push(key);
      }
    }
    for (const key of keys) {
      try {
        const parsed = JSON.parse(window.localStorage.getItem(key) || "[]");
        if (!Array.isArray(parsed)) {
          continue;
        }
        const next = pruneEntries(parsed, now);
        if (next.length !== parsed.length) {
          removedCounts.local += parsed.length - next.length;
          if (next.length) {
            window.localStorage.setItem(key, JSON.stringify(next));
          } else {
            window.localStorage.removeItem(key);
          }
        }
      } catch {
        window.localStorage.removeItem(key);
      }
    }
  }
  return removedCounts.db + removedCounts.local;
}
async function migrateLocalStorageQueue(studentId) {
  const normalizedStudentId = normalizeStudentId(studentId);
  if (!normalizedStudentId) {
    return [];
  }
  const localQueue = pruneEntries(readLocalStorageEntries(normalizedStudentId));
  if (!localQueue.length) {
    return [];
  }
  if (!isIndexedDbAvailable()) {
    return localQueue.map(cloneEntry);
  }
  const migratedQueue = localQueue.map((entry) => upgradeLegacyQueueEntry(normalizedStudentId, entry));
  removeLocalStorageQueue(normalizedStudentId);
  try {
    await writeEntriesToDb(migratedQueue);
    return migratedQueue;
  } catch (error) {
    if (isStorageError(error)) {
      writeLocalStorageEntries(normalizedStudentId, migratedQueue);
      return migratedQueue;
    }
    throw error;
  }
}
const { validateAnswer } = __CJS__export_default__$3 || validationModule;
const { normalizeReportIssueAreas } = __CJS__export_default__$5 || reportModule;
const { prepareDrillForSession } = __CJS__export_default__$6 || substitutionsModule$1;
const { buildAttemptContextPayload } = __CJS__export_default__$7 || attemptContextModule;
const { buildSelectionSignature } = __CJS__export_default__$8 || drillSelectionModule;
const targetSessionLength = ref(typeof window !== "undefined" ? Number.parseInt(window.localStorage?.getItem("practice-target-length") || "15", 10) : 15);
if (typeof window !== "undefined") {
  watch(targetSessionLength, (newValue) => {
    window.localStorage.setItem("practice-target-length", newValue.toString());
  });
}
function generateId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function normalizeStringArray(value) {
  const source = Array.isArray(value) ? value : [];
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  source.forEach((entry) => {
    const text = String(entry || "").trim();
    if (!text || seen.has(text)) {
      return;
    }
    seen.add(text);
    normalized.push(text);
  });
  return normalized;
}
function normalizePracticeScope(value = {}) {
  return {
    unitIds: normalizeStringArray(value.unitIds || value.selectedUnitIds || value.selectedUnits),
    topicIds: normalizeStringArray(value.topicIds || value.selectedTopicIds || value.selectedTopics)
  };
}
function buildPracticeScopeSnapshot(scope = {}) {
  const normalized = normalizePracticeScope(scope);
  const selectedSkillClusters = [...normalized.unitIds, ...normalized.topicIds];
  return {
    ...normalized,
    selectedSkillClusters,
    selectedClusters: selectedSkillClusters,
    selectedScopeSignature: buildSelectionSignature({
      unitIds: normalized.unitIds,
      topicIds: normalized.topicIds
    }),
    selectedUnitSignature: normalized.unitIds.slice().sort().join(","),
    selectedTopicSignature: normalized.topicIds.slice().sort().join(",")
  };
}
function cloneDeep(value) {
  if (value === null || value === void 0) {
    return value;
  }
  return JSON.parse(JSON.stringify(value));
}
function usePracticeSession() {
  const bootstrap = useAppBootstrap();
  const studentEmail = computed(() => bootstrap.user?.value?.email || "");
  const selectedPracticeScope = ref({ unitIds: [], topicIds: [] });
  const selectedSkillClusters = computed({
    get() {
      return buildPracticeScopeSnapshot(selectedPracticeScope.value).selectedSkillClusters;
    },
    set(value) {
      if (Array.isArray(value)) {
        selectedPracticeScope.value = {
          unitIds: normalizeStringArray(value),
          topicIds: []
        };
        return;
      }
      selectedPracticeScope.value = normalizePracticeScope(value);
    }
  });
  const practiceMode = ref("normal");
  const currentBatch = ref([]);
  const nextBatch = ref([]);
  const currentIndex = ref(0);
  const currentInput = ref("");
  const feedback = ref(null);
  const loadingBatch = ref(false);
  const prefetching = ref(false);
  const saving = ref(false);
  const saveState = ref("idle");
  const saveMessage = ref("");
  const revealedHintCount = ref(0);
  const submittedThisDrill = ref(false);
  const sessionId = ref("");
  const clientSessionId = ref(generateId());
  const currentAttemptStartedAt = ref("");
  const sessionCursor = ref(0);
  const remainingPlannedCount = ref(0);
  const summaryFreshness = ref(null);
  const reserveDrills = ref([]);
  const solutionVisible = ref(false);
  const currentAttemptId = ref("");
  const currentAttemptRecorded = ref(false);
  const currentSessionAttemptOrdinal = ref(0);
  const reportState = ref("idle");
  const reportMessage = ref("");
  const reportedDrillId = ref("");
  const completedDrillSnapshots = ref([]);
  const reviewIndex = ref(-1);
  const sessionComplete = ref(false);
  const autoAdvanceTimer = ref(null);
  const responseQueue = ref([]);
  const responseQueueReady = ref(false);
  let responseQueueLoadPromise = null;
  let responseQueueLoadToken = 0;
  const flushingQueue = ref(false);
  const currentDrill = computed(() => currentBatch.value[currentIndex.value] || null);
  const currentHintSequence = computed(
    () => getActiveViewDrill()?.hintSequence || getActiveViewDrill()?.renderedHintSequence || []
  );
  const revealedHints = computed(() => currentHintSequence.value.slice(0, revealedHintCount.value));
  const remainingHints = computed(() => Math.max(currentHintSequence.value.length - revealedHintCount.value, 0));
  const batchSize = computed(() => targetSessionLength.value + 5);
  const flushThreshold = computed(() => targetSessionLength.value <= 15 ? 5 : 10);
  const prefetchThreshold = computed(() => Number.parseInt(bootstrap.config.value.PrefetchThreshold || "2", 10) || 2);
  const queueDepth = computed(() => responseQueue.value.length);
  const activeReviewSnapshot = computed(() => reviewIndex.value >= 0 ? completedDrillSnapshots.value[reviewIndex.value] || null : null);
  const isReviewMode = computed(() => Boolean(activeReviewSnapshot.value));
  const activeDrill = computed(() => activeReviewSnapshot.value?.drill || currentDrill.value || null);
  const hasActiveSession = computed(() => Boolean(sessionId.value) && (Boolean(currentBatch.value.length) || Boolean(nextBatch.value.length) || Boolean(activeReviewSnapshot.value) || sessionComplete.value));
  const solutionSnippets = computed(() => {
    const drill = activeDrill.value;
    if (!drill) {
      return [];
    }
    if (Array.isArray(drill.correctSnippets) && drill.correctSnippets.length) {
      return drill.correctSnippets;
    }
    if (Array.isArray(drill.renderedCorrectSnippets) && drill.renderedCorrectSnippets.length) {
      return drill.renderedCorrectSnippets;
    }
    if (drill.canonicalSnippet) {
      return [drill.canonicalSnippet];
    }
    return [];
  });
  function getActiveViewDrill() {
    return activeReviewSnapshot.value?.drill || currentDrill.value || null;
  }
  function getViewSessionAttemptOrdinal() {
    return activeReviewSnapshot.value?.sessionAttemptOrdinal || currentSessionAttemptOrdinal.value;
  }
  function getViewCurrentInput() {
    return activeReviewSnapshot.value?.currentInput ?? currentInput.value;
  }
  function getViewFeedback() {
    return activeReviewSnapshot.value?.feedback ?? feedback.value;
  }
  function getViewRevealedHintCount() {
    return activeReviewSnapshot.value?.revealedHintCount ?? revealedHintCount.value;
  }
  function getViewSubmittedThisDrill() {
    return activeReviewSnapshot.value?.submittedThisDrill ?? submittedThisDrill.value;
  }
  function getViewSolutionVisible() {
    return activeReviewSnapshot.value?.solutionVisible ?? solutionVisible.value;
  }
  function getViewReportState() {
    return activeReviewSnapshot.value?.reportState ?? reportState.value;
  }
  function getViewReportMessage() {
    return activeReviewSnapshot.value?.reportMessage ?? reportMessage.value;
  }
  function getViewReportedDrillId() {
    return activeReviewSnapshot.value?.reportedDrillId ?? reportedDrillId.value;
  }
  function getViewCurrentAttemptId() {
    return activeReviewSnapshot.value?.attemptId || currentAttemptId.value || generateId();
  }
  function snapshotCurrentDrill(reason = "advance") {
    const drill = currentDrill.value;
    if (!drill) {
      return null;
    }
    return {
      reason,
      drill: cloneDeep(drill),
      attemptId: currentAttemptId.value || generateId(),
      currentIndex: currentIndex.value,
      currentInput: currentInput.value,
      feedback: cloneDeep(feedback.value),
      revealedHintCount: revealedHintCount.value,
      submittedThisDrill: submittedThisDrill.value,
      solutionVisible: solutionVisible.value,
      reportState: reportState.value,
      reportMessage: reportMessage.value,
      reportedDrillId: reportedDrillId.value,
      currentAttemptStartedAt: currentAttemptStartedAt.value,
      currentAttemptRecorded: currentAttemptRecorded.value,
      currentSessionAttemptOrdinal: currentSessionAttemptOrdinal.value,
      sessionAttemptOrdinal: currentSessionAttemptOrdinal.value,
      isCorrect: Boolean(feedback.value?.isCorrect),
      answerRevealed: Boolean(feedback.value?.answerRevealed || solutionVisible.value),
      recordedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  function preserveCompletedDrillSnapshot(reason = "advance") {
    const snapshot = snapshotCurrentDrill(reason);
    if (!snapshot) {
      return null;
    }
    const nextSnapshots = [...completedDrillSnapshots.value];
    const existingIndex = nextSnapshots.findIndex((entry) => entry.attemptId === snapshot.attemptId);
    if (existingIndex >= 0) {
      nextSnapshots[existingIndex] = snapshot;
    } else {
      nextSnapshots.push(snapshot);
    }
    completedDrillSnapshots.value = nextSnapshots;
    return snapshot;
  }
  function setReviewIndex(nextIndex) {
    const maxIndex = completedDrillSnapshots.value.length - 1;
    if (nextIndex < 0 || nextIndex > maxIndex) {
      reviewIndex.value = -1;
      return false;
    }
    reviewIndex.value = nextIndex;
    return true;
  }
  function enterLatestReviewSnapshot() {
    if (!completedDrillSnapshots.value.length) {
      return false;
    }
    sessionComplete.value = true;
    return setReviewIndex(completedDrillSnapshots.value.length - 1);
  }
  function reviewPreviousDrill() {
    if (!completedDrillSnapshots.value.length) {
      return false;
    }
    if (reviewIndex.value === -1) {
      return setReviewIndex(completedDrillSnapshots.value.length - 1);
    }
    return setReviewIndex(reviewIndex.value - 1);
  }
  function reviewNextDrill() {
    if (reviewIndex.value === -1) {
      return false;
    }
    if (reviewIndex.value < completedDrillSnapshots.value.length - 1) {
      return setReviewIndex(reviewIndex.value + 1);
    }
    if (currentDrill.value && !sessionComplete.value) {
      reviewIndex.value = -1;
      return true;
    }
    return false;
  }
  function resetReviewState() {
    completedDrillSnapshots.value = [];
    reviewIndex.value = -1;
    sessionComplete.value = false;
  }
  function getBootstrapSnapshot() {
    const bootstrapSnapshot = bootstrap.data?.value || {};
    const shellBootstrap = bootstrap.shellBootstrap?.value || bootstrapSnapshot.shellBootstrap || {};
    const config = bootstrap.config?.value || bootstrapSnapshot.config || {};
    return { bootstrapSnapshot, shellBootstrap, config };
  }
  function getSelectionSnapshot() {
    return buildPracticeScopeSnapshot(selectedPracticeScope.value);
  }
  function getAttemptContextPayload(responsePayload = {}, drill = currentDrill.value) {
    const selectionSnapshot = getSelectionSnapshot();
    if (!drill) {
      return buildAttemptContextPayload({
        attempt: {
          attemptId: responsePayload.attemptId,
          studentId: responsePayload.studentId || studentEmail.value,
          sessionId: responsePayload.sessionId,
          clientSessionId: clientSessionId.value,
          attemptOrdinal: responsePayload.attemptOrdinal,
          sessionAttemptOrdinal: responsePayload.sessionAttemptOrdinal,
          startedAt: responsePayload.startedAt || responsePayload.respondedAt
        },
        catalog: {},
        selection: {
          practiceMode: responsePayload.practiceMode || practiceMode.value,
          selectedClusterSignature: responsePayload.selectedClusterSignature || selectionSnapshot.selectedScopeSignature,
          selectedScopeSignature: responsePayload.selectedScopeSignature || selectionSnapshot.selectedScopeSignature,
          selectedClusters: selectionSnapshot.selectedClusters,
          selectedUnitIds: selectionSnapshot.unitIds,
          selectedTopicIds: selectionSnapshot.topicIds,
          selectedSkillClusters: selectionSnapshot.selectedSkillClusters
        },
        assignment: {},
        drill: {},
        rendered: {},
        outcome: {
          respondedAt: responsePayload.respondedAt,
          firstSubmittedAt: responsePayload.firstSubmittedAt || responsePayload.respondedAt,
          completedAt: responsePayload.completedAt || responsePayload.respondedAt,
          firstRawInput: responsePayload.firstRawInput || responsePayload.rawInput,
          rawInput: responsePayload.rawInput,
          firstIsCorrect: responsePayload.firstIsCorrect,
          isCorrect: responsePayload.isCorrect,
          submissionCount: responsePayload.submissionCount,
          hintCount: responsePayload.hintCount,
          allHintsRevealed: responsePayload.allHintsRevealed,
          answerRevealed: responsePayload.answerRevealed,
          completionStatus: responsePayload.completionStatus,
          feedbackProvided: responsePayload.feedbackProvided
        }
      });
    }
    const { shellBootstrap, config } = getBootstrapSnapshot();
    const skillLinks = Array.isArray(drill.skills) ? drill.skills : [];
    const skillMetadataById = new Map((bootstrap.skills?.value || []).map((skill) => [skill.skillId, skill]));
    const primaryLink = skillLinks.find((link) => String(link?.role || "").trim() === "primary") || skillLinks[0] || null;
    const primarySkillId = String(primaryLink?.skillId || drill.drillId || "").trim();
    const skillIds = normalizeStringArray(skillLinks.map((link) => link?.skillId));
    const skillFamilyIds = normalizeStringArray(
      skillIds.map((skillId) => skillMetadataById.get(skillId)?.skillFamilyId || "")
    );
    const clusterId = String(skillMetadataById.get(primarySkillId)?.clusterId || drill.clusterId || drill.skillCluster || "").trim();
    const selectedClusterSignature = responsePayload.selectedClusterSignature || selectionSnapshot.selectedScopeSignature;
    return buildAttemptContextPayload({
      attempt: {
        attemptId: responsePayload.attemptId,
        studentId: responsePayload.studentId || studentEmail.value,
        sessionId: responsePayload.sessionId,
        clientSessionId: clientSessionId.value,
        attemptOrdinal: responsePayload.attemptOrdinal,
        sessionAttemptOrdinal: responsePayload.sessionAttemptOrdinal,
        startedAt: responsePayload.startedAt || responsePayload.respondedAt
      },
      catalog: {
        catalogVersion: responsePayload.catalogVersion || config.CatalogRevision || shellBootstrap.catalogRevision || "",
        planVersion: responsePayload.planVersion || config.PracticePlanVersion || "practice-plan-v1",
        validationVersion: responsePayload.validationVersion || config.ValidationVersion || "shared-validation-v1",
        appVersion: responsePayload.appVersion || shellBootstrap.appVersion || config.AppVersion || "",
        workbookSchemaVersion: responsePayload.workbookSchemaVersion || shellBootstrap.workbookSchemaVersion || config.WorkbookSchemaVersion || ""
      },
      selection: {
        practiceMode: responsePayload.practiceMode || practiceMode.value,
        selectedClusterSignature,
        selectedScopeSignature: responsePayload.selectedScopeSignature || selectionSnapshot.selectedScopeSignature,
        selectedClusters: selectionSnapshot.selectedClusters,
        selectedUnitIds: selectionSnapshot.unitIds,
        selectedTopicIds: selectionSnapshot.topicIds,
        selectedSkillClusters: selectionSnapshot.selectedSkillClusters,
        studentNudgeLevel: responsePayload.studentNudgeLevel
      },
      assignment: responsePayload.assignment || {},
      drill: {
        drillId: drill.drillId,
        sourceDrillId: drill.sourceDrillId || drill.drillId || "",
        skillCluster: drill.skillCluster || "",
        primarySkillId,
        skillIds,
        skillFamilyIds,
        clusterId,
        validationType: drill.validationType || ""
      },
      rendered: {
        prompt: drill.renderedPrompt || drill.promptTemplate || "",
        hintSequence: Array.isArray(drill.renderedHintSequence) ? drill.renderedHintSequence : Array.isArray(drill.hintSequence) ? drill.hintSequence : [],
        correctSnippets: Array.isArray(drill.renderedCorrectSnippets) ? drill.renderedCorrectSnippets : Array.isArray(drill.correctSnippets) ? drill.correctSnippets : [],
        substitutions: drill.substitutions || {}
      },
      outcome: {
        respondedAt: responsePayload.respondedAt,
        firstSubmittedAt: responsePayload.firstSubmittedAt || responsePayload.respondedAt,
        completedAt: responsePayload.completedAt || responsePayload.respondedAt,
        firstRawInput: responsePayload.firstRawInput === void 0 ? responsePayload.rawInput : responsePayload.firstRawInput,
        rawInput: responsePayload.rawInput || "",
        firstIsCorrect: responsePayload.firstIsCorrect === void 0 ? responsePayload.isCorrect : responsePayload.firstIsCorrect,
        isCorrect: responsePayload.isCorrect,
        submissionCount: responsePayload.submissionCount,
        hintCount: responsePayload.hintCount,
        allHintsRevealed: responsePayload.allHintsRevealed,
        answerRevealed: responsePayload.answerRevealed,
        completionStatus: responsePayload.completionStatus || (responsePayload.answerRevealed ? "solution_revealed" : responsePayload.isCorrect ? "correct" : "incorrect"),
        feedbackProvided: responsePayload.feedbackProvided
      }
    });
  }
  function attachAttemptContextJson(responsePayload, drill = currentDrill.value) {
    return {
      ...responsePayload,
      attemptContextJson: getAttemptContextPayload(responsePayload, drill)
    };
  }
  function buildReportDrillSnapshot(current, attemptContext) {
    return {
      drillId: attemptContext.drill.drillId || "",
      sourceDrillId: attemptContext.drill.sourceDrillId || attemptContext.drill.drillId || "",
      skillCluster: attemptContext.drill.skillCluster || "",
      tags: current.tags || {},
      validationType: attemptContext.drill.validationType || "",
      correctPatterns: Array.isArray(current.correctPatterns) ? current.correctPatterns : Array.isArray(current.renderedCorrectSnippets) ? current.renderedCorrectSnippets : [],
      mistakePatterns: Array.isArray(current.mistakePatterns) ? current.mistakePatterns : [],
      notes: current.notes || "",
      placeholderTypes: current.placeholderTypes || {}
    };
  }
  function syncSaveState() {
    saving.value = flushingQueue.value || responseQueue.value.length > 0;
    if (flushingQueue.value) {
      saveState.value = "saving";
      saveMessage.value = "Saving response...";
      return;
    }
    if (responseQueue.value.length > 0) {
      if (saveState.value === "error") {
        return;
      }
      saveState.value = "saving";
      saveMessage.value = "Saving response...";
      return;
    }
    if (saveState.value === "saving") {
      saveState.value = "saved";
      saveMessage.value = "Answer saved.";
      window.setTimeout(() => {
        if (saveState.value === "saved") {
          saveState.value = "idle";
          saveMessage.value = "";
        }
      }, 1200);
      return;
    }
    if (saveState.value === "error") {
      saveState.value = "saved";
      saveMessage.value = "Answer saved.";
    }
  }
  function ensureResponseQueueReady() {
    if (responseQueueLoadPromise) {
      return responseQueueLoadPromise;
    }
    if (!studentEmail.value) {
      responseQueueReady.value = true;
      return Promise.resolve([]);
    }
    responseQueueLoadPromise = loadResponseQueueForStudent(studentEmail.value).finally(() => {
      responseQueueLoadPromise = null;
    });
    return responseQueueLoadPromise;
  }
  async function loadResponseQueueForStudent(email) {
    const normalizedEmail = String(email || "").trim().toLowerCase();
    const loadToken = ++responseQueueLoadToken;
    responseQueueReady.value = false;
    if (!normalizedEmail) {
      responseQueue.value = [];
      responseQueueReady.value = true;
      syncSaveState();
      return [];
    }
    try {
      await migrateLocalStorageQueue(normalizedEmail);
      await pruneExpiredResponses();
      const queue = await listPendingResponses(normalizedEmail);
      if (loadToken === responseQueueLoadToken) {
        responseQueue.value = queue;
        responseQueueReady.value = true;
        syncSaveState();
        void flushResponseQueue();
      }
      return queue;
    } catch (error) {
      responseQueueReady.value = true;
      if (loadToken === responseQueueLoadToken) {
        responseQueue.value = [];
        syncSaveState();
      }
      return [];
    }
  }
  function cancelAutoAdvance() {
    if (autoAdvanceTimer.value !== null) {
      window.clearTimeout(autoAdvanceTimer.value);
      autoAdvanceTimer.value = null;
    }
  }
  function beginAttemptForCurrentDrill() {
    resetReportState();
    currentAttemptId.value = generateId();
    currentAttemptRecorded.value = false;
    currentSessionAttemptOrdinal.value += 1;
    currentAttemptStartedAt.value = (/* @__PURE__ */ new Date()).toISOString();
    solutionVisible.value = false;
  }
  function resetPracticeSession() {
    cancelAutoAdvance();
    currentBatch.value = [];
    nextBatch.value = [];
    reserveDrills.value = [];
    currentIndex.value = 0;
    currentInput.value = "";
    feedback.value = null;
    loadingBatch.value = false;
    prefetching.value = false;
    saving.value = false;
    saveState.value = "idle";
    saveMessage.value = "";
    revealedHintCount.value = 0;
    submittedThisDrill.value = false;
    sessionId.value = "";
    sessionCursor.value = 0;
    remainingPlannedCount.value = 0;
    summaryFreshness.value = null;
    solutionVisible.value = false;
    currentAttemptId.value = "";
    currentAttemptRecorded.value = false;
    currentSessionAttemptOrdinal.value = 0;
    currentAttemptStartedAt.value = "";
    resetReviewState();
    resetReportState();
  }
  function scheduleAutoAdvance() {
    cancelAutoAdvance();
    if (!feedback.value?.isCorrect || !currentDrill.value || solutionVisible.value) {
      return;
    }
    autoAdvanceTimer.value = window.setTimeout(() => {
      autoAdvanceTimer.value = null;
      void nextDrill();
    }, 2e3);
  }
  async function updateQueuedAttempt(attemptId, updater) {
    if (!studentEmail.value) {
      return false;
    }
    const entry = responseQueue.value.find((queuedAttempt) => queuedAttempt.attemptId === attemptId);
    if (!entry) {
      return false;
    }
    const nextPayload = updater({ ...entry.payload });
    if (!nextPayload) {
      return false;
    }
    entry.payload = nextPayload;
    entry.updatedAt = Date.now();
    try {
      await updateQueuedResponse(studentEmail.value, attemptId, () => nextPayload);
    } catch (error) {
      console.warn("Failed to update queued response in persistent storage.", error);
    }
    syncSaveState();
    return true;
  }
  async function flushResponseQueue() {
    await ensureResponseQueueReady();
    if (!studentEmail.value) {
      syncSaveState();
      return;
    }
    if (flushingQueue.value || !responseQueue.value.length) {
      syncSaveState();
      return;
    }
    flushingQueue.value = true;
    syncSaveState();
    try {
      while (responseQueue.value.length) {
        const batch = responseQueue.value.slice(0, flushThreshold.value);
        try {
          if (typeof apiClient.recordResponseBatch === "function") {
            await apiClient.recordResponseBatch({
              responses: batch.map((entry) => entry.payload)
            });
          } else {
            for (const entry of batch) {
              await apiClient.recordResponse(entry.payload);
            }
          }
          await deleteQueuedResponses(studentEmail.value, batch.map((entry) => entry.attemptId));
          responseQueue.value.splice(0, batch.length);
          saveState.value = "saved";
          saveMessage.value = "Answer saved.";
          if (true) {
            void bootstrap.loadBootstrap(true);
          }
        } catch (error) {
          saveState.value = "error";
          saveMessage.value = error.message || "Saving failed.";
          window.setTimeout(() => {
            if (responseQueue.value.length && !flushingQueue.value) {
              void flushResponseQueue();
            }
          }, 1500);
          break;
        }
      }
    } finally {
      flushingQueue.value = false;
      syncSaveState();
    }
  }
  async function enqueueResponse$1(payload) {
    await ensureResponseQueueReady();
    if (!studentEmail.value) {
      return null;
    }
    const now = Date.now();
    const entry = {
      schemaVersion: RESPONSE_QUEUE_VERSION,
      studentId: studentEmail.value,
      attemptId: payload.attemptId,
      createdAt: now,
      updatedAt: now,
      expiresAt: now + RESPONSE_QUEUE_TTL_MS,
      payload,
      flushState: "pending",
      lastError: ""
    };
    responseQueue.value.push(entry);
    try {
      await enqueueResponse(studentEmail.value, payload, {
        now,
        expiresAt: entry.expiresAt,
        createdAt: entry.createdAt,
        attemptId: payload.attemptId
      });
    } catch (error) {
      console.warn("Failed to persist queued response.", error);
    }
    syncSaveState();
    await flushResponseQueue();
    {
      void bootstrap.loadBootstrap(true);
    }
  }
  async function fetchBatch(options = {}) {
    const payload = {
      count: batchSize.value,
      selectedUnitIds: options.selectedUnitIds || selectedPracticeScope.value.unitIds,
      selectedTopicIds: options.selectedTopicIds || selectedPracticeScope.value.topicIds,
      skillClusters: options.skillClusters || selectedSkillClusters.value,
      fetchAll: Boolean(options.fetchAll),
      drillId: options.drillId
    };
    return apiClient.fetchPracticeBatch(payload);
  }
  async function fetchSessionSlice(force = false) {
    if (!sessionId.value) {
      return null;
    }
    if (prefetching.value && !force) {
      return null;
    }
    prefetching.value = true;
    try {
      const response = await apiClient.fetchPracticeSessionSlice({
        sessionId: sessionId.value,
        planVersion: bootstrap.config.value.PracticePlanVersion || "practice-plan-v1",
        cursor: sessionCursor.value,
        sliceSize: batchSize.value,
        selectedClusterSignature: getSelectionSnapshot().selectedScopeSignature,
        selectedScopeSignature: getSelectionSnapshot().selectedScopeSignature
      });
      sessionCursor.value = response.cursor;
      remainingPlannedCount.value = response.remainingPlannedCount;
      summaryFreshness.value = response.summaryFreshness || null;
      reserveDrills.value = response.reserveDrills || [];
      nextBatch.value = [...response.drills || [], ...response.reserveDrills || []];
      return response;
    } finally {
      prefetching.value = false;
    }
  }
  async function prefetchIfNeeded() {
    if (!sessionId.value || prefetching.value) {
      return;
    }
    if (nextBatch.value.length) {
      return;
    }
    const remaining = currentBatch.value.length - currentIndex.value;
    if (remaining > prefetchThreshold.value) {
      return;
    }
    await fetchSessionSlice();
  }
  async function startPractice({ mode = "normal", drillId = null, fetchAll = false } = {}) {
    cancelAutoAdvance();
    practiceMode.value = mode;
    loadingBatch.value = true;
    resetPracticeSession();
    practiceMode.value = mode;
    loadingBatch.value = true;
    await ensureResponseQueueReady();
    clientSessionId.value = generateId();
    try {
      const response = drillId ? await fetchBatch({ drillId, fetchAll }) : await apiClient.startPracticeSession({
        clientSessionId: clientSessionId.value,
        selectedUnitIds: selectedPracticeScope.value.unitIds,
        selectedTopicIds: selectedPracticeScope.value.topicIds,
        selectedSkillClusters: selectedSkillClusters.value,
        selectedScopeSignature: getSelectionSnapshot().selectedScopeSignature,
        practiceMode: "normal",
        sliceSize: batchSize.value,
        studentNudgeLevel: "balanced"
      });
      if (drillId) {
        currentBatch.value = response || [];
        nextBatch.value = [];
        reserveDrills.value = [];
        sessionId.value = "";
        sessionCursor.value = 0;
        remainingPlannedCount.value = 0;
        summaryFreshness.value = null;
      } else {
        sessionId.value = response.sessionId;
        currentBatch.value = response.drills || [];
        nextBatch.value = response.reserveDrills || [];
        reserveDrills.value = response.reserveDrills || [];
        sessionCursor.value = response.cursor || 0;
        remainingPlannedCount.value = response.remainingPlannedCount || 0;
        summaryFreshness.value = response.summaryFreshness || null;
      }
      currentIndex.value = 0;
      beginAttemptForCurrentDrill();
      sessionComplete.value = false;
      if (practiceMode.value === "normal" && !drillId) {
        void prefetchIfNeeded();
      }
    } finally {
      loadingBatch.value = false;
      syncSaveState();
    }
  }
  const canSubmitCurrentDrill = computed(() => {
    if (isReviewMode.value || !currentDrill.value || solutionVisible.value) return false;
    return !feedback.value?.isCorrect;
  });
  const canShowSolution = computed(() => !isReviewMode.value && Boolean(currentDrill.value) && !solutionVisible.value && !feedback.value?.isCorrect);
  const canReportCurrentDrill = computed(() => {
    const drill = getActiveViewDrill();
    const reportedId = getViewReportedDrillId();
    return Boolean(drill) && getViewReportState() !== "reporting" && reportedId !== drill?.drillId;
  });
  const reportButtonLabel = computed(() => {
    const reportStateValue = getViewReportState();
    if (reportStateValue === "reporting") return "Reporting...";
    if (reportStateValue === "reported") return "Reported. Thank you.";
    if (reportStateValue === "error") return "Report failed. Try again.";
    return "Report drill";
  });
  function resetReportState() {
    reportState.value = "idle";
    reportMessage.value = "";
    reportedDrillId.value = "";
  }
  async function submitAnswer() {
    if (!currentDrill.value || feedback.value?.isCorrect) {
      return;
    }
    cancelAutoAdvance();
    const result = validateAnswer(currentInput.value, currentDrill.value);
    feedback.value = {
      ...result,
      status: result.isCorrect ? "correct" : "incorrect",
      message: result.feedback
    };
    if (result.isCorrect) {
      confetti({ particleCount: 70, spread: 65, origin: { y: 0.65 } });
      submittedThisDrill.value = true;
      scheduleAutoAdvance();
    } else {
      revealNextHint();
      submittedThisDrill.value = false;
      if (bootstrap.randomizationBank?.value && currentDrill.value.placeholderTypes && Object.keys(currentDrill.value.placeholderTypes).length > 0) {
        try {
          const variant = prepareDrillForSession(currentDrill.value, bootstrap.randomizationBank.value);
          variant.drillId = `${variant.drillId}-rep-${Date.now()}`;
          const injectIndex = Math.min(currentIndex.value + 3, currentBatch.value.length);
          currentBatch.value.splice(injectIndex, 0, variant);
        } catch (err) {
          console.error("Failed to generate edge adaptation variant", err);
        }
      }
    }
    if (practiceMode.value === "normal" && sessionId.value) {
      const respondedAt = (/* @__PURE__ */ new Date()).toISOString();
      const attempt = attachAttemptContextJson({
        attemptId: currentAttemptId.value || generateId(),
        sessionId: sessionId.value,
        planVersion: bootstrap.config.value.PracticePlanVersion || "practice-plan-v1",
        catalogVersion: bootstrap.config.value.CatalogRevision || bootstrap.shellBootstrap?.value?.catalogRevision || bootstrap.data?.value?.config?.CatalogRevision || "",
        appVersion: bootstrap.shellBootstrap?.value?.appVersion || bootstrap.config.value.AppVersion || "",
        workbookSchemaVersion: bootstrap.shellBootstrap?.value?.workbookSchemaVersion || bootstrap.config.value.WorkbookSchemaVersion || "",
        startedAt: currentAttemptStartedAt.value || respondedAt,
        respondedAt,
        drillId: currentDrill.value.drillId,
        rawInput: currentInput.value,
        isCorrect: result.isCorrect,
        feedbackProvided: result.feedback,
        attemptOrdinal: currentIndex.value + 1,
        sessionAttemptOrdinal: currentSessionAttemptOrdinal.value,
        firstSubmittedAt: respondedAt,
        completedAt: respondedAt,
        firstRawInput: currentInput.value,
        firstIsCorrect: result.isCorrect,
        submissionCount: 1,
        hintCount: revealedHintCount.value,
        allHintsRevealed: remainingHints.value === 0 && currentHintSequence.value.length > 0,
        answerRevealed: false,
        validationVersion: "shared-validation-v1",
        selectedClusterSignature: getSelectionSnapshot().selectedScopeSignature,
        selectedScopeSignature: getSelectionSnapshot().selectedScopeSignature,
        practiceMode: "normal"
      });
      if (!currentAttemptRecorded.value) {
        await enqueueResponse$1(attempt);
        currentAttemptRecorded.value = true;
      } else {
        await updateQueuedAttempt(attempt.attemptId, (existing) => ({
          ...existing,
          rawInput: attempt.rawInput,
          isCorrect: attempt.isCorrect,
          feedbackProvided: attempt.feedbackProvided,
          hintCount: attempt.hintCount,
          allHintsRevealed: attempt.allHintsRevealed,
          submissionCount: Math.max(1, Number.parseInt(existing.submissionCount || "1", 10) || 1) + 1,
          completedAt: attempt.respondedAt,
          respondedAt: attempt.respondedAt,
          firstSubmittedAt: existing.firstSubmittedAt || existing.respondedAt || attempt.firstSubmittedAt,
          firstRawInput: existing.firstRawInput === void 0 ? existing.rawInput : existing.firstRawInput,
          firstIsCorrect: existing.firstIsCorrect === void 0 ? existing.isCorrect : existing.firstIsCorrect,
          attemptContextJson: getAttemptContextPayload({
            ...existing,
            ...attempt,
            submissionCount: Math.max(1, Number.parseInt(existing.submissionCount || "1", 10) || 1) + 1
          })
        }));
      }
    }
    syncSaveState();
  }
  function buildReportPayload(reportDetails = {}, drill = getActiveViewDrill()) {
    const current = drill;
    if (!current) {
      return null;
    }
    const currentInputValue = getViewCurrentInput();
    const revealedHintCountValue = getViewRevealedHintCount();
    const feedbackValue = getViewFeedback();
    const solutionVisibleValue = getViewSolutionVisible();
    const attemptOrdinal = activeReviewSnapshot.value?.currentIndex !== void 0 ? activeReviewSnapshot.value.currentIndex + 1 : currentIndex.value + 1;
    const attemptId = getViewCurrentAttemptId();
    const { shellBootstrap, config } = getBootstrapSnapshot();
    const attemptContext = getAttemptContextPayload({
      attemptId,
      sessionId: sessionId.value,
      planVersion: config.PracticePlanVersion || "practice-plan-v1",
      catalogVersion: config.CatalogRevision || shellBootstrap.catalogRevision || "1",
      workbookSchemaVersion: shellBootstrap.workbookSchemaVersion || config.WorkbookSchemaVersion || "1",
      practiceMode: practiceMode.value,
      selectedClusterSignature: getSelectionSnapshot().selectedScopeSignature,
      selectedScopeSignature: getSelectionSnapshot().selectedScopeSignature,
      respondedAt: (/* @__PURE__ */ new Date()).toISOString(),
      rawInput: currentInputValue,
      isCorrect: Boolean(feedbackValue?.isCorrect),
      hintCount: revealedHintCountValue,
      allHintsRevealed: viewRemainingHints.value === 0 && currentHintSequence.value.length > 0,
      answerRevealed: Boolean(feedbackValue?.answerRevealed || solutionVisibleValue),
      attemptOrdinal,
      sessionAttemptOrdinal: getViewSessionAttemptOrdinal()
    }, current);
    const issueAreas = normalizeReportIssueAreas(reportDetails.issueAreas || []);
    if (!issueAreas.length) {
      return null;
    }
    const drillSnapshot = buildReportDrillSnapshot(current, attemptContext);
    return {
      drillId: current.drillId,
      sourceDrillId: current.sourceDrillId || current.drillId,
      issueAreas,
      studentNote: String(reportDetails.studentNote || "").trim(),
      sessionId: sessionId.value,
      attemptId,
      appVersion: shellBootstrap.appVersion || config.AppVersion || "local-modern-dev",
      catalogRevision: config.CatalogRevision || shellBootstrap.catalogRevision || "1",
      workbookSchemaVersion: shellBootstrap.workbookSchemaVersion || config.WorkbookSchemaVersion || "1",
      practiceMode: practiceMode.value,
      selectedClusterSignature: getSelectionSnapshot().selectedScopeSignature,
      selectedScopeSignature: getSelectionSnapshot().selectedScopeSignature,
      renderedPrompt: attemptContext.rendered.prompt || current.promptTemplate || "",
      renderedHintSequence: attemptContext.rendered.hintSequence || [],
      renderedCorrectSnippets: attemptContext.rendered.correctSnippets || [],
      substitutions: attemptContext.rendered.substitutions || {},
      drillSnapshot,
      studentInput: currentInputValue,
      wasSubmitted: getViewSubmittedThisDrill() || Boolean(feedbackValue),
      wasCorrect: Boolean(feedbackValue?.isCorrect),
      hintCount: revealedHintCountValue,
      allHintsRevealed: viewRemainingHints.value === 0 && currentHintSequence.value.length > 0,
      answerRevealed: Boolean(feedbackValue?.answerRevealed || solutionVisibleValue),
      attemptOrdinal,
      sessionAttemptOrdinal: getViewSessionAttemptOrdinal()
    };
  }
  async function reportCurrentDrill(reportDetails = {}) {
    const drill = getActiveViewDrill();
    if (!drill) {
      return null;
    }
    const drillId = drill.drillId;
    if (!drillId || getViewReportState() === "reporting" || getViewReportedDrillId() === drillId) {
      return null;
    }
    cancelAutoAdvance();
    reportState.value = "reporting";
    reportMessage.value = "Reporting...";
    try {
      const payload = buildReportPayload(reportDetails, drill);
      if (!payload || !payload.issueAreas.length) {
        reportState.value = "error";
        reportMessage.value = "Choose at least one issue area.";
        return null;
      }
      const result = await apiClient.reportDrill(payload);
      reportState.value = "reported";
      reportedDrillId.value = drillId;
      reportMessage.value = "Reported. Thank you.";
      if (activeReviewSnapshot.value) {
        activeReviewSnapshot.value.reportState = "reported";
        activeReviewSnapshot.value.reportMessage = "Reported. Thank you.";
        activeReviewSnapshot.value.reportedDrillId = drillId;
      }
      return result;
    } catch (error) {
      reportState.value = "error";
      reportMessage.value = error?.message || "Report failed. Try again.";
      return null;
    }
  }
  async function nextDrill() {
    if (isReviewMode.value) {
      reviewNextDrill();
      return;
    }
    if (currentInput.value.trim() && !currentAttemptRecorded.value && practiceMode.value === "normal" && sessionId.value) {
      const respondedAt = (/* @__PURE__ */ new Date()).toISOString();
      const attempt = attachAttemptContextJson({
        attemptId: currentAttemptId.value || generateId(),
        sessionId: sessionId.value,
        planVersion: bootstrap.config.value.PracticePlanVersion || "practice-plan-v1",
        catalogVersion: bootstrap.config.value.CatalogRevision || bootstrap.shellBootstrap?.value?.catalogRevision || bootstrap.data?.value?.config?.CatalogRevision || "",
        appVersion: bootstrap.shellBootstrap?.value?.appVersion || bootstrap.config.value.AppVersion || "",
        workbookSchemaVersion: bootstrap.shellBootstrap?.value?.workbookSchemaVersion || bootstrap.config.value.WorkbookSchemaVersion || "",
        startedAt: currentAttemptStartedAt.value || respondedAt,
        respondedAt,
        drillId: currentDrill.value.drillId,
        rawInput: currentInput.value,
        isCorrect: false,
        // Incomplete/Skipped
        feedbackProvided: "User skipped to next drill.",
        attemptOrdinal: currentIndex.value + 1,
        sessionAttemptOrdinal: currentSessionAttemptOrdinal.value,
        firstSubmittedAt: respondedAt,
        completedAt: respondedAt,
        firstRawInput: currentInput.value,
        firstIsCorrect: false,
        submissionCount: 0,
        hintCount: revealedHintCount.value,
        allHintsRevealed: remainingHints.value === 0,
        answerRevealed: false,
        validationVersion: "shared-validation-v1",
        selectedClusterSignature: getSelectionSnapshot().selectedScopeSignature,
        selectedScopeSignature: getSelectionSnapshot().selectedScopeSignature,
        practiceMode: "normal"
      });
      await enqueueResponse$1(attempt);
    }
    preserveCompletedDrillSnapshot("advance");
    cancelAutoAdvance();
    currentInput.value = "";
    feedback.value = null;
    revealedHintCount.value = 0;
    submittedThisDrill.value = false;
    solutionVisible.value = false;
    currentIndex.value += 1;
    beginAttemptForCurrentDrill();
    if (currentIndex.value < currentBatch.value.length) {
      void prefetchIfNeeded();
      return;
    }
    if (nextBatch.value.length) {
      currentBatch.value = nextBatch.value;
      nextBatch.value = [];
      currentIndex.value = 0;
      void prefetchIfNeeded();
      return;
    }
    if (sessionId.value) {
      await fetchSessionSlice();
      if (nextBatch.value.length) {
        currentBatch.value = nextBatch.value;
        nextBatch.value = [];
        currentIndex.value = 0;
        sessionComplete.value = false;
        beginAttemptForCurrentDrill();
      } else {
        sessionComplete.value = true;
      }
      return;
    }
    sessionComplete.value = true;
  }
  function revealNextHint() {
    if (isReviewMode.value) {
      return;
    }
    if (remainingHints.value > 0) {
      cancelAutoAdvance();
      revealedHintCount.value += 1;
    }
  }
  const viewDrill = computed(() => getActiveViewDrill());
  const viewFeedback = computed(() => getViewFeedback());
  const viewRevealedHints = computed(() => {
    const drill = getActiveViewDrill();
    const hints = Array.isArray(drill?.hintSequence) ? drill.hintSequence : [];
    return hints.slice(0, getViewRevealedHintCount());
  });
  const viewRemainingHints = computed(() => {
    const drill = getActiveViewDrill();
    const hints = Array.isArray(drill?.hintSequence) ? drill.hintSequence : [];
    return Math.max(hints.length - getViewRevealedHintCount(), 0);
  });
  const viewSolutionVisible = computed(() => getViewSolutionVisible());
  const viewSubmittedThisDrill = computed(() => getViewSubmittedThisDrill());
  const viewCurrentInput = computed(() => getViewCurrentInput());
  const viewReportState = computed(() => getViewReportState());
  const viewReportMessage = computed(() => getViewReportMessage());
  const viewReportButtonLabel = computed(() => reportButtonLabel.value);
  const viewCurrentSessionAttemptOrdinal = computed(() => getViewSessionAttemptOrdinal());
  const hasPreviousReviewedDrill = computed(() => isReviewMode.value ? reviewIndex.value > 0 : completedDrillSnapshots.value.length > 0);
  const hasNextReviewedDrill = computed(() => isReviewMode.value ? reviewIndex.value < completedDrillSnapshots.value.length - 1 || Boolean(currentDrill.value && !sessionComplete.value) : false);
  async function showSolution() {
    if (isReviewMode.value || !currentDrill.value || solutionVisible.value || feedback.value?.isCorrect) {
      return;
    }
    cancelAutoAdvance();
    solutionVisible.value = true;
    submittedThisDrill.value = true;
    feedback.value = {
      isCorrect: false,
      feedback: "Solution revealed. This drill is marked unsolved.",
      answerRevealed: true
    };
    if (practiceMode.value === "normal" && sessionId.value) {
      const respondedAt = (/* @__PURE__ */ new Date()).toISOString();
      const payload = attachAttemptContextJson({
        attemptId: currentAttemptId.value || generateId(),
        sessionId: sessionId.value,
        planVersion: bootstrap.config.value.PracticePlanVersion || "practice-plan-v1",
        catalogVersion: bootstrap.config.value.CatalogRevision || bootstrap.shellBootstrap?.value?.catalogRevision || bootstrap.data?.value?.config?.CatalogRevision || "",
        appVersion: bootstrap.shellBootstrap?.value?.appVersion || bootstrap.config.value.AppVersion || "",
        workbookSchemaVersion: bootstrap.shellBootstrap?.value?.workbookSchemaVersion || bootstrap.config.value.WorkbookSchemaVersion || "",
        startedAt: currentAttemptStartedAt.value || respondedAt,
        respondedAt,
        drillId: currentDrill.value.drillId,
        rawInput: currentInput.value,
        isCorrect: false,
        feedbackProvided: "Solution revealed. This drill is marked unsolved.",
        attemptOrdinal: currentIndex.value + 1,
        sessionAttemptOrdinal: currentSessionAttemptOrdinal.value,
        firstSubmittedAt: respondedAt,
        completedAt: respondedAt,
        firstRawInput: currentInput.value,
        firstIsCorrect: false,
        submissionCount: 0,
        hintCount: revealedHintCount.value,
        allHintsRevealed: remainingHints.value === 0 && currentHintSequence.value.length > 0,
        answerRevealed: true,
        validationVersion: "shared-validation-v1",
        selectedClusterSignature: getSelectionSnapshot().selectedScopeSignature,
        selectedScopeSignature: getSelectionSnapshot().selectedScopeSignature,
        practiceMode: "normal"
      });
      if (!currentAttemptRecorded.value) {
        await enqueueResponse$1(payload);
        currentAttemptRecorded.value = true;
      } else {
        await updateQueuedAttempt(payload.attemptId, (existing) => ({
          ...existing,
          answerRevealed: true,
          feedbackProvided: payload.feedbackProvided,
          completedAt: payload.respondedAt,
          respondedAt: payload.respondedAt,
          firstSubmittedAt: existing.firstSubmittedAt || existing.respondedAt || payload.firstSubmittedAt,
          firstRawInput: existing.firstRawInput === void 0 ? existing.rawInput : existing.firstRawInput,
          firstIsCorrect: existing.firstIsCorrect === void 0 ? existing.isCorrect : existing.firstIsCorrect,
          attemptContextJson: getAttemptContextPayload({
            ...existing,
            ...payload
          })
        }));
      }
    }
  }
  watch(
    studentEmail,
    (email) => {
      void loadResponseQueueForStudent(email);
    },
    { immediate: true }
  );
  watch(
    () => activeDrill.value?.drillId || "",
    (drillId, previousDrillId) => {
      if (!drillId || drillId === previousDrillId) {
        return;
      }
      resetReportState();
    }
  );
  return {
    selectedPracticeScope,
    selectedSkillClusters,
    practiceMode,
    currentBatch,
    nextBatch,
    reserveDrills,
    currentDrill,
    viewDrill,
    currentIndex,
    currentInput,
    viewCurrentInput,
    feedback,
    viewFeedback,
    revealedHints,
    viewRevealedHints,
    remainingHints,
    viewRemainingHints,
    loadingBatch,
    prefetching,
    saving,
    saveState,
    saveMessage,
    queueDepth,
    submittedThisDrill,
    viewSubmittedThisDrill,
    canSubmitCurrentDrill,
    canShowSolution,
    canReportCurrentDrill,
    reportState,
    viewReportState,
    reportMessage,
    viewReportMessage,
    reportButtonLabel,
    viewReportButtonLabel,
    hasActiveSession,
    isReviewMode,
    sessionComplete,
    completedDrillSnapshots,
    reviewIndex,
    hasPreviousReviewedDrill,
    hasNextReviewedDrill,
    reviewPreviousDrill,
    reviewNextDrill,
    enterLatestReviewSnapshot,
    sessionId,
    targetSessionLength,
    sessionCursor,
    remainingPlannedCount,
    summaryFreshness,
    solutionVisible,
    viewSolutionVisible,
    solutionSnippets,
    currentSessionAttemptOrdinal,
    viewCurrentSessionAttemptOrdinal,
    cancelAutoAdvance,
    resetPracticeSession,
    startPractice,
    submitAnswer,
    revealNextHint,
    showSolution,
    nextDrill,
    reportCurrentDrill,
    buildReportPayload,
    fetchBatch,
    flushResponseQueue
  };
}
const _hoisted_1$2 = {
  key: 0,
  class: "row g-4 align-items-start"
};
const _hoisted_2$2 = { class: "col-lg-8" };
const _hoisted_3$2 = { class: "card panel-card shadow-sm border-0" };
const _hoisted_4$2 = { class: "card-body p-4" };
const _hoisted_5$2 = { class: "mb-4 d-flex justify-content-between align-items-start" };
const _hoisted_6$2 = { class: "d-flex align-items-center gap-2 ms-3" };
const _hoisted_7$2 = { class: "d-grid gap-2 mt-4 pt-3" };
const _hoisted_8$2 = ["disabled"];
const _hoisted_9$2 = { class: "mt-4 pt-3 border-top" };
const _hoisted_10$2 = {
  for: "sessionLengthSlider",
  class: "form-label d-flex justify-content-between"
};
const _hoisted_11$2 = { class: "badge bg-primary rounded-pill" };
const _hoisted_12$2 = { class: "row mt-3 small mb-0 bg-body-tertiary p-3 rounded" };
const _hoisted_13$2 = { class: "col-6 text-end mb-0 fw-semibold" };
const _hoisted_14$2 = {
  key: 0,
  class: "alert alert-light border mt-4 mb-0 small"
};
const _hoisted_15$2 = { class: "col-lg-4" };
const _hoisted_16$2 = {
  class: "sticky-top",
  style: { "top": "1rem", "z-index": "100" }
};
const _hoisted_17$2 = {
  key: 1,
  class: "session-container"
};
const _hoisted_18$1 = { class: "d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom" };
const _hoisted_19$1 = { class: "d-flex align-items-center gap-2" };
const _hoisted_20$1 = { class: "ms-1 d-none d-md-inline" };
const _hoisted_21$1 = {
  key: 0,
  class: "text-center py-5"
};
const _hoisted_22$1 = { class: "card border-0 shadow-sm overflow-hidden mb-4" };
const _hoisted_23$1 = { class: "card-body p-4" };
const _hoisted_24$1 = { class: "mt-4 pt-4 border-top" };
const _hoisted_25$1 = {
  key: 0,
  class: "col-lg-4 order-1 order-lg-2"
};
const _hoisted_26$1 = {
  class: "sticky-top",
  style: { "top": "1rem", "z-index": "100" }
};
const _hoisted_27$1 = {
  key: 1,
  class: "col-12 py-3 border-top d-flex justify-content-between align-items-center"
};
const _hoisted_28$1 = { class: "d-flex gap-2" };
const _hoisted_29$1 = ["disabled"];
const _hoisted_30 = ["disabled"];
const _hoisted_31 = ["disabled"];
const _hoisted_32 = { class: "d-flex gap-2" };
const _hoisted_33 = ["disabled"];
const _hoisted_34 = ["disabled"];
const _sfc_main$2 = {
  __name: "PracticePage",
  setup(__props) {
    const bootstrap = useAppBootstrap();
    const session = usePracticeSession();
    const answerEditorRef = ref(null);
    const isPreviewTransport = true;
    const showHelp = ref(false);
    const showWelcome = ref(isPreviewTransport);
    const showReportModal = ref(false);
    const showCompletionModal = ref(false);
    const { targetSessionLength: targetSessionLength2 } = session;
    const selectedPracticeScope = computed({
      get() {
        return session.selectedPracticeScope.value;
      },
      set(value) {
        session.selectedPracticeScope.value = value;
      }
    });
    const canStart = computed(() => (selectedPracticeScope.value.unitIds.length > 0 || selectedPracticeScope.value.topicIds.length > 0) && !session.loadingBatch.value);
    const startButtonLabel = computed(() => session.loadingBatch.value ? "Fetching drills..." : "Start Practice Session");
    const currentPosition = computed(() => {
      if (session.isReviewMode.value) {
        return `Review ${session.reviewIndex.value + 1} / ${session.completedDrillSnapshots.value.length}`;
      }
      if (session.sessionComplete.value) {
        return "Session complete";
      }
      return session.hasActiveSession.value ? `${session.currentSessionAttemptOrdinal.value - 1} / ${targetSessionLength2.value}` : "No active session";
    });
    const progressPercent = computed(() => {
      if (session.isReviewMode.value) {
        const total = session.completedDrillSnapshots.value.length || 1;
        return Math.min(100, Math.round((session.reviewIndex.value + 1) / total * 100));
      }
      if (session.sessionComplete.value) {
        return 100;
      }
      if (!session.hasActiveSession.value) return 0;
      return Math.min(100, Math.round((session.currentSessionAttemptOrdinal.value - 1) / targetSessionLength2.value * 100));
    });
    const selectedScopeSummary = computed(() => {
      const unitCount = selectedPracticeScope.value.unitIds.length;
      const topicCount = selectedPracticeScope.value.topicIds.length;
      if (!unitCount && !topicCount) {
        return "None selected";
      }
      const unitLabel = unitCount === 1 ? "1 unit" : `${unitCount} units`;
      const topicLabel = topicCount === 1 ? "1 topic" : `${topicCount} topics`;
      if (unitCount && topicCount) {
        return `${unitLabel}, ${topicLabel} selected`;
      }
      return `${unitCount ? unitLabel : topicLabel} selected`;
    });
    function selectAllUnits() {
      selectedPracticeScope.value = {
        unitIds: bootstrap.availableCourseUnits.value.map((unit) => unit.unitId),
        topicIds: []
      };
    }
    function clearScope() {
      selectedPracticeScope.value = { unitIds: [], topicIds: [] };
    }
    async function start() {
      showCompletionModal.value = false;
      await session.startPractice({ mode: "normal" });
    }
    async function resetPreviewProgress() {
      const confirmed = typeof window === "undefined" || window.confirm("Clear preview progress for this browser?");
      if (!confirmed) {
        return;
      }
      if (typeof apiClient.resetPreviewProgress === "function") {
        await apiClient.resetPreviewProgress();
      }
      session.resetPracticeSession();
      await bootstrap.loadBootstrap(true);
      showHelp.value = false;
      showWelcome.value = false;
      showReportModal.value = false;
      showCompletionModal.value = false;
    }
    function openReportModal() {
      if (session.canReportCurrentDrill.value) {
        showReportModal.value = true;
      }
    }
    function closeReportModal() {
      showReportModal.value = false;
    }
    async function submitDrillReport(reportDetails) {
      const result = await session.reportCurrentDrill(reportDetails);
      if (result) {
        showReportModal.value = false;
      }
    }
    function changeTopics() {
      showCompletionModal.value = false;
      session.cancelAutoAdvance();
      session.resetPracticeSession();
    }
    async function focusAnswerEditor() {
      await nextTick();
      answerEditorRef.value?.focus?.();
    }
    const focusMode = ref(localStorage.getItem("practice-focus-mode") === "true");
    function toggleFocusMode() {
      focusMode.value = !focusMode.value;
      localStorage.setItem("practice-focus-mode", focusMode.value.toString());
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("autodrills-focus-mode-change", { detail: focusMode.value }));
      }
    }
    function formatTopicDisplay(drill = {}) {
      return [drill.topicNumber || drill.cedTopicNumber || "", drill.topicName || drill.topicId || ""].filter(Boolean).join(" ").trim();
    }
    function findTopicMetadata(topicId = "") {
      const normalizedTopicId = String(topicId || "").trim();
      if (!normalizedTopicId) {
        return {};
      }
      for (const unit of bootstrap.availableCourseUnits.value || []) {
        const topic = (unit.topics || []).find((entry) => String(entry.topicId || "").trim() === normalizedTopicId);
        if (topic) {
          return topic;
        }
      }
      return {};
    }
    const activeDrill = computed(() => session.viewDrill.value);
    const drillMetadata = computed(() => {
      if (!activeDrill.value) return {};
      const topicMetadata = findTopicMetadata(activeDrill.value.topicId);
      const topicNumber = activeDrill.value.topicNumber || activeDrill.value.cedTopicNumber || topicMetadata.topicNumber || "";
      const topicName = activeDrill.value.topicName || topicMetadata.topicName || activeDrill.value.topicId || "";
      const topicTitle = [topicNumber, topicName].filter(Boolean).join(" ").trim();
      return {
        drillId: activeDrill.value.drillId,
        unitId: activeDrill.value.unitId || "",
        unitName: activeDrill.value.unitName || "",
        topicId: activeDrill.value.topicId || "",
        topicNumber,
        topicName,
        topicDisplayName: topicTitle || formatTopicDisplay(activeDrill.value),
        topicTitle: topicTitle || formatTopicDisplay(activeDrill.value),
        tags: activeDrill.value.tags
      };
    });
    onMounted(async () => {
      await bootstrap.loadBootstrap();
    });
    watch(
      () => bootstrap.availableCourseUnits.value,
      (courseUnits) => {
        if (!selectedPracticeScope.value.unitIds.length && !selectedPracticeScope.value.topicIds.length && courseUnits.length) {
          selectedPracticeScope.value = {
            unitIds: courseUnits.map((unit) => unit.unitId),
            topicIds: []
          };
        }
      },
      { immediate: true }
    );
    watch(
      () => session.hasActiveSession.value,
      (hasActiveSession, previousHasActiveSession) => {
        if (previousHasActiveSession && !hasActiveSession) {
          void bootstrap.loadBootstrap(true);
        }
      }
    );
    watch(
      () => session.sessionComplete.value,
      (complete) => {
        showCompletionModal.value = complete;
      },
      { immediate: true }
    );
    watch(
      () => activeDrill.value?.drillId || "",
      () => {
        showReportModal.value = false;
      }
    );
    watch(
      () => session.hasActiveSession.value,
      (active) => {
        if (active && !session.isReviewMode.value) {
          focusAnswerEditor();
        }
      }
    );
    function reviewCompletedSession() {
      showCompletionModal.value = false;
      showReportModal.value = false;
      session.enterLatestReviewSnapshot();
    }
    function practiceMore() {
      showCompletionModal.value = false;
      showReportModal.value = false;
      void start();
    }
    function goToTopicsList() {
      showCompletionModal.value = false;
      showReportModal.value = false;
      session.cancelAutoAdvance();
      session.resetPracticeSession();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["practice-page", { "focus-mode": focusMode.value }])
      }, [
        createVNode(HelpModal, {
          show: showHelp.value,
          onClose: _cache[0] || (_cache[0] = ($event) => showHelp.value = false)
        }, null, 8, ["show"]),
        createVNode(WelcomeModal, {
          show: showWelcome.value,
          onClose: _cache[1] || (_cache[1] = ($event) => showWelcome.value = false),
          onShowHelp: _cache[2] || (_cache[2] = ($event) => {
            showWelcome.value = false;
            showHelp.value = true;
          })
        }, null, 8, ["show"]),
        createVNode(SessionCompleteModal, {
          show: showCompletionModal.value,
          "completed-count": unref(session).completedDrillSnapshots.value.length,
          "total-count": unref(targetSessionLength2),
          onPracticeMore: practiceMore,
          onTopicsList: goToTopicsList,
          onReviewSession: reviewCompletedSession
        }, null, 8, ["show", "completed-count", "total-count"]),
        (openBlock(), createBlock(DrillReportModal, {
          key: activeDrill.value?.drillId || "no-drill",
          show: showReportModal.value,
          drill: activeDrill.value,
          "preview-mode": isPreviewTransport,
          submitting: unref(session).viewReportState.value === "reporting",
          "error-message": unref(session).viewReportState.value === "error" ? unref(session).viewReportMessage.value : "",
          onClose: closeReportModal,
          onSubmit: submitDrillReport
        }, null, 8, ["show", "drill", "submitting", "error-message"])),
        !unref(session).hasActiveSession.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("div", _hoisted_4$2, [
                createBaseVNode("div", _hoisted_5$2, [
                  _cache[13] || (_cache[13] = createBaseVNode("div", null, [
                    createBaseVNode("h2", { class: "h4 fw-bold mb-1" }, "Session Setup"),
                    createBaseVNode("p", { class: "text-muted small mb-0" }, "Choose the AP CSA units and topics you want to practice, then start a short drill set.")
                  ], -1)),
                  createBaseVNode("div", _hoisted_6$2, [
                    (openBlock(), createElementBlock("button", {
                      key: 0,
                      class: "btn btn-sm btn-outline-primary",
                      onClick: resetPreviewProgress
                    }, " Reset Preview Progress ")),
                    createBaseVNode("button", {
                      class: "btn btn-link text-muted p-0",
                      title: "Help",
                      onClick: _cache[3] || (_cache[3] = ($event) => showHelp.value = true)
                    }, [..._cache[12] || (_cache[12] = [
                      createBaseVNode("i", { class: "bi bi-question-circle h5" }, null, -1)
                    ])])
                  ])
                ]),
                createVNode(_sfc_main$b, {
                  modelValue: selectedPracticeScope.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedPracticeScope.value = $event),
                  options: unref(bootstrap).availableCourseUnits.value,
                  loading: unref(bootstrap).loading.value,
                  onSelectAll: selectAllUnits,
                  onClearAll: clearScope
                }, null, 8, ["modelValue", "options", "loading"]),
                createBaseVNode("div", _hoisted_7$2, [
                  createBaseVNode("button", {
                    class: "btn btn-primary btn-lg",
                    disabled: !canStart.value,
                    onClick: start
                  }, toDisplayString(startButtonLabel.value), 9, _hoisted_8$2)
                ]),
                createBaseVNode("div", _hoisted_9$2, [
                  createBaseVNode("label", _hoisted_10$2, [
                    _cache[14] || (_cache[14] = createBaseVNode("span", { class: "fw-semibold text-muted" }, "Target Session Length", -1)),
                    createBaseVNode("span", _hoisted_11$2, toDisplayString(unref(targetSessionLength2)) + " drills", 1)
                  ]),
                  withDirectives(createBaseVNode("input", {
                    type: "range",
                    class: "form-range",
                    min: "5",
                    max: "50",
                    step: "5",
                    id: "sessionLengthSlider",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(targetSessionLength2) ? targetSessionLength2.value = $event : null)
                  }, null, 512), [
                    [
                      vModelText,
                      unref(targetSessionLength2),
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("dl", _hoisted_12$2, [
                  _cache[15] || (_cache[15] = createBaseVNode("dt", { class: "col-6 text-muted" }, "Selection", -1)),
                  createBaseVNode("dd", _hoisted_13$2, toDisplayString(selectedScopeSummary.value), 1)
                ]),
                (openBlock(), createElementBlock("div", _hoisted_14$2, " Reset clears this browser's preview progress only. It does not affect the full version. "))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_15$2, [
            createBaseVNode("div", _hoisted_16$2, [
              createVNode(_sfc_main$6, {
                analytics: unref(bootstrap).studentAnalytics.value,
                loading: unref(bootstrap).loading.value && !unref(bootstrap).studentAnalytics.value,
                "preview-mode": isPreviewTransport
              }, null, 8, ["analytics", "loading"])
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_17$2, [
          createBaseVNode("div", _hoisted_18$1, [
            _cache[17] || (_cache[17] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "h4 fw-bold mb-0" }, "Practice"),
              createBaseVNode("div", { class: "small text-muted" }, "Keep going.")
            ], -1)),
            createBaseVNode("div", _hoisted_19$1, [
              createBaseVNode("button", {
                class: normalizeClass(["btn btn-sm", focusMode.value ? "btn-warning" : "btn-outline-secondary"]),
                title: "Toggle Focus Mode",
                onClick: toggleFocusMode
              }, [
                createBaseVNode("i", {
                  class: normalizeClass(["bi", focusMode.value ? "bi-lightbulb-fill" : "bi-lightbulb"])
                }, null, 2),
                createBaseVNode("span", _hoisted_20$1, toDisplayString(focusMode.value ? "Focused" : "Focus Mode"), 1)
              ], 2),
              createBaseVNode("button", {
                class: "btn btn-outline-secondary btn-sm",
                onClick: changeTopics
              }, "Change scope"),
              createBaseVNode("button", {
                class: "btn btn-sm btn-outline-secondary ms-1",
                title: "Get Help",
                onClick: _cache[6] || (_cache[6] = ($event) => showHelp.value = true)
              }, [..._cache[16] || (_cache[16] = [
                createBaseVNode("i", { class: "bi bi-question-circle" }, null, -1)
              ])])
            ])
          ]),
          unref(session).loadingBatch.value ? (openBlock(), createElementBlock("div", _hoisted_21$1, [..._cache[18] || (_cache[18] = [
            createBaseVNode("div", {
              class: "spinner-border text-primary",
              role: "status"
            }, null, -1),
            createBaseVNode("div", { class: "mt-2 text-muted" }, "Loading session...", -1)
          ])])) : unref(session).viewDrill.value ? (openBlock(), createBlock(Transition, {
            key: 1,
            name: "drill-fade-rise",
            mode: "out-in",
            onAfterEnter: focusAnswerEditor
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock("div", {
                key: unref(session).viewDrill.value.drillId,
                class: "row g-4"
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([focusMode.value ? "col-lg-12" : "col-lg-8", "order-2", "order-lg-1"])
                }, [
                  createBaseVNode("div", _hoisted_22$1, [
                    createBaseVNode("div", _hoisted_23$1, [
                      createVNode(PromptCard, {
                        drill: unref(session).viewDrill.value,
                        "revealed-hints": unref(session).viewRevealedHints.value,
                        "hint-available": unref(session).viewRemainingHints.value > 0,
                        "remaining-hints": unref(session).viewRemainingHints.value,
                        "solution-visible": unref(session).viewSolutionVisible.value,
                        "solution-snippets": unref(session).solutionSnippets.value
                      }, null, 8, ["drill", "revealed-hints", "hint-available", "remaining-hints", "solution-visible", "solution-snippets"]),
                      createBaseVNode("div", _hoisted_24$1, [
                        createVNode(AnswerEditor, {
                          ref_key: "answerEditorRef",
                          ref: answerEditorRef,
                          "model-value": unref(session).viewCurrentInput.value,
                          disabled: unref(session).viewSubmittedThisDrill.value || unref(session).isReviewMode.value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(session).currentInput.value = $event),
                          onSubmit: unref(session).submitAnswer
                        }, null, 8, ["model-value", "disabled", "onSubmit"])
                      ])
                    ])
                  ])
                ], 2),
                !focusMode.value ? (openBlock(), createElementBlock("div", _hoisted_25$1, [
                  createBaseVNode("div", _hoisted_26$1, [
                    createVNode(PracticeToolbar, {
                      "current-position": currentPosition.value,
                      "progress-percent": progressPercent.value,
                      "drill-metadata": drillMetadata.value,
                      feedback: unref(session).viewFeedback.value,
                      "focus-mode": focusMode.value,
                      "review-mode": unref(session).isReviewMode.value,
                      "has-feedback": Boolean(unref(session).viewFeedback.value),
                      "hint-available": !unref(session).isReviewMode.value && unref(session).viewRemainingHints.value > 0,
                      "remaining-hints": unref(session).viewRemainingHints.value,
                      prefetching: unref(session).prefetching.value,
                      saving: unref(session).saving.value,
                      "save-state": unref(session).saveState.value,
                      "save-message": unref(session).saveMessage.value,
                      "queue-depth": unref(session).queueDepth.value,
                      "can-submit": unref(session).canSubmitCurrentDrill.value,
                      "can-show-solution": unref(session).canShowSolution.value,
                      "can-report-current-drill": unref(session).canReportCurrentDrill.value,
                      "report-state": unref(session).viewReportState.value,
                      "report-message": unref(session).viewReportMessage.value,
                      "report-button-label": unref(session).viewReportButtonLabel.value,
                      "can-go-previous-drill": unref(session).hasPreviousReviewedDrill.value,
                      "can-go-next-drill": unref(session).isReviewMode.value ? unref(session).hasNextReviewedDrill.value : Boolean(unref(session).viewFeedback.value),
                      onSubmit: unref(session).submitAnswer,
                      onHint: unref(session).revealNextHint,
                      onSolution: unref(session).showSolution,
                      onNext: unref(session).nextDrill,
                      onPrevious: unref(session).reviewPreviousDrill,
                      onReport: openReportModal
                    }, null, 8, ["current-position", "progress-percent", "drill-metadata", "feedback", "focus-mode", "review-mode", "has-feedback", "hint-available", "remaining-hints", "prefetching", "saving", "save-state", "save-message", "queue-depth", "can-submit", "can-show-solution", "can-report-current-drill", "report-state", "report-message", "report-button-label", "can-go-previous-drill", "can-go-next-drill", "onSubmit", "onHint", "onSolution", "onNext", "onPrevious"])
                  ])
                ])) : createCommentVNode("", true),
                focusMode.value ? (openBlock(), createElementBlock("div", _hoisted_27$1, [
                  createBaseVNode("div", _hoisted_28$1, [
                    createBaseVNode("button", {
                      class: "btn btn-primary btn-lg",
                      disabled: !unref(session).canSubmitCurrentDrill.value,
                      onClick: _cache[8] || (_cache[8] = (...args) => unref(session).submitAnswer && unref(session).submitAnswer(...args))
                    }, "Check Answer", 8, _hoisted_29$1),
                    createBaseVNode("button", {
                      class: "btn btn-outline-secondary",
                      disabled: unref(session).isReviewMode.value || unref(session).viewRemainingHints.value === 0,
                      onClick: _cache[9] || (_cache[9] = (...args) => unref(session).revealNextHint && unref(session).revealNextHint(...args))
                    }, " Hint (" + toDisplayString(unref(session).viewRemainingHints.value) + " left) ", 9, _hoisted_30),
                    createBaseVNode("button", {
                      class: normalizeClass(["btn btn-sm", {
                        "btn-outline-danger": unref(session).viewReportState.value === "idle" || unref(session).viewReportState.value === "error",
                        "btn-secondary": unref(session).viewReportState.value === "reporting",
                        "btn-success": unref(session).viewReportState.value === "reported"
                      }]),
                      disabled: !unref(session).canReportCurrentDrill.value,
                      title: "Flag a drill that looks wrong so it can be reviewed and fixed.",
                      onClick: openReportModal
                    }, toDisplayString(unref(session).viewReportButtonLabel.value), 11, _hoisted_31)
                  ]),
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("button", {
                      class: "btn btn-outline-primary btn-lg",
                      disabled: !unref(session).hasPreviousReviewedDrill.value,
                      onClick: _cache[10] || (_cache[10] = (...args) => unref(session).reviewPreviousDrill && unref(session).reviewPreviousDrill(...args))
                    }, " Previous Drill ", 8, _hoisted_33),
                    createBaseVNode("button", {
                      class: "btn btn-success btn-lg",
                      disabled: unref(session).isReviewMode.value ? !unref(session).hasNextReviewedDrill.value : !unref(session).viewFeedback.value,
                      onClick: _cache[11] || (_cache[11] = (...args) => unref(session).nextDrill && unref(session).nextDrill(...args))
                    }, " Next Drill → ", 8, _hoisted_34)
                  ])
                ])) : createCommentVNode("", true)
              ]))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]))
      ], 2);
    };
  }
};
const PracticePage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0390328c"]]);
var module$3 = { exports: {} };
const PLACEHOLDER_TOKEN_PATTERN = /\{\{([^}]+)\}\}/g;
const CANONICAL_BANK_TYPE_OPTIONS = [
  "variableName",
  "intVar",
  "doubleVar",
  "booleanVar",
  "stringVar",
  "arrayVar",
  "array2DVar",
  "arrayBoolVar",
  "arrayDoubleVar",
  "arrayIntVarName",
  "arrayStringVar",
  "arrayListVar",
  "rowVar",
  "colVar",
  "tempVar",
  "objectVar",
  "baseVar",
  "expVar",
  "className",
  "typeName",
  "methodName",
  "getterName",
  "setterName",
  "constantName",
  "intLiteral",
  "positiveIntLiteral",
  "doubleLiteral",
  "stringLiteral",
  "booleanLiteral",
  "charLiteral"
];
const CANONICAL_BANK_TYPES = new Set(CANONICAL_BANK_TYPE_OPTIONS);
function textIncludes(text, regex) {
  return regex.test(String(text || ""));
}
function contextForPlaceholder(drill = {}, placeholderName = "") {
  const parts = [
    drill.prompt_template,
    drill.promptTemplate,
    drill.notes,
    ...Array.isArray(drill.correct_snippets) ? drill.correct_snippets : [],
    ...Array.isArray(drill.correctSnippets) ? drill.correctSnippets : [],
    ...Array.isArray(drill.correct_patterns) ? drill.correct_patterns : [],
    ...Array.isArray(drill.correctPatterns) ? drill.correctPatterns : [],
    ...Array.isArray(drill.hint_sequence) ? drill.hint_sequence : [],
    ...Array.isArray(drill.hintSequence) ? drill.hintSequence : []
  ];
  return parts.filter(Boolean).join("\n");
}
function detectPlaceholdersInText(text = "") {
  const names = [];
  const seen = /* @__PURE__ */ new Set();
  const source = String(text || "");
  for (const match of source.matchAll(/\{\{\{([^{}]+)\}\}/g)) {
    const name = match[1].trim();
    if (name && !seen.has(name)) {
      names.push(name);
      seen.add(name);
    }
  }
  const regularSource = source.replace(/\{\{\{([^{}]+)\}\}/g, "");
  for (const match of regularSource.matchAll(PLACEHOLDER_TOKEN_PATTERN)) {
    const name = match[1].trim();
    if (name && !seen.has(name)) {
      names.push(name);
      seen.add(name);
    }
  }
  return names;
}
function detectDrillPlaceholders(drill = {}) {
  const fields = [
    drill.prompt_template,
    drill.promptTemplate,
    drill.notes,
    ...Array.isArray(drill.correct_snippets) ? drill.correct_snippets : [],
    ...Array.isArray(drill.correctSnippets) ? drill.correctSnippets : [],
    ...Array.isArray(drill.correct_patterns) ? drill.correct_patterns : [],
    ...Array.isArray(drill.correctPatterns) ? drill.correctPatterns : [],
    ...Array.isArray(drill.hint_sequence) ? drill.hint_sequence : [],
    ...Array.isArray(drill.hintSequence) ? drill.hintSequence : [],
    ...Array.isArray(drill.mistake_patterns) ? drill.mistake_patterns.flatMap((entry) => [entry.pattern, entry.feedback]) : [],
    ...Array.isArray(drill.mistakePatterns) ? drill.mistakePatterns.flatMap((entry) => [entry.pattern, entry.feedback]) : []
  ];
  const seen = /* @__PURE__ */ new Set();
  const placeholders = [];
  fields.forEach((field) => {
    detectPlaceholdersInText(field).forEach((name) => {
      if (!seen.has(name)) {
        seen.add(name);
        placeholders.push(name);
      }
    });
  });
  return placeholders;
}
function inferPlaceholderType$1(name = "", drill = {}) {
  const rawName = String(name || "").trim();
  const lower = rawName.toLowerCase();
  const context = contextForPlaceholder(drill, rawName);
  const mention = `{{${rawName}}}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const hasArrayListContext = textIncludes(context, /\bArrayList\b/);
  if (!rawName) return "variableName";
  if (lower === "classname" || lower.endsWith("classname")) return "className";
  if (lower === "typename" || lower === "datatype") return "typeName";
  if (lower === "methodname" || lower === "staticmethodname") return "methodName";
  if (lower === "gettername") return "getterName";
  if (lower === "settername") return "setterName";
  if (lower === "constantname" || lower === "constname") return "constantName";
  if (lower.includes("booleanliteral") || lower === "boolliteral") return "booleanLiteral";
  if (lower.includes("doubleliteral") || lower.startsWith("doublelit")) return "doubleLiteral";
  if (lower.includes("intliteral") || /^intlit[a-z0-9]*$/.test(lower)) return "intLiteral";
  if (lower.includes("positiveliteral") || lower.includes("positiveintliteral")) return "positiveIntLiteral";
  if (lower.includes("stringliteral") || lower.startsWith("strlit") || lower === "substr") return "stringLiteral";
  if (lower.includes("charliteral")) return "charLiteral";
  if (lower === "rowvar" || lower === "rowindex") return "rowVar";
  if (lower === "colvar" || lower === "colindex") return "colVar";
  if (lower.includes("arraylist") || lower === "listname" || lower === "listvar") return "arrayListVar";
  if (hasArrayListContext && ["list", "stringlist", "intlist", "doublelist", "booleanlist"].includes(lower)) return "arrayListVar";
  if (lower.includes("array2d") || lower === "matrixvar" || lower === "gridvar") return "array2DVar";
  if (lower === "arrvar" || lower === "arrayvar" || lower === "arrparam") return "arrayVar";
  if (lower === "arrname") {
    if (textIncludes(context, new RegExp(`String\\s*\\[\\s*\\]\\s*${mention}|String\\[\\]\\s*${mention}`))) return "arrayStringVar";
    if (textIncludes(context, new RegExp(`double\\s*\\[\\s*\\]\\s*${mention}|double\\[\\]\\s*${mention}`))) return "arrayDoubleVar";
    if (textIncludes(context, new RegExp(`boolean\\s*\\[\\s*\\]\\s*${mention}|boolean\\[\\]\\s*${mention}`))) return "arrayBoolVar";
    if (textIncludes(context, new RegExp(`int\\s*\\[\\s*\\]\\s*${mention}|int\\[\\]\\s*${mention}`))) return "arrayIntVarName";
    return "arrayVar";
  }
  if (lower === "tempvar" || lower === "savevar") return "tempVar";
  if (lower === "objvar" || lower === "objectvar") return "objectVar";
  if (/^boolvar[a-z0-9]*$/.test(lower) || lower === "flagvar" || lower === "conditionvar") return "booleanVar";
  if (/^strvar[a-z0-9]*$/.test(lower) || /^stringvar[a-z0-9]*$/.test(lower) || lower === "namevar" || lower === "strparam") return "stringVar";
  if (/^doublevar[a-z0-9]*$/.test(lower)) return "doubleVar";
  if (/^intvar[a-z0-9]*$/.test(lower) || lower === "countvar") return "intVar";
  if (lower === "idx" || lower === "index" || lower === "indexvar") return "intVar";
  if (lower === "loopvar" || lower === "limitvar") return "intVar";
  if (lower === "basevar") return "baseVar";
  if (lower === "expvar") return "expVar";
  if (lower === "intval" || lower === "integerobj" || lower === "intobj") return "intVar";
  if (lower === "numvar") {
    if (textIncludes(context, new RegExp(`double[^.\\n;]*${mention}|${mention}[^.\\n;]*double`, "i"))) return "doubleVar";
    if (textIncludes(context, new RegExp(`int(?:eger)?[^.\\n;]*${mention}|${mention}[^.\\n;]*int(?:eger)?`, "i"))) return "intVar";
    return "variableName";
  }
  if (lower === "sumvar" || lower === "minvar" || lower === "maxvar" || lower === "elementvar" || lower === "valuevar") {
    if (textIncludes(context, new RegExp(`double[^.\\n;]*${mention}|${mention}[^.\\n;]*double`, "i"))) return "doubleVar";
    if (textIncludes(context, new RegExp(`String[^.\\n;]*${mention}|${mention}[^.\\n;]*String`, "i"))) return "stringVar";
    if (textIncludes(context, new RegExp(`int(?:eger)?[^.\\n;]*${mention}|${mention}[^.\\n;]*int(?:eger)?`, "i"))) return "intVar";
    return "variableName";
  }
  if (lower === "paramname" || lower === "paramnamea" || lower === "paramnameb" || lower === "intparam") {
    if (textIncludes(context, new RegExp(`String\\s+(?:(?:parameter|argument)\\s+)?(?:named\\s+)?${mention}|String\\s+${mention}`, "i"))) return "stringVar";
    if (textIncludes(context, new RegExp(`double\\s+(?:(?:parameter|argument)\\s+)?(?:named\\s+)?${mention}|double\\s+${mention}`, "i"))) return "doubleVar";
    if (textIncludes(context, new RegExp(`int(?:eger)?\\s+(?:(?:parameter|argument)\\s+)?(?:named\\s+)?${mention}|int\\s+${mention}`, "i"))) return "intVar";
    return "variableName";
  }
  return "variableName";
}
function classifyPlaceholderMapping(name, currentType, drill = {}) {
  if (typeof currentType !== "string" || currentType.startsWith("calc:")) {
    return { status: "no-change", currentType, suggestedType: currentType, reason: "calculated placeholder or non-string type" };
  }
  const suggestedType = inferPlaceholderType$1(name, drill);
  if (currentType === suggestedType) {
    return { status: "no-change", currentType, suggestedType, reason: "already uses the inferred canonical type" };
  }
  if (currentType === "variableName" && suggestedType !== "variableName") {
    return { status: "safe-upgrade", currentType, suggestedType, reason: `placeholder name ${name} implies ${suggestedType}` };
  }
  if (!CANONICAL_BANK_TYPES.has(currentType)) {
    return { status: "manual-review", currentType, suggestedType, reason: `unknown bank type ${currentType}` };
  }
  if (currentType !== "variableName") {
    return { status: "no-change", currentType, suggestedType, reason: "already uses a non-generic canonical type" };
  }
  return { status: "no-change", currentType, suggestedType, reason: "generic placeholder appears intentional" };
}
function lintDrillPlaceholderTypes(drill = {}) {
  const placeholderTypes = drill.placeholder_types || drill.placeholderTypes || {};
  const placeholders = detectDrillPlaceholders(drill);
  const warnings = [];
  placeholders.forEach((name) => {
    const currentType = placeholderTypes[name];
    if (!currentType) {
      warnings.push({ placeholder: name, severity: "error", message: `Missing placeholder type for ${name}` });
      return;
    }
    const result = classifyPlaceholderMapping(name, currentType, drill);
    if (result.status === "safe-upgrade") {
      warnings.push({
        placeholder: name,
        severity: "warning",
        message: `${name} uses ${currentType}; consider ${result.suggestedType} for type-specific randomization.`,
        suggestedType: result.suggestedType
      });
    } else if (result.status === "manual-review") {
      warnings.push({
        placeholder: name,
        severity: "info",
        message: `${name} uses ${currentType}; ${result.reason}.`,
        suggestedType: result.suggestedType
      });
    }
  });
  Object.keys(placeholderTypes).forEach((name) => {
    if (!placeholders.includes(name)) {
      warnings.push({ placeholder: name, severity: "info", message: `${name} is mapped but not used by prompt, hints, snippets, or patterns.` });
    }
  });
  return warnings;
}
module$3.exports = {
  CANONICAL_BANK_TYPE_OPTIONS,
  CANONICAL_BANK_TYPES,
  classifyPlaceholderMapping,
  detectDrillPlaceholders,
  detectPlaceholdersInText,
  inferPlaceholderType: inferPlaceholderType$1,
  lintDrillPlaceholderTypes
};
const __CJS__export_default__$2 = (module$3.exports == null ? {} : module$3.exports).default || module$3.exports;
const placeholderTypesModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__$2
}, Symbol.toStringTag, { value: "Module" }));
var module$2 = { exports: {} };
function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const JAVA_MULTI_CHAR_TOKENS = [
  "===",
  "!==",
  "<<=",
  ">>=",
  "...",
  "&&",
  "||",
  "==",
  "!=",
  "<=",
  ">=",
  "++",
  "--",
  "+=",
  "-=",
  "*=",
  "/=",
  "%=",
  "->",
  "::"
];
const JAVA_SINGLE_CHAR_TOKENS = /[\[\]{}().,;:+\-*/%<>=!&|?:^~]/;
function tokenizeJavaSnippet(snippet) {
  const text = String(snippet || "").trim();
  if (!text) {
    return [];
  }
  const tokens = [];
  let index = 0;
  while (index < text.length) {
    const current = text.slice(index);
    if (/^\s/.test(current)) {
      index += 1;
      continue;
    }
    const placeholder = current.match(/^\{\{[^}]+\}\}/);
    if (placeholder) {
      tokens.push(placeholder[0]);
      index += placeholder[0].length;
      continue;
    }
    const stringLiteral = current.match(/^"(?:\\.|[^"\\])*"/);
    if (stringLiteral) {
      tokens.push(stringLiteral[0]);
      index += stringLiteral[0].length;
      continue;
    }
    const charLiteral = current.match(/^'(?:\\.|[^'\\])*'/);
    if (charLiteral) {
      tokens.push(charLiteral[0]);
      index += charLiteral[0].length;
      continue;
    }
    const multiCharToken = JAVA_MULTI_CHAR_TOKENS.find((token) => current.startsWith(token));
    if (multiCharToken) {
      tokens.push(multiCharToken);
      index += multiCharToken.length;
      continue;
    }
    const wordLike = current.match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (wordLike) {
      tokens.push(wordLike[0]);
      index += wordLike[0].length;
      continue;
    }
    const numericLiteral = current.match(/^\d+(?:\.\d+)?/);
    if (numericLiteral) {
      tokens.push(numericLiteral[0]);
      index += numericLiteral[0].length;
      continue;
    }
    if (JAVA_SINGLE_CHAR_TOKENS.test(current[0])) {
      tokens.push(current[0]);
      index += 1;
      continue;
    }
    tokens.push(current[0]);
    index += 1;
  }
  return tokens;
}
function isWordLikeToken(token) {
  return token === "{{placeholder}}" || /^{{[^}]+}}$/.test(token) || /^"(?:\\.|[^"\\])*"$/.test(token) || /^'(?:\\.|[^'\\])*'$/.test(token) || /^[A-Za-z_][A-Za-z0-9_]*$/.test(token) || /^\d+(?:\.\d+)?$/.test(token);
}
function javaSnippetToRegex$1(snippet) {
  const text = String(snippet || "").trim();
  if (!text) {
    return "^\\s*$";
  }
  const tokens = tokenizeJavaSnippet(text);
  if (!tokens.length) {
    return "^\\s*$";
  }
  const pattern = tokens.map((token, index) => {
    const escapedToken = /^{{[^}]+}}$/.test(token) ? token : escapeRegex(token);
    if (!index) {
      return escapedToken;
    }
    const previous = tokens[index - 1];
    const requiresSpace = isWordLikeToken(previous) && isWordLikeToken(token);
    return `${requiresSpace ? "\\s+" : "\\s*"}${escapedToken}`;
  }).join("");
  return `^\\s*${pattern}\\s*$`;
}
function normalizePattern(pattern) {
  return String(pattern || "").replace(/\s+/g, " ").trim();
}
module$2.exports = {
  escapeRegex,
  javaSnippetToRegex: javaSnippetToRegex$1,
  normalizePattern
};
const __CJS__export_default__$1 = (module$2.exports == null ? {} : module$2.exports).default || module$2.exports;
const regexModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__$1
}, Symbol.toStringTag, { value: "Module" }));
var module$1 = { exports: {} };
function parseJson(text, fallback) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}
function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
function normalizeHintSequence(value) {
  const source = Array.isArray(value) ? value : parseJson(value, []);
  return source.map((hint) => String(hint || "").trim()).filter(Boolean);
}
function normalizeSkillLinks(value) {
  const source = Array.isArray(value) ? value : parseJson(value, []);
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  source.forEach((link) => {
    if (!link || !link.skillId) {
      return;
    }
    const skillId = String(link.skillId).trim();
    if (!skillId || seen.has(skillId)) {
      return;
    }
    normalized.push({
      skillId,
      role: String(link.role || "supporting").trim() === "primary" ? "primary" : "supporting",
      displayName: link.displayName ? String(link.displayName).trim() : void 0,
      weight: Number.isFinite(link.weight) ? link.weight : Number.parseFloat(link.weight || "1", 10) || 1,
      confidence: ["manual", "inferred", "needs_review"].includes(String(link.confidence || "").trim()) ? String(link.confidence).trim() : "inferred",
      notes: link.notes ? String(link.notes).trim() : ""
    });
    seen.add(skillId);
  });
  normalized.sort((a, b) => {
    if (a.role === b.role) {
      return a.skillId.localeCompare(b.skillId);
    }
    return a.role === "primary" ? -1 : 1;
  });
  return normalized;
}
function normalizeDrillStatus(value) {
  const status = String(value || "active").trim();
  return ["active", "extension", "deprecated"].includes(status) ? status : "active";
}
function normalizeDrill$1(input = {}) {
  return {
    drillId: String(input.drillId || input.drill_id || "").trim(),
    promptTemplate: String(input.promptTemplate || input.prompt_template || ""),
    placeholderTypes: clone(input.placeholderTypes || parseJson(input.placeholder_types_json, {})),
    skillCluster: String(input.skillCluster || input.skill_cluster || "").trim(),
    tags: clone(input.tags || parseJson(input.tags_json, {})),
    validationType: String(input.validationType || input.validation_type || "regex").trim(),
    drillStatus: normalizeDrillStatus(input.drillStatus || input.drill_status || input.status),
    correctPatterns: clone(input.correctPatterns || parseJson(input.correct_patterns_json, [])),
    mistakePatterns: clone(input.mistakePatterns || parseJson(input.mistake_patterns_json, [])),
    correctSnippets: clone(input.correctSnippets || parseJson(input.correct_snippets_json, [])),
    hintSequence: normalizeHintSequence(input.hintSequence || input.hint_sequence_json || []),
    skills: normalizeSkillLinks(input.skills || input.skills_json || []),
    notes: String(input.notes || ""),
    numReports: Number.isInteger(input.numReports) ? input.numReports : Number.parseInt(input.numReports || input.num_reports || "0", 10) || 0,
    sourceDrillId: String(input.sourceDrillId || input.source_drill_id || input.drillId || input.drill_id || "").trim(),
    sourceRowNumber: Number.isInteger(input.sourceRowNumber) ? input.sourceRowNumber : Number.parseInt(input.sourceRowNumber || input.source_row_number || "0", 10) || 0
  };
}
function detectPlaceholders$1(text = "") {
  const placeholders = [];
  const seen = /* @__PURE__ */ new Set();
  const matches = String(text).matchAll(/\{\{([^}]+)\}\}/g);
  for (const match of matches) {
    const name = match[1].trim();
    if (name && !seen.has(name)) {
      placeholders.push(name);
      seen.add(name);
    }
  }
  return placeholders;
}
function detectPlaceholdersInTexts(values = []) {
  const placeholders = [];
  const seen = /* @__PURE__ */ new Set();
  values.forEach((value) => {
    detectPlaceholders$1(value).forEach((name) => {
      if (!seen.has(name)) {
        seen.add(name);
        placeholders.push(name);
      }
    });
  });
  return placeholders;
}
function collectPlaceholderUsage(input = {}) {
  const drill = normalizeDrill$1(input);
  const promptTemplate = String(input.promptTemplate || input.prompt_template || drill.promptTemplate || "");
  const canonicalSnippet = String(input.canonicalSnippet || input.canonical_snippet || "");
  const correctSnippets = Array.isArray(input.correctSnippets || input.correct_snippets) ? input.correctSnippets || input.correct_snippets : drill.correctSnippets;
  const correctPatterns = Array.isArray(input.correctPatterns || input.correct_patterns) ? input.correctPatterns || input.correct_patterns : drill.correctPatterns;
  const promptPlaceholders = detectPlaceholders$1(promptTemplate);
  const answerPlaceholders = detectPlaceholdersInTexts([
    canonicalSnippet,
    ...correctSnippets,
    ...correctPatterns
  ]);
  const declaredPlaceholders = drill.placeholderTypes && typeof drill.placeholderTypes === "object" && !Array.isArray(drill.placeholderTypes) ? Object.keys(drill.placeholderTypes) : [];
  return {
    drill,
    promptPlaceholders,
    answerPlaceholders,
    declaredPlaceholders
  };
}
function detectHiddenAnswerPlaceholders(input = {}) {
  const { promptPlaceholders, answerPlaceholders } = collectPlaceholderUsage(input);
  return answerPlaceholders.filter((name) => !promptPlaceholders.includes(name));
}
function isQuotedPromptToken(promptTemplate, tokenStart, tokenLength) {
  const before = String(promptTemplate || "").slice(0, tokenStart);
  const after = String(promptTemplate || "").slice(tokenStart + tokenLength);
  return before.endsWith('"') && after.startsWith('"');
}
function detectUnquotedStringLiteralPlaceholders(input = {}) {
  const drill = normalizeDrill$1(input);
  const promptTemplate = String(drill.promptTemplate || "");
  const placeholderTypes = drill.placeholderTypes && typeof drill.placeholderTypes === "object" && !Array.isArray(drill.placeholderTypes) ? drill.placeholderTypes : {};
  const unquoted = [];
  Object.entries(placeholderTypes).forEach(([name, type]) => {
    if (typeof type !== "string" || !type.startsWith("stringLiteral")) {
      return;
    }
    const token = `{{${name}}}`;
    let index = promptTemplate.indexOf(token);
    while (index !== -1) {
      if (!isQuotedPromptToken(promptTemplate, index, token.length)) {
        unquoted.push(name);
        break;
      }
      index = promptTemplate.indexOf(token, index + token.length);
    }
  });
  return unquoted;
}
function detectUnusedDeclaredPlaceholders(input = {}) {
  const { promptPlaceholders, answerPlaceholders, declaredPlaceholders } = collectPlaceholderUsage(input);
  return declaredPlaceholders.filter((name) => !promptPlaceholders.includes(name) && !answerPlaceholders.includes(name));
}
function validateDrillPayload$1(input) {
  const drill = normalizeDrill$1(input);
  const errors = {};
  if (!drill.drillId) {
    errors.drillId = "Drill ID is required.";
  }
  if (!drill.promptTemplate.trim()) {
    errors.promptTemplate = "Prompt template is required.";
  }
  if (!drill.skillCluster.trim()) {
    errors.skillCluster = "Skill cluster is required.";
  }
  if (!drill.validationType.trim()) {
    errors.validationType = "Validation type is required.";
  }
  if (!drill.correctSnippets.length || !drill.correctSnippets.every((snippet) => typeof snippet === "string" && snippet.trim())) {
    errors.correctSnippets = "At least one correct snippet is required.";
  }
  if (!drill.correctPatterns.length || !drill.correctPatterns.every((pattern) => typeof pattern === "string" && pattern.trim())) {
    errors.correctPatterns = "At least one correct pattern is required.";
  }
  if (!drill.placeholderTypes || typeof drill.placeholderTypes !== "object" || Array.isArray(drill.placeholderTypes)) {
    errors.placeholderTypes = "Placeholder types must be a mapping.";
  } else {
    const promptPlaceholders = detectPlaceholders$1(drill.promptTemplate);
    for (const name of promptPlaceholders) {
      if (!drill.placeholderTypes[name]) {
        errors.placeholderTypes = `Missing placeholder type for ${name}.`;
        break;
      }
    }
  }
  const unquotedStringLiteralPlaceholders = detectUnquotedStringLiteralPlaceholders(drill);
  if (unquotedStringLiteralPlaceholders.length) {
    errors.promptTemplateQuoting = `String literal placeholders in the prompt must be wrapped in double quotes: ${unquotedStringLiteralPlaceholders.join(", ")}.`;
  }
  const hiddenAnswerPlaceholders = detectHiddenAnswerPlaceholders(drill);
  if (hiddenAnswerPlaceholders.length) {
    errors.placeholderVisibility = `Answer placeholders must also appear in the prompt: ${hiddenAnswerPlaceholders.join(", ")}.`;
  }
  if (!drill.tags || typeof drill.tags !== "object" || Array.isArray(drill.tags)) {
    errors.tags = "Tags must be a mapping.";
  }
  if (!Array.isArray(drill.hintSequence) || drill.hintSequence.some((hint) => typeof hint !== "string" || !hint.trim())) {
    errors.hintSequence = "Hint sequence must be a list of non-empty strings.";
  }
  if (!Array.isArray(drill.skills) || !drill.skills.length) {
    errors.skills = "At least one mapped skill is required.";
  } else {
    const invalidSkill = drill.skills.find(
      (link) => !link || typeof link !== "object" || typeof link.skillId !== "string" || !link.skillId.trim() || !["primary", "supporting"].includes(link.role)
    );
    if (invalidSkill) {
      errors.skills = "Each skill link needs a skillId and role.";
    } else {
      const primaryCount = drill.skills.filter((link) => link.role === "primary").length;
      if (primaryCount !== 1) {
        errors.skills = "Exactly one primary skill is required.";
      }
    }
  }
  if (!Array.isArray(drill.mistakePatterns)) {
    errors.mistakePatterns = "Mistake patterns must be a list.";
  } else {
    const invalidMistake = drill.mistakePatterns.find(
      (entry) => !entry || typeof entry !== "object" || typeof entry.pattern !== "string" || !entry.pattern.trim() || typeof entry.feedback !== "string" || !entry.feedback.trim()
    );
    if (invalidMistake) {
      errors.mistakePatterns = "Each mistake pattern needs both pattern and feedback.";
    }
  }
  return {
    drill,
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
module$1.exports = {
  collectPlaceholderUsage,
  detectPlaceholders: detectPlaceholders$1,
  detectHiddenAnswerPlaceholders,
  detectUnquotedStringLiteralPlaceholders,
  detectUnusedDeclaredPlaceholders,
  normalizeDrillStatus,
  normalizeDrill: normalizeDrill$1,
  normalizeHintSequence,
  normalizeSkillLinks,
  parseJson,
  validateDrillPayload: validateDrillPayload$1
};
const __CJS__export_default__ = (module$1.exports == null ? {} : module$1.exports).default || module$1.exports;
const schemasModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__
}, Symbol.toStringTag, { value: "Module" }));
const { javaSnippetToRegex } = __CJS__export_default__$1 || regexModule;
const { detectPlaceholders, normalizeDrill, validateDrillPayload } = __CJS__export_default__ || schemasModule;
const { applySubstitutions, generateSubstitutions } = __CJS__export_default__$6 || substitutionsModule$1;
const { inferPlaceholderType } = __CJS__export_default__$2 || placeholderTypesModule;
const _hoisted_1$1 = { class: "about-page" };
const _hoisted_2$1 = { class: "row g-4" };
const _hoisted_3$1 = { class: "col-lg-8" };
const _hoisted_4$1 = { class: "card panel-card shadow-sm border-0 mb-4" };
const _hoisted_5$1 = { class: "card-body p-4 p-md-5" };
const _hoisted_6$1 = { class: "row g-3" };
const _hoisted_7$1 = { class: "border rounded-3 h-100 p-3 bg-body-tertiary" };
const _hoisted_8$1 = { class: "small text-muted" };
const _hoisted_9$1 = { class: "card panel-card shadow-sm border-0 mb-4" };
const _hoisted_10$1 = { class: "card-body p-4" };
const _hoisted_11$1 = { class: "mb-0 text-muted" };
const _hoisted_12$1 = { class: "col-lg-4" };
const _hoisted_13$1 = { class: "card panel-card shadow-sm border-0 mb-4" };
const _hoisted_14$1 = { class: "card-body p-4" };
const _hoisted_15$1 = { class: "small text-muted ps-3 mb-0" };
const _hoisted_16$1 = {
  key: 0,
  class: "card panel-card shadow-sm border-0"
};
const _hoisted_17$1 = { class: "card-body p-4" };
const _sfc_main$1 = {
  __name: "AboutPage",
  setup(__props) {
    const studentPoints = [
      "Practice happens in short drills with hints, feedback, and immediate correction.",
      "Topics are organized by AP CSA unit and topic so you can focus on one idea at a time.",
      "You can review a completed session without losing the ending state of each drill."
    ];
    const teacherPoints = [
      "Autodrills is designed for low-friction AP CSA practice before the exam.",
      "The classroom version uses Google Apps Script and Google Sheets so shared progress, reporting, and teacher tools live together.",
      "The preview keeps the unit/topic structure intact while using a curated sample of drills for evaluation."
    ];
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("section", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text-uppercase text-muted small fw-semibold mb-2" }, "About Autodrills", -1)),
                _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "display-6 fw-bold mb-3" }, "Practice AP CSA one focused drill at a time.", -1)),
                _cache[2] || (_cache[2] = createBaseVNode("p", { class: "lead mb-4" }, " Autodrills helps students build fluency with the code-writing patterns that show up again and again on AP CSA questions. The app keeps the practice loop tight: try a drill, get feedback, reveal a hint if needed, and move on without losing the context of the drill you just worked on. ", -1)),
                createBaseVNode("div", _hoisted_6$1, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(studentPoints, (point) => {
                    return createBaseVNode("div", {
                      key: point,
                      class: "col-md-4"
                    }, [
                      createBaseVNode("div", _hoisted_7$1, [
                        createBaseVNode("div", _hoisted_8$1, toDisplayString(point), 1)
                      ])
                    ]);
                  }), 64))
                ])
              ])
            ]),
            _cache[4] || (_cache[4] = createBaseVNode("section", { class: "card panel-card shadow-sm border-0 mb-4" }, [
              createBaseVNode("div", { class: "card-body p-4" }, [
                createBaseVNode("h2", { class: "h5 fw-bold mb-3" }, "Why this practice model works"),
                createBaseVNode("ul", { class: "mb-0 text-muted" }, [
                  createBaseVNode("li", null, "Short, repeated practice helps students notice syntax patterns faster."),
                  createBaseVNode("li", null, "Hints and solution reveals keep the feedback loop immediate instead of waiting for a later review."),
                  createBaseVNode("li", null, "The app shows the same unit/topic structure teachers use elsewhere in AP CSA so the practice feels familiar.")
                ])
              ])
            ], -1)),
            createBaseVNode("section", _hoisted_9$1, [
              createBaseVNode("div", _hoisted_10$1, [
                _cache[3] || (_cache[3] = createBaseVNode("h2", { class: "h5 fw-bold mb-3" }, "Student view", -1)),
                createBaseVNode("ul", _hoisted_11$1, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(studentPoints, (point) => {
                    return createBaseVNode("li", {
                      key: `student-${point}`,
                      class: "mb-2"
                    }, toDisplayString(point), 1);
                  }), 64))
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12$1, [
            createBaseVNode("section", _hoisted_13$1, [
              createBaseVNode("div", _hoisted_14$1, [
                _cache[5] || (_cache[5] = createBaseVNode("h2", { class: "h5 fw-bold mb-3" }, "Teacher view", -1)),
                createBaseVNode("ul", _hoisted_15$1, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(teacherPoints, (point) => {
                    return createBaseVNode("li", {
                      key: point,
                      class: "mb-2"
                    }, toDisplayString(point), 1);
                  }), 64))
                ])
              ])
            ]),
            (openBlock(), createElementBlock("section", _hoisted_16$1, [
              createBaseVNode("div", _hoisted_17$1, [
                _cache[7] || (_cache[7] = createBaseVNode("h2", { class: "h5 fw-bold mb-2" }, "Preview upgrade", -1)),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "small text-muted mb-3" }, " The preview is a curated sample. The classroom deployment lives on the Full Version page, where the shared workbook and teacher workflow are described for the full release. ", -1)),
                createVNode(_component_RouterLink, {
                  class: "btn btn-outline-primary btn-sm",
                  to: "/upgrade"
                }, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createTextVNode(" Go to Full Version ", -1)
                  ])]),
                  _: 1
                }),
                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "small text-muted mt-3" }, " Build support notes: Google Antigravity, OpenAI Codex. ", -1))
              ])
            ]))
          ])
        ])
      ]);
    };
  }
};
const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23577192"]]);
const assets = [{ "file": "practice-setup-full-catalog.png", "alt": "Autodrills practice setup showing the example-high v3 catalog in the full version", "caption": "Practice setup with the live example-high v3 catalog visible.", "sourceRoute": "/practice", "runMode": "local", "viewport": { "width": 1440, "height": 1200 }, "sanitized": true }, { "file": "practice-active-session.png", "alt": "Autodrills practice session showing a prompt and the example-high v3 student dashboard", "caption": "Active practice session using live example-high v3 student data.", "sourceRoute": "/practice", "runMode": "local", "viewport": { "width": 1440, "height": 1200 }, "sanitized": true }, { "file": "teacher-analytics-dashboard.png", "alt": "Teacher analytics dashboard with example-high v3 student data", "caption": "Teacher analytics dashboard using live example-high v3 data.", "sourceRoute": "/admin/analytics", "runMode": "local", "viewport": { "width": 1440, "height": 1200 }, "sanitized": true }, { "file": "admin-drills-triage.png", "alt": "Admin drill triage view with example-high v3 lessons", "caption": "Admin drill triage and lesson editor view using live example-high v3 drills.", "sourceRoute": "/admin/drills", "runMode": "local", "viewport": { "width": 1440, "height": 1200 }, "sanitized": true }];
const assetsManifest = {
  assets
};
const totalUnits$1 = 4;
const totalTopics$1 = 16;
const totalSkills$1 = 24;
const totalDrills$1 = 48;
const previewVersionRollups = {
  totalUnits: totalUnits$1,
  totalTopics: totalTopics$1,
  totalSkills: totalSkills$1,
  totalDrills: totalDrills$1
};
const totalUnits = 4;
const totalTopics = 53;
const totalSkills = 159;
const totalDrills = 1641;
const fullVersionRollups = {
  totalUnits,
  totalTopics,
  totalSkills,
  totalDrills
};
const fullVersionTopicSkillListHtml = '<div class="generated-topic-skill-list">\n      \n      <section class="generated-unit-section">\n        <div class="generated-unit-header">\n          <div class="generated-unit-title">Unit 1: Using Objects and Methods</div>\n          <div class="generated-unit-summary">15 topics • 49 skills</div>\n        </div>\n        <div class="generated-topic-list">\n          \n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.1 Introduction to Algorithms, Programming, and Compilers</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.2 Variables and Data Types</div>\n            <div class="generated-topic-entry-count">3 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Safe Value Swap, Step 1</span>\n              <code class="generated-skill-id">u1a-safe-value-swap-step-1</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Constant Declaration</span>\n              <code class="generated-skill-id">u1a-constant-declaration</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Primitive Variable Initialization</span>\n              <code class="generated-skill-id">u1a-primitive-variable-initialization</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.3 Expressions and Output</div>\n            <div class="generated-topic-entry-count">6 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Integer Division Truncation</span>\n              <code class="generated-skill-id">u1a-integer-division-truncation</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Extracting the Last Digit</span>\n              <code class="generated-skill-id">u1a-extracting-the-last-digit</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Grouping for an Average</span>\n              <code class="generated-skill-id">u1a-grouping-for-an-average</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Basic Arithmetic Expression</span>\n              <code class="generated-skill-id">u1a-basic-arithmetic-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Console print Statement</span>\n              <code class="generated-skill-id">u1c-console-print-statement</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Console println Statement</span>\n              <code class="generated-skill-id">u1c-console-println-statement</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.4 Assignment Statements and Input</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Stripping the Last Digit</span>\n              <code class="generated-skill-id">u1a-stripping-the-last-digit</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Standard Assignment Update</span>\n              <code class="generated-skill-id">u1a-standard-assignment-update</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.5 Casting and Range of Variables</div>\n            <div class="generated-topic-entry-count">4 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Exact Decimal Quotient</span>\n              <code class="generated-skill-id">u1b-exact-decimal-quotient</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Numeric Cast Expression</span>\n              <code class="generated-skill-id">u1a-numeric-cast-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Rounding a Positive Double</span>\n              <code class="generated-skill-id">u1b-rounding-a-positive-double</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Explicit Double-to-Int Cast in Assignment</span>\n              <code class="generated-skill-id">u1b-explicit-double-to-int-cast-in-assignment</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.6 Compound Assignment Operators</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Compound Assignment Syntax</span>\n              <code class="generated-skill-id">u1a-compound-assignment-syntax</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.7 Application Program Interface (API) and Libraries</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.8 Documentation with Comments</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.9 Method Signatures</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.10 Calling Class Methods</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Calling a Static Method</span>\n              <code class="generated-skill-id">u3b-calling-a-static-method</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.11 Math Class</div>\n            <div class="generated-topic-entry-count">5 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Random Integer from 0 to Max</span>\n              <code class="generated-skill-id">u1b-random-integer-from-0-to-max</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Random Integer from Min to Max</span>\n              <code class="generated-skill-id">u1b-random-integer-from-min-to-max</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Absolute Difference</span>\n              <code class="generated-skill-id">u1b-absolute-difference</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Math.pow Expression</span>\n              <code class="generated-skill-id">u1b-math-pow-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Math.sqrt Expression</span>\n              <code class="generated-skill-id">u1b-math-sqrt-expression</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.12 Objects: Instances of Classes</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.13 Object Creation and Storage (Instantiation)</div>\n            <div class="generated-topic-entry-count">3 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Null Reference Assignment</span>\n              <code class="generated-skill-id">u3a-null-reference-assignment</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">No-Argument Constructor Instantiation</span>\n              <code class="generated-skill-id">u3a-no-argument-constructor-instantiation</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Parameterized Constructor Instantiation</span>\n              <code class="generated-skill-id">u3a-parameterized-constructor-instantiation</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.14 Calling Instance Methods</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Calling an Instance Method with No Parameters</span>\n              <code class="generated-skill-id">u3b-calling-an-instance-method-with-no-parameters</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Capturing a Return Value</span>\n              <code class="generated-skill-id">u3b-capturing-a-return-value</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">1.15 String Manipulation</div>\n            <div class="generated-topic-entry-count">22 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">String Concatenation with Grouped Arithmetic</span>\n              <code class="generated-skill-id">u1c-string-concatenation-with-grouped-arithmetic</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Single-Character Substring Extraction</span>\n              <code class="generated-skill-id">u1c-single-character-substring-extraction</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Last Character of a String</span>\n              <code class="generated-skill-id">u1c-last-character-of-a-string</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">String Equality by Content</span>\n              <code class="generated-skill-id">u1c-string-equality-by-content</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Checking Whether `indexOf()` Found a Match</span>\n              <code class="generated-skill-id">u1c-checking-whether-indexof-found-a-match</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Declaring an Empty String</span>\n              <code class="generated-skill-id">u1c-declaring-an-empty-string</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">String Concatenation Expression</span>\n              <code class="generated-skill-id">u1c-string-concatenation-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">8.</span>\n              <span class="generated-skill-name">String length() Expression</span>\n              <code class="generated-skill-id">u1c-string-length-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">9.</span>\n              <span class="generated-skill-name">Last Valid String Index</span>\n              <code class="generated-skill-id">u1c-string-last-valid-index</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">10.</span>\n              <span class="generated-skill-name">Range substring Extraction</span>\n              <code class="generated-skill-id">u1c-substring-range-extraction</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">11.</span>\n              <span class="generated-skill-name">One-Argument substring Extraction</span>\n              <code class="generated-skill-id">u1c-substring-from-index</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">12.</span>\n              <span class="generated-skill-name">String split() Expression</span>\n              <code class="generated-skill-id">u1c-string-split-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">13.</span>\n              <span class="generated-skill-name">Accessing a Split Result Element</span>\n              <code class="generated-skill-id">u1c-string-split-element-access</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">14.</span>\n              <span class="generated-skill-name">indexOf Method Call</span>\n              <code class="generated-skill-id">u1c-indexof-method-call</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">15.</span>\n              <span class="generated-skill-name">indexOf Position Condition</span>\n              <code class="generated-skill-id">u1c-indexof-position-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">16.</span>\n              <span class="generated-skill-name">indexOf Not-Found Condition</span>\n              <code class="generated-skill-id">u1c-indexof-not-found-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">17.</span>\n              <span class="generated-skill-name">String compareTo() Expression</span>\n              <code class="generated-skill-id">u1c-string-compareto-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">18.</span>\n              <span class="generated-skill-name">compareTo() Greater Than Zero Condition</span>\n              <code class="generated-skill-id">u1c-string-compareto-greater-than-zero</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">19.</span>\n              <span class="generated-skill-name">compareTo() Less Than Zero Condition</span>\n              <code class="generated-skill-id">u1c-string-compareto-less-than-zero</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">20.</span>\n              <span class="generated-skill-name">compareTo() Equals Zero Condition</span>\n              <code class="generated-skill-id">u1c-string-compareto-equals-zero</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">21.</span>\n              <span class="generated-skill-name">compareTo() Not-Zero Condition</span>\n              <code class="generated-skill-id">u1c-string-compareto-not-zero</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">22.</span>\n              <span class="generated-skill-name">compareTo() on the Last Character of a String</span>\n              <code class="generated-skill-id">u1c-string-compareto-last-character-expression</code>\n            </li>\n          </ul>\n        </article>\n        </div>\n      </section>\n      <section class="generated-unit-section">\n        <div class="generated-unit-header">\n          <div class="generated-unit-title">Unit 2: Selection and Iteration</div>\n          <div class="generated-unit-summary">12 topics • 27 skills</div>\n        </div>\n        <div class="generated-topic-list">\n          \n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.1 Algorithms with Selection and Repetition</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.2 Boolean Expressions</div>\n            <div class="generated-topic-entry-count">4 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Boolean Variable Assignment</span>\n              <code class="generated-skill-id">u2a-boolean-variable-assignment</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Relational Comparison Expression</span>\n              <code class="generated-skill-id">u2a-relational-comparison-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Boolean Flag Condition</span>\n              <code class="generated-skill-id">u2a-boolean-flag-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Nonzero Divisor Guard</span>\n              <code class="generated-skill-id">u2a-nonzero-divisor-guard</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.3 if Statements</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">if Statement Header</span>\n              <code class="generated-skill-id">u2a-if-statement-header</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.4 Nested if Statements</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">else if Statement Header</span>\n              <code class="generated-skill-id">u2a-else-if-statement-header</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.5 Compound Boolean Expressions</div>\n            <div class="generated-topic-entry-count">4 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Inclusive Range Check</span>\n              <code class="generated-skill-id">u2a-inclusive-range-check</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Null Check with Short-Circuit Protection</span>\n              <code class="generated-skill-id">u2a-null-check-with-short-circuit-protection</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Negated String Equality</span>\n              <code class="generated-skill-id">u2a-negated-string-equality</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Logical AND/OR Expression</span>\n              <code class="generated-skill-id">u2a-logical-and-or-expression</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.6 Comparing Boolean Expressions</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Applying De Morgan&#39;s Law</span>\n              <code class="generated-skill-id">u2a-applying-de-morgan-s-law</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.7 while Loops</div>\n            <div class="generated-topic-entry-count">3 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">`while` Loop Continuation Condition</span>\n              <code class="generated-skill-id">u2b-while-loop-continuation-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Sentinel-Controlled Loop Condition</span>\n              <code class="generated-skill-id">u2b-sentinel-controlled-loop-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Preventing an Infinite Loop by Updating the Control Variable</span>\n              <code class="generated-skill-id">u2b-preventing-an-infinite-loop-by-updating-the-control-variable</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.8 for Loops</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Standard Zero-Indexed `for` Loop Header</span>\n              <code class="generated-skill-id">u2b-standard-zero-indexed-for-loop-header</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">String Traversal Loop Header</span>\n              <code class="generated-skill-id">u2b-string-traversal-loop-header</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.9 Implementing Selection and Iteration Algorithms</div>\n            <div class="generated-topic-entry-count">8 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Odd Number Check</span>\n              <code class="generated-skill-id">u1a-odd-number-check</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Divisibility Check</span>\n              <code class="generated-skill-id">u2a-divisibility-check</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Accumulator Update</span>\n              <code class="generated-skill-id">u2c-accumulator-update</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Initializing a Minimum Tracker</span>\n              <code class="generated-skill-id">u2c-initializing-a-minimum-tracker</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Maximum Update Step</span>\n              <code class="generated-skill-id">u2c-maximum-update-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Counter Increment Step</span>\n              <code class="generated-skill-id">u2c-counter-increment-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">Minimum Comparison Condition</span>\n              <code class="generated-skill-id">u2c-minimum-comparison-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">8.</span>\n              <span class="generated-skill-name">All-Values Flag Update</span>\n              <code class="generated-skill-id">u2c-all-values-flag-update</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.10 Implementing String Algorithms</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Fixed-Length Substring Extraction During Traversal</span>\n              <code class="generated-skill-id">u2c-fixed-length-substring-extraction-during-traversal</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Safe Outer Loop Bound for Substring Search</span>\n              <code class="generated-skill-id">u2c-safe-outer-loop-bound-for-substring-search</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.11 Nested Iteration</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">2.12 Informal Run-Time Analysis</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Nested Loop Execution Count</span>\n              <code class="generated-skill-id">u2c-nested-loop-execution-count</code>\n            </li>\n          </ul>\n        </article>\n        </div>\n      </section>\n      <section class="generated-unit-section">\n        <div class="generated-unit-header">\n          <div class="generated-unit-title">Unit 3: Class Creation</div>\n          <div class="generated-unit-summary">9 topics • 18 skills</div>\n        </div>\n        <div class="generated-topic-list">\n          \n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.1 Abstraction and Program Design</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.2 Impact of Program Design</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.3 Anatomy of a Class</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Private Instance Variable Declaration</span>\n              <code class="generated-skill-id">u3a-private-instance-variable-declaration</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.4 Constructors</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Constructor Signature Without a Return Type</span>\n              <code class="generated-skill-id">u3a-constructor-signature-without-a-return-type</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.5 Methods: How to Write Them</div>\n            <div class="generated-topic-entry-count">6 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Accessor Return Statement</span>\n              <code class="generated-skill-id">u3b-accessor-return-statement</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Non-Void Method Header</span>\n              <code class="generated-skill-id">u3b-non-void-method-header</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Relative State Update in a Mutator</span>\n              <code class="generated-skill-id">u3b-relative-state-update-in-a-mutator</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Direct Boolean Return</span>\n              <code class="generated-skill-id">u3b-direct-boolean-return</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Void Method Header with Parameters</span>\n              <code class="generated-skill-id">u3b-void-method-header-with-parameters</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Mutator Method Header</span>\n              <code class="generated-skill-id">u3b-mutator-method-header</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.6 Methods: Passing and Returning References of an Object</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Array Parameter Call</span>\n              <code class="generated-skill-id">u2c-array-parameter-call</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Array Return Capture</span>\n              <code class="generated-skill-id">u2c-array-return-capture</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.7 Class Variables and Methods</div>\n            <div class="generated-topic-entry-count">5 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Static Variable Declaration</span>\n              <code class="generated-skill-id">u3c-static-variable-declaration</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Static Method Header</span>\n              <code class="generated-skill-id">u3c-static-method-header</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Accessing a Static Variable</span>\n              <code class="generated-skill-id">u3c-accessing-a-static-variable</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Static Constant Declaration</span>\n              <code class="generated-skill-id">u3c-static-constant-declaration</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Static Variable Update</span>\n              <code class="generated-skill-id">u3c-static-variable-update</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.8 Scope and Access</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Accessing a Private Field Through an Accessor</span>\n              <code class="generated-skill-id">u3c-accessing-a-private-field-through-an-accessor</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Declaring a Variable Outside a Narrower Block</span>\n              <code class="generated-skill-id">u3c-declaring-a-variable-outside-a-narrower-block</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">3.9 this Keyword</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Resolving Shadowing with `this`</span>\n              <code class="generated-skill-id">u3a-resolving-shadowing-with-this</code>\n            </li>\n          </ul>\n        </article>\n        </div>\n      </section>\n      <section class="generated-unit-section">\n        <div class="generated-unit-header">\n          <div class="generated-unit-title">Unit 4: Data Collections</div>\n          <div class="generated-unit-summary">17 topics • 65 skills</div>\n        </div>\n        <div class="generated-topic-list">\n          \n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.1 Ethical and Social Issues Around Data Collection</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.2 Introduction to Using Data Sets</div>\n            <div class="generated-topic-entry-count">1 skill</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Reverse `for` Loop Header</span>\n              <code class="generated-skill-id">u2b-reverse-for-loop-header</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.3 Array Creation and Access</div>\n            <div class="generated-topic-entry-count">8 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Array Instantiation with an Explicit Size</span>\n              <code class="generated-skill-id">u4a-array-instantiation-with-an-explicit-size</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Array Length Property</span>\n              <code class="generated-skill-id">u4a-array-length-property</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Accessing the Last Element of an Array</span>\n              <code class="generated-skill-id">u4a-accessing-the-last-element-of-an-array</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Modifying an Array Element</span>\n              <code class="generated-skill-id">u4a-modifying-an-array-element</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">1D Array Element Access</span>\n              <code class="generated-skill-id">u2c-array-element-access</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Computed-Index Array Access</span>\n              <code class="generated-skill-id">u2c-array-computed-index-access</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">1D Array Element Update</span>\n              <code class="generated-skill-id">u2c-array-element-update</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">8.</span>\n              <span class="generated-skill-name">Valid Array Index Check</span>\n              <code class="generated-skill-id">u2c-valid-array-index-check</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.4 Array Traversals</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Enhanced `for` Loop Header for an Array</span>\n              <code class="generated-skill-id">u4a-enhanced-for-loop-header-for-an-array</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Enhanced-for 1D Traversal</span>\n              <code class="generated-skill-id">u2b-enhanced-for-1d-traversal</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.5 Implementing Array Algorithms</div>\n            <div class="generated-topic-entry-count">8 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Left-Shift Assignment in an Array</span>\n              <code class="generated-skill-id">u4a-left-shift-assignment-in-an-array</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Array Element Swap, Middle Step</span>\n              <code class="generated-skill-id">u4a-array-element-swap-middle-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Next-Element-Safe Array Loop Bound</span>\n              <code class="generated-skill-id">u2c-next-element-safe-array-loop-bound</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Array Sum Update Step</span>\n              <code class="generated-skill-id">u4a-array-sum-update-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Array Count-Match Increment Step</span>\n              <code class="generated-skill-id">u4a-array-count-match-increment-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Array Minimum-Index Update Step</span>\n              <code class="generated-skill-id">u4a-array-minimum-index-update-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">Array Adjacent-Pair Comparison Condition</span>\n              <code class="generated-skill-id">u4a-array-adjacent-pair-comparison-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">8.</span>\n              <span class="generated-skill-name">Array Right-Shift Step</span>\n              <code class="generated-skill-id">u4a-array-right-shift-step</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.6 Using Text Files</div>\n            <div class="generated-topic-entry-count">7 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">File Object Instantiation</span>\n              <code class="generated-skill-id">u1c-file-object-instantiation</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Scanner Construction from a File</span>\n              <code class="generated-skill-id">u1c-scanner-file-construction</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Scanner hasNext() Condition</span>\n              <code class="generated-skill-id">u1c-scanner-file-hasnext-condition</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Reading the Next Integer from a File Scanner</span>\n              <code class="generated-skill-id">u1c-reading-the-next-integer-from-a-scanner</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Scanner nextDouble() Call</span>\n              <code class="generated-skill-id">u1c-scanner-file-next-double</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Scanner next() Token Call</span>\n              <code class="generated-skill-id">u1c-scanner-file-next-token</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">Scanner close() Call</span>\n              <code class="generated-skill-id">u1c-scanner-file-close</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.7 Wrapper Classes</div>\n            <div class="generated-topic-entry-count">8 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Autoboxing an int into an Integer</span>\n              <code class="generated-skill-id">u1b-wrapper-autobox-unbox</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Integer.parseInt Call</span>\n              <code class="generated-skill-id">u1b-wrapper-parse-and-value-conversion</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Autoboxing a double into a Double</span>\n              <code class="generated-skill-id">u1b-wrapper-double-autobox-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Double.parseDouble Call</span>\n              <code class="generated-skill-id">u1b-wrapper-parse-double-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Unboxing an Integer into an int</span>\n              <code class="generated-skill-id">u1b-wrapper-int-value-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Unboxing a Double into a double</span>\n              <code class="generated-skill-id">u1b-wrapper-double-value-expression</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">Integer.MAX_VALUE Constant</span>\n              <code class="generated-skill-id">u1b-integer-max-value-constant</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">8.</span>\n              <span class="generated-skill-name">Integer.MIN_VALUE Constant</span>\n              <code class="generated-skill-id">u1b-integer-min-value-constant</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.8 ArrayList Methods</div>\n            <div class="generated-topic-entry-count">9 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Generic ArrayList Declaration and/or Instantiation</span>\n              <code class="generated-skill-id">u4b-generic-arraylist-declaration-andor-instantiation</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">ArrayList Size Method</span>\n              <code class="generated-skill-id">u4b-arraylist-size-method</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Accessing an ArrayList Element</span>\n              <code class="generated-skill-id">u4b-accessing-an-arraylist-element</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">Replacing an ArrayList Element with `set`</span>\n              <code class="generated-skill-id">u4b-replacing-an-arraylist-element-with-set</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Inserting into an ArrayList at a Specific Index</span>\n              <code class="generated-skill-id">u4b-inserting-into-an-arraylist-at-a-specific-index</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">Accessing the Last Element of an ArrayList</span>\n              <code class="generated-skill-id">u4b-accessing-the-last-element-of-an-arraylist</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">ArrayList Append</span>\n              <code class="generated-skill-id">u4b-arraylist-append</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">8.</span>\n              <span class="generated-skill-name">ArrayList Remove by Index</span>\n              <code class="generated-skill-id">u4b-arraylist-remove-by-index</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">9.</span>\n              <span class="generated-skill-name">Capture Removed ArrayList Value</span>\n              <code class="generated-skill-id">u4b-arraylist-capture-removed-value</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.9 ArrayList Traversals</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.10 Implementing ArrayList Algorithms</div>\n            <div class="generated-topic-entry-count">4 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Adjusting the Loop Variable After Removing from an ArrayList</span>\n              <code class="generated-skill-id">u4b-adjusting-the-loop-variable-after-removing-from-an-arraylist</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">ArrayList Sum Update Step</span>\n              <code class="generated-skill-id">u4b-arraylist-sum-update-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">ArrayList Count-Match Increment Step</span>\n              <code class="generated-skill-id">u4b-arraylist-count-match-increment-step</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">ArrayList Reverse Traversal Loop Header for Safe Removal</span>\n              <code class="generated-skill-id">u4b-arraylist-reverse-traversal-loop-header-for-safe-removal</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.11 2D Array Creation and Access</div>\n            <div class="generated-topic-entry-count">9 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">2D Array Element Access</span>\n              <code class="generated-skill-id">u4c-2d-array-element-access</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Number of Rows in a 2D Array</span>\n              <code class="generated-skill-id">u4c-number-of-rows-in-a-2d-array</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Number of Columns in a Rectangular 2D Array</span>\n              <code class="generated-skill-id">u4c-number-of-columns-in-a-rectangular-2d-array</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">2D Array Instantiation</span>\n              <code class="generated-skill-id">u4c-2d-array-instantiation</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">5.</span>\n              <span class="generated-skill-name">Relative 2D Cell Access</span>\n              <code class="generated-skill-id">u4c-relative-2d-cell-access</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">6.</span>\n              <span class="generated-skill-name">2D Last Row or Column Index</span>\n              <code class="generated-skill-id">u4c-2d-last-row-column-index</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">7.</span>\n              <span class="generated-skill-name">2D Bottom-Right Cell Access</span>\n              <code class="generated-skill-id">u4c-2d-bottom-right-cell-access</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">8.</span>\n              <span class="generated-skill-name">Rectangular 2D Initializer List</span>\n              <code class="generated-skill-id">u4c-rectangular-2d-initializer-list</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">9.</span>\n              <span class="generated-skill-name">2D Current-Cell Assignment or Update</span>\n              <code class="generated-skill-id">u4c-2d-current-cell-assignment-update</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.12 2D Array Traversals</div>\n            <div class="generated-topic-entry-count">3 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Column-Major Outer Loop Header</span>\n              <code class="generated-skill-id">u4c-column-major-outer-loop-header</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Outer Enhanced `for` Loop for a 2D Integer Array</span>\n              <code class="generated-skill-id">u4c-outer-enhanced-for-loop-for-a-2d-integer-array</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">Enhanced-for 2D Row Traversal</span>\n              <code class="generated-skill-id">u2b-enhanced-for-2d-row-traversal</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.13 Implementing 2D Array Algorithms</div>\n            <div class="generated-topic-entry-count">2 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Right-Neighbor Bounds Check</span>\n              <code class="generated-skill-id">u4c-right-neighbor-bounds-check</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">2D Aggregation or Search Step</span>\n              <code class="generated-skill-id">u4c-2d-aggregation-search-step</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.14 Searching Algorithms</div>\n            <div class="generated-topic-entry-count">4 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n            <li class="generated-skill-item">\n              <span class="generated-skill-number">1.</span>\n              <span class="generated-skill-name">Array Linear Search Match Flag Update</span>\n              <code class="generated-skill-id">u4a-array-linear-search-match-flag-update</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">2.</span>\n              <span class="generated-skill-name">Array Linear Search Return on Match</span>\n              <code class="generated-skill-id">u4a-array-linear-search-return-on-match</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">3.</span>\n              <span class="generated-skill-name">ArrayList Linear Search Match Flag Update</span>\n              <code class="generated-skill-id">u4b-arraylist-linear-search-match-flag-update</code>\n            </li>\n            <li class="generated-skill-item">\n              <span class="generated-skill-number">4.</span>\n              <span class="generated-skill-name">ArrayList Linear Search Return on Match</span>\n              <code class="generated-skill-id">u4b-arraylist-linear-search-return-on-match</code>\n            </li>\n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.15 Sorting Algorithms</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.16 Recursion</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        <article class="generated-topic-entry">\n          <div class="generated-topic-entry-head">\n            <div class="generated-topic-entry-title">4.17 Recursive Searching and Sorting</div>\n            <div class="generated-topic-entry-count">0 skills</div>\n          </div>\n          <ul class="generated-skill-list">\n            \n          </ul>\n        </article>\n        </div>\n      </section>\n    </div>';
const _hoisted_1 = { class: "upgrade-page" };
const _hoisted_2 = { class: "row g-4" };
const _hoisted_3 = { class: "col-lg-7" };
const _hoisted_4 = {
  id: "setup-help",
  class: "card panel-card shadow-sm border-0 mb-4",
  tabindex: "-1"
};
const _hoisted_5 = { class: "card-body p-4" };
const _hoisted_6 = { class: "row g-3" };
const _hoisted_7 = { class: "h-100 rounded-3 border p-3 bg-body" };
const _hoisted_8 = { class: "fw-semibold mb-1" };
const _hoisted_9 = { class: "small text-muted" };
const _hoisted_10 = { class: "card panel-card shadow-sm border-0 mb-4" };
const _hoisted_11 = { class: "card-body p-4" };
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = { class: "card panel-card shadow-sm border-0 mb-4" };
const _hoisted_14 = { class: "card-body p-4" };
const _hoisted_15 = { class: "row g-3" };
const _hoisted_16 = { class: "border rounded-3 p-3 bg-body-tertiary h-100" };
const _hoisted_17 = { class: "text-uppercase text-muted small fw-semibold" };
const _hoisted_18 = { class: "d-flex align-items-end gap-2 mb-2" };
const _hoisted_19 = { class: "h3 fw-bold mb-0" };
const _hoisted_20 = { class: "d-flex align-items-end gap-2 mb-2" };
const _hoisted_21 = { class: "h4 fw-semibold mb-0" };
const _hoisted_22 = { class: "small text-muted" };
const _hoisted_23 = { class: "col-lg-5" };
const _hoisted_24 = { class: "card panel-card shadow-sm border-0 mb-4" };
const _hoisted_25 = { class: "card-body p-4" };
const _hoisted_26 = { class: "d-grid gap-3" };
const _hoisted_27 = ["src", "alt"];
const _hoisted_28 = { class: "small text-muted" };
const _hoisted_29 = { class: "fw-semibold text-dark" };
const _sfc_main = {
  __name: "UpgradePage",
  setup(__props) {
    const screenshotUrlByFile = {
      "practice-setup-full-catalog.png": new URL("" + new URL("practice-setup-full-catalog-DaS2qv4t.png", import.meta.url).href, import.meta.url).href,
      "practice-active-session.png": new URL("" + new URL("practice-active-session-DsiEwZco.png", import.meta.url).href, import.meta.url).href,
      "teacher-analytics-dashboard.png": new URL("" + new URL("teacher-analytics-dashboard-B0jGnUYX.png", import.meta.url).href, import.meta.url).href,
      "admin-drills-triage.png": new URL("" + new URL("admin-drills-triage-Z7DabNBS.png", import.meta.url).href, import.meta.url).href
    };
    const fullVersionSections = [
      {
        title: "Complete drill library",
        text: "The full version includes the complete AP CSA drill library rather than the curated preview sample."
      },
      {
        title: "Teacher and admin tools",
        text: "Class dashboards, drill triage, and teacher workflows are available in the classroom version."
      },
      {
        title: "Shared classroom state",
        text: "Student and classroom progress live in a shared Google Sheets workbook instead of only in one browser."
      },
      {
        title: "School Google identity",
        text: "The classroom version can use school-managed identity and roster context."
      }
    ];
    const previewCounts = {
      units: previewVersionRollups.totalUnits,
      topics: previewVersionRollups.totalTopics,
      skills: previewVersionRollups.totalSkills,
      drills: previewVersionRollups.totalDrills
    };
    const comparisonRows = [
      {
        label: "Units",
        preview: previewCounts.units,
        full: fullVersionRollups.totalUnits,
        note: "AP CSA units represented in each experience"
      },
      {
        label: "Topics",
        preview: previewCounts.topics,
        full: fullVersionRollups.totalTopics,
        note: "Distinct AP CSA topics included in the catalog"
      },
      {
        label: "Skills",
        preview: previewCounts.skills,
        full: fullVersionRollups.totalSkills,
        note: "Selected skills in the curated preview versus the full drill library"
      },
      {
        label: "Drills",
        preview: previewCounts.drills,
        full: fullVersionRollups.totalDrills,
        note: "Practice prompts available in each version"
      }
    ];
    const screenshotAssets = Array.isArray(assetsManifest.assets) ? assetsManifest.assets.map((asset) => ({
      ...asset,
      url: screenshotUrlByFile[asset.file] || ""
    })) : [];
    function formatCount(value) {
      return Number.isFinite(Number(value)) ? Number(value).toLocaleString() : "0";
    }
    function scrollToSetupHelp() {
      const target = document.getElementById("setup-help");
      if (!target) {
        return;
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("section", { class: "card panel-card shadow-sm border-0 mb-4" }, [
          createBaseVNode("div", { class: "card-body p-4 p-md-5" }, [
            createBaseVNode("div", { class: "d-flex flex-column flex-lg-row justify-content-between align-items-lg-start gap-3" }, [
              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "flex-grow-1" }, [
                createBaseVNode("p", { class: "text-uppercase text-muted small fw-semibold mb-2" }, "Full Version / Upgrade"),
                createBaseVNode("h1", { class: "display-6 fw-bold mb-3" }, "Turn the curated preview into a classroom-ready AP CSA practice space."),
                createBaseVNode("p", { class: "lead mb-0" }, " The preview gives you a safe curated sample. The full version keeps the same practice flow, but it unlocks the complete drill library, teacher tools, and classroom persistence through Google Apps Script and Google Sheets. ")
              ], -1)),
              createBaseVNode("div", { class: "setup-callout border rounded-3 p-3 bg-body-tertiary" }, [
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "fw-semibold mb-1" }, "Need to set it up?", -1)),
                _cache[1] || (_cache[1] = createBaseVNode("p", { class: "small text-muted mb-3" }, " Ask Orion Smith at East Lansing High School to connect the classroom copy and confirm the Google Apps Script plus Google Sheets deployment. ", -1)),
                createBaseVNode("button", {
                  type: "button",
                  class: "btn btn-primary btn-sm",
                  onClick: scrollToSetupHelp
                }, " See what setup enables ")
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("section", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                _cache[3] || (_cache[3] = createBaseVNode("h2", { class: "h5 fw-bold mb-3" }, "What the full version adds", -1)),
                createBaseVNode("div", _hoisted_6, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(fullVersionSections, (section) => {
                    return createBaseVNode("div", {
                      key: section.title,
                      class: "col-md-6"
                    }, [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", _hoisted_8, toDisplayString(section.title), 1),
                        createBaseVNode("div", _hoisted_9, toDisplayString(section.text), 1)
                      ])
                    ]);
                  }), 64))
                ])
              ])
            ]),
            createBaseVNode("section", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                _cache[4] || (_cache[4] = createBaseVNode("h2", { class: "h5 fw-bold mb-3" }, "Full version topic-skill list", -1)),
                _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-muted mb-4" }, " This list is generated at build time from the full version catalog, so the topic totals and skill counts stay accurate when the preview bundle is rebuilt. ", -1)),
                createBaseVNode("div", {
                  class: "generated-topic-skill-list",
                  innerHTML: unref(fullVersionTopicSkillListHtml)
                }, null, 8, _hoisted_12)
              ])
            ]),
            createBaseVNode("section", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                _cache[8] || (_cache[8] = createBaseVNode("h2", { class: "h5 fw-bold mb-3" }, "Preview versus full drill library", -1)),
                createBaseVNode("div", _hoisted_15, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(comparisonRows, (row) => {
                    return createBaseVNode("div", {
                      key: row.label,
                      class: "col-md-6 col-xl-3"
                    }, [
                      createBaseVNode("div", _hoisted_16, [
                        createBaseVNode("div", _hoisted_17, toDisplayString(row.label), 1),
                        createBaseVNode("div", _hoisted_18, [
                          createBaseVNode("div", _hoisted_19, toDisplayString(formatCount(row.preview)), 1),
                          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-muted small mb-1" }, "preview", -1))
                        ]),
                        createBaseVNode("div", _hoisted_20, [
                          createBaseVNode("div", _hoisted_21, toDisplayString(formatCount(row.full)), 1),
                          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-muted small mb-1" }, "full", -1))
                        ]),
                        createBaseVNode("div", _hoisted_22, toDisplayString(row.note), 1)
                      ])
                    ]);
                  }), 64))
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("section", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                _cache[9] || (_cache[9] = createBaseVNode("h2", { class: "h5 fw-bold mb-3" }, "Sanitized screenshots", -1)),
                createBaseVNode("div", _hoisted_26, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(screenshotAssets), (shot) => {
                    return openBlock(), createElementBlock("figure", {
                      key: shot.file,
                      class: "border rounded-3 bg-body p-3 mb-0"
                    }, [
                      createBaseVNode("img", {
                        src: shot.url,
                        alt: shot.alt,
                        class: "screenshot-image rounded-3 mb-3",
                        loading: "lazy"
                      }, null, 8, _hoisted_27),
                      createBaseVNode("figcaption", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, toDisplayString(shot.caption), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]),
            _cache[10] || (_cache[10] = createStaticVNode('<section class="card panel-card shadow-sm border-0 mb-4" data-v-950295aa><div class="card-body p-4" data-v-950295aa><h2 class="h5 fw-bold mb-3" data-v-950295aa>What to request from Orion Smith</h2><ul class="small text-muted ps-3 mb-3" data-v-950295aa><li data-v-950295aa>Connect the classroom full version.</li><li data-v-950295aa>Confirm the public preview screenshots are safe to ship.</li><li data-v-950295aa>Review any setup or identity questions before publishing the full site.</li></ul><a href="#setup-workbook-coming-soon" class="btn btn-outline-primary btn-sm" data-v-950295aa>Copyable setup workbook coming soon</a><div class="small text-muted mt-2" data-v-950295aa> The full version stays free, but it does require setup and a classroom copy of the Google Sheets workbook. </div></div></section>', 1))
          ])
        ])
      ]);
    };
  }
};
const UpgradePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-950295aa"]]);
const history = createWebHashHistory();
const previewRoutes = [
  { path: "/", redirect: "/practice" },
  { path: "/practice", component: PracticePage },
  { path: "/about", component: AboutPage },
  { path: "/upgrade", component: UpgradePage }
];
const router = createRouter({
  history,
  routes: previewRoutes
});
export {
  router as default
};
//# sourceMappingURL=router-Cwl9w8wG.js.map
