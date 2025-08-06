package entity

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("Siriwan.db"), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to connect database: %v", err)
	}

	// Migrate schema
	err = database.AutoMigrate(&User{})
	if err != nil {
		log.Fatalf("failed to migrate schema: %v", err)
	}

	db = database
}
