// puzzles/problems/assignment1-uniqueUsernames.ts

/**
 * Unique Usernames: normalize and deduplicate while preserving first appearance order.
 *
 * Context:
 * A system stores usernames case-insensitively. Given a list of raw usernames, normalize by
 * lowercasing each entry and remove later duplicates, keeping the first occurrence of each value.
 *
 * Input/Output:
 * - Input: usernames: string[] (may be empty; entries can be empty strings)
 * - Output: string[] of unique, lowercased usernames in the order of their first normalized appearance
 * - Pure and deterministic. No regex. Do not mutate input.
 *
 * Examples:
 * - uniqueUsernames(["Alice","ALICE","Bob","alice","bob"]) -> ["alice","bob"]
 * - uniqueUsernames(["", "", "A"]) -> ["", "a"]
 */
// Requirements that will be tested:
// - Lowercase normalization before deduplication.
// - Preserve the order of first normalized appearance.
// - Empty strings are valid usernames and should be handled consistently.
// - Return a new array; do not mutate `usernames`.
// - Empty input returns [].
// time: 21:33. oneshotted

export function uniqueUsernames(usernames: string[]): string[] {
    if (usernames.length < 1) return [];
    const normalizedUsernames: string[] = usernames.map((username) => username != "" ? username.toLowerCase() : username)
    const uniqueUsernames: string[] = [... new Set(normalizedUsernames)]
    return uniqueUsernames

}
// sketch
// conditional to early return empty array
// lowercase them into a new array using map on the way in
// pass them through find? yeah, find loop

// pseudo
// if usernames.length < 1 return []
// lowercaseusernames = usernames.map((un)=> un.toLowercase())
// uniqueusernames = lowercaseusernames.map(lowercaseusernames.find(un))
//chain it? no use set