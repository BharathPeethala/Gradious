package main

import "fmt"

func swapFirstLastSlice(arr []int) {
	temp := arr[0]
	arr[0] = arr[len(arr)-1]
	arr[len(arr)-1] = temp
}

func swapFirstLastArray(arr [7]int) {
	temp := arr[0]
	arr[0] = arr[len(arr)-1]
	arr[len(arr)-1] = temp
}

func main() {
	var arr [7]int = [7]int{7, 6, 5, 4, 3, 2, 1}
	var slice = []int{71, 62, 51, 24, 13, 210, 11}
	fmt.Println("--------------------Before Function Call----------------- \n")
	fmt.Println("array : ",arr)
	fmt.Println("slice : ",slice)
	swapFirstLastArray(arr)
	swapFirstLastSlice(slice)
	fmt.Println("--------------------After Function Call------------------ \n")
	fmt.Println("array : ",arr)
	fmt.Println("slice : ",slice)
}
