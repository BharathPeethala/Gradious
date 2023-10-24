package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"math"
	"os"
	// "bharath.com/main/greet"
)

type Miles float64
type Str string

func main() {
	JSONExample()
	// Struct()
	// arrays()
	// var name string = "bharath"
	// fmt.Println(name)
	// pointers()
	// fileReading()
	// readInputsFromCommandLine()
	// const pi = 3.14
	// var name Str = "bharath"
	// fmt.Println(name[2:5])
	// fmt.Println(pi)
	// fmt.Println(milesToKilo(10))
	// fmt.Println(greet.GreetMessage())
	// readCmdLineArguements()
}
func pointers() {
	a := 10
	p := &a
	fmt.Println(*p)
}

func readCmdLineArguements() {
	str := ""
	for i := 1; i < len(os.Args); i++ {
		str += os.Args[i]
	}
	fmt.Println(str)
}

func readInputsFromCommandLine() {
	counts := make(map[string]int)
	input := bufio.NewScanner(os.Stdin)
	for input.Scan() {
		counts[input.Text()] += 1
	}
	for key, value := range counts {
		fmt.Printf("%s\t %d", key, value)
	}
	fmt.Println(counts)
}

func fileReading() {
	counts := make(map[string]int)
	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	input := bufio.NewScanner(file)
	for input.Scan() {
		counts[input.Text()] += 1
	}
	for key, value := range counts {
		fmt.Printf("%s:%d \t \n", key, value)
	}
}

func milesToKilo(dist Miles) Miles {
	return Miles(dist * 1.60)
}

func arrays() {

	var arr [4]string = [4]string{"bharath", "hari", "raja", "ravi"}
	var arr2 [2]int = [2]int{1, 3}
	arr4 := [...]string{"bharath", "hari", "ravi"}
	var arr3 []int

	fmt.Println(arr)
	// arr4 = append(arr4,10)
	fmt.Println(arr2)
	for i := 0; i < 10; i++ {
		arr3 = append(arr3, i)
	}
	arr3 = append(arr3, 20, 20, 35)
	fmt.Println(arr4)
	fmt.Println(arr3[5:7])
	fruits := [...]string{2: "hari"}
	fmt.Println(fruits)
}

func Struct() {

	type Point struct {
		X, Y float64
	}
	type Circle struct {
		Center Point
		Radius float64
	}
	type Wheel struct {
		Circle
		Spokes int
	}
	type Employee struct {
		id       int
		name     string
		salary   int
		position string
	}

	distance := func(p1 Point, p2 Point) int {
		return int(math.Sqrt((math.Pow(p2.X, 2) - math.Pow(p1.X, 2)) + (math.Pow(p2.Y, 2) - math.Pow(p1.Y, 2))))
	}
	p1 := Point{1, 2}
	p2 := Point{Y: 4, X: 5}

	fmt.Println(distance(p1, p2))
	var rahul Employee
	rahul.id = 1
	rahul.name = "Rahul"
	rahul.salary = 10000
	rahul.position = "Software Engineer"

	var employeeOfMonth *Employee = &rahul
	employeeOfMonth.salary += 10000

	fmt.Println(rahul)
	fmt.Println(p1, p2)

	wheel1 := Wheel{Circle{Point{1, 3}, 5}, 10}
	wheel2 := Wheel{
		Circle: Circle{
			Center: Point{X: 7.0, Y: 10.0},
			Radius: 10,
		},
		Spokes: 10,
	}
	fmt.Println(wheel1)
	fmt.Println(wheel2)
}

func JSONExample() {
	type SmartPhone struct {
		Name        string
		Year        int  `json:"yearReleased"`
		LocallyMade bool `json:"madeInIndia,omitempty"`
	}

	var phones = []SmartPhone{
		{
			Name:        "iphone",
			Year:        2022,
			LocallyMade: true,
		},
		{
			Name:        "samsung",
			Year:        2021,
			LocallyMade: true,
		},
		{
			Name:        "nokia",
			Year:        2020,
			LocallyMade: false,
		},
		{
			Name: "xaomi",
			Year: 2012,
		},
	}
	// data,_ := json.Marshal(phones)
	data,_ := json.MarshalIndent(phones,""," ")
	fmt.Printf("%s",data)

}
