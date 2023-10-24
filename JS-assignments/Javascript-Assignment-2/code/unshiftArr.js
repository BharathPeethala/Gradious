const array = {
	arr: [],
	unshiftArr: function (element){
		let arr2 = [element];
		for (let i = 1; i < this.arr.length; i++) {
			arr2[i] = this.arr[i];
		}
		this.arr = arr2;
	},
};

let arr1 = array;
arr1.arr = [1, 2, 1, 10, 11];
arr1.unshiftArr(10);
console.log(arr1.arr);
