/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')

    if (x.toString() === reversed) {
        return true
    } else {
        return false
    }
};