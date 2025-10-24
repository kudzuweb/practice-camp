// puzzles/problems/assignment1-plateaus.ts

/**
 * Plateaus: find the start index of every plateau in an integer sequence.
 *
 * Context:
 * A "plateau" is a run of the same number that lasts for 2 or more consecutive positions.
 * Given an array of integers, return the start indices of all plateaus, from left to right.
 *
 * Input/Output:
 * - Input: numbers: number[] (may be empty; elements are integers; order matters)
 * - Output: number[] of 0-based indices where a plateau of length >= 2 begins
 * - No regexes. Pure and deterministic. Do not mutate the input array.
 *
 * Examples:
 * - plateaus([1, 2, 2, 2, 3, 3, 1]) -> [1, 4]
 * - plateaus([]) -> []
 */
// Requirements that will be tested:
// - Return indices in ascending order (scan left-to-right).
// - A plateau must be length >= 2.
// - Adjacent plateaus with different values both count (e.g., [2,2,3,3] -> [0,2]).
// - Do not mutate `numbers`.
// - Empty input returns [].

export function plateaus(numbers: number[]): number[] {
  if (numbers.length < 2) {
    return []
  }

  const plateauIndices = []
  let inPlateau = false

  for (let i = 1; i < numbers.length; i++) {
    const prevNum = numbers[i - 1]
    const currentNum = numbers[i]

    if (currentNum == prevNum) {
      if (!inPlateau) {
        plateauIndices.push(i - 1)
      }

      inPlateau = true
    } else {
      inPlateau = false
    }
  }

  return plateauIndices
}

// sketch
// need to compare each number to the previous number to check if they are the same
//  if so, add the index of previous number to an array
// return deduplicated array
// don't forget conditional to early return empty array if given one on first line

// pseudo
// if numbers.length < 1, return []
// plateauIndices = []
// for (i = 0; i < numbers.length; i++){
// prevNum = numbers[i -1]
// currentNum = numbers[i]
//  if currentNum == prevNum then plateauIndices.push(numbers.indexOf(prevNum))
// }
// plateauIndices = [...new Set(plateauIndices)]
// return plateauIndices