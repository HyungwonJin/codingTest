// https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function solution(N, stages) {
  let stageCount = new Array(N);
  let failPer = [];
  stageCount.fill(0);

  let usersNum = stages.length;
  for (let val of stages) {
    stageCount[val - 1]++; // stageCount에 해당하는 각 원소의 수를 1씩 올려서 완성함
  }
  console.log(stageCount)

  for (let i = 0; i < N; i++) {
    if (usersNum === 0) {
      failPer.push({ failper: 0, stageNum: i + 1 });
    } else {
      failPer.push({ failper: stageCount[i] / usersNum, stageNum: i + 1 });
    }
    usersNum -= stageCount[i];
  }

  failPer.sort((a, b) => {
    if (a.failper === b.failper) { // 숫자가 같으면 내림차순
      return a.stageNum - b.stageNum;
    }
    return b.failper - a.failper;
  });

  return failPer.map(item => {
    return item.stageNum;
  });
}

// for 문이 2개 들어가서 효율성이 좋지 못함

// function solution(N, stages) {
//     const  answer = [];
//     const array = [];
//     let fail = 0;
//     let peopleNum = stages.length;
//     stages.sort((a,b) => a - b);
//     for(let i = 1; i < N+1; i++){
//         let count = 0;
//         for(let j = 0; j < stages.length; j++){
//             if(i === stages[j]){
//                 count += 1;                
//             }
//         }
//         fail = count/peopleNum;
//         array.push({i, fail});
//         peopleNum -= count;
//     }
//     array.sort((a,b) =>  b.fail - a.fail).forEach(el => {
//         answer.push(el.i);
//     });
//     return answer;
// }