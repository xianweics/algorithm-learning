var findRepeatedDnaSequences = function(s) {
    const map = new Map()
    const result = []
    for (let i = 10; i <= s.length; i++) {
        const str = s.substring(i - 10, i)
        let val = map.get(str)
        if (val === 1) {
            result.push(str)
            map.set(str, val + 1)
        } else if (val > 1){
            map.set(str, val + 1)
        } else {
            map.set(str, 1)
        }
    }
    return result
};
