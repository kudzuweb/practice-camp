// puzzles/tests/assignment1-uniqueUsernames.test.ts
import { describe, it, expect } from "vitest";
import { uniqueUsernames } from "../problems/assignment1-uniqueUsernames";

describe("uniqueUsernames", () => {
    it("normalizes to lowercase and removes later duplicates, preserving first occurrence", () => {
        expect(uniqueUsernames(["Alice", "ALICE", "Bob", "alice", "bob"])).toEqual([
            "alice",
            "bob",
        ]);
    });

    it("handles empty input and empty strings as valid usernames", () => {
        expect(uniqueUsernames([])).toEqual([]);
        expect(uniqueUsernames(["", "", "A"])).toEqual(["", "a"]);
    });

    it("preserves first-normalized order", () => {
        expect(uniqueUsernames(["X", "y", "x", "Y", "Z", "z"])).toEqual([
            "x",
            "y",
            "z",
        ]);
    });

    it("does not mutate the input", () => {
        const input = ["A", "B", "a"];
        const snapshot = JSON.stringify(input);
        void uniqueUsernames(input);
        expect(JSON.stringify(input)).toBe(snapshot);
    });

    it("returns a new array instance", () => {
        const input = ["A"];
        const out = uniqueUsernames(input);
        expect(out).not.toBe(input);
    });

    it("property-like: idempotence on already unique-lowercased lists", () => {
        const samples = [
            [],
            ["a"],
            ["a", "", "b", "c"],
            ["cat", "dog", "emu"],
        ];
        for (const s of samples) {
            expect(uniqueUsernames(s)).toEqual(s);
        }
    });
});
