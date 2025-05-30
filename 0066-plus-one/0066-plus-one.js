/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join('')) + 1n;
    return num.toString().split('').map(Number);
};