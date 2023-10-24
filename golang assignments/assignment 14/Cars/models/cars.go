package models

import (
	"cars/config"
	"fmt"

	"github.com/jinzhu/gorm"
)

var db *gorm.DB

type Car struct {
	ID          int    `gorm:"primaryKey; column:id"`
	Name        string `gorm:"" json:"name"`
	HoursePower int    `gorm:"column:horsePower" json:"horsePower"`
	Mileage     string `json:"mileage"`
}

func Init() {
	config.Connect()
	db = config.GetDB()
	fmt.Println(db)
	db.AutoMigrate(&Car{})
}
func (Car) TableName() string {
	return "cars"
}

func (b *Car) CreateCar() *Car {
	db.NewRecord(b)
	db.Create(&b)
	return b
}

func GetAllCars() []Car {
	var Cars []Car
	db.Find(&Cars)
	fmt.Println(Cars)
	return Cars
}

func GetCarByName(name string) *Car {
	var getCar Car
	db.Where("name=?", name).Find(&getCar)
	return &getCar
}

func DeleteCar(ID int) Car {
	var Car Car
	db.Where("ID=?", ID).Delete(Car)
	return Car
}

func UpdateCar(ID int, newCar Car) error {
	var oldCar Car
	db.Where("ID=?", ID).Find(&oldCar)
	if len(newCar.Name) != 0 {
		oldCar.Name = newCar.Name
	}
	if newCar.HoursePower != 0 {
		oldCar.HoursePower = newCar.HoursePower
	}
	if len(newCar.Mileage) != 0 {
		oldCar.Mileage = newCar.Mileage
	}
	if err := db.Save(&oldCar).Error; err != nil {
		return err
	} else {
		return nil
	}
}
