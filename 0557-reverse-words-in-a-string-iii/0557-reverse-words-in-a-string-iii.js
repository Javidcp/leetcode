/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(' ')
    let result = []
    
    for (let char of str) {
        let key = ''
        for (let i = char.length - 1; i >= 0; i--) {
            key += char[i]
        }
        result.push(key)
    }
    return result.join(' ')
};