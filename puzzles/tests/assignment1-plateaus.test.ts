// puzzles/tests/assignment1-plateaus.test.ts
import { describe, it, expect } from "vitest";
import { plateaus } from "../problems/assignment1-plateaus";

describe("plateaus-today", () => {
    it("finds plateaus in a typical sequence", () => {
        expect(plateaus([1, 2, 2, 2, 3, 3, 1])).toEqual([1, 4]);
    });

    it("returns empty for empty input and singletons", () => {
        expect(plateaus([])).toEqual([]);
        expect(plateaus([7])).toEqual([]);
    });

    it("handles no plateaus", () => {
        expect(plateaus([1, 2, 3, 4])).toEqual([]);
    });

    it("detects adjacent plateaus with different values", () => {
        expect(plateaus([2, 2, 3, 3])).toEqual([0, 2]);
    });

    it("does not count runs of length 1", () => {
        expect(plateaus([5, 5, 6, 7, 7, 8, 9, 9, 9, 10])).toEqual([0, 3, 6]);
    });

    it("preserves left-to-right order of indices", () => {
        expect(plateaus([3, 3, 3, 2, 2, 1, 1, 1, 1])).toEqual([0, 3, 5]);
    });

    it("property-like: computed oracle agrees on small arrays", () => {
        const samples: number[][] = [
            [],
            [1],
            [1, 1],
            [1, 2, 2],
            [2, 2, 2],
            [1, 2, 3, 3, 3, 2, 2],
            [9, 8, 8, 7, 7, 7, 6],
        ];

        const oracle = (arr: number[]) => {
            const out: number[] = [];
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] === arr[i + 1] && (i === 0 || arr[i - 1] !== arr[i])) {
                    out.push(i);
                }
            }
            return out;
        };

        for (const s of samples) {
            expect(plateaus(s)).toEqual(oracle(s));
        }
    });
});
