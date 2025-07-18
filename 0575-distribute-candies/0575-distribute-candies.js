/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let sets = new Set(candyType);
    if(sets.size<candyType.length/2){
        return sets.size;
    }else{
        return candyType.length/2;
    }
};