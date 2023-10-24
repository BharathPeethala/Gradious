package main

import (
	"encoding/json"
	"fmt"

	// "fmt"
	"os"
	"text/template"

	// "io"
	"io/ioutil"
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
}

func main() {

	url := "https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&start=1&count=30&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1"
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("X-RapidAPI-Key", "3e50247becmsh9c567afd0a841eep1820dbjsn018f38271f45")
	req.Header.Add("X-RapidAPI-Host", "everyearthquake.p.rapidapi.com")
	res, _ := http.DefaultClient.Do(req)
	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)
	var result ApiResult
	json.Unmarshal(body, &result)
	fmt.Println(result)
	getFormattedString(&result)
}

func getFormattedString(earthquake *ApiResult) {
	const templ = `
	{{.Count}} Earthquakes:
    {{range .Result}}----------------------------------------
    Place: {{.Place}}
    Magnitude: {{.Magnitude}}
    Country: {{.Country}}
    {{end}}`
	t := template.Must(template.New(" ").Parse(templ))
	t.Execute(os.Stdout, earthquake)

}
