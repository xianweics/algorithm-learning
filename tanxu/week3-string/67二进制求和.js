var addBinary = function(a, b) {
    const lena = a.length
    const lenb = b.length
    const len = Math.max(lena,lenb)
    let carry = 0
    let result = ''
    for (let i = 0; i < len; i++) {
        let sum = Number(a[lena - i - 1] || 0) + Number(b[lenb - i - 1] || 0) + carry
        if (sum >= 2) {
            carry = 1
        } else {
            carry = 0
        }
        result = (sum % 2).toString() + result
    }
    return carry ? carry.toString() + result : result
};

console.log(addBinary("1010", "1011"))
