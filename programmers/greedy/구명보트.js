// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    let forward = 0;
    let last = people.length - 1;
    while (forward < last) {
        if (people[forward] + people[last] <= limit) {
            forward++;
        }
        last--;
        answer++;
    }
    if (forward === last) {
        answer++;
    }
    return answer;
}