package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Print("Enter dot and add space before dot to terminate input\n")
	counts := make(map[string]int)
	input := bufio.NewScanner(os.Stdin)
	flag := 0
	for input.Scan() {
		words := strings.Split(input.Text(), " ")
		for i := 0; i < len(words); i++ {
			if words[i] != "." {
				counts[words[i]] += 1
			} else {
				flag = 1
			}
		}
		if flag == 1 {
			break
		}
	}

	for key, value := range counts {
		fmt.Printf("%s:%d\n", key, value)
	}

}
