function lastIndexOfArr(arr, i) {
	for (let j = arr.length - 1; j >= 0; j--) {
		if (arr[j] == i) {
			return j;
		}
	}
	return -1;
}

console.log(lastIndexOfArr([1, 2, 3, 4, 3, 5], 3));
