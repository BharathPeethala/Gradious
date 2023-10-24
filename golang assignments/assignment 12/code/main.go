package main

import (
	"fmt"
)

type Employee struct {
	id         int
	name       string
	age        int
	salary     int
	department string
}

type Permanent_Employee struct {
	employee       Employee
	basic_pay      int
	provident_fund int
}

type Contract_Employee struct {
	employee  Employee
	basic_pay int
}

type Sales_Employee struct {
	employee   Employee
	incentives int
}

type Employee_Functions interface {
	CalcSalary() int
	GetDeptandName() []string
}

// Salary
func (emp Permanent_Employee) CalcSalary() int {
	return emp.employee.salary + emp.basic_pay - emp.provident_fund
}

func (emp Contract_Employee) CalcSalary() int {
	return emp.employee.salary + emp.basic_pay
}

func (emp Sales_Employee) CalcSalary() int {
	return emp.employee.salary + emp.incentives
}

// Department Name
func (emp Permanent_Employee) GetDeptandName() []string {
	return []string{emp.employee.name, emp.employee.department}
}

func (emp Contract_Employee) GetDeptandName() []string {
	return []string{emp.employee.name, emp.employee.department}
}

func (emp Sales_Employee) GetDeptandName() []string {
	return []string{emp.employee.name, emp.employee.department}
}

func main() {
	perm_emp_1 := Permanent_Employee{employee: Employee{id: 1, name: "bharath", age: 22, salary: 50000, department: "technical"}, basic_pay: 10000, provident_fund: 2000}
	perm_emp_2 := Permanent_Employee{employee: Employee{id: 2, name: "bhanu", age: 21, salary: 10000, department: "management"}, basic_pay: 15000, provident_fund: 5000}
	con_emp_1 := Contract_Employee{employee: Employee{id: 3, name: "vasu", age: 22, salary: 90000, department: "technical"}, basic_pay: 5000}
	con_emp_2 := Contract_Employee{employee: Employee{id: 4, name: "sai", age: 21, salary: 10000, department: "management"}, basic_pay: 5000}
	sale_emp_1 := Sales_Employee{employee: Employee{id: 5, name: "Mani", age: 25, salary: 20000, department: "sales"}, incentives: 2000}
	sale_emp_2 := Sales_Employee{employee: Employee{id: 6, name: "Gopi", age: 26, salary: 20000, department: "sales"}, incentives: 1000}

	emps := []Employee_Functions{sale_emp_1, sale_emp_2, perm_emp_1, perm_emp_2, con_emp_1, con_emp_2}

	totalExpenses := 0
	depGroup := make(map[string][]string)
	fmt.Println("------------------ Salaries ---------------------")
	for _, value := range emps {
		salary := value.CalcSalary()
		array := value.GetDeptandName()
		name, dept := array[0], array[1]
		totalExpenses += salary
		depGroup[dept] = append(depGroup[dept], name)
		fmt.Println(name, ":", salary)
	}
	fmt.Println("------------------ Total Expenses ---------------------")
	fmt.Println("Amount : ", totalExpenses)
	fmt.Println("------------------ Departments ---------------------")
	for dep, emplist := range depGroup {
		fmt.Println(dep, ":", emplist)
	}

}
