function solution(arr) {
    let answer = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>answer) answer=arr[i];
    }
    let i = 1;
    while (true) {
        let n = true;
        for (let j = 0; j < arr.length; j++) {
            if ((answer*i) % arr[j] !== 0) {
                n = false;
                break;
            }
        }

        if (n) {
            return answer*i;
        }
        i++;
    }
}
