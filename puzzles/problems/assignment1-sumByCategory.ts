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
 * 
 */
// Requirements that will be tested:
// - Aggregate amounts per category with integer addition.
// - Include every category that occurs at least once.
// - Sort by totalCents descending; break ties by category ascending (locale-insensitive).
// - Return a new array; do not mutate `purchases`.
// - An empty input yields an empty output.

//  time: 53:39

export function sumByCategory(
    purchases: { category: string; amountCents: number }[],
): { category: string; totalCents: number }[] {
    // if input array is empty, early return an empty array
    if (purchases.length < 1) return []

    // empty array to hold objects with sum
    const purchasesSummed = []

    // set to track categories i've seen and prevent duplicates
    const seenCategories = new Set()

    // for each item in the input array
    for (const purchase of purchases) {
        // check if category seen before
        if (seenCategories.has(purchase.category)) continue
        seenCategories.add(purchase.category)

        //      filter the objects where category is the same as item.category
        const allPurchasesOfThisCategory = purchases.filter((obj) => obj.category == purchase.category)
        //      sum the amountCents
        console.log("summing up the following amounts:", allPurchasesOfThisCategory)
        const totalCents = allPurchasesOfThisCategory.reduce(
            (accumulator, current) => accumulator + current.amountCents,
            0
        )
        const summedAmount = {
            category: purchase.category,
            totalCents: totalCents
        }
        purchasesSummed.push(summedAmount)
    }
    //  sort the new array
    purchasesSummed.sort((a, b) => {
        const sortNumberByTotalCents = b.totalCents - a.totalCents
        if (sortNumberByTotalCents == 0) {
            return a.category.localeCompare(b.category)
        }
        return sortNumberByTotalCents
    })
    //purchasesSummed.sort((a, b) => a.category - b.category)
    // console.log("purchasesSummed equals", purchasesSummed)
    //  return the new array
    return purchasesSummed
}

function sumByCategory2(purchases: { category: string; amountCents: number }[]) {
    // {"food": 500, "apps": 150}
    const totalByCategory: Record<string, number> = {} // key: category, value: running total
    purchases.forEach(purchase => {
        const existingTotal = totalByCategory[purchase.category] ?? 0
        totalByCategory[purchase.category] = existingTotal + purchase.amountCents
    })
    const result = Object.entries(totalByCategory)
        .map(entry => {
            return {
                category: entry[0],
                totalCents: entry[1]
            }
        })
        .sort((a, b) => {
            const sortNumberByTotalCents = b.totalCents - a.totalCents
            if (sortNumberByTotalCents == 0) {
                return a.category.localeCompare(b.category)
            }
            return sortNumberByTotalCents
        })
    return result
}
//sketch
// i need to loop over the array checking category, and if the category is the same, add them
// i think i can use reduce? reduce the objects where category?
// nested loops. loop to create array of distinct categories, then loop over that to create a 
// new array of object with the sum of amountCents where each category = true
// finally, .sort()

// pseudo
// if input array is empty, early return an empty array
// empty array to hold objects with sum
// for each item in the input array
//      filter the objects where category is the same as item.category
//      reduce the amountCents to sum
//      push the summed object to the new array
//  sort the new array
//  return the new array