//https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    let tmp = reserve.slice()

    for (let i in tmp) {
        let key = lost.indexOf(tmp[i])

        if (key != -1) {
            lost.splice(key, 1);
            reserve.splice(reserve.indexOf(tmp[i]), 1);
        }
    }

    for (let i of reserve) {
        let key = lost.includes(i - 1) ? lost.indexOf(i - 1) : lost.indexOf(i + 1)

        if (key != -1) {
            lost.splice(key, 1)
        }
    }

    return n - lost.length
}