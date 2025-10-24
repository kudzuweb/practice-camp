// puzzles/tests/assignment1-sumByCategory.test.ts
import { describe, it, expect } from "vitest";
import { sumByCategory } from "../problems/assignment1-sumByCategory";

describe("sumByCategory", () => {
    it("aggregates totals and sorts by total descending, then category ascending", () => {
        const input = [
            { category: "apps", amountCents: 500 },
            { category: "books", amountCents: 900 },
            { category: "apps", amountCents: 250 },
            { category: "food", amountCents: 900 },
        ];
        // books and apps tie on 900; "apps" < "books" lexicographically, so apps comes first
        expect(sumByCategory(input)).toEqual([
            { category: "books", totalCents: 900 },
            { category: "food", totalCents: 900 },
            { category: "apps", totalCents: 750 },
        ]);
    });

    it("returns empty for empty input", () => {
        expect(sumByCategory([])).toEqual([]);
    });

    it("handles single category and zero amounts", () => {
        const input = [
            { category: "zero", amountCents: 0 },
            { category: "zero", amountCents: 0 },
        ];
        expect(sumByCategory(input)).toEqual([{ category: "zero", totalCents: 0 }]);
    });

    it("includes each distinct category exactly once", () => {
        const input = [
            { category: "a", amountCents: 100 },
            { category: "b", amountCents: 1 },
            { category: "a", amountCents: 1 },
            { category: "c", amountCents: 50 },
        ];
        const out = sumByCategory(input);
        const cats = out.map((x) => x.category);
        expect(new Set(cats).size).toBe(cats.length);
    });

    it("does not mutate the input array or its objects", () => {
        const input = [
            { category: "x", amountCents: 10 },
            { category: "x", amountCents: 20 },
        ] as const; // shallow readonly structure
        // Clone a JSON snapshot to compare
        const snapshot = JSON.stringify(input);
        void sumByCategory(input as unknown as { category: string; amountCents: number }[]);
        expect(JSON.stringify(input)).toBe(snapshot);
    });

    it("handles larger integer sums without floating point", () => {
        const input = [
            { category: "big", amountCents: 1_000_000_000 },
            { category: "big", amountCents: 2_000_000_000 },
        ];
        expect(sumByCategory(input)).toEqual([
            { category: "big", totalCents: 3_000_000_000 },
        ]);
    });
});
