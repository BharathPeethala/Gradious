package main

import (
	"fmt"
	"net/http"
	"strings"

	"golang.org/x/net/html"
)

func visitDoc(links []string, n *html.Node) []string {
	if n.Type == html.TextNode && n.Parent.Data != "script" && n.Parent.Data != "style" {
		links = append(links, strings.TrimSpace(n.Data))
	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		links = visitDoc(links, c)
	}
	return links
}
func getData(url string) ([]string, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	if res.StatusCode != http.StatusOK {
		res.Body.Close()
		return nil, fmt.Errorf("getting %s", res.StatusCode)
	}
	doc, err := html.Parse(res.Body)
	res.Body.Close()
	if err != nil {
		return nil, fmt.Errorf("Parse HTMl error %v", err)
	}
	return visitDoc(nil, doc), nil
}

func main() {
	links, err := getData("https://gradious.com/")
	if err != nil {
		fmt.Println(err)
	}
	for _, link := range links {
		if len(link) > 0 {
			fmt.Println(link)
		}

	}
}
