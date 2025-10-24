// puzzles/problems/assignment1-sumByCategory.ts

/**
 * Sum by Category: collapse purchases by category and sort by total.
 *
 * Context:
 * You receive a list of purchases in integer cents. Multiple purchases can share the same category.
 * Return totals per category, sorted by descending totalCents. Break ties by ascending category name.
 *
 * Input/Output:
 * - Input: purchases: Array<{ category: string; amountCents: number }>
 *   - amountCents are integers (can be 0 or positive; no floats). The array may be empty.
 * - Output: Array<{ category: string; totalCents: number }>
 *   - One object per distinct category that appears in the input.
 *   - Sort by totalCents descending; if equal, sort by category ascending (case-sensitive).
 * - Pure and deterministic. Do not use regex. Do not mutate input.
 *
 * Examples:
 * - sumByCategory([{category:"food",amountCents:500},{category:"books",amountCents:900},{category:"food",amountCents:250}])
 *   -> [{category:"books",totalCents:900},{category:"food",totalCents:750}]
 * - sumByCategory([]) -> []
 */
export function sumByCategory(
    purchases: { category: string; amountCents: number }[],
): { category: string; totalCents: number }[] {
    // TODO: Implement.
    // Requirements that will be tested:
    // - Aggregate amounts per category with integer addition.
    // - Include every category that occurs at least once.
    // - Sort by totalCents descending; break ties by category ascending (locale-insensitive).
    // - Return a new array; do not mutate `purchases`.
    // - An empty input yields an empty output.
    throw new Error("Not implemented");
}
