function joinArr(arr){
    let res = '';
    for(let i=0;i<arr.length;i++){
        res += arr[i]
    }
    return res;
}

console.log(joinArr([1,2,3,4,5,6]));