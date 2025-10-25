// puzzles/problems/method_blocks.ts
//
// Method Blocks — Focused Drills by Array Method
// ------------------------------------------------
// Practice each method in a tight cluster to build fluency.
// No loops. Keep implementations pure and deterministic.
// Implement each exported function to satisfy the examples.
//
// ============================================================
// SECTION: MAP
// ============================================================

// 1) map → scaleBy
// time: 1:15. oneshotted
// Multiply each number by the given factor.
// Examples:
//   scaleBy([1, 2, 3], 10) -> [10, 20, 30]
//   scaleBy([], 5) -> []
export function scaleBy(nums: number[], factor: number): number[] {
    const scaledNums = nums.map((num) => num = num * factor)
    return scaledNums
}

// 2) map → firstChars
// time: 6:47. wasn't sure how to separate the strings, had to look up .split and figure out the syntax for chaining them
//      12:40 to get the last unit test passing. had to try a few different solutions for where to place the conditional
//      to not cause type errors
// Return the first character of each non-empty string; use "" for empty.
// Examples:
//   firstChars(["hi", "", "world"]) -> ["h", "", "w"]
//   firstChars([]) -> []
export function firstChars(words: string[]): (string | "")[] {
    const characterArrays = words.map((word) => word.split("").map((char) => char))
    console.log(characterArrays)
    const firstLetter: string[] = characterArrays.map((word) => word.length > 0 ? word[0] : "")

    return firstLetter
}

// ============================================================
// SECTION: FILTER
// ============================================================

// 3) filter → onlyInRange
// time: 1:42. had to correct inclusivity to pass last test
// Keep numbers within inclusive [min, max].
// Examples:
//   onlyInRange([1, 5, 9, 3], 3, 5) -> [5, 3]
//   onlyInRange([], 0, 1) -> []
export function onlyInRange(nums: number[], min: number, max: number): number[] {
    const numsInRange = nums.filter((num) => num >= min && num <= max)
    return numsInRange
}

// 4) filter → nonEmptyTrimmed
// time: 2:14 another 2ish mins to debug, no lookups!
// Keep strings that are non-empty after trimming whitespace.
// Examples:
//   nonEmptyTrimmed([" a ", "  ", "", "b"]) -> [" a ", "b"]
//   nonEmptyTrimmed([]) -> []
export function nonEmptyTrimmed(items: string[]): string[] {
    const trimmed = items.map((item) => item.trim())
    const noEmptyStrings = trimmed.filter((item) => item != "")
    return noEmptyStrings
}

// ============================================================
// SECTION: REDUCE
// ============================================================

// 5) reduce → sumAbsolute
// time: 2:33. 
// Sum of absolute values.
// Examples:
//   sumAbsolute([-2, 3, -4]) -> 9
//   sumAbsolute([]) -> 0
export function sumAbsolute(nums: number[]): number {
    if (nums.length < 1) return 0
    const absValues = nums.map((num) => num < 0 ? num * -1 : num)
    const sum = absValues.reduce((acc, curr) => acc + curr)
    return sum
}

// 6) reduce → longestWord
// Return the longest string; on ties, return the first. Empty input -> null.
// time:
// Examples:
//   longestWord(["a","abcd","abc"]) -> "abcd"
//   longestWord([]) -> null
export function longestWord(words: string[]): string | null {
    if (words.length < 1) return null;
    const longestWord = words.reduce((longest, word) => {
        if (word.length > longest.length) return word;
        return longest
    }
    )
    return longestWord
}

// 7) reduce → countsByParity
// Return { even: number, odd: number }.
// Examples:
//   countsByParity([1,2,3,4]) -> { even: 2, odd: 2 }
//   countsByParity([]) -> { even: 0, odd: 0 }
export function countsByParity(nums: number[]): { even: number; odd: number } {
    if (nums.length < 1) return { even: 0, odd: 0 }
    // nums.filter(num => num % 2 === 0).length
    let evens: number = nums.reduce((count, currentNumber) => {
        count = (currentNumber % 2 === 0) ? count + 1 : count;
        return count
    }, 0);

    let odds: number = nums.reduce((count, currentNumber) => {
        count = (currentNumber % 2 !== 0) ? count + 1 : count;
        return count
    }, 0);
    const counts = { even: evens, odd: odds }

    return counts

}

// ============================================================
// SECTION: FIND
// ============================================================

// 8) find → firstMultipleOf
// time: 1:13
// Return the first number divisible by `k`, or null if none.
// Examples:
//   firstMultipleOf([5, 7, 12, 20], 4) -> 12
//   firstMultipleOf([1, 3, 5], 2) -> null
export function firstMultipleOf(nums: number[], k: number): number | null {
    return nums.find((num) => num % k == 0) || null

}

// 9) find → firstWithMinLength
// Return the first string whose length >= minLen, else null.
// Examples: 58s
//   firstWithMinLength(["a","bb","ccc"], 2) -> "bb"
//   firstWithMinLength([], 1) -> null
export function firstWithMinLength(words: string[], minLen: number): string | null {
    return words.find((word) => word.length >= minLen) || null
}

// ============================================================
// SECTION: SOME
// ============================================================

// 10) some → hasDuplicate
// Return true if any value appears more than once.
// Examples: 4:14
//   hasDuplicate([1,2,3,2]) -> true
//   hasDuplicate([1,2,3]) -> false
export function hasDuplicate<T>(arr: T[]): boolean {
    return arr.some((val, index) => arr.indexOf(val) != index)
}

// 11) some → anyStartsWithLetter
// time: 53s. took maybe 20s to add case insensitive solution
// Case-insensitive: return true if any word starts with `letter`.
// Examples:
//   anyStartsWithLetter(["Apple","banana"], "a") -> true
//   anyStartsWithLetter([], "z") -> false
export function anyStartsWithLetter(words: string[], letter: string): boolean {
    return words.some((word) => word[0].toLowerCase() == letter.toLowerCase())
}

// ============================================================
// SECTION: EVERY
// ============================================================

// 12) every → allWithinBudget
// Return true if all amounts are <= budget. Empty -> true.
// time: 1:34. oneshotted
// Examples:
//   allWithinBudget([5, 10, 3], 10) -> true
//   allWithinBudget([5, 12], 10) -> false
export function allWithinBudget(amounts: number[], budget: number): boolean {
    if (amounts.length < 1) return true;
    return amounts.every((amount) => amount <= budget)
}

// 13) every → allAlphanumeric
// Return true if every string consists only of letters or digits.
// Treat empty array as true. Empty string "" is valid (no disallowed chars).
// time: 4:58
// Examples:
//   allAlphanumeric(["abc","A1","9"]) -> true
//   allAlphanumeric(["ok!"]) -> false
export function allAlphanumeric(words: string[]): boolean {
    if (words.length < 1) return true
    return words.every((word) => [...word].every((char) =>
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9")
    )
    )
}

// ============================================================
// SECTION: SORT
// ============================================================

// 14) sort → sortNumbersAsc
// time: 35s. another 90s to debug(move structured clone out into it's own variable)
// Return a new array sorted ascending. Do not mutate input.
// Examples:
//   sortNumbersAsc([3,1,2]) -> [1,2,3]
//   sortNumbersAsc([]) -> []
export function sortNumbersAsc(nums: number[]): number[] {
    const newNums = structuredClone(nums)
    return newNums.sort((a, b) => a - b)
}

// 15) sort → sortByLengthDesc
// time: 2:53
// Return a new array of strings sorted by length descending; stable for ties.
// Do not mutate input.
// Examples:
//   sortByLengthDesc(["a","bbb","cc"]) -> ["bbb","cc","a"]
export function sortByLengthDesc(words: string[]): string[] {
    const newWords = structuredClone(words)
    return newWords.sort((a, b) => b.length - a.length)
}

// ============================================================
// SECTION: FLATMAP
// ============================================================

// 16) flatMap → splitOnSpaces
// time: 7:04 bc i forgot to stop the timer before running tests and making the ones that failed pass lol
// Split each sentence on spaces and flatten once.
// Examples:
//   splitOnSpaces(["a b", "c"]) -> ["a","b","c"]
//   splitOnSpaces([]) -> []
export function splitOnSpaces(lines: string[]): string[] {
    return lines.flatMap((line: string) => line.split(" "))
}

// 17) flatMap → expandPairs
// time: 5:19
// Each entry is a pair [value, count]; expand into `count` copies of value.
// Examples:
//   expandPairs([["x",3],["y",1]]) -> ["x","x","x","y"]
//   expandPairs([]) -> []
export function expandPairs<T>(pairs: Array<[T, number]>): T[] {
    return pairs.flatMap(([value, count]) => {
        const multiplied = [];
        for (let i = 0; i < count; i++) {
            multiplied.push(value);
        }
        return multiplied;
    });
}

// ============================================================
// SECTION: COMPOSITION (chain of two+ methods)
// ============================================================

// 18) composition → topKLongestLowercased
// time: 10:31
// Return the longest `k` words (by length) in lowercase, preserving order among equals.
// If k >= words.length, return all in the appropriate order.
// Do not mutate input.
// Examples:
//   topKLongestLowercased(["A","bbbb","Cc","ddd"], 2) -> ["bbbb","ddd"]
//   topKLongestLowercased(["One","Two"], 5) -> ["one","two"]
export function topKLongestLowercased(words: string[], k: number): string[] {
    return words
        .map((w) => w.toLowerCase())
        .sort((a, b) => b.length - a.length)
        .slice(0, k);
}
