/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    for (let i = 0; i < magazine.length; i++) {
        let item = map.get(magazine[i])
        map.set(magazine[i], item ? item + 1 : 1)
    }
    for (let char of ransomNote) {
        let item = map.get(char)
        if (item) {
            map.set(char, item - 1 )
        } else if (!map.get(char) || item <= 0) return false
    }
    return true
};
