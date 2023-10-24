function bubble(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].toString()
    }
    let temp;
    for(let i = 0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for(let i = 0;i<arr.length;i++){
        if(!isNaN(Number.parseInt(arr[i]))){
            arr[i] = Number.parseInt(arr[i])
        }
        else{
            // return arr;
            break
        }
    }
    return arr;
}

console.log(bubble([1, 2, 3, "bharath", 5, "mani", "hi"]));
console.log([1,2,3,'bharath',5,'mani','hi'].sort());
console.log(Number.parseInt('vasu'));