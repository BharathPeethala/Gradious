function indexOfArr(arr,i){

    for(let j=0;j<arr.length;j++){
        if(arr[j]==i){
            return j
        }
    }
    return -1
}

console.log(indexOfArr([1,2,3,4,5],3));