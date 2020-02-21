// Написать реализацию прототипного наследования на синтаксисе ES5.
// - У родителя должно быть миннимум одно свойство и один метод.
// - У потомка должно быть миннимум одно дополнительное свойство и расширенное поведение метода родителя

// Основная функция-конструктор
function Driver(name, license, age, category) {
  this.name = name;
  this.license = license;
  this.age = age;
  this.category = category;
  this.getName = function() {
    console.log(`Name: ${this.name}`);
  };
  this.getAge = function() {
    console.log(`${this.age} years old.`);
  };
  this.drive = function() {
    console.log(`${name} is driving now.🚗`);
  };
}
Driver.prototype.getLicense = function() {
  console.log(`Licence : NONE`);
};
// Функция наследний от Driver
function TrackDriver(name, license, age, category, typeOfCar) {
  Driver.call(this, name, license, age, category);

  this.typeOfCar = typeOfCar;
}
TrackDriver.prototype = Object.create(Driver.prototype);
TrackDriver.prototype.getTypeOfCar = function() {
  console.log(`Type of car: ${this.typeOfCar}`);
};
TrackDriver.prototype.getLicense = function() {
  console.log(`License: ${this.license}`);
};
// Наш новый водитель
var bobTrackDriver = new TrackDriver("Bob", true, 34, "C", "Track 🚚");

bobTrackDriver.getName();
bobTrackDriver.getTypeOfCar();
bobTrackDriver.getLicense();
bobTrackDriver.getAge();
bobTrackDriver.drive();

