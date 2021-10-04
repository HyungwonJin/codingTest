// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    const answer = [];
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let supoCount = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (supo1[i % supo1.length] === answers[i]) {
            supoCount[0]++;
        }
        if (supo2[i % supo2.length] === answers[i]) {
            supoCount[1]++;
        }
        if (supo3[i % supo3.length] === answers[i]) {
            supoCount[2]++;
        }
    }
    const maxNum = Math.max(...supoCount);
    for (let i = 0; i < supoCount.length; i++) {
        if (supoCount[i] === maxNum) {
            answer.push(i + 1);
        }
    }
    return answer;
}