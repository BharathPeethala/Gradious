
const array = {
    arr : [],
    pushArr: function(element){
        this.arr[this.arr.length] = element
    }
}

let arr1 = array
arr1.arr= [1,2,1,10,11]
arr1.pushArr(20)
console.log(arr1.arr)