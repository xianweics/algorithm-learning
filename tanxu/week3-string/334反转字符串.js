/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const len = s.length
    for (let i = 0 ;i < Math.ceil(len / 2); i++) {
        const temp = s[i]
        s[i] = s[len - i - 1]
        s[len - i - 1] = temp
    }
    return s
};
console.log(reverseString([1,2,3,4,5]))
