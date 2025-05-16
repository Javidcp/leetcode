/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
        let jewel = new Set(jewels)
    let count = 0
    
    for (const stone of stones) {
        if (jewel.has(stone)) {
            count++
        }
    }
    return count
};