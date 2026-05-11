/**
 * Autodrills Preview Asset: drillSelection-Zqn8DlrJ.js
 * 
 * Runs: Browser-side on the public sample site.
 * Responsibility: Part of the bundled preview application.
 */
var module$1 = { exports: {} };
function asArray(value) {
  return Array.isArray(value) ? value : [];
}
function normalizeStringArray(value) {
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  asArray(value).forEach((entry) => {
    const text = String(entry || "").trim();
    if (!text || seen.has(text)) {
      return;
    }
    seen.add(text);
    normalized.push(text);
  });
  return normalized;
}
function buildSelectionSignature(selection = {}) {
  const unitIds = normalizeStringArray(selection.unitIds || selection.selectedUnitIds || selection.selectedUnits);
  const topicIds = normalizeStringArray(selection.topicIds || selection.selectedTopicIds || selection.selectedTopics);
  const skillClusters = normalizeStringArray(selection.skillClusters || selection.selectedSkillClusters || selection.selectedClusters);
  const tokens = [
    ...unitIds.map((unitId) => `unit:${unitId}`),
    ...topicIds.map((topicId) => `topic:${topicId}`),
    ...skillClusters.map((clusterId) => `cluster:${clusterId}`)
  ];
  return [...new Set(tokens)].sort().join(",");
}
function buildDrillScopeMetadata(drill, skillMetadataById = null) {
  const metadataLookup = skillMetadataById instanceof Map ? skillMetadataById : skillMetadataById && typeof skillMetadataById === "object" ? new Map(Object.entries(skillMetadataById).map(([key, value]) => [String(key), value])) : null;
  const skillLinks = asArray(drill?.skills);
  const linkedMetadata = skillLinks.map((link) => metadataLookup?.get(String(link?.skillId || "").trim()) || null).filter(Boolean);
  const unitIds = normalizeStringArray([
    drill?.unitId || drill?.unit_id || "",
    ...linkedMetadata.map((row) => row?.unitId || row?.unit_id || "")
  ]);
  const topicIds = normalizeStringArray([
    drill?.topicId || drill?.topic_id || "",
    ...linkedMetadata.map((row) => row?.topicId || row?.topic_id || "")
  ]);
  return {
    unitIds,
    topicIds,
    skillClusters: normalizeStringArray([drill?.skillCluster || drill?.skill_cluster || ""])
  };
}
function drillMatchesSelection(drill, options = {}, skillMetadataById = null) {
  if (options.drillId) {
    return String(drill?.drillId || drill?.drill_id || "") === String(options.drillId);
  }
  const clusterSet = new Set(normalizeStringArray(options.skillClusters || options.selectedSkillClusters || options.selectedClusters));
  const unitSet = new Set(normalizeStringArray(options.unitIds || options.selectedUnitIds || options.selectedUnits));
  const topicSet = new Set(normalizeStringArray(options.topicIds || options.selectedTopicIds || options.selectedTopics));
  if (!clusterSet.size && !unitSet.size && !topicSet.size) {
    return true;
  }
  const scope = buildDrillScopeMetadata(drill, skillMetadataById);
  const clusterMatch = clusterSet.size > 0 && scope.skillClusters.some((clusterId) => clusterSet.has(clusterId));
  const unitMatch = unitSet.size > 0 && scope.unitIds.some((unitId) => unitSet.has(unitId));
  const topicMatch = topicSet.size > 0 && scope.topicIds.some((topicId) => topicSet.has(topicId));
  return clusterMatch || unitMatch || topicMatch;
}
function filterDrills(drills, options = {}) {
  const skillMetadataById = options.skillMetadataById || null;
  return asArray(drills).filter((drill) => drillMatchesSelection(drill, options, skillMetadataById));
}
function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function selectBatch(drills, count, options = {}) {
  const filtered = filterDrills(drills, options);
  if (options.fetchAll) {
    return shuffled(filtered);
  }
  const batchSize = Math.max(1, Number.parseInt(count || "5", 10) || 5);
  return shuffled(filtered).slice(0, Math.min(batchSize, filtered.length));
}
module$1.exports = {
  buildDrillScopeMetadata,
  buildSelectionSignature,
  drillMatchesSelection,
  filterDrills,
  selectBatch,
  shuffled
};
const __CJS__export_default__ = (module$1.exports == null ? {} : module$1.exports).default || module$1.exports;
const drillSelectionModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__
}, Symbol.toStringTag, { value: "Module" }));
export {
  __CJS__export_default__ as _,
  drillSelectionModule as d
};
//# sourceMappingURL=drillSelection-Zqn8DlrJ.js.map
