// https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => b - a);
    citations.forEach((el, idx) => {
        if (el >= idx + 1) {
            answer++;
        }
    })
    return answer;
}