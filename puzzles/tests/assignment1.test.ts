import { describe, it, expect } from "vitest"
import { isLargestNumberEven, convertToPercentages } from "../problems/assignment1"

describe("isLargestNumberEven (Assignment 1)", () => {
    it("matches the provided examples (table-driven)", () => {
        const cases: Array<{ input: number[]; expected: boolean }> = [
            { input: [1, 2, 3, 8, 42, 111, 10], expected: false },
            { input: [2, 45, 6, 6, 6, 6, 6, 48], expected: true },
            { input: [1], expected: false },
        ]
        for (const { input, expected } of cases) {
            expect(isLargestNumberEven(input)).toBe(expected)
        }
    })

    it("handles duplicates/ties for the maximum value", () => {
        expect(isLargestNumberEven([4, 4, 4])).toBe(true)
        expect(isLargestNumberEven([7, 7, 4, 7])).toBe(false)
    })

    it("works with negatives and zero (boundary case)", () => {
        expect(isLargestNumberEven([-3, -2, 0])).toBe(true)
    })
})

describe("convertToPercentages (Assignment 1)", () => {
    it("converts a single student's score correctly", () => {
        const input = [{ student: "steve", points: 50, maxPossiblePoints: 100 }]
        const output = [{ student: "steve", grade: 0.5 }]
        expect(convertToPercentages(input)).toEqual(output)
    })

    it("converts multiple students' scores correctly", () => {
        const input = [
            { student: "bob", points: 50, maxPossiblePoints: 75 },
            { student: "joe", points: 1, maxPossiblePoints: 10 },
        ]
        const output = [
            { student: "bob", grade: 50 / 75 },
            { student: "joe", grade: 0.1 },
        ]
        expect(convertToPercentages(input)).toEqual(output)
    })

    it("handles edge cases such as zero points or maxPossiblePoints", () => {
        const input = [
            { student: "sara", points: 0, maxPossiblePoints: 100 },
            { student: "max", points: 5, maxPossiblePoints: 5 },
        ]
        const output = [
            { student: "sara", grade: 0 },
            { student: "max", grade: 1 },
        ]
        expect(convertToPercentages(input)).toEqual(output)
    })
})
