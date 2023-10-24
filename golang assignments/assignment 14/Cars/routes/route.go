package routes

import (
	"cars/api"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func Init() *echo.Echo {
	e := echo.New()
	e.Use(middleware.RemoveTrailingSlash())
	e.GET("/cars", api.GetCars())
	e.GET("/cars/:name", api.GetCar())
	e.POST("/car", api.CreateCar())
	e.DELETE("/car/:id", api.DeleteCar())
	e.PUT("/car/:id",api.UpdateCar())
	return e
}
