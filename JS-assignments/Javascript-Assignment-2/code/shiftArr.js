const array = {
	arr: [],
	shiftArr: function () {
		let arr2 = [];
        j = 0
		for (let i = 1; i < this.arr.length; i++) {
			arr2[j] = this.arr[i];
            j+=1;
		}
		this.arr = arr2;
	},
};

let arr1 = array;
arr1.arr = [1, 2, 1, 10, 11];
arr1.shiftArr();
console.log(arr1.arr);
