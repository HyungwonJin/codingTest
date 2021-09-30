// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript


// 속도는 느리지만 js다운 풀이
function solution(priorities, location) {
    const arr = priorities.map((priority, index) => { // 객체로 배열을 구성
        return {
            index: index, priority: priority
        };
    });

    const queue = [];

    while (arr.length > 0) {
        let firstEle = arr.shift();
        let hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}


// 속도는 빠르지만 js답지 않은 풀이
// function solution(priorities, location) {
//     let answer = 0;
//     const array = new Array(priorities.length); // 찾는 값 위치를 새로운 배열에 저장
//     array.fill(false); // 찾는 값 위치 이외는 전부 false
//     array[location] = true; // 찾는 값 위치는 true

//     while(priorities.length !== 0){
//         if(priorities[0] === Math.max(...priorities)){ // 젤 앞의 위치에 있는 값이 최댓값인가?
//             answer++;
//             if(array[0] === true){ // 그리고 그 값이 찾는 값인가?
//                 return answer;
//             }
//             priorities.shift();
//             array.shift();
//         } else { // 아니면 뺴서 뒤에 넣음
//             priorities.push(priorities.shift());
//             array.push(array.shift());
//         }
//     }
// }