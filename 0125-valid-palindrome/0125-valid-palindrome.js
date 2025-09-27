/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let word = ''

    for (let i = str.length - 1; i >= 0; i--) {
        word += str[i]
    }

    if (str === word) {
        return true
    } else {
        return false
    }
};