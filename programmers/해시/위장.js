// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    let answer = 1;
    const obj = {};
    clothes.forEach(el => {
        obj[el[1]] = (obj[el[1]] || 0) + 1; // obj[el[1]]에 해당하는 값이 없으면  0, 있으면 해당값 + 1
    })
    for (let key in obj) {
        answer *= obj[key] + 1; // 해당 아이템을 입지 않았을 경우도 포함해서 + 1
    }
    return answer - 1; // 전신에 아무것도 걸치지 않았을 경우를 배제해야하므로 - 1
}