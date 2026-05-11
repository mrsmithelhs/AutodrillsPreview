/**
 * Autodrills Preview Asset: previewStatic-CNqSZoDd.js
 * 
 * Runs: Browser-side on the public sample site.
 * Responsibility: Part of the bundled preview application.
 */
import { a as __CJS__export_default__$2, b as attemptContextModule$1, _ as __CJS__export_default__$4, s as substitutionsModule } from "./substitutions-BboDPcLC.js";
import { _ as __CJS__export_default__$3, d as drillSelectionModule } from "./drillSelection-Zqn8DlrJ.js";
import { o as openAutodrillsDb, A as AUTODRILLS_BROWSER_CACHE_STORE_NAMES, a as isStorageError, i as isIndexedDbAvailable } from "./indexedDbClient-BhXpRefM.js";
var module$2 = { exports: {} };
const attemptContextModule = typeof require === "function" ? __CJS__export_default__$2 || attemptContextModule$1 : typeof globalThis !== "undefined" ? globalThis : {};
const deriveAttemptContextSkillLinks_ = attemptContextModule.deriveAttemptContextSkillLinks || (typeof globalThis !== "undefined" ? globalThis.deriveAttemptContextSkillLinks : null);
const inspectAttemptContextPayload_ = attemptContextModule.inspectAttemptContextPayload || (typeof globalThis !== "undefined" ? globalThis.inspectAttemptContextPayload : null);
const drillSelection = typeof require === "function" ? __CJS__export_default__$3 || drillSelectionModule : typeof globalThis !== "undefined" ? globalThis.drillSelection : null;
if (!drillSelection) {
  throw new Error("drillSelection helper is required.");
}
function asArray$1(value) {
  return Array.isArray(value) ? value : [];
}
function normaliseRole(role) {
  return String(role || "").toLowerCase() === "supporting" ? "supporting" : "primary";
}
function getSkillLinkWeight(link) {
  const role = normaliseRole(link.role);
  return role === "supporting" ? 0.5 : 1;
}
function getCandidateSkills(drill) {
  return asArray$1(drill.skills).map((link) => ({
    skillId: link.skillId,
    role: normaliseRole(link.role),
    weight: getSkillLinkWeight(link)
  }));
}
function normalizeLookup(lookup = null) {
  if (!lookup) {
    return null;
  }
  if (lookup instanceof Map) {
    return lookup;
  }
  if (typeof lookup === "object") {
    return new Map(Object.entries(lookup).map(([key, value]) => [String(key), value]));
  }
  return null;
}
function buildAttemptContextLinks(response = {}) {
  const inspection = inspectAttemptContextPayload_(response.attemptContextJson, response);
  if (!inspection.present) {
    return {
      present: false,
      valid: true,
      links: null,
      errors: []
    };
  }
  if (!inspection.ok) {
    return {
      present: true,
      valid: false,
      links: null,
      errors: inspection.errors
    };
  }
  const links = deriveAttemptContextSkillLinks_(inspection.payload || {});
  return {
    present: true,
    valid: links.length > 0,
    links: links.length ? links : null,
    errors: links.length ? [] : ["attemptContextJson.drill.skillIds is required."]
  };
}
function getPrimarySkillId(drill) {
  const skills = getCandidateSkills(drill);
  if (!skills.length) {
    return String(drill?.drillId || "").trim();
  }
  return skills.find((link) => link.role === "primary")?.skillId || skills[0].skillId || String(drill?.drillId || "").trim();
}
function getDrillFamilyKey(drill, skillMetadataById = null) {
  const lookup = normalizeLookup(skillMetadataById);
  const primarySkillId = getPrimarySkillId(drill);
  const metadata = lookup?.get(primarySkillId) || null;
  return String(
    metadata?.skillFamilyId || drill?.skillFamilyId || drill?.skill_family_id || drill?.skillCluster || drill?.skill_cluster || primarySkillId || drill?.drillId || ""
  ).trim();
}
function getDrillRepeatKey(drill) {
  return String(
    drill?.sourceDrillId || drill?.source_drill_id || drill?.drillId || drill?.drill_id || ""
  ).trim();
}
function dedupeByKey(items, keySelector) {
  const seen = /* @__PURE__ */ new Set();
  const deduped = [];
  asArray$1(items).forEach((item) => {
    const key = String(keySelector(item) || "").trim();
    if (!key || seen.has(key)) {
      return;
    }
    seen.add(key);
    deduped.push(item);
  });
  return deduped;
}
function normalizeSummaryMigrationAction(action = "") {
  const normalized = String(action || "retain").trim().toLowerCase();
  if (normalized === "reroute") {
    return "reroute";
  }
  if (normalized === "exclude") {
    return "exclude";
  }
  return "retain";
}
function normalizeSummaryMigrationLinks(links = []) {
  const seen = /* @__PURE__ */ new Set();
  const normalized = [];
  asArray$1(links).forEach((link) => {
    const skillId = String(link?.skillId || link?.skill_id || "").trim();
    if (!skillId || seen.has(skillId)) {
      return;
    }
    const role = normaliseRole(link.role);
    normalized.push({
      skillId,
      role,
      weight: Number.isFinite(link.weight) ? link.weight : Number.parseFloat(link.weight || "1") || 1,
      displayName: String(link.displayName || link.display_name || "").trim(),
      confidence: String(link.confidence || "manual").trim() || "manual",
      notes: String(link.notes || "").trim()
    });
    seen.add(skillId);
  });
  normalized.sort((left, right) => {
    if (left.role === right.role) {
      return left.skillId.localeCompare(right.skillId);
    }
    return left.role === "primary" ? -1 : 1;
  });
  return normalized;
}
function normalizeSummaryMigrationEntry(entry = {}) {
  const drillId = String(entry.drillId || entry.drill_id || "").trim();
  if (!drillId) {
    return null;
  }
  const skills = normalizeSummaryMigrationLinks(entry.skills || entry.skillLinks || entry.skill_links || []);
  if (!skills.length && normalizeSummaryMigrationAction(entry.action || entry.status) !== "exclude") {
    return null;
  }
  return {
    drillId,
    action: normalizeSummaryMigrationAction(entry.action || entry.status),
    skills,
    displayName: String(entry.displayName || entry.display_name || "").trim(),
    reason: String(entry.reason || entry.notes || "").trim()
  };
}
function normalizeSummaryMigrationPolicy(policy = null) {
  if (!policy || typeof policy !== "object") {
    return {
      schemaVersion: 1,
      policyVersion: "",
      entries: [],
      byDrillId: /* @__PURE__ */ new Map()
    };
  }
  const entries = asArray$1(policy.entries || policy.rules || []).map((entry) => normalizeSummaryMigrationEntry(entry)).filter(Boolean);
  const byDrillId = new Map(entries.map((entry) => [entry.drillId, entry]));
  return {
    schemaVersion: Number.parseInt(policy.schemaVersion || "1", 10) || 1,
    policyVersion: String(policy.policyVersion || policy.version || "").trim(),
    entries,
    byDrillId
  };
}
function getSummaryMigrationPolicy(policy = null) {
  const source = policy || (typeof SUMMARY_MIGRATION_POLICY_ !== "undefined" ? SUMMARY_MIGRATION_POLICY_ : null) || (typeof globalThis !== "undefined" ? globalThis.SUMMARY_MIGRATION_POLICY_ : null) || null;
  return normalizeSummaryMigrationPolicy(source);
}
function buildSkillWindow(attempts, windowSize) {
  const windows = [];
  for (let index = 0; index < attempts.length; index += windowSize) {
    const chunk = attempts.slice(index, index + windowSize);
    if (!chunk.length) {
      continue;
    }
    windows.push({
      n: chunk.length,
      correct: chunk.filter((attempt) => attempt.isCorrect).length,
      from: chunk[0].respondedAt,
      to: chunk[chunk.length - 1].respondedAt
    });
  }
  return windows;
}
function buildStudentPerformanceSummary$1({
  studentId,
  responses = [],
  drillSkillMap = /* @__PURE__ */ new Map(),
  sessions = [],
  now = (/* @__PURE__ */ new Date()).toISOString(),
  recentWindowSize = 5,
  maxWindows = 8,
  priorAttempts = 3,
  priorIncorrect = 1,
  summaryVersion = "student-performance-v1",
  summaryMigrationPolicy = null,
  knownSkillIds = null
} = {}) {
  const migrationPolicy = getSummaryMigrationPolicy(summaryMigrationPolicy);
  const knownSkillIdSet = knownSkillIds ? new Set(asArray$1(knownSkillIds).map((skillId) => String(skillId).trim()).filter(Boolean)) : null;
  const sortedResponses = [...responses].map((response) => ({
    id: response.id,
    respondedAt: response.respondedAt,
    drillId: response.drillId,
    isCorrect: Boolean(response.isCorrect),
    firstIsCorrect: response.firstIsCorrect === void 0 ? Boolean(response.isCorrect) : Boolean(response.firstIsCorrect),
    hintCount: Number(response.hintCount || 0),
    answerRevealed: Boolean(response.answerRevealed),
    completionStatus: response.completionStatus || (response.answerRevealed ? "solution_revealed" : response.isCorrect ? "correct" : "incorrect"),
    sessionId: response.sessionId || "",
    selectedClusterSignature: response.selectedClusterSignature || "",
    attemptContextJson: response.attemptContextJson || response.attempt_context_json || null
  })).sort((left, right) => {
    if (left.respondedAt === right.respondedAt) {
      return Number(left.id || 0) - Number(right.id || 0);
    }
    return String(left.respondedAt).localeCompare(String(right.respondedAt));
  });
  const skills = {};
  const activeDays = /* @__PURE__ */ new Set();
  const responseSessionIds = /* @__PURE__ */ new Set();
  const selectedClusterSignatures = /* @__PURE__ */ new Set();
  const totals = {
    attempts: sortedResponses.length,
    correct: 0,
    incorrect: 0,
    firstCorrect: 0,
    hintedAttempts: 0,
    hintCount: 0,
    answerRevealed: 0,
    skipped: 0
  };
  const taxonomyMigration = {
    schemaVersion: 1,
    policyVersion: migrationPolicy.policyVersion || "",
    status: "clean",
    legacyDrillIds: [],
    reroutedDrillIds: [],
    excludedDrillIds: [],
    reviewRequiredDrillIds: [],
    unresolvedSkillIds: [],
    notes: []
  };
  const migrationIssueMessages = [];
  const markMigrationStatus = (nextStatus) => {
    const priority = {
      clean: 0,
      legacy_buckets_present: 1,
      rerouted_buckets_present: 1,
      migration_review_required: 2
    };
    if ((priority[nextStatus] ?? 0) > (priority[taxonomyMigration.status] ?? 0)) {
      taxonomyMigration.status = nextStatus;
    }
  };
  const recordUnique = (list, value) => {
    const text = String(value || "").trim();
    if (!text || list.includes(text)) {
      return;
    }
    list.push(text);
  };
  const recordMigrationIssue = (message) => {
    const text = String(message || "").trim();
    if (!text || migrationIssueMessages.includes(text)) {
      return;
    }
    migrationIssueMessages.push(text);
  };
  sortedResponses.forEach((response) => {
    if (response.respondedAt) {
      activeDays.add(String(response.respondedAt).slice(0, 10));
    }
    if (response.sessionId) {
      responseSessionIds.add(response.sessionId);
    }
    if (response.selectedClusterSignature) {
      selectedClusterSignatures.add(response.selectedClusterSignature);
    }
    totals.correct += response.isCorrect ? 1 : 0;
    totals.incorrect += response.isCorrect ? 0 : 1;
    totals.firstCorrect += response.firstIsCorrect ? 1 : 0;
    totals.hintedAttempts += response.hintCount > 0 ? 1 : 0;
    totals.hintCount += response.hintCount;
    totals.answerRevealed += response.answerRevealed ? 1 : 0;
    totals.skipped += response.completionStatus === "skipped" ? 1 : 0;
    const policyEntry = migrationPolicy.byDrillId.get(String(response.drillId || "").trim()) || null;
    const attemptContextLinks = buildAttemptContextLinks(response);
    let links = asArray$1(drillSkillMap.get(response.drillId));
    let taxonomyState = "current";
    let migrationReason = "";
    if (attemptContextLinks.present) {
      if (!attemptContextLinks.valid) {
        recordUnique(taxonomyMigration.reviewRequiredDrillIds, response.drillId);
        markMigrationStatus("migration_review_required");
        attemptContextLinks.errors.forEach((error) => {
          const message = `Attempt context for ${response.drillId}: ${error}`;
          recordUnique(taxonomyMigration.notes, message);
          recordMigrationIssue(message);
        });
      } else {
        links = attemptContextLinks.links;
      }
    }
    if (!attemptContextLinks.present && policyEntry) {
      if (policyEntry.action === "exclude") {
        recordUnique(taxonomyMigration.excludedDrillIds, response.drillId);
        markMigrationStatus("migration_review_required");
        return;
      }
      links = policyEntry.skills.length ? policyEntry.skills : links;
      taxonomyState = policyEntry.action === "reroute" ? "rerouted" : "legacy";
      migrationReason = policyEntry.reason || "";
      if (policyEntry.action === "reroute") {
        recordUnique(taxonomyMigration.reroutedDrillIds, response.drillId);
        markMigrationStatus("rerouted_buckets_present");
      } else {
        recordUnique(taxonomyMigration.legacyDrillIds, response.drillId);
        markMigrationStatus("legacy_buckets_present");
      }
    } else if (!attemptContextLinks.present && knownSkillIdSet) {
      const missingSkillIds = links.map((link) => String(link.skillId || "").trim()).filter((skillId) => skillId && !knownSkillIdSet.has(skillId));
      if (missingSkillIds.length) {
        missingSkillIds.forEach((skillId) => {
          if (!taxonomyMigration.unresolvedSkillIds.includes(skillId)) {
            taxonomyMigration.unresolvedSkillIds.push(skillId);
          }
        });
        recordUnique(taxonomyMigration.reviewRequiredDrillIds, response.drillId);
        markMigrationStatus("migration_review_required");
      }
    }
    if (!links.length) {
      recordUnique(taxonomyMigration.reviewRequiredDrillIds, response.drillId);
      markMigrationStatus("migration_review_required");
      return;
    }
    links.forEach((link) => {
      const skillId = String(link.skillId || "").trim();
      if (!skillId) {
        return;
      }
      if (!skills[skillId]) {
        skills[skillId] = {
          attempts: 0,
          correct: 0,
          incorrect: 0,
          firstCorrect: 0,
          hintedAttempts: 0,
          hintCount: 0,
          answerRevealed: 0,
          skipped: 0,
          lastAttemptAt: null,
          lastCorrectAt: null,
          recentAttempts: [],
          displayName: link.displayName || skillId,
          taxonomyState,
          policyAction: policyEntry?.action || "current",
          migrationReason,
          policyDrillIds: []
        };
      }
      const entry = skills[skillId];
      if (policyEntry) {
        recordUnique(entry.policyDrillIds, response.drillId);
        entry.taxonomyState = taxonomyState;
        entry.policyAction = policyEntry.action;
        entry.migrationReason = migrationReason;
        if (policyEntry.displayName) {
          entry.displayName = policyEntry.displayName;
        } else if (!entry.displayName || entry.displayName === skillId) {
          entry.displayName = link.displayName || skillId;
        }
      } else if (!entry.displayName) {
        entry.displayName = link.displayName || skillId;
      }
      const attempt = {
        respondedAt: response.respondedAt,
        isCorrect: response.isCorrect
      };
      entry.attempts += 1;
      if (response.isCorrect) {
        entry.correct += 1;
        entry.lastCorrectAt = response.respondedAt;
      } else {
        entry.incorrect += 1;
      }
      if (response.firstIsCorrect) {
        entry.firstCorrect += 1;
      }
      if (response.hintCount > 0) {
        entry.hintedAttempts += 1;
      }
      entry.hintCount += response.hintCount;
      if (response.answerRevealed) {
        entry.answerRevealed += 1;
      }
      if (response.completionStatus === "skipped") {
        entry.skipped += 1;
      }
      entry.lastAttemptAt = response.respondedAt;
      entry.recentAttempts.push(attempt);
      if (entry.recentAttempts.length > recentWindowSize * maxWindows) {
        entry.recentAttempts.shift();
      }
    });
  });
  Object.entries(skills).forEach(([skillId, entry]) => {
    const windows = buildSkillWindow(entry.recentAttempts, recentWindowSize).slice(-maxWindows);
    const totalAttempts = entry.attempts + priorAttempts;
    const totalIncorrect = entry.incorrect + priorIncorrect;
    skills[skillId] = {
      attempts: entry.attempts,
      correct: entry.correct,
      incorrect: entry.incorrect,
      firstCorrect: entry.firstCorrect,
      hintedAttempts: entry.hintedAttempts,
      hintCount: entry.hintCount,
      answerRevealed: entry.answerRevealed,
      skipped: entry.skipped,
      lastAttemptAt: entry.lastAttemptAt,
      lastCorrectAt: entry.lastCorrectAt,
      recentWindows: windows,
      smoothedErrorRate: totalAttempts > 0 ? totalIncorrect / totalAttempts : 0.5,
      displayName: entry.displayName || skillId,
      taxonomyState: entry.taxonomyState || "current",
      policyAction: entry.policyAction || "current",
      migrationReason: entry.migrationReason || "",
      policyDrillIds: dedupeByKey(entry.policyDrillIds || [], (value) => value)
    };
  });
  if (taxonomyMigration.reviewRequiredDrillIds.length) {
    markMigrationStatus("migration_review_required");
  }
  taxonomyMigration.legacyDrillIds = dedupeByKey(taxonomyMigration.legacyDrillIds, (value) => value);
  taxonomyMigration.reroutedDrillIds = dedupeByKey(taxonomyMigration.reroutedDrillIds, (value) => value);
  taxonomyMigration.excludedDrillIds = dedupeByKey(taxonomyMigration.excludedDrillIds, (value) => value);
  taxonomyMigration.reviewRequiredDrillIds = dedupeByKey(taxonomyMigration.reviewRequiredDrillIds, (value) => value);
  taxonomyMigration.unresolvedSkillIds = dedupeByKey(taxonomyMigration.unresolvedSkillIds, (value) => value);
  const summaryStatus = taxonomyMigration.status === "migration_review_required" ? "stale" : "ready";
  return {
    schemaVersion: 1,
    summaryVersion,
    studentId: studentId || null,
    updatedAt: now,
    summaryStatus,
    lastError: taxonomyMigration.status === "migration_review_required" ? [
      migrationIssueMessages.join(" "),
      `Summary rebuild requires reviewed historical policy for: ${taxonomyMigration.reviewRequiredDrillIds.join(", ") || taxonomyMigration.unresolvedSkillIds.join(", ")}`
    ].filter(Boolean).join(" ").trim() : "",
    taxonomyMigration,
    totals: {
      ...totals,
      activeDays: activeDays.size,
      sessionCount: Math.max(responseSessionIds.size, asArray$1(sessions).length),
      selectedClusterCount: selectedClusterSignatures.size,
      selectedClusterSignatures: [...selectedClusterSignatures].sort()
    },
    sessions: {
      count: Math.max(responseSessionIds.size, asArray$1(sessions).length),
      active: asArray$1(sessions).filter((session) => session.sessionStatus === "active").length,
      expired: asArray$1(sessions).filter((session) => session.sessionStatus === "expired").length,
      abandoned: asArray$1(sessions).filter((session) => session.sessionStatus === "abandoned").length
    },
    skills
  };
}
function scoreSkillEntry(entry = null) {
  if (!entry) {
    return 0.5;
  }
  const latestWindow = asArray$1(entry.recentWindows).at(-1);
  const latestWindowErrorRate = latestWindow && latestWindow.n ? 1 - latestWindow.correct / latestWindow.n : entry.smoothedErrorRate;
  return entry.smoothedErrorRate * 0.65 + latestWindowErrorRate * 0.35;
}
function scoreSkillRecency(entry = null, now = Date.now()) {
  if (!entry || !entry.lastAttemptAt) {
    return 1;
  }
  const lastAttemptAt = Date.parse(entry.lastAttemptAt);
  if (Number.isNaN(lastAttemptAt)) {
    return 0.5;
  }
  const ageMs = Math.max(0, now - lastAttemptAt);
  const recencyWindowMs = 14 * 24 * 60 * 60 * 1e3;
  return Math.max(0, Math.min(1, ageMs / recencyWindowMs));
}
function scoreDrillCandidate(drill, studentSummary = null, random = Math.random, options = {}) {
  const now = Number.isFinite(options.now) ? options.now : Date.now();
  const skillMetadataById = normalizeLookup(options.skillMetadataById);
  const skills = getCandidateSkills(drill);
  if (!skills.length) {
    return {
      drillId: drill.drillId,
      score: 0.5 + random() * 0.05,
      weaknessScore: 0.5,
      recencyScore: 0.5,
      primarySkillId: String(drill?.drillId || "").trim(),
      familyKey: getDrillFamilyKey(drill, skillMetadataById)
    };
  }
  const weightedScores = skills.map((link) => {
    const skillEntry = studentSummary?.skills?.[link.skillId] || null;
    return {
      skillId: link.skillId,
      role: link.role,
      linkWeight: link.weight,
      weaknessScore: scoreSkillEntry(skillEntry),
      recencyScore: scoreSkillRecency(skillEntry, now),
      familyKey: String(skillMetadataById?.get(link.skillId)?.skillFamilyId || "").trim()
    };
  });
  const totalWeight = weightedScores.reduce((sum, entry) => sum + entry.linkWeight, 0) || 1;
  const weaknessScore = weightedScores.reduce(
    (sum, entry) => sum + entry.weaknessScore * entry.linkWeight,
    0
  ) / totalWeight;
  const recencyScore = weightedScores.reduce(
    (sum, entry) => sum + entry.recencyScore * entry.linkWeight,
    0
  ) / totalWeight;
  const score = Math.min(1, Math.max(0, weaknessScore * 0.65 + recencyScore * 0.25 + random() * 0.1));
  const primarySkill = weightedScores.find((entry) => entry.role === "primary") || weightedScores[0];
  return {
    drillId: drill.drillId,
    score,
    weaknessScore,
    recencyScore,
    primarySkillId: primarySkill?.skillId || getPrimarySkillId(drill),
    familyKey: getDrillFamilyKey(drill, skillMetadataById),
    skills: weightedScores
  };
}
function applyNoveltyFloor(scoredDrills, noveltyFloorCount = 0) {
  const floorCount = Math.max(0, Number.parseInt(noveltyFloorCount, 10) || 0);
  if (!floorCount || scoredDrills.length <= 1) {
    return [...scoredDrills].sort((left, right) => {
      if (right.score === left.score) {
        return String(left.drillId).localeCompare(String(right.drillId));
      }
      return right.score - left.score;
    });
  }
  const remaining = [...scoredDrills].sort((left, right) => {
    if (right.score === left.score) {
      return String(left.drillId).localeCompare(String(right.drillId));
    }
    return right.score - left.score;
  });
  const selected = [];
  const usedFamilies = /* @__PURE__ */ new Set();
  const usedSkills = /* @__PURE__ */ new Set();
  const targetCount = Math.min(floorCount, remaining.length);
  while (selected.length < targetCount && remaining.length) {
    const familyFresh = remaining.find((entry) => !usedFamilies.has(entry.familyKey));
    const skillFresh = remaining.find((entry) => !usedSkills.has(entry.primarySkillId));
    const nextCandidate = familyFresh || skillFresh || remaining[0];
    const index = remaining.indexOf(nextCandidate);
    if (index >= 0) {
      remaining.splice(index, 1);
    } else {
      remaining.shift();
    }
    selected.push(nextCandidate);
    usedFamilies.add(nextCandidate.familyKey);
    usedSkills.add(nextCandidate.primarySkillId);
  }
  return selected.concat(remaining);
}
function scoreDrillsForStudent$1(drills, studentSummary = null, options = {}) {
  const random = options.random || Math.random;
  const skillMetadataById = normalizeLookup(options.skillMetadataById);
  const scored = asArray$1(drills).map((drill) => ({
    drill,
    ...scoreDrillCandidate(drill, studentSummary, random, {
      skillMetadataById,
      now: options.now
    }),
    variety: random()
  }));
  const ranked = scored.sort((left, right) => {
    const leftCombined = left.score * 0.7 + left.variety * 0.3;
    const rightCombined = right.score * 0.7 + right.variety * 0.3;
    if (rightCombined === leftCombined) {
      return String(left.drillId).localeCompare(String(right.drillId));
    }
    return rightCombined - leftCombined;
  });
  const uniqueRanked = dedupeByKey(ranked, (entry) => getDrillRepeatKey(entry.drill));
  return applyNoveltyFloor(uniqueRanked, options.noveltyFloorCount).map((entry) => entry.drill);
}
function buildPracticeMixSummary$1(drills, options = {}) {
  const skillMetadataById = normalizeLookup(options.skillMetadataById);
  const previewCount = Math.min(
    Math.max(0, Number.parseInt(options.previewCount || options.noveltyFloorCount || "0", 10) || 0),
    asArray$1(drills).length
  );
  const ordered = asArray$1(drills);
  const previewDrills = previewCount ? ordered.slice(0, previewCount) : ordered.slice(0, Math.min(ordered.length, 5));
  const primarySkillCounts = /* @__PURE__ */ new Map();
  const familyCounts = /* @__PURE__ */ new Map();
  previewDrills.forEach((drill) => {
    const primarySkillId = getPrimarySkillId(drill);
    const familyKey = getDrillFamilyKey(drill, skillMetadataById);
    primarySkillCounts.set(primarySkillId, (primarySkillCounts.get(primarySkillId) || 0) + 1);
    familyCounts.set(familyKey, (familyCounts.get(familyKey) || 0) + 1);
  });
  const toTopCounts = (counts) => [...counts.entries()].map(([key, count]) => ({ key, count })).sort((left, right) => right.count - left.count || String(left.key).localeCompare(String(right.key))).slice(0, 5);
  return {
    previewCount: previewDrills.length,
    distinctPrimarySkills: primarySkillCounts.size,
    distinctSkillFamilies: familyCounts.size,
    topPrimarySkills: toTopCounts(primarySkillCounts),
    topSkillFamilies: toTopCounts(familyCounts)
  };
}
function buildClusterSignature(skillClusters = []) {
  return [...new Set(asArray$1(skillClusters).map((cluster) => String(cluster).trim()).filter(Boolean))].sort().join(",");
}
function filterDrillsByClusters(drills, selectedClusters = []) {
  return drillSelection.filterDrills(drills, { skillClusters: selectedClusters });
}
function buildScopeSignature$1(scope = {}) {
  return drillSelection.buildSelectionSignature(scope);
}
function filterDrillsByScope$1(drills, scope = {}, skillMetadataById = null) {
  return drillSelection.filterDrills(drills, {
    ...scope,
    skillMetadataById
  });
}
function splitSessionDrills$1(drills, sliceSize = 5, reserveSize = 3) {
  const size = Math.max(1, Number.parseInt(sliceSize, 10) || 5);
  const reserve = Math.max(0, Number.parseInt(reserveSize, 10) || 0);
  return {
    visibleDrills: drills.slice(0, size),
    reserveDrills: drills.slice(size, size + reserve),
    remainingDrills: drills.slice(size + reserve)
  };
}
module$2.exports = {
  buildClusterSignature,
  buildScopeSignature: buildScopeSignature$1,
  buildPracticeMixSummary: buildPracticeMixSummary$1,
  buildStudentPerformanceSummary: buildStudentPerformanceSummary$1,
  applyNoveltyFloor,
  dedupeByKey,
  filterDrillsByClusters,
  filterDrillsByScope: filterDrillsByScope$1,
  getDrillRepeatKey,
  scoreDrillCandidate,
  scoreDrillsForStudent: scoreDrillsForStudent$1,
  scoreSkillRecency,
  splitSessionDrills: splitSessionDrills$1
};
const __CJS__export_default__$1 = (module$2.exports == null ? {} : module$2.exports).default || module$2.exports;
const practicePlanningModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__$1
}, Symbol.toStringTag, { value: "Module" }));
var module$1 = { exports: {} };
const DEFAULT_LOW_DATA_FLOOR = 3;
function asArray(value) {
  return Array.isArray(value) ? value : [];
}
function asMap(value) {
  if (!value) {
    return /* @__PURE__ */ new Map();
  }
  if (value instanceof Map) {
    return value;
  }
  if (typeof value === "object") {
    return new Map(Object.entries(value).map(([key, entry]) => [String(key), entry]));
  }
  return /* @__PURE__ */ new Map();
}
function getWindowAccuracy(window2 = null) {
  if (!window2 || !Number.isFinite(Number(window2.n)) || Number(window2.n) <= 0) {
    return null;
  }
  return Number(window2.correct || 0) / Number(window2.n || 1);
}
function getRecentTrend(entry = null) {
  const windows = asArray(entry?.recentWindows);
  if (windows.length < 2) {
    return "steady";
  }
  const latest = windows[windows.length - 1];
  const previous = windows[windows.length - 2];
  const latestAccuracy = getWindowAccuracy(latest);
  const previousAccuracy = getWindowAccuracy(previous);
  if (latestAccuracy === null || previousAccuracy === null) {
    return "steady";
  }
  if (latestAccuracy >= previousAccuracy + 0.15) {
    return "improving";
  }
  if (latestAccuracy <= previousAccuracy - 0.15) {
    return "slipping";
  }
  return "steady";
}
function getConfidenceLabel(attempts = 0) {
  if (attempts < 3) {
    return "low";
  }
  if (attempts < 6) {
    return "building";
  }
  if (attempts < 12) {
    return "solid";
  }
  return "strong";
}
function summarizeSkillProgress(skillRowOrEntry = null) {
  const rawWindows = asArray(skillRowOrEntry?.recentWindows);
  const windows = rawWindows.filter((window2) => Number(window2?.n) > 0);
  const recentWindow = rawWindows.length ? rawWindows[rawWindows.length - 1] : null;
  const previousWindow = rawWindows.length > 1 ? rawWindows[rawWindows.length - 2] : null;
  const hasEnoughWindowData = windows.length >= 2;
  const previousAccuracy = hasEnoughWindowData ? getWindowAccuracy(windows[windows.length - 2]) : null;
  const recentAccuracy = hasEnoughWindowData ? getWindowAccuracy(windows[windows.length - 1]) : null;
  const accuracyDelta = previousAccuracy !== null && recentAccuracy !== null ? recentAccuracy - previousAccuracy : null;
  const trend = hasEnoughWindowData ? getRecentTrend({ recentWindows: windows }) : "steady";
  if (!hasEnoughWindowData) {
    return {
      trend: "steady",
      label: "Needs more attempts",
      message: "More attempts are needed before a trend is reliable.",
      previousAccuracy,
      recentAccuracy,
      accuracyDelta,
      previousWindow,
      recentWindow,
      hasEnoughWindowData: false
    };
  }
  if (trend === "improving") {
    return {
      trend,
      label: "Improving",
      message: "Recent accuracy is up from the previous practice window.",
      previousAccuracy,
      recentAccuracy,
      accuracyDelta,
      previousWindow,
      recentWindow,
      hasEnoughWindowData: true
    };
  }
  if (trend === "slipping") {
    return {
      trend,
      label: "Slipping",
      message: "Recent accuracy is down from the previous practice window.",
      previousAccuracy,
      recentAccuracy,
      accuracyDelta,
      previousWindow,
      recentWindow,
      hasEnoughWindowData: true
    };
  }
  return {
    trend: "steady",
    label: "Steady recently",
    message: "Recent accuracy is about the same as the previous practice window.",
    previousAccuracy,
    recentAccuracy,
    accuracyDelta,
    previousWindow,
    recentWindow,
    hasEnoughWindowData: true
  };
}
function getClassShape(statusSummary = {}, studentCount = 0) {
  const count = Math.max(0, Number(studentCount) || 0);
  const newCount = Number(statusSummary?.new || 0);
  const readyForReviewCount = Number(statusSummary?.readyForReview || 0);
  const steadyCount = Number(statusSummary?.steady || 0);
  if (count > 0 && newCount / count >= 0.35) {
    return {
      key: "still_gathering_data",
      label: "Still gathering data",
      message: "A large share of students still need more attempts before patterns are reliable."
    };
  }
  if (count > 0 && readyForReviewCount / count >= 0.3) {
    return {
      key: "review_heavy_class",
      label: "Review-heavy class",
      message: "Several students are ready for focused review."
    };
  }
  if (count > 0 && steadyCount / count >= 0.5) {
    return {
      key: "mostly_steady",
      label: "Mostly steady",
      message: "Most students with data are showing steady performance."
    };
  }
  return {
    key: "mixed_progress",
    label: "Mixed progress",
    message: count > 0 ? "The class has a mix of steady, improving, and review-ready students." : "No student summaries are available yet."
  };
}
function getSkillStatusPriority(status = "") {
  const priorityOrder = {
    "ready for review": 0,
    improving: 1,
    emerging: 2,
    steady: 3,
    new: 4
  };
  return priorityOrder[String(status)] ?? 5;
}
function buildGroupedRollups(studentRows = [], resolveGroup = () => ({}), idKey = "groupId", nameKey = "groupName") {
  const groupMap = /* @__PURE__ */ new Map();
  studentRows.forEach((studentRow) => {
    const studentId = String(studentRow?.studentId || "");
    const skillRows = asArray(studentRow?.skillRows);
    const groupFlags = /* @__PURE__ */ new Map();
    skillRows.forEach((skillRow) => {
      const group = resolveGroup(skillRow) || {};
      const groupId = String(group.groupId || "").trim() || "uncategorized";
      const groupName = group.groupName || groupId;
      const skillId = String(skillRow?.skillId || "");
      const attempts = Number(skillRow?.attempts || 0);
      const correct = Number(skillRow?.correct || 0);
      const status = String(skillRow?.status || "");
      if (!groupMap.has(groupId)) {
        groupMap.set(groupId, {
          groupId,
          groupName,
          attempts: 0,
          correct: 0,
          studentIds: /* @__PURE__ */ new Set(),
          studentsNeedingReview: /* @__PURE__ */ new Set(),
          studentsImproving: /* @__PURE__ */ new Set(),
          studentsNeedingData: /* @__PURE__ */ new Set(),
          readyForReviewSkillIds: /* @__PURE__ */ new Set(),
          emergingSkillIds: /* @__PURE__ */ new Set(),
          skillMap: /* @__PURE__ */ new Map()
        });
      }
      const groupEntry = groupMap.get(groupId);
      groupEntry.groupName = groupEntry.groupName || groupName;
      groupEntry.studentIds.add(studentId);
      groupEntry.attempts += attempts;
      groupEntry.correct += correct;
      if (!groupEntry.skillMap.has(skillId)) {
        groupEntry.skillMap.set(skillId, {
          skillId,
          displayName: skillRow?.displayName || skillId,
          unitId: skillRow?.unitId || "",
          unitName: skillRow?.unitName || "",
          topicId: skillRow?.topicId || "",
          topicName: skillRow?.topicName || "",
          studentIds: /* @__PURE__ */ new Set(),
          attempts: 0,
          correct: 0
        });
      }
      const skill = groupEntry.skillMap.get(skillId);
      skill.displayName = skill.displayName || skillRow?.displayName || skillId;
      skill.unitId = skill.unitId || skillRow?.unitId || "";
      skill.unitName = skill.unitName || skillRow?.unitName || "";
      skill.topicId = skill.topicId || skillRow?.topicId || "";
      skill.topicName = skill.topicName || skillRow?.topicName || "";
      skill.studentIds.add(studentId);
      skill.attempts += attempts;
      skill.correct += correct;
      if (status === "ready for review") {
        groupEntry.readyForReviewSkillIds.add(skillId);
        groupFlags.set(groupId, {
          readyForReview: true,
          improving: groupFlags.get(groupId)?.improving || false,
          newData: groupFlags.get(groupId)?.newData || false
        });
        skill.needsReviewStudentIds = skill.needsReviewStudentIds || /* @__PURE__ */ new Set();
        skill.needsReviewStudentIds.add(studentId);
      } else if (status === "emerging") {
        groupEntry.emergingSkillIds.add(skillId);
      }
      if (!groupFlags.has(groupId)) {
        groupFlags.set(groupId, { readyForReview: false, improving: false, newData: false });
      }
      const nextFlags = groupFlags.get(groupId);
      if (status === "improving") {
        nextFlags.improving = true;
      }
      if (status === "new") {
        nextFlags.newData = true;
      }
      groupFlags.set(groupId, nextFlags);
    });
    groupFlags.forEach((flags, groupId) => {
      const groupEntry = groupMap.get(groupId);
      if (!groupEntry) {
        return;
      }
      if (flags.readyForReview) {
        groupEntry.studentsNeedingReview.add(studentId);
      }
      if (flags.improving) {
        groupEntry.studentsImproving.add(studentId);
      }
      if (flags.newData) {
        groupEntry.studentsNeedingData.add(studentId);
      }
    });
  });
  return [...groupMap.values()].map((cluster) => {
    const topReviewSkills = [...cluster.skillMap.values()].map((skill) => ({
      skillId: skill.skillId,
      displayName: skill.displayName || skill.skillId,
      unitId: skill.unitId || "",
      unitName: skill.unitName || "",
      topicId: skill.topicId || "",
      topicName: skill.topicName || "",
      studentCount: skill.studentIds.size,
      attempts: skill.attempts,
      averageAccuracy: skill.attempts > 0 ? skill.correct / skill.attempts : null,
      needsReviewStudentCount: skill.needsReviewStudentIds ? skill.needsReviewStudentIds.size : 0
    })).sort((left, right) => {
      if ((right.needsReviewStudentCount || 0) !== (left.needsReviewStudentCount || 0)) {
        return (right.needsReviewStudentCount || 0) - (left.needsReviewStudentCount || 0);
      }
      const leftAccuracy = left.averageAccuracy === null ? Number.POSITIVE_INFINITY : left.averageAccuracy;
      const rightAccuracy = right.averageAccuracy === null ? Number.POSITIVE_INFINITY : right.averageAccuracy;
      if (leftAccuracy !== rightAccuracy) {
        return leftAccuracy - rightAccuracy;
      }
      if (right.attempts !== left.attempts) {
        return right.attempts - left.attempts;
      }
      return String(left.displayName || left.skillId).localeCompare(String(right.displayName || right.skillId));
    }).slice(0, 3).map(({ needsReviewStudentCount, ...skill }) => skill);
    return {
      [idKey]: cluster.groupId,
      [nameKey]: cluster.groupName || cluster.groupId,
      attempts: cluster.attempts,
      studentCount: cluster.studentIds.size,
      averageAccuracy: cluster.attempts > 0 ? cluster.correct / cluster.attempts : null,
      studentsNeedingReview: cluster.studentsNeedingReview.size,
      studentsImproving: cluster.studentsImproving.size,
      studentsNeedingData: cluster.studentsNeedingData.size,
      readyForReviewSkillCount: cluster.readyForReviewSkillIds.size,
      emergingSkillCount: cluster.emergingSkillIds.size,
      topReviewSkills
    };
  }).sort((left, right) => {
    if (right.studentsNeedingReview !== left.studentsNeedingReview) {
      return right.studentsNeedingReview - left.studentsNeedingReview;
    }
    if (right.attempts !== left.attempts) {
      return right.attempts - left.attempts;
    }
    return String(left[nameKey] || left[idKey]).localeCompare(String(right[nameKey] || right[idKey]));
  });
}
function buildClusterRollups(studentRows = []) {
  return buildGroupedRollups(
    studentRows,
    (skillRow) => ({
      groupId: skillRow?.clusterId || skillRow?.skillFamilyId || "uncategorized",
      groupName: skillRow?.clusterName || skillRow?.skillFamilyName || skillRow?.clusterId || skillRow?.skillFamilyId || "uncategorized"
    }),
    "clusterId",
    "clusterName"
  );
}
function buildCourseUnitRollups(studentRows = []) {
  return buildGroupedRollups(
    studentRows,
    (skillRow) => ({
      groupId: skillRow?.unitId || "uncategorized",
      groupName: skillRow?.unitName || skillRow?.unitId || "uncategorized"
    }),
    "unitId",
    "unitName"
  );
}
function buildTopicRollups(studentRows = []) {
  return buildGroupedRollups(
    studentRows,
    (skillRow) => ({
      groupId: skillRow?.topicId || "uncategorized",
      groupName: skillRow?.topicName || skillRow?.topicId || "uncategorized"
    }),
    "topicId",
    "topicName"
  );
}
function classifySkillStatus(entry = null, options = {}) {
  const lowDataFloor = Number.isFinite(Number(options.lowDataFloor)) ? Number(options.lowDataFloor) : DEFAULT_LOW_DATA_FLOOR;
  const attempts = Number(entry?.attempts || 0);
  const smoothedErrorRate = Number.isFinite(Number(entry?.smoothedErrorRate)) ? Number(entry.smoothedErrorRate) : 0.5;
  const trend = getRecentTrend(entry);
  if (attempts < lowDataFloor) {
    return {
      status: "new",
      trend,
      needsMoreData: true,
      confidence: getConfidenceLabel(attempts)
    };
  }
  if (trend === "improving" && smoothedErrorRate > 0.25) {
    return {
      status: "improving",
      trend,
      needsMoreData: false,
      confidence: getConfidenceLabel(attempts)
    };
  }
  if (smoothedErrorRate >= 0.5) {
    return {
      status: "ready for review",
      trend,
      needsMoreData: false,
      confidence: getConfidenceLabel(attempts)
    };
  }
  if (smoothedErrorRate <= 0.25) {
    return {
      status: "steady",
      trend,
      needsMoreData: false,
      confidence: getConfidenceLabel(attempts)
    };
  }
  return {
    status: "emerging",
    trend,
    needsMoreData: false,
    confidence: getConfidenceLabel(attempts)
  };
}
function buildSkillAnalyticsRows(summary = null, metadataById = /* @__PURE__ */ new Map(), options = {}) {
  const lookup = asMap(metadataById);
  const skillEntries = Object.entries(summary?.skills || {}).map(([skillId, entry]) => {
    const metadata = lookup.get(skillId) || {};
    const classification = classifySkillStatus(entry, options);
    const accuracy = Number.isFinite(Number(entry.correct)) && Number.isFinite(Number(entry.attempts)) && Number(entry.attempts) > 0 ? Number(entry.correct) / Number(entry.attempts) : null;
    const taxonomyState = String(entry.taxonomyState || "current").trim() || "current";
    const displayName = taxonomyState === "current" ? metadata.displayName || entry.displayName || skillId : entry.displayName || metadata.displayName || skillId;
    return {
      skillId,
      displayName,
      skillFamilyId: entry.skillFamilyId || metadata.skillFamilyId || "",
      skillFamilyName: entry.skillFamilyName || metadata.skillFamilyName || "",
      clusterId: entry.clusterId || metadata.clusterId || "",
      clusterName: entry.clusterName || metadata.clusterName || "",
      unitId: entry.unitId || metadata.unitId || "",
      unitName: entry.unitName || metadata.unitName || "",
      topicId: entry.topicId || metadata.topicId || "",
      topicName: entry.topicName || metadata.topicName || "",
      cedAlignment: entry.cedAlignment || metadata.cedAlignment || "",
      cedTopicNumber: entry.cedTopicNumber || metadata.cedTopicNumber || "",
      cedPage: Number(entry.cedPage || metadata.cedPage || 0),
      attempts: Number(entry.attempts || 0),
      correct: Number(entry.correct || 0),
      incorrect: Number(entry.incorrect || 0),
      firstCorrect: Number(entry.firstCorrect || 0),
      hintedAttempts: Number(entry.hintedAttempts || 0),
      hintCount: Number(entry.hintCount || 0),
      answerRevealed: Number(entry.answerRevealed || 0),
      skipped: Number(entry.skipped || 0),
      accuracy,
      firstAttemptAccuracy: Number(entry.attempts || 0) > 0 ? Number(entry.firstCorrect || 0) / Number(entry.attempts || 1) : null,
      hintRate: Number(entry.attempts || 0) > 0 ? Number(entry.hintedAttempts || 0) / Number(entry.attempts || 1) : null,
      answerRevealRate: Number(entry.attempts || 0) > 0 ? Number(entry.answerRevealed || 0) / Number(entry.attempts || 1) : null,
      lastAttemptAt: entry.lastAttemptAt || null,
      lastCorrectAt: entry.lastCorrectAt || null,
      recentWindows: asArray(entry.recentWindows),
      smoothedErrorRate: Number.isFinite(Number(entry.smoothedErrorRate)) ? Number(entry.smoothedErrorRate) : 0.5,
      taxonomyState,
      policyAction: String(entry.policyAction || "current").trim() || "current",
      migrationReason: String(entry.migrationReason || "").trim(),
      policyDrillIds: asArray(entry.policyDrillIds),
      progress: summarizeSkillProgress(entry),
      ...classification
    };
  });
  return skillEntries.sort((left, right) => {
    const leftPriority = getSkillStatusPriority(left.status);
    const rightPriority = getSkillStatusPriority(right.status);
    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }
    if (right.attempts !== left.attempts) {
      return right.attempts - left.attempts;
    }
    return String(left.displayName || left.skillId).localeCompare(String(right.displayName || right.skillId));
  });
}
function buildStudentAnalytics$1(summary = null, metadataById = /* @__PURE__ */ new Map(), options = {}) {
  const skillRows = buildSkillAnalyticsRows(summary, metadataById, options);
  const attempts = skillRows.reduce((sum, row) => sum + row.attempts, 0);
  const correct = skillRows.reduce((sum, row) => sum + row.correct, 0);
  const incorrect = skillRows.reduce((sum, row) => sum + row.incorrect, 0);
  const summaryTotals = summary?.totals || {};
  const firstCorrect = Number(summaryTotals.firstCorrect ?? skillRows.reduce((sum, row) => sum + row.firstCorrect, 0));
  const hintedAttempts = Number(summaryTotals.hintedAttempts ?? skillRows.reduce((sum, row) => sum + row.hintedAttempts, 0));
  const hintCount = Number(summaryTotals.hintCount ?? skillRows.reduce((sum, row) => sum + row.hintCount, 0));
  const answerRevealed = Number(summaryTotals.answerRevealed ?? skillRows.reduce((sum, row) => sum + row.answerRevealed, 0));
  const skipped = Number(summaryTotals.skipped ?? skillRows.reduce((sum, row) => sum + row.skipped, 0));
  const readyForReview = skillRows.filter((row) => row.status === "ready for review");
  const improving = skillRows.filter((row) => row.status === "improving");
  const steady = skillRows.filter((row) => row.status === "steady");
  const newSkills = skillRows.filter((row) => row.status === "new");
  const emerging = skillRows.filter((row) => row.status === "emerging");
  const confidentSkills = skillRows.filter((row) => row.confidence === "solid" || row.confidence === "strong");
  const overallStatus = attempts < (options.lowDataFloor || DEFAULT_LOW_DATA_FLOOR) ? "new" : readyForReview.length ? "ready for review" : improving.length ? "improving" : steady.length ? "steady" : "emerging";
  const focusSkills = readyForReview.length ? readyForReview.slice(0, 3) : [...emerging, ...newSkills].slice(0, 3);
  const strengthSkills = steady.slice(0, 3);
  const growthSkills = improving.slice(0, 3);
  const coverageSkills = [...confidentSkills, ...emerging, ...newSkills].slice(0, 5);
  const selectedUnitCount = Number(summaryTotals.selectedUnitCount ?? new Set(skillRows.map((row) => row.unitId).filter(Boolean)).size);
  const selectedTopicCount = Number(summaryTotals.selectedTopicCount ?? new Set(skillRows.map((row) => row.topicId).filter(Boolean)).size);
  return {
    ...summary,
    analyticsVersion: "student-analytics-v1",
    overallStatus,
    overallConfidence: getConfidenceLabel(attempts),
    lowDataFloor: Number(options.lowDataFloor || DEFAULT_LOW_DATA_FLOOR),
    totals: {
      attempts,
      correct,
      incorrect,
      accuracy: attempts > 0 ? correct / attempts : null,
      firstCorrect,
      firstAttemptAccuracy: attempts > 0 ? firstCorrect / attempts : null,
      hintedAttempts,
      hintCount,
      hintRate: attempts > 0 ? hintedAttempts / attempts : null,
      answerRevealed,
      answerRevealRate: attempts > 0 ? answerRevealed / attempts : null,
      skipped,
      activeDays: Number(summaryTotals.activeDays || 0),
      sessionCount: Number(summaryTotals.sessionCount || summary?.sessions?.count || 0),
      selectedClusterCount: Number(summaryTotals.selectedClusterCount || 0),
      selectedUnitCount,
      selectedTopicCount,
      skillCount: skillRows.length,
      confidentSkillCount: confidentSkills.length,
      readyForReviewCount: readyForReview.length,
      improvingSkillCount: improving.length
    },
    focusSkills,
    strengthSkills,
    growthSkills,
    coverageSkills,
    skillRows,
    summaryLabel: attempts < (options.lowDataFloor || DEFAULT_LOW_DATA_FLOOR) ? "Keep building your sample" : readyForReview.length ? "Time for a focused review" : improving.length ? "You are picking this up" : steady.length ? "This area looks steady" : "You are still building momentum"
  };
}
function buildClassOverview(studentRows = []) {
  const students = asArray(studentRows);
  const studentCount = students.length;
  const attempts = students.reduce((sum, row) => sum + Number(row.totals?.attempts || 0), 0);
  const correct = students.reduce((sum, row) => sum + Number(row.totals?.correct || 0), 0);
  const incorrect = students.reduce((sum, row) => sum + Number(row.totals?.incorrect || 0), 0);
  const activeLast7Days = students.filter((row) => row.lastResponseAt && Date.parse(row.lastResponseAt) >= Date.now() - 7 * 24 * 60 * 60 * 1e3).length;
  const studentsNeedingReview = students.filter((row) => row.overallStatus === "ready for review").length;
  const studentsNeedingData = students.filter((row) => row.overallStatus === "new").length;
  const studentsImproving = students.filter((row) => row.overallStatus === "improving").length;
  const studentsSteady = students.filter((row) => row.overallStatus === "steady").length;
  const studentsEmerging = students.filter((row) => row.overallStatus === "emerging").length;
  const statusSummary = {
    readyForReview: studentsNeedingReview,
    improving: studentsImproving,
    steady: studentsSteady,
    emerging: studentsEmerging,
    new: studentsNeedingData,
    needsMoreData: studentsNeedingData
  };
  return {
    studentCount,
    attempts,
    correct,
    incorrect,
    accuracy: attempts > 0 ? correct / attempts : null,
    activeLast7Days,
    studentsNeedingReview,
    studentsNeedingData,
    studentsImproving,
    studentsSteady,
    studentsEmerging,
    classShape: getClassShape(statusSummary, studentCount),
    courseUnitRollups: buildCourseUnitRollups(students),
    topicRollups: buildTopicRollups(students),
    clusterRollups: buildClusterRollups(students),
    statusSummary
  };
}
module$1.exports = {
  DEFAULT_LOW_DATA_FLOOR,
  buildClassOverview,
  buildClusterRollups,
  buildCourseUnitRollups,
  buildSkillAnalyticsRows,
  buildStudentAnalytics: buildStudentAnalytics$1,
  classifySkillStatus,
  getClassShape,
  getConfidenceLabel,
  getRecentTrend,
  getSkillStatusPriority,
  buildTopicRollups,
  summarizeSkillProgress
};
const __CJS__export_default__ = (module$1.exports == null ? {} : module$1.exports).default || module$1.exports;
const analyticsModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __CJS__export_default__
}, Symbol.toStringTag, { value: "Module" }));
const practicePlanning = __CJS__export_default__$1 || practicePlanningModule;
const analytics = __CJS__export_default__ || analyticsModule;
const attemptContext = __CJS__export_default__$2 || attemptContextModule$1;
const substitutions = __CJS__export_default__$4 || substitutionsModule;
const {
  buildPracticeMixSummary,
  buildScopeSignature,
  buildStudentPerformanceSummary,
  filterDrillsByScope,
  scoreDrillsForStudent,
  splitSessionDrills
} = practicePlanning;
const {
  buildStudentAnalytics
} = analytics;
const {
  coerceAttemptContextPayload,
  normalizeAttemptContextPayload
} = attemptContext;
const { prepareDrillForSession } = substitutions;
const PREVIEW_MODE_ERROR = "This feature is not available in the Autodrills Preview.";
const PREVIEW_APP_VERSION = "autodrills-preview";
const PREVIEW_DEPLOYMENT_FINGERPRINT = "preview-static";
const PREVIEW_WORKBOOK_SCHEMA_VERSION = "1";
const PREVIEW_CATALOG_REVISION_PREFIX = "preview-static";
const PREVIEW_PLAN_VERSION = "practice-plan-v1";
const PREVIEW_VALIDATION_VERSION = "shared-validation-v1";
const PREVIEW_DRILL_BATCH_SIZE = "5";
const PREVIEW_PREFETCH_THRESHOLD = "2";
const PREVIEW_RESERVE_SIZE = 3;
const PREVIEW_ANALYTICS_LOW_DATA_FLOOR = 3;
const PREVIEW_STUDENT_ID_STORAGE_KEY = "autodrills.preview.student-id";
const PREVIEW_SUMMARY_FRESHNESS = {
  status: "preview-static",
  lastSummaryUpdatedAt: null,
  lastResponseAt: null
};
const sessionStore = /* @__PURE__ */ new Map();
let previewStudentIdCache = null;
function previewModeError() {
  throw new Error(PREVIEW_MODE_ERROR);
}
function unsupportedPreviewMethod() {
  previewModeError();
}
function cloneValue(value) {
  if (value === void 0) {
    return void 0;
  }
  if (typeof structuredClone === "function") {
    try {
      return structuredClone(value);
    } catch {
    }
  }
  return JSON.parse(JSON.stringify(value));
}
function generateId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function normalizeText(value, fallback = "") {
  const text = String(value ?? "").trim();
  return text || fallback;
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
function getPreviewStudentId() {
  if (previewStudentIdCache) {
    return previewStudentIdCache;
  }
  if (typeof window === "undefined") {
    previewStudentIdCache = `preview-browser-${generateId()}@autodrills.local`;
    return previewStudentIdCache;
  }
  try {
    const stored = normalizeText(window.localStorage.getItem(PREVIEW_STUDENT_ID_STORAGE_KEY), "");
    if (stored) {
      previewStudentIdCache = stored;
      return stored;
    }
    const generated = `preview-browser-${generateId()}@autodrills.local`;
    window.localStorage.setItem(PREVIEW_STUDENT_ID_STORAGE_KEY, generated);
    previewStudentIdCache = generated;
    return generated;
  } catch {
    previewStudentIdCache = `preview-browser-${generateId()}@autodrills.local`;
    return previewStudentIdCache;
  }
}
function buildCatalogUrl() {
  const configured = normalizeText(void 0, "");
  if (configured) {
    return configured;
  }
  const baseUrl = normalizeText("./", "/");
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}preview-catalog.json`;
}
async function loadPreviewCatalog() {
  const catalogUrl = buildCatalogUrl();
  let response;
  try {
    response = await fetch(catalogUrl, {
      cache: "no-store",
      headers: {
        Accept: "application/json"
      }
    });
  } catch (error) {
    throw new Error(`Failed to load the Autodrills Preview catalog from ${catalogUrl}: ${error.message}`);
  }
  const rawText = await response.text();
  if (!response.ok) {
    throw new Error(`Failed to load the Autodrills Preview catalog from ${catalogUrl} (${response.status}).`);
  }
  try {
    return JSON.parse(rawText);
  } catch (error) {
    throw new Error(`The Autodrills Preview catalog at ${catalogUrl} is not valid JSON: ${error.message}`);
  }
}
function buildUnitById(catalog = {}) {
  return new Map(
    (Array.isArray(catalog.units) ? catalog.units : []).map((unit) => [String(unit.unitId || "").trim(), unit])
  );
}
function buildTopicById(catalog = {}) {
  return new Map(
    (Array.isArray(catalog.topics) ? catalog.topics : []).map((topic) => [String(topic.topicId || "").trim(), topic])
  );
}
function buildSkillMetadataById(catalog = {}) {
  const unitById = buildUnitById(catalog);
  const topicById = buildTopicById(catalog);
  return new Map(
    (Array.isArray(catalog.skills) ? catalog.skills : []).map((skill) => {
      const skillId = normalizeText(skill.skillId);
      if (!skillId) {
        return null;
      }
      const unit = unitById.get(normalizeText(skill.unitId)) || {};
      const topic = topicById.get(normalizeText(skill.topicId)) || {};
      return [
        skillId,
        {
          skillFamilyId: skillId,
          skillFamilyName: normalizeText(skill.displayName, skillId),
          clusterId: normalizeText(skill.unitId),
          unitId: normalizeText(skill.unitId),
          unitName: normalizeText(unit.unitName),
          topicId: normalizeText(skill.topicId),
          topicName: normalizeText(topic.topicName),
          displayName: normalizeText(skill.displayName, skillId)
        }
      ];
    }).filter(Boolean)
  );
}
function buildSkillClusters(catalog = {}, skillMetadataById = /* @__PURE__ */ new Map()) {
  const unitCounts = /* @__PURE__ */ new Map();
  (Array.isArray(catalog.skills) ? catalog.skills : []).forEach((skill) => {
    const unitId = normalizeText(skill.unitId);
    if (!unitId) {
      return;
    }
    unitCounts.set(unitId, (unitCounts.get(unitId) || 0) + 1);
  });
  return (Array.isArray(catalog.units) ? catalog.units : []).map((unit) => {
    const unitId = normalizeText(unit.unitId);
    return {
      name: unitId,
      displayName: normalizeText(unit.unitName, unitId),
      description: `${normalizeText(unit.unitName, unitId)} preview cluster`,
      count: unitCounts.get(unitId) || 0
    };
  }).filter((unit) => unit.name);
}
function buildSkillFamilies(catalog = {}, skillMetadataById = /* @__PURE__ */ new Map()) {
  return (Array.isArray(catalog.skills) ? catalog.skills : []).map((skill) => {
    const skillId = normalizeText(skill.skillId);
    if (!skillId) {
      return null;
    }
    const metadata = skillMetadataById.get(skillId) || {};
    return {
      skillFamilyId: metadata.skillFamilyId || skillId,
      skillFamilyName: metadata.skillFamilyName || normalizeText(skill.displayName, skillId),
      clusterId: metadata.clusterId || normalizeText(skill.unitId),
      unitId: metadata.unitId || normalizeText(skill.unitId),
      unitName: metadata.unitName || "",
      topicId: metadata.topicId || normalizeText(skill.topicId),
      topicName: metadata.topicName || ""
    };
  }).filter(Boolean);
}
function buildSkillCoverage(catalog = {}, skillMetadataById = /* @__PURE__ */ new Map()) {
  const drillCounts = /* @__PURE__ */ new Map();
  (Array.isArray(catalog.drills) ? catalog.drills : []).forEach((drill) => {
    const skillId = normalizeText(drill.skillId);
    if (!skillId) {
      return;
    }
    drillCounts.set(skillId, (drillCounts.get(skillId) || 0) + 1);
  });
  return (Array.isArray(catalog.skills) ? catalog.skills : []).map((skill) => {
    const skillId = normalizeText(skill.skillId);
    if (!skillId) {
      return null;
    }
    const metadata = skillMetadataById.get(skillId) || {};
    return {
      skillId,
      displayName: metadata.displayName || normalizeText(skill.displayName, skillId),
      drillCount: drillCounts.get(skillId) || 0,
      unitId: metadata.unitId || normalizeText(skill.unitId),
      unitName: metadata.unitName || "",
      topicId: metadata.topicId || normalizeText(skill.topicId),
      topicName: metadata.topicName || ""
    };
  }).filter(Boolean);
}
function buildCourseUnits(catalog = {}) {
  return cloneValue(Array.isArray(catalog.units) ? catalog.units : []);
}
function buildSkillTopics(catalog = {}) {
  return cloneValue(Array.isArray(catalog.topics) ? catalog.topics : []);
}
function buildPreviewConfig(catalog = {}) {
  const versionToken = normalizeText(catalog.version, "1.0.0");
  const generatedAtToken = normalizeText(catalog.generatedAt, "unknown");
  return {
    WorkbookSchemaVersion: PREVIEW_WORKBOOK_SCHEMA_VERSION,
    CatalogRevision: `${PREVIEW_CATALOG_REVISION_PREFIX}-${versionToken}-${generatedAtToken}`,
    PracticePlanVersion: PREVIEW_PLAN_VERSION,
    ValidationVersion: PREVIEW_VALIDATION_VERSION,
    AppVersion: PREVIEW_APP_VERSION,
    DrillBatchSize: PREVIEW_DRILL_BATCH_SIZE,
    PrefetchThreshold: PREVIEW_PREFETCH_THRESHOLD
  };
}
function enrichPreviewDrill(catalog = {}, drill = {}, skillMetadataById = null) {
  const metadataLookup = skillMetadataById || buildSkillMetadataById(catalog);
  const skillId = normalizeText(drill.skillId);
  const metadata = metadataLookup.get(skillId) || {};
  const catalogVersion = getCatalogVersion(catalog);
  return {
    ...cloneValue(drill),
    unitId: metadata.unitId || normalizeText(drill.unitId),
    topicId: metadata.topicId || normalizeText(drill.topicId),
    unitName: metadata.unitName || "",
    topicName: metadata.topicName || "",
    catalogVersion,
    skillCluster: metadata.clusterId || normalizeText(drill.skillCluster || drill.unitId),
    skills: [
      {
        skillId,
        role: "primary",
        displayName: metadata.displayName || skillId
      }
    ]
  };
}
function buildBootstrapEnvelope(catalog = {}) {
  const skillMetadataById = buildSkillMetadataById(catalog);
  const config = buildPreviewConfig(catalog);
  const studentId = getPreviewStudentId();
  const courseUnits = buildCourseUnits(catalog);
  const skillTopics = buildSkillTopics(catalog);
  const skills = (Array.isArray(catalog.skills) ? catalog.skills : []).map((skill) => {
    const skillId = normalizeText(skill.skillId);
    const metadata = skillMetadataById.get(skillId) || {};
    return {
      skillId,
      displayName: metadata.displayName || normalizeText(skill.displayName, skillId),
      skillFamilyId: metadata.skillFamilyId || skillId,
      skillFamilyName: metadata.skillFamilyName || normalizeText(skill.displayName, skillId),
      clusterId: metadata.clusterId || normalizeText(skill.unitId),
      unitId: metadata.unitId || normalizeText(skill.unitId),
      unitName: metadata.unitName || "",
      topicId: metadata.topicId || normalizeText(skill.topicId),
      topicName: metadata.topicName || "",
      summary: normalizeText(skill.summary),
      canonicalSnippet: normalizeText(skill.canonicalSnippet)
    };
  });
  const shellBootstrap = {
    appVersion: PREVIEW_APP_VERSION,
    deploymentFingerprint: PREVIEW_DEPLOYMENT_FINGERPRINT,
    workbookSchemaVersion: PREVIEW_WORKBOOK_SCHEMA_VERSION,
    catalogRevision: config.CatalogRevision,
    user: {
      email: studentId,
      name: "Preview Guest",
      isAdmin: false
    },
    allowedViews: ["practice"],
    allowedActions: ["practice", "recordResponse"]
  };
  const catalogBootstrap = {
    config,
    skills,
    skillClusters: buildSkillClusters(catalog, skillMetadataById),
    skillFamilies: buildSkillFamilies(catalog, skillMetadataById),
    skillCoverage: buildSkillCoverage(catalog, skillMetadataById),
    courseUnits,
    skillTopics,
    availableSkillClusters: buildSkillClusters(catalog, skillMetadataById),
    randomizationBank: cloneValue(catalog.randomizationBank || {})
  };
  const studentBootstrap = {
    studentAnalytics: null
  };
  return {
    appVersion: PREVIEW_APP_VERSION,
    deploymentFingerprint: PREVIEW_DEPLOYMENT_FINGERPRINT,
    workbookSchemaVersion: PREVIEW_WORKBOOK_SCHEMA_VERSION,
    config,
    skills,
    skillClusters: catalogBootstrap.skillClusters,
    skillFamilies: catalogBootstrap.skillFamilies,
    skillCoverage: catalogBootstrap.skillCoverage,
    courseUnits,
    skillTopics,
    availableSkillClusters: catalogBootstrap.availableSkillClusters,
    randomizationBank: catalogBootstrap.randomizationBank,
    studentId,
    user: {
      email: studentId,
      name: "Preview Guest",
      isAdmin: false
    },
    shellBootstrap,
    catalogBootstrap,
    studentBootstrap,
    studentAnalytics: null,
    adminBootstrap: null
  };
}
function buildResponseRecordId(studentId, attemptId) {
  return `${normalizeText(studentId)}:${normalizeText(attemptId)}`;
}
function normalizeStoredAttemptContext(attemptContextJson) {
  if (attemptContextJson === void 0 || attemptContextJson === null || attemptContextJson === "") {
    return null;
  }
  const coerced = coerceAttemptContextPayload(attemptContextJson);
  if (coerced.error) {
    throw new Error(`Invalid attemptContextJson payload: ${coerced.error}`);
  }
  return normalizeAttemptContextPayload(coerced.payload || {});
}
function buildPreviewResponseRecord(payload = {}, options = {}) {
  const now = options.now || (/* @__PURE__ */ new Date()).toISOString();
  const studentId = normalizeText(payload.studentId || options.studentId || getPreviewStudentId());
  const attemptId = normalizeText(payload.attemptId || options.attemptId || generateId());
  const respondedAt = normalizeText(payload.respondedAt || payload.completedAt || now, now);
  const recordId = buildResponseRecordId(studentId, attemptId);
  const attemptContextJson = normalizeStoredAttemptContext(payload.attemptContextJson || payload.attempt_context_json);
  const selectedClusterSignature = normalizeText(
    payload.selectedClusterSignature || payload.selectedScopeSignature || attemptContextJson?.selection?.selectedClusterSignature || attemptContextJson?.selection?.selectedScopeSignature
  );
  return {
    recordId,
    studentId,
    attemptId,
    drillId: normalizeText(payload.drillId),
    sourceDrillId: normalizeText(payload.sourceDrillId || payload.source_drill_id || payload.drillId),
    respondedAt,
    createdAt: normalizeText(payload.createdAt || respondedAt, respondedAt),
    updatedAt: normalizeText(payload.updatedAt || now, now),
    sessionId: normalizeText(payload.sessionId),
    planVersion: normalizeText(payload.planVersion || PREVIEW_PLAN_VERSION, PREVIEW_PLAN_VERSION),
    catalogVersion: normalizeText(payload.catalogVersion || payload.catalog_revision || ""),
    practiceMode: normalizeText(payload.practiceMode || "normal", "normal"),
    selectedClusterSignature,
    rawInput: String(payload.rawInput || ""),
    isCorrect: Boolean(payload.isCorrect),
    feedbackProvided: String(payload.feedbackProvided || ""),
    startedAt: normalizeText(payload.startedAt || respondedAt, respondedAt),
    firstSubmittedAt: normalizeText(payload.firstSubmittedAt || respondedAt, respondedAt),
    completedAt: normalizeText(payload.completedAt || respondedAt, respondedAt),
    firstRawInput: payload.firstRawInput === void 0 ? String(payload.rawInput || "") : String(payload.firstRawInput || ""),
    firstIsCorrect: Boolean(payload.firstIsCorrect === void 0 ? payload.isCorrect : payload.firstIsCorrect),
    submissionCount: Math.max(0, Number.parseInt(payload.submissionCount ?? "1", 10) || 0),
    hintCount: Math.max(0, Number.parseInt(payload.hintCount ?? "0", 10) || 0),
    allHintsRevealed: Boolean(payload.allHintsRevealed),
    answerRevealed: Boolean(payload.answerRevealed),
    validationVersion: normalizeText(payload.validationVersion || PREVIEW_VALIDATION_VERSION, PREVIEW_VALIDATION_VERSION),
    completionStatus: normalizeText(
      payload.completionStatus || (payload.answerRevealed ? "solution_revealed" : payload.isCorrect ? "correct" : "incorrect"),
      "incorrect"
    ),
    attemptContextJson
  };
}
async function withPreviewResponseDb(task) {
  if (!isIndexedDbAvailable()) {
    throw new Error("IndexedDB is not available.");
  }
  try {
    const db = await openAutodrillsDb();
    return await task(db);
  } catch (error) {
    if (!isStorageError(error)) {
      throw error;
    }
    throw error;
  }
}
async function putPreviewResponses(records = []) {
  if (!records.length) {
    return 0;
  }
  return withPreviewResponseDb(async (db) => {
    const tx = db.transaction(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.previewResponses, "readwrite");
    const store = tx.objectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.previewResponses);
    for (const record of records) {
      await store.put(cloneValue(record));
    }
    await tx.done;
    return records.length;
  });
}
async function readPreviewResponses(studentId) {
  const normalizedStudentId = normalizeText(studentId || getPreviewStudentId());
  if (!normalizedStudentId) {
    return [];
  }
  return withPreviewResponseDb(async (db) => {
    const responses = await db.getAllFromIndex(
      AUTODRILLS_BROWSER_CACHE_STORE_NAMES.previewResponses,
      "studentId",
      normalizedStudentId
    );
    return responses.map((entry) => cloneValue(entry)).sort((left, right) => String(left.respondedAt || left.createdAt || "").localeCompare(String(right.respondedAt || right.createdAt || "")));
  });
}
function buildDrillSkillMap(catalog = {}) {
  return new Map(
    (Array.isArray(catalog.drills) ? catalog.drills : []).map((drill) => [
      normalizeText(drill.drillId),
      [{
        skillId: normalizeText(drill.skillId),
        role: "primary"
      }]
    ])
  );
}
async function buildPreviewStudentAnalytics(catalog = {}, studentId = getPreviewStudentId()) {
  const skillMetadataById = buildSkillMetadataById(catalog);
  const responses = await readPreviewResponses(studentId);
  const summary = buildStudentPerformanceSummary({
    studentId,
    responses,
    drillSkillMap: buildDrillSkillMap(catalog),
    sessions: [...new Set(responses.map((response) => normalizeText(response.sessionId)).filter(Boolean))].map((sessionId) => ({ sessionId })),
    now: (/* @__PURE__ */ new Date()).toISOString(),
    knownSkillIds: Array.isArray(catalog.skills) ? catalog.skills.map((skill) => normalizeText(skill.skillId)) : []
  });
  return buildStudentAnalytics(summary, skillMetadataById, {
    lowDataFloor: PREVIEW_ANALYTICS_LOW_DATA_FLOOR
  });
}
function buildSelectionPayload(payload = {}) {
  const selectedUnitIds = normalizeStringArray(payload.selectedUnitIds || payload.unitIds || payload.selectedUnits);
  const selectedTopicIds = normalizeStringArray(payload.selectedTopicIds || payload.topicIds || payload.selectedTopics);
  const selectedSkillClusters = normalizeStringArray(
    payload.selectedSkillClusters || payload.skillClusters || payload.selectedClusters
  );
  return {
    selectedUnitIds,
    selectedTopicIds,
    selectedSkillClusters,
    selectedScopeSignature: buildScopeSignature({
      unitIds: selectedUnitIds,
      topicIds: selectedTopicIds,
      skillClusters: selectedSkillClusters
    })
  };
}
function getCatalogVersion(catalog = {}) {
  if (catalog?.config?.CatalogRevision) {
    return normalizeText(catalog.config.CatalogRevision, PREVIEW_CATALOG_REVISION_PREFIX);
  }
  if (catalog?.version || catalog?.generatedAt) {
    return buildPreviewConfig(catalog).CatalogRevision;
  }
  return PREVIEW_CATALOG_REVISION_PREFIX;
}
function preparePreviewDrills(catalog = {}, drills = []) {
  const bank = cloneValue(catalog.randomizationBank || {});
  const skillMetadataById = buildSkillMetadataById(catalog);
  return drills.map((drill) => {
    return prepareDrillForSession(
      enrichPreviewDrill(catalog, drill, skillMetadataById),
      bank
    );
  });
}
function buildSessionRecord(catalog = {}, payload = {}, preparedDrills = [], visibleDrills = [], reserveDrills = []) {
  const selection = buildSelectionPayload(payload);
  const sessionId = generateId();
  const planVersion = PREVIEW_PLAN_VERSION;
  const catalogVersion = getCatalogVersion(catalog);
  const createdAt = (/* @__PURE__ */ new Date()).toISOString();
  const targetSessionLength = Math.max(
    1,
    Number.parseInt(payload.targetSessionLength || payload.sessionLength || preparedDrills.length, 10) || preparedDrills.length
  );
  const plannedDrills = preparedDrills.slice(0, targetSessionLength);
  const plannedVisibleCount = Math.min(visibleDrills.length, plannedDrills.length);
  const plannedReserveCount = Math.min(reserveDrills.length, Math.max(plannedDrills.length - plannedVisibleCount, 0));
  const plannedVisibleDrills = plannedDrills.slice(0, plannedVisibleCount);
  const plannedReserveDrills = plannedDrills.slice(plannedVisibleCount, plannedVisibleCount + plannedReserveCount);
  const cursor = plannedVisibleDrills.length + plannedReserveDrills.length;
  const mixSummary = buildPracticeMixSummary(plannedDrills, {
    skillMetadataById: buildSkillMetadataById(catalog),
    previewCount: plannedVisibleDrills.length,
    noveltyFloorCount: Math.min(Math.max(plannedVisibleDrills.length + plannedReserveDrills.length, 1), Math.max(1, plannedDrills.length))
  });
  const record = {
    sessionId,
    studentId: "",
    clientSessionId: normalizeText(payload.clientSessionId) || sessionId,
    planVersion,
    catalogVersion,
    practiceMode: normalizeText(payload.practiceMode, "normal"),
    selectedUnitIds: selection.selectedUnitIds,
    selectedTopicIds: selection.selectedTopicIds,
    selectedSkillClusters: selection.selectedSkillClusters,
    selectedScopeSignature: selection.selectedScopeSignature,
    selectedClusterSignature: selection.selectedScopeSignature,
    selectionAlgorithmVersion: planVersion,
    createdAt,
    expiresAt: null,
    cursor,
    sliceSize: Math.max(1, Number.parseInt(payload.sliceSize || PREVIEW_DRILL_BATCH_SIZE, 10) || 5),
    reserveSize: PREVIEW_RESERVE_SIZE,
    drills: plannedDrills,
    plannedDrillCount: plannedDrills.length,
    mixSummary: {
      ...mixSummary,
      noveltyFloorCount: Math.min(Math.max(plannedVisibleDrills.length + plannedReserveDrills.length, 1), Math.max(1, plannedDrills.length)),
      visibleCount: plannedVisibleDrills.length,
      reserveCount: plannedReserveDrills.length
    },
    summaryFreshness: cloneValue(PREVIEW_SUMMARY_FRESHNESS)
  };
  sessionStore.set(sessionId, record);
  return record;
}
function getSession(sessionId) {
  return sessionStore.get(normalizeText(sessionId)) || null;
}
function assertSessionCompatible(session, payload, currentCatalogVersion) {
  if (!session) {
    const error = new Error("Practice session not found.");
    error.statusCode = 409;
    throw error;
  }
  if (payload.planVersion && payload.planVersion !== session.planVersion) {
    const error = new Error("Practice session plan version mismatch.");
    error.statusCode = 409;
    throw error;
  }
  if (payload.cursor !== void 0 && Number(payload.cursor) !== session.cursor) {
    const error = new Error("Practice session cursor mismatch.");
    error.statusCode = 409;
    throw error;
  }
  if (session.catalogVersion !== currentCatalogVersion) {
    const error = new Error("Practice session catalog version changed.");
    error.statusCode = 409;
    throw error;
  }
  if (payload.selectedClusterSignature && payload.selectedClusterSignature !== session.selectedClusterSignature) {
    const error = new Error("Practice session cluster selection changed.");
    error.statusCode = 409;
    throw error;
  }
  if (payload.selectedScopeSignature && payload.selectedScopeSignature !== session.selectedScopeSignature) {
    const error = new Error("Practice session scope selection changed.");
    error.statusCode = 409;
    throw error;
  }
}
async function bootstrapApp() {
  const catalog = await loadPreviewCatalog();
  const envelope = buildBootstrapEnvelope(catalog);
  try {
    const studentAnalytics = await buildPreviewStudentAnalytics(catalog, envelope.studentId);
    return {
      ...envelope,
      studentAnalytics,
      studentBootstrap: {
        studentAnalytics
      }
    };
  } catch {
    return envelope;
  }
}
async function fetchPracticeBatch(payload = {}) {
  const catalog = await loadPreviewCatalog();
  const skillMetadataById = buildSkillMetadataById(catalog);
  const enrichedDrills = (Array.isArray(catalog.drills) ? catalog.drills : []).map(
    (drill) => enrichPreviewDrill(catalog, drill, skillMetadataById)
  );
  const filteredDrills = filterDrillsByScope(enrichedDrills, {
    skillClusters: payload.skillClusters,
    unitIds: payload.unitIds || payload.selectedUnitIds,
    topicIds: payload.topicIds || payload.selectedTopicIds,
    drillId: payload.drillId
  }, skillMetadataById);
  const batchSize = Math.max(1, Number.parseInt(payload.count || PREVIEW_DRILL_BATCH_SIZE, 10) || 5);
  const orderedDrills = scoreDrillsForStudent(filteredDrills, null, {
    random: Math.random,
    skillMetadataById,
    noveltyFloorCount: Math.min(batchSize, filteredDrills.length)
  });
  const batch = payload.fetchAll ? orderedDrills : orderedDrills.slice(0, Math.min(batchSize, orderedDrills.length));
  return preparePreviewDrills(catalog, batch);
}
async function startPracticeSession(payload = {}) {
  const catalog = await loadPreviewCatalog();
  const selection = buildSelectionPayload(payload);
  const skillMetadataById = buildSkillMetadataById(catalog);
  const enrichedDrills = (Array.isArray(catalog.drills) ? catalog.drills : []).map(
    (drill) => enrichPreviewDrill(catalog, drill, skillMetadataById)
  );
  const filteredDrills = filterDrillsByScope(enrichedDrills, {
    skillClusters: selection.selectedSkillClusters,
    unitIds: selection.selectedUnitIds,
    topicIds: selection.selectedTopicIds,
    drillId: payload.drillId
  }, skillMetadataById);
  const orderedDrills = scoreDrillsForStudent(filteredDrills, null, {
    random: Math.random,
    skillMetadataById,
    noveltyFloorCount: Math.min(
      Math.max(Number.parseInt(payload.sliceSize || PREVIEW_DRILL_BATCH_SIZE, 10) || 5, PREVIEW_RESERVE_SIZE),
      Math.max(1, filteredDrills.length)
    )
  });
  const preparedDrills = preparePreviewDrills(catalog, orderedDrills);
  const sliceSize = Math.max(1, Number.parseInt(payload.sliceSize || PREVIEW_DRILL_BATCH_SIZE, 10) || 5);
  const reserveSize = Math.min(PREVIEW_RESERVE_SIZE, sliceSize);
  const targetSessionLength = Math.max(
    1,
    Number.parseInt(payload.targetSessionLength || payload.sessionLength || preparedDrills.length, 10) || preparedDrills.length
  );
  const plannedDrills = preparedDrills.slice(0, targetSessionLength);
  const { visibleDrills, reserveDrills, remainingDrills } = splitSessionDrills(plannedDrills, sliceSize, reserveSize);
  const session = buildSessionRecord(catalog, payload, plannedDrills, visibleDrills, reserveDrills);
  return {
    sessionId: session.sessionId,
    planVersion: session.planVersion,
    catalogVersion: session.catalogVersion,
    selectedScopeSignature: session.selectedScopeSignature,
    selectedClusterSignature: session.selectedClusterSignature,
    selectedUnitIds: session.selectedUnitIds,
    selectedTopicIds: session.selectedTopicIds,
    cursor: session.cursor,
    remainingPlannedCount: Math.max(session.drills.length - session.cursor, 0),
    summaryFreshness: session.summaryFreshness,
    mixSummary: session.mixSummary,
    drills: visibleDrills,
    reserveDrills,
    remainingDrills
  };
}
async function fetchPracticeSessionSlice(payload = {}) {
  const catalog = await loadPreviewCatalog();
  const session = getSession(payload.sessionId);
  const currentCatalogVersion = getCatalogVersion({ config: buildPreviewConfig(catalog) });
  assertSessionCompatible(session, payload, currentCatalogVersion);
  const sliceSize = Math.max(1, Number.parseInt(payload.sliceSize || session.sliceSize, 10) || session.sliceSize || 5);
  const startIndex = session.cursor;
  const endIndex = Math.min(session.cursor + sliceSize, session.drills.length);
  const drills = session.drills.slice(startIndex, endIndex);
  const reserveStart = endIndex;
  const reserveEnd = Math.min(reserveStart + session.reserveSize, session.drills.length);
  const reserveDrills = session.drills.slice(reserveStart, reserveEnd);
  session.cursor = reserveEnd;
  session.lastAccessedAt = (/* @__PURE__ */ new Date()).toISOString();
  return {
    sessionId: session.sessionId,
    planVersion: session.planVersion,
    cursor: session.cursor,
    remainingPlannedCount: Math.max(session.drills.length - session.cursor, 0),
    summaryFreshness: session.summaryFreshness,
    mixSummary: session.mixSummary,
    drills,
    reserveDrills
  };
}
async function recordResponse(payload = {}) {
  const catalog = await loadPreviewCatalog();
  const record = buildPreviewResponseRecord(payload, { studentId: payload.studentId || getPreviewStudentId() });
  if (!record.catalogVersion) {
    record.catalogVersion = getCatalogVersion(catalog);
  }
  await putPreviewResponses([record]);
  return { recorded: true, recordId: record.recordId, attemptId: record.attemptId };
}
async function recordResponseBatch(payload = {}) {
  const catalog = await loadPreviewCatalog();
  const responses = Array.isArray(payload.responses) ? payload.responses : [];
  const records = responses.map(
    (response) => buildPreviewResponseRecord(response, { studentId: response.studentId || getPreviewStudentId() })
  );
  records.forEach((record) => {
    if (!record.catalogVersion) {
      record.catalogVersion = getCatalogVersion(catalog);
    }
  });
  await putPreviewResponses(records);
  return { recordedCount: records.length };
}
async function fetchStudentAnalytics(payload = {}) {
  const catalog = await loadPreviewCatalog();
  const studentId = normalizeText(payload.studentId || getPreviewStudentId());
  return buildPreviewStudentAnalytics(catalog, studentId);
}
async function resetPreviewProgress() {
  sessionStore.clear();
  if (typeof window !== "undefined") {
    try {
      const db = await openAutodrillsDb();
      const tx = db.transaction(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.previewResponses, "readwrite");
      await tx.objectStore(AUTODRILLS_BROWSER_CACHE_STORE_NAMES.previewResponses).clear();
      await tx.done;
    } catch (error) {
      if (!isStorageError(error)) {
        throw error;
      }
    }
  }
  previewStudentIdCache = null;
  return { cleared: true };
}
const previewStatic = {
  bootstrapApp,
  fetchPracticeBatch,
  startPracticeSession,
  fetchPracticeSessionSlice,
  recordResponse,
  recordResponseBatch,
  fetchStudentAnalytics,
  resetPreviewProgress,
  fetchSkills() {
    return unsupportedPreviewMethod();
  },
  fetchSkillCoverage() {
    return unsupportedPreviewMethod();
  },
  fetchSkillPerformance() {
    return unsupportedPreviewMethod();
  },
  fetchTeacherAnalytics() {
    return unsupportedPreviewMethod();
  },
  reportDrill() {
    return unsupportedPreviewMethod();
  },
  fetchAllDrills() {
    return unsupportedPreviewMethod();
  },
  fetchDrillReports() {
    return unsupportedPreviewMethod();
  },
  createDrill() {
    return unsupportedPreviewMethod();
  },
  updateDrill() {
    return unsupportedPreviewMethod();
  },
  deleteDrill() {
    return unsupportedPreviewMethod();
  },
  resetReportCount() {
    return unsupportedPreviewMethod();
  },
  resolveDrillReports() {
    return unsupportedPreviewMethod();
  },
  updateDrillReportStatus() {
    return unsupportedPreviewMethod();
  }
};
export {
  previewStatic as default
};
//# sourceMappingURL=previewStatic-CNqSZoDd.js.map
