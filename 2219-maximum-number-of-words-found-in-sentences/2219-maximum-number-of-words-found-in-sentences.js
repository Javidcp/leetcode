/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let word;
    let count = 0
    
    for (let i = 0; i < sentences.length; i++) {
        word = sentences[i].split(' ').length
        if (word > count) {
            count = word
        }
    }
    return count
};