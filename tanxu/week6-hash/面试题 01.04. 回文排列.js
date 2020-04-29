/**
* @param {string} s
* @return {boolean}
    */
var canPermutePalindrome = function(s) {
    let count = 0
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        let val = map.get(s[i])
        if (val) {
            map.set(s[i], val + 1)
            if ((val + 1) % 2 === 0) {
                count--
            } else {
                count++
            }
        } else {
            map.set(s[i], 1)
            count++
        }

    }
    return count <= 1
};
