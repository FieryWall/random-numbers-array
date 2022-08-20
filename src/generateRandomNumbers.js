/**
 * Random numbers Array function.
 * The main idea to avoid calling Math.random() function for each number
 * by skipping those one which already swapped by targeting of previous iterations.
 * Also, it's important to don't lost equal probability to receive each number for every cell.
 * @param {*} length - count of numbers (N).
 * @returns random Array of unique numbers from 0 to N.
 */
export default function generateRandomNumbers(length) {
    // Validations
    if (typeof length !== 'number')
        throw new Error('Array length has to be number value');

    if (length < 0)
        throw new Error(`Array length couldn't be less then 0. Received value ${length}`);
    
    if (length === 0) return [];
    if (length === 1) return [0];

    // memory allocation for Array with N elements
    const nums = Array(length);

    // Single path while every array cell
    for(let i = 0; i < length; i++) {
        // If cell is not empty - skip random call.
        if (nums[i] !== undefined) {
            continue;
        }

        // If cell is empty choose random cell pair
        const j = Math.floor(Math.random() * length);

        // If other cell is empty - set it's index "j" to current cell
        // Else - set value from "j" cell to current cell
        nums[i] = nums[j] === undefined ? j : nums[j];

        // Set current "i" index as number value to "j" cell
        nums[j] = i;
    }
    
    return nums;
}