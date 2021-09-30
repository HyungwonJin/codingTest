// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let sum = 0;
    const onBridge = new Array(bridge_length); // 다리 위의 차량 무게를 0으로 채움
    onBridge.fill(0);

    while (truck_weights.length > 0) {
        sum -= onBridge.shift();
        if (sum + truck_weights[0] > weight) {
            onBridge.push(0); // 다음 올 차와의 무게 합이 수용량을 넘으면 0을 넣음
        } else {
            sum += truck_weights[0];    // 수용량을 넘지 않으면 다음 차를 올림
            onBridge.push(truck_weights.shift());
        }
        answer++; // 시간의 경과
    }

    return answer + bridge_length;  // 다리 위에 있는 마지막 차가 지나갈 시간을 더함
}