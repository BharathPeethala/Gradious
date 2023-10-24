package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sort"
	"strconv"
)

type Customer struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type Customerdatabase map[string][]Customer

func (db Customerdatabase) customerList(w http.ResponseWriter, req *http.Request) {
	customers := db["Customers"]
	data, _ := json.MarshalIndent(customers, " ", "")
	fmt.Fprintf(w, string(data))
}

func (db Customerdatabase) findById(w http.ResponseWriter, req *http.Request) {
	id := req.URL.Query().Get("id")
	found := "F"
	customers := db["Customers"]
	for _, cus := range customers {
		if id == strconv.Itoa(cus.Id) {
			fmt.Fprintf(w, "id:%d\nname: %s\nemail: %s\n", cus.Id, cus.Name, cus.Email)
			found = "T"
		}
	}

	if found == "F" {
		w.WriteHeader(http.StatusNotFound) // 404
		fmt.Fprintf(w, "No employee with that id: %s\n", id)
		return
	}

}

func (db Customerdatabase) sortBy(w http.ResponseWriter, req *http.Request) {
	by := req.URL.Query().Get("by")
	customers := db["Customers"]
	if by == "id" {
		sort.Slice(customers, func(i, j int) bool {
			return customers[i].Id < customers[j].Id
		})
	} else if by == "name" {
		sort.Slice(customers, func(i, j int) bool {
			return customers[i].Name < customers[j].Name
		})
	} else if by == "email" {
		sort.Slice(customers, func(i, j int) bool {
			return customers[i].Email < customers[j].Email
		})
	} else {
		w.WriteHeader(http.StatusNotFound) // 404
		fmt.Fprintf(w, "Attribute is not present", by)
		return
	}

	data, _ := json.MarshalIndent(customers, " ", "")
	fmt.Fprintf(w, string(data))

}

func main() {
	customers := []Customer{
		{Id: 1, Name: "aohn", Email: "augrp1@example.com"},
		{Id: 9, Name: "zary", Email: "zugrp2@example.com"},
		{Id: 2, Name: "keter", Email: "bugrp3@example.com"},
		{Id: 5, Name: "yohn", Email: "tugrp1@example.com"},
		{Id: 8, Name: "rary", Email: "kugrp2@example.com"},
		{Id: 11, Name: "peter", Email: "lugrp3@example.com"},
	}
	fmt.Println("Sever started at port 3000")
	customerdb := Customerdatabase{"Customers": customers}
	http.HandleFunc("/customers", customerdb.customerList)
	http.HandleFunc("/customers/find", customerdb.findById)
	http.HandleFunc("/customers/sort", customerdb.sortBy)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))

}
