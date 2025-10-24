// puzzles/tests/method_blocks.test.ts
import { describe, it, expect } from "vitest";
import {
    scaleBy,
    firstChars,
    onlyInRange,
    nonEmptyTrimmed,
    sumAbsolute,
    longestWord,
    countsByParity,
    firstMultipleOf,
    firstWithMinLength,
    hasDuplicate,
    anyStartsWithLetter,
    allWithinBudget,
    allAlphanumeric,
    sortNumbersAsc,
    sortByLengthDesc,
    splitOnSpaces,
    expandPairs,
    topKLongestLowercased,
} from "../problems/method_blocks";

// ============================================================
// SECTION: MAP
// ============================================================

describe("scaleBy", () => {
    it("multiplies each number by factor", () => {
        expect(scaleBy([1, 2, 3], 10)).toEqual([10, 20, 30]);
    });

    it("empty -> empty", () => {
        expect(scaleBy([], 5)).toEqual([]);
    });

    it("does not mutate input", () => {
        const src = [1, 2, 3];
        const out = scaleBy(src, 2);
        expect(src).toEqual([1, 2, 3]);
        expect(out).toEqual([2, 4, 6]);
    });
});

describe("firstChars", () => {
    it('returns first char or "" for empty strings', () => {
        expect(firstChars(["hi", "", "world"])).toEqual(["h", "", "w"]);
    });

    it("empty -> empty", () => {
        expect(firstChars([])).toEqual([]);
    });

    it("property-like: output length equals input length", () => {
        const words = ["a", "", "xyz"];
        expect(firstChars(words).length).toBe(words.length);
    });
});

// ============================================================
// SECTION: FILTER
// ============================================================

describe("onlyInRange", () => {
    it("keeps numbers in inclusive range", () => {
        expect(onlyInRange([1, 5, 9, 3], 3, 5)).toEqual([5, 3]);
    });

    it("empty -> empty", () => {
        expect(onlyInRange([], 0, 1)).toEqual([]);
    });

    it("property-like: all outputs within [min,max]", () => {
        const min = -1, max = 1;
        const out = onlyInRange([-2, -1, 0, 1, 2], min, max);
        for (const n of out) expect(n >= min && n <= max).toBe(true);
    });
});

describe("nonEmptyTrimmed", () => {
    it("keeps strings that are non-empty after trim", () => {
        expect(nonEmptyTrimmed([" a ", "  ", "", "b"])).toEqual(["a", "b"]);
    });

    it("empty -> empty", () => {
        expect(nonEmptyTrimmed([])).toEqual([]);
    });

    it("property-like: all outputs have trim().length > 0", () => {
        const out = nonEmptyTrimmed(["  x", " ", "y  ", "\t"]);
        for (const s of out) expect(s.trim().length > 0).toBe(true);
    });
});

// ============================================================
// SECTION: REDUCE
// ============================================================

describe("sumAbsolute", () => {
    it("sums absolute values", () => {
        expect(sumAbsolute([-2, 3, -4])).toBe(9);
    });

    it("empty -> 0", () => {
        expect(sumAbsolute([])).toBe(0);
    });

    it("property-like: equals nums.map(Math.abs).reduce(sum)", () => {
        const nums = [-5, 0, 2, -1];
        const expected = nums.map(Math.abs).reduce((a, b) => a + b, 0);
        expect(sumAbsolute(nums)).toBe(expected);
    });
});

describe("longestWord (reduce)", () => {
    it("returns longest; tie returns first", () => {
        expect(longestWord(["a", "abcd", "abc"])).toBe("abcd");
        expect(longestWord(["xx", "yyyy", "yyyy", "zzz"])).toBe("yyyy");
    });

    it("empty -> null", () => {
        expect(longestWord([])).toBeNull();
    });

    it("property-like: result is member unless null; no word longer than result", () => {
        const words = ["alpha", "βeta", "kappa"];
        const res = longestWord(words);
        if (res !== null) {
            expect(words.includes(res)).toBe(true);
            for (const w of words) expect(w.length <= res.length).toBe(true);
        }
    });
});

describe("countsByParity (reduce)", () => {
    it("counts even and odd", () => {
        expect(countsByParity([1, 2, 3, 4])).toEqual({ even: 2, odd: 2 });
    });

    it("empty -> {0,0}", () => {
        expect(countsByParity([])).toEqual({ even: 0, odd: 0 });
    });

    it("property-like: totals sum to input length", () => {
        const nums = [-2, -1, 0, 1, 2, 3, 4];
        const out = countsByParity(nums);
        expect(out.even + out.odd).toBe(nums.length);
    });
});

// ============================================================
// SECTION: FIND
// ============================================================

describe("firstMultipleOf", () => {
    it("returns first divisible by k, else null", () => {
        expect(firstMultipleOf([5, 7, 12, 20], 4)).toBe(12);
        expect(firstMultipleOf([1, 3, 5], 2)).toBeNull();
    });

    it("k=1 returns first element or null", () => {
        expect(firstMultipleOf([], 1)).toBeNull();
        expect(firstMultipleOf([9], 1)).toBe(9);
    });
});

describe("firstWithMinLength", () => {
    it("returns first with length >= min", () => {
        expect(firstWithMinLength(["a", "bb", "ccc"], 2)).toBe("bb");
    });

    it("none -> null", () => {
        expect(firstWithMinLength(["a"], 3)).toBeNull();
    });

    it("empty -> null", () => {
        expect(firstWithMinLength([], 1)).toBeNull();
    });
});

// ============================================================
// SECTION: SOME
// ============================================================

describe("hasDuplicate", () => {
    it("detects duplicates", () => {
        expect(hasDuplicate([1, 2, 3, 2])).toBe(true);
        expect(hasDuplicate([1, 2, 3])).toBe(false);
    });

    it("empty or single element -> false", () => {
        expect(hasDuplicate([])).toBe(false);
        expect(hasDuplicate(["x"])).toBe(false);
    });

    it("property-like: if true, Set size < length", () => {
        const arr = ["a", "b", "a", "c"];
        const dup = hasDuplicate(arr);
        expect(dup).toBe(true);
        expect(new Set(arr).size < arr.length).toBe(true);
    });
});

describe("anyStartsWithLetter", () => {
    it("case-insensitive prefix check", () => {
        expect(anyStartsWithLetter(["Apple", "banana"], "a")).toBe(true);
        expect(anyStartsWithLetter(["dog", "cat"], "Z")).toBe(false);
    });

    it("empty words -> false", () => {
        expect(anyStartsWithLetter([], "a")).toBe(false);
    });

    it("property-like: matches words.some on normalized strings", () => {
        const words = ["Alpha", "beta", "gamma"];
        const letter = "G";
        const expected = words.some(w => w.toLowerCase().startsWith(letter.toLowerCase()));
        expect(anyStartsWithLetter(words, letter)).toBe(expected);
    });
});

// ============================================================
// SECTION: EVERY
// ============================================================

describe("allWithinBudget", () => {
    it("true if all amounts <= budget", () => {
        expect(allWithinBudget([5, 10, 3], 10)).toBe(true);
        expect(allWithinBudget([5, 12], 10)).toBe(false);
    });

    it("empty -> true", () => {
        expect(allWithinBudget([], 0)).toBe(true);
    });

    it("property-like: equals amounts.every(x <= budget)", () => {
        const amounts = [0, 3, 3, 10];
        const budget = 10;
        expect(allWithinBudget(amounts, budget)).toBe(amounts.every(x => x <= budget));
    });
});

describe("allAlphanumeric", () => {
    it("true for letters and digits only", () => {
        expect(allAlphanumeric(["abc", "A1", "9", ""])).toBe(true);
    });

    it("false if any contains non-alnum", () => {
        expect(allAlphanumeric(["ok!"])).toBe(false);
        expect(allAlphanumeric(["space here"])).toBe(false);
    });

    it("empty array -> true", () => {
        expect(allAlphanumeric([])).toBe(true);
    });
});

// ============================================================
// SECTION: SORT
// ============================================================

describe("sortNumbersAsc", () => {
    it("sorts ascending and does not mutate input", () => {
        const src = [3, 1, 2];
        const out = sortNumbersAsc(src);
        expect(out).toEqual([1, 2, 3]);
        expect(src).toEqual([3, 1, 2]);
    });

    it("empty -> empty", () => {
        expect(sortNumbersAsc([])).toEqual([]);
    });

    it("handles negatives and duplicates", () => {
        expect(sortNumbersAsc([0, -1, -1, 2])).toEqual([-1, -1, 0, 2]);
    });
});

describe("sortByLengthDesc", () => {
    it("sorts by length descending; stable for ties; input not mutated", () => {
        const src = ["a", "bbb", "cc", "dd", "e"];
        const out = sortByLengthDesc(src);
        expect(out).toEqual(["bbb", "cc", "dd", "a", "e"]);
        expect(src).toEqual(["a", "bbb", "cc", "dd", "e"]);
    });

    it("empty -> empty", () => {
        expect(sortByLengthDesc([])).toEqual([]);
    });

    it("property-like: non-increasing lengths", () => {
        const out = sortByLengthDesc(["one", "three", "two"]);
        for (let i = 1; i < out.length; i++) {
            expect(out[i].length <= out[i - 1].length).toBe(true);
        }
    });
});

// ============================================================
// SECTION: FLATMAP
// ============================================================

describe("splitOnSpaces", () => {
    it("splits each sentence and flattens once", () => {
        expect(splitOnSpaces(["a b", "c"])).toEqual(["a", "b", "c"]);
    });

    it("empty -> empty", () => {
        expect(splitOnSpaces([])).toEqual([]);
    });

    it("handles single-token lines", () => {
        expect(splitOnSpaces(["x", "y z"])).toEqual(["x", "y", "z"]);
    });
});

describe("expandPairs", () => {
    it("expands [value,count] pairs", () => {
        expect(expandPairs([["x", 3], ["y", 1]])).toEqual(["x", "x", "x", "y"]);
    });

    it("count zero yields no copies", () => {
        expect(expandPairs([["z", 0]])).toEqual([]);
    });

    it("empty -> empty", () => {
        expect(expandPairs([])).toEqual([]);
    });

    it("property-like: total length equals sum of counts", () => {
        const pairs: Array<[string, number]> = [["a", 2], ["b", 1], ["c", 0]];
        const out = expandPairs(pairs);
        const expectedLen = pairs.reduce((s, [, k]) => s + k, 0);
        expect(out.length).toBe(expectedLen);
    });
});

// ============================================================
// SECTION: COMPOSITION
// ============================================================

describe("topKLongestLowercased", () => {
    it("returns k longest lowercased; preserves order among equals; no mutation", () => {
        const src = ["A", "bbbb", "Cc", "ddd"];
        const out = topKLongestLowercased(src, 2);
        expect(out).toEqual(["bbbb", "ddd"]);
        expect(src).toEqual(["A", "bbbb", "Cc", "ddd"]);
    });

    it("k >= length returns all, lowercased", () => {
        expect(topKLongestLowercased(["One", "Two"], 5)).toEqual(["one", "two"]);
    });

    it("property-like: result length equals Math.min(k, words.length)", () => {
        const words = ["aa", "bbb", "c"];
        const k = 5;
        expect(topKLongestLowercased(words, k).length).toBe(Math.min(k, words.length));
    });
});
