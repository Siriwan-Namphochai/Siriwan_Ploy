package entity

import (
  "time"
  "gorm.io/gorm"
)

type User struct {
  gorm.Model
  FirstName string    `gorm:"column:first_name" json:"firstName"`
  LastName  string    `gorm:"column:last_name" json:"lastName"`
  Email     string    `gorm:"uniqueIndex" json:"email"`
  Age       uint8     `gorm:"check:age >= 0" json:"age"`
  BirthDay  time.Time `gorm:"type:date" json:"birthDay"`
}
