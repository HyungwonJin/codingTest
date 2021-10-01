// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
    const answer = [];
    commands.forEach(el => {
        const [i, j, k] = el;
        const tmp = array.filter((el, idx) => idx + 1 >= i && idx + 1 <= j).sort((a, b) => a - b);
        answer.push(tmp[k - 1]);
    })
    return answer;
}