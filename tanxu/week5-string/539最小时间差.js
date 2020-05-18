/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const minutesAry = []
    for (let i = 0; i < timePoints.length; i++) {
        const time = timePoints[i].split(':')
        const minutes = Number(time[0]) * 60 + Number(time[1])
        let index = 0
        for (let i = 0; i < minutesAry.length; i++) {
            if (minutes <= minutesAry[i]) {
                index = i
                break
            } else {
                index++
            }
        }
        if (minutesAry.length === 0) {
            minutesAry.push(minutes)
        } else {
            minutesAry.splice(index,0,minutes)
        }

    }
    console.log(minutesAry)
    let result = 60*24  - (minutesAry[minutesAry.length - 1] - minutesAry[0])

    for (let i = 0; i < minutesAry.length - 1; i++) {
        const a = minutesAry[i + 1] - minutesAry[i]
        if (a < result) {
            result = a
        }
    }
    return result
};

console.log(findMinDifference(["00:00","23:59"]))
