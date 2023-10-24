function concatArr(arr1,arr2){
    let arr = [];
    for(let i=0;i<arr1.length;i++){
        arr[i] = arr1[i]
    }
    for(let i=0;i<arr2.length;i++){
        arr[i+arr1.length] = arr2[i]
    }
    return arr;
}

console.log( concatArr([1,2,'Honey'],['3',9.0,12]));