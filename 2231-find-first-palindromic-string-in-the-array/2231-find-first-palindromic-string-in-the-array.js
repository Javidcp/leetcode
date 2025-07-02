/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let cha of words) {
        let rev = cha.split('').reverse().join('')
        if(rev === cha) {
            return rev
        } 
    }
    return ""
};