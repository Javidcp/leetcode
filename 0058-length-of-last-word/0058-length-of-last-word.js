/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s.trim().split(' ')
    let lastWord = str[str.length -1]
    return lastWord.length
};