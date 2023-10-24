const array = {
	arr: [],
	popArr: function () {
		let k = this.arr[this.arr.length-1]
        this.arr[this.arr.length-1] = null;
		this.arr = this.arr.filter((e)=>{
			return e != null
		})
        return k;
	},
};

let arr1 = array;
arr1.arr = [1, 2, 1, 10, 11]
let arr2  = array;
arr2.arr = [1,1,1,1];
// console.log(arr1.arr,arr2.arr);
console.log(arr1.popArr());
// console.log(arr1.arr);
