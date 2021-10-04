// https://programmers.co.kr/learn/courses/30/lessons/42579/solution_groups?language=javascript

function solution(genres, plays) {
    var dic = {};
    genres.forEach((t, i) => {
        dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
    }); // 해시테이블을 만듦

    var dupDic = {}; // 각 장르 별 곡 2개가 찼는지 확인
    return genres
        .map((t, i) => ({ genre: t, count: plays[i], index: i }))
        .sort((a, b) => {
            return dic[b.genre] - dic[a.genre] || b.count - a.count; // 장르별 정렬 -> 재생횟수별 정렬
        })
        .filter(t => { // 2가 넘으면 해당 장르는 걸러냄
            if (dupDic[t.genre] >= 2) return false;
            dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
            return true;
        })
        .map(t => t.index);
}

// function solution(genres, plays) {
//     const answer = [];
//     const obj = {};
//     const playCounter = [];
//     const genreKey = [];

//     for (let i = 0; i < genres.length; i++) {
//         obj[genres[i]] = (obj[genres[i]] || 0) + plays[i];
//     }

//     for (let key in obj) {
//         genreKey.push([key, obj[key]]);
//     }

//     for (let i = 0; i < genres.length; i++) {
//         playCounter.push([genres[i], plays[i], i]);
//     }

//     genreKey.sort((a, b) => b[1] - a[1]);
//     playCounter.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt() || b[1] - a[1]);

//     for (let i = 0; i < genreKey.length; i++) {
//         let count = 0;
//         for (let j = 0; j < playCounter.length; j++) {
//             if (count < 2 && genreKey[i][0] === playCounter[j][0]) {
//                 count++;
//                 answer.push(playCounter[j][2]);
//             }
//         }
//     }
//     return answer;
// }