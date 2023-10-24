package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
)

type ApiResult struct {
	HttpStatus int
	Noun       string
	Count      int           `json:"count"`
	Result     *[]Earthquake `json:"data"`
}

type Earthquake struct {
	Place     string `json:"place"`
	Magnitude string `json:"magnitude"`
	Country   string `json:"country"`
	Date      string `json:"date"`
}

func ApiData() *ApiResult {
	url := "https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&start=1&count=30&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1"
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("X-RapidAPI-Key", "86a408d39bmsh8c59b6834f377f9p18e802jsnc60b2ecfbdd7")
	req.Header.Add("X-RapidAPI-Host", "everyearthquake.p.rapidapi.com")
	res, _ := http.DefaultClient.Do(req)
	body, _ := ioutil.ReadAll(res.Body)
	var result ApiResult
	json.Unmarshal(body, &result)
	return &result
}

func render(w http.ResponseWriter, r *http.Request) {
	data := ApiData()
	t := template.Must(template.ParseFiles("index.html"))
	t.Execute(w, data)
	fmt.Println("Successfully Exectued")

}

func main() {
	http.HandleFunc("/", render)
	log.Fatal(http.ListenAndServe(":3000", nil))
	fmt.Println("HTML template")
}
