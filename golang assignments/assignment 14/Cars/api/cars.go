package api

import (
	"cars/models"
	"cars/utils"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

func GetCars() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		cars := models.GetAllCars()
		return c.JSON(http.StatusOK, cars)
	}
}

func GetCar() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		name := c.Param("name")
		cars := models.GetCarByName(name)
		return c.JSON(http.StatusOK, cars)
	}
}

func CreateCar() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		car := models.Car{}
		utils.ParseBody(c.Request(), &car)
		h := car.CreateCar()
		return c.JSON(http.StatusOK, h)
	}
}

func UpdateCar() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		idString := c.Param("id")
		car := models.Car{}
		id, _ := strconv.Atoi(idString)
		car.ID = id
		utils.ParseBody(c.Request(), &car)
		err = models.UpdateCar(id, car)
		if err != nil {
			return c.JSON(http.StatusBadRequest, err)
		}
		return c.JSON(http.StatusOK, map[string]string{"response": "Car updated successfully"})
	}
}

func DeleteCar() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		idString := c.Param("id")
		status := make(map[string]string)
		id, err := strconv.Atoi(idString)
		if err != nil {
			status["deleted"] = "true"
			status["reason"] = "Unknown car ID"
			return c.JSON(http.StatusNotFound, status)
		}
		models.DeleteCar(id)
		status["deleted"] = "true"
		return c.JSON(http.StatusOK, status)
	}
}
