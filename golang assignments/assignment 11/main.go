package main

import (
	"fmt"
	"os"
	"strings"

	"golang.org/x/net/html"
)

func handlePanic() {
	if r := recover(); r != nil {
		if r == "Error" {
			fmt.Println("Recovered from panic:", r)
			return
		} else {
			panic(r)
		}
	}
}

func checkPanics(n *html.Node, data []string) []string {
	if n.Type == html.TextNode && n.Parent.Data != "script" && n.Parent.Data != "style" {
		if strings.Contains(n.Data, "Fatal") {
			panic("fatal")
		} else if strings.Contains(n.Data, "Error") {
			panic("Error")
		} else {
			data = append(data, n.Data)
		}

	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		data = checkPanics(c, data)
	}
	return data
}
func panicAndRecover(file string) {
	data, err := os.Open(file)
	if err != nil {
		return 
	}
	doc, err := html.Parse(data)
	if err != nil {
		return 
	}
	defer handlePanic()
	checkPanics(doc, nil)
}

func main() {
	panicAndRecover("index.html")
}
