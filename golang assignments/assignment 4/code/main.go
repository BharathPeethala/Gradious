package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	file, err := os.Open("input.txt")
	counts := make(map[string]int)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	input := bufio.NewScanner(file)
	for input.Scan() {
		inputStr := input.Text()
		words := strings.Split(inputStr, " ")
		for i := 0; i < len(words); i++ {
			if len(words[i]) > 0 {
				counts[words[i]]++
			}

		}
		for key, value := range counts {
			fmt.Println(key, value)
		}
	}
}
