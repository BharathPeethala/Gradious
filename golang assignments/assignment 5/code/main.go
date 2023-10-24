package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	result := make(map[string]int)
	files, err := os.ReadDir("files")

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	for _, f := range files {
		fileName := "files" + "/" + f.Name()
		file, err := os.Open(fileName)
		if err != nil {
			fmt.Println("Error:", err)
			os.Exit(1)
		}
		input := bufio.NewScanner(file)
		count := 0
		for input.Scan() {
			if len(input.Text()) > 0 {
				count++
			}
		}
		result[f.Name()] = count
	}

	for k, v := range result {
		fmt.Println(k, v)
	}
}
