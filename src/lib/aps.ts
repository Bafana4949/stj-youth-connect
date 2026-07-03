import { ApsSubject, ApsSubjectWithPoints, ApsCalculationResult } from "./types";

/**
 * Converts a percentage mark to APS points using the standard South African 7-point scale.
 * 80% – 100% = 7 points
 * 70% – 79% = 6 points
 * 60% – 69% = 5 points
 * 50% – 59% = 4 points
 * 40% – 49% = 3 points
 * 30% – 39% = 2 points
 * 0% – 29% = 1 point
 */
export function percentageToApsPoints(percentage: number): number {
  if (percentage < 0) return 0;
  if (percentage >= 80) return 7;
  if (percentage >= 70) return 6;
  if (percentage >= 60) return 5;
  if (percentage >= 50) return 4;
  if (percentage >= 40) return 3;
  if (percentage >= 30) return 2;
  return 1;
}

/**
 * Determines the guidance band based on the total APS score.
 */
function getGuidanceBand(totalAps: number): string {
  if (totalAps >= 35) {
    return "Strong APS range. You may qualify for many degree programmes, depending on specific subject requirements (like Math/Science).";
  }
  if (totalAps >= 28) {
    return "Good APS range. You may qualify for diploma programmes and some degree programmes.";
  }
  if (totalAps >= 20) {
    return "Possible diploma, higher certificate, TVET, learnership, or bridging options are available to you.";
  }
  return "Consider TVET colleges, skills programmes, rewriting subjects, upgrading marks, or seeking career support to improve your options.";
}

/**
 * Calculates the APS based on the provided subjects.
 * Excludes Life Orientation by default and uses the best 6 subjects.
 */
export function calculateAps(subjects: ApsSubject[]): ApsCalculationResult {
  const warnings: string[] = [];
  
  // 1. Map to points
  const subjectsWithPoints: ApsSubjectWithPoints[] = subjects.map(sub => ({
    ...sub,
    apsPoints: percentageToApsPoints(sub.percentage)
  }));

  // 2. Separate LO
  const loSubjects = subjectsWithPoints.filter(s => s.isLifeOrientation);
  const otherSubjects = subjectsWithPoints.filter(s => !s.isLifeOrientation);

  // 3. Sort other subjects descending
  const sortedOther = [...otherSubjects].sort((a, b) => b.apsPoints - a.apsPoints);

  // 4. Take best 6
  const subjectsUsed = sortedOther.slice(0, 6);
  const subjectsExcluded = [
    ...sortedOther.slice(6),
    ...loSubjects // By default, exclude LO entirely
  ];

  // 5. Calculate total
  const totalAps = subjectsUsed.reduce((sum, sub) => sum + sub.apsPoints, 0);

  // Warnings
  if (subjects.length < 6) {
    warnings.push("You have entered fewer than 6 subjects. A full APS calculation requires 6 subjects excluding Life Orientation.");
  }
  
  const hasMath = subjects.some(s => s.name.toLowerCase().includes("math"));
  if (!hasMath) {
    warnings.push("You haven't added Mathematics or Mathematical Literacy. Most tertiary programmes require one of these.");
  }

  return {
    totalAps,
    maxAps: 42, // 6 subjects * 7 max points
    subjectsUsed,
    subjectsExcluded,
    lifeOrientationExcluded: loSubjects.length > 0,
    guidanceBand: getGuidanceBand(totalAps),
    warnings
  };
}

// ==========================================
// TEST VALIDATION (Internal simple tests to prove correctness)
// ==========================================
// 80% returns 7 points
console.assert(percentageToApsPoints(85) === 7, "85% should be 7");
console.assert(percentageToApsPoints(80) === 7, "80% should be 7");
// 70% returns 6 points
console.assert(percentageToApsPoints(75) === 6, "75% should be 6");
// 60% returns 5 points
console.assert(percentageToApsPoints(65) === 5, "65% should be 5");
// 50% returns 4 points
console.assert(percentageToApsPoints(55) === 4, "55% should be 4");
// 40% returns 3 points
console.assert(percentageToApsPoints(45) === 3, "45% should be 3");
// 30% returns 2 points
console.assert(percentageToApsPoints(35) === 2, "35% should be 2");
// 0-29% returns 1 point
console.assert(percentageToApsPoints(29) === 1, "29% should be 1");
console.assert(percentageToApsPoints(15) === 1, "15% should be 1");
