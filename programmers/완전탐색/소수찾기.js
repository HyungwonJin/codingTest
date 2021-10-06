// https://programmers.co.kr/learn/courses/30/lessons/42839

function chkPrime(num) { // 소수를 판별하는 함수
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    let answer = 0;

    let n = numbers.split('');
    let nums = new Set(); // 중복을 판변하기 위해 Set
    combi(n, '');

    function combi(a, s) {
        if (s.length > 0) {
            if (nums.has(Number(s)) === false) { // 없을 경우만
                nums.add(Number(s));
                if (chkPrime(Number(s))) { // 소수이면 
                    answer++;
                }
            }
        }
        if (a.length > 0) {
            for (let i = 0; i < a.length; i++) { // 중요한 부분
                let t = a.slice() // 복사
                t.splice(i, 1); // 복사한 것을 부분삭제
                combi(t, s + a[i]);
            }
        }
    }

    return answer;
}