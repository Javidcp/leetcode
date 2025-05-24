/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.reduce((indices, word, index) => {
        if (word.includes(x)) {
            indices.push(index);
        }
        return indices;
    }, []);
};