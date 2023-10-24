package main

import (
	"fmt"
)

func customAppend(slice []int, elements []int) []int {
	if len(slice)+len(elements) <= cap(slice) {
		n := len(slice)
		slice = slice[:len(slice)+len(elements)]
		j := 0
		for i := n; i < len(slice); i++ {
			slice[i] = elements[j]
			j++
		}
		return slice
	} else {
		var newSlice = make([]int, len(elements)+len(slice), len(elements)+len(slice))
		for i := 0; i < len(slice); i++ {
			newSlice[i] = slice[i]
		}
		j := 0
		for i := len(slice); i < len(newSlice); i++ {
			newSlice[i] = elements[j]
			j++
		}
		return newSlice
	}
}

func main() {
	var slice = make([]int, 0, 10)
	slice = append(slice, 10, 21, 30)
	var elements []int = []int{1, 2, 3, 4}

	fmt.Println("--- if length is less than capactiy ---")
	fmt.Println("")
	fmt.Println("--------Before Insertion----------")
	fmt.Println("")
	fmt.Println("Capactity of the Slice: ", cap(slice))
	fmt.Println("Length of the Slice: ", len(slice))
	fmt.Println("Length of the Elements: ", len(elements))
	fmt.Println("Slice : ", slice)
	fmt.Println("Elements : ", elements)
	slice = customAppend(slice, elements[:])
	fmt.Println("")
	fmt.Println("--------After Insertion----------")
	fmt.Println("")
	fmt.Println("Capactity : ", cap(slice))
	fmt.Println("Length : ", len(slice))
	fmt.Println("Slice :", slice)

	elements = []int{1, 2, 3, 4, 5, 6, 7, 9, 10, 11}
	fmt.Println("")
	fmt.Println("--- if length is greater than capactiy ---")
	fmt.Println("")
	fmt.Println("--------Before Insertion----------")
	fmt.Println("")
	fmt.Println("Capactity of the Slice: ", cap(slice))
	fmt.Println("Length of the Slice: ", len(slice))
	fmt.Println("Length of the Elements: ", len(elements))
	fmt.Println("Slice : ", slice)
	fmt.Println("Elements : ", elements)
	slice = customAppend(slice, elements[:])
	fmt.Println("")
	fmt.Println("--------After Insertion----------")
	fmt.Println("")
	fmt.Println("Capactity : ", cap(slice))
	fmt.Println("Length : ", len(slice))
	fmt.Println("Slice :", slice)
}
