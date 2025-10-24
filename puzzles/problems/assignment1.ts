
// given an array, return `true` if the largest number in the array is even. examples:
// [1,2,3,8,42,111,10] => false
// [2,45,6,6,6,6,6,48] => true
// [1] => false

// loop over the array comparing numbers until you have the largest one, then check if even
// didn't time it, did oneshot it
export function isLargestNumberEven(arr: number[]): boolean {
  let largestSoFar = 0
  for (const num of arr) {
    if (num > largestSoFar) {
      largestSoFar = num
    }
  }

  return (largestSoFar % 2 === 0)
}

// given an array of student scores, replace the "points" and "maxPossiblePoints" with a percentage grade instead. examples:
// [{ student: "steve", points: 50, maxPossiblePoints: 100}] => [ { student: "steve", grade: .5 }]
// [{ student: "bob", points: 50, maxPossiblePoints: 75}, { student: "joe", points: 1, maxPossiblePoints: 10}] => 
//    [ { student: "steve", grade: .6666666... }, { student: "joe", grade: .1 }]
// .map the array to divide points by max possible points and return new object
// okay, loop over it then

type PercentageGrades = {
  student: string,
  grade: number
}[]

export function convertToPercentages(scores: { student: string, points: number, maxPossiblePoints: number }[]): PercentageGrades {
  // scores.map((score) => {
  //   const grade = score.points / score.maxPossiblePoints;
  //   return { student: score.student, grade: grade }
  // });

  const percentageScores: PercentageGrades = []
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i]
    const grade = score.points / score.maxPossiblePoints;
    const percentageScore = { student: score.student, grade: grade };
    percentageScores.push(percentageScore)
  }
  return percentageScores

}


// given an array of cats, return the names of all cats with blue eyes. examples:
// [{ name: "oreo", pelt: "tuxedo", eyes: "green"}, {name: "tiger", pelt: "orange", eyes: blue }] => ["tiger"]
// [{ name: "kitty", pelt: "orange", eyes: "red"}] => []

// filter the cats with blue eyes
type CatType = {
  name: string,
  pelt: string,
  eyes: string,

}

export function findBlueEyedCats(cats: CatType[]): string[] {
  const catNames: string[] = []
  const blueEyedCats = cats.filter((cat) => cat.eyes == "blue")
  blueEyedCats.map((cat) => catNames.push(cat.name))
  return catNames
}


// given an array of numbers, return true if the array of numbers strictly decreases. examples:
// [5,4,3,1] => true
// [99,43,10] => true
// [5,4,3,2,3] => false
// [9,10,8,5,4,3] => false

// want to loop over the array and check if each number is less than the previous. if it's greater return false
export function isDecreasing(input: number[]): boolean {
  for (let i = 1; i < input.length; i++) {
    const num = input[i]
    const prev = input[i - 1]
    if (num >= prev) return false;
  }
  return true
}