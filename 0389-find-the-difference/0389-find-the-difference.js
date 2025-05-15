/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ss = s.split('')
    let tt = t.split('')

    for (let i = 0; i < ss.length; i++){
        for (let j = 0; j <tt.length; j++){
            if (ss[i] === tt[j]) {
                tt.splice(j, 1)
                break;
            }
        }
    }
    return tt[0]
};