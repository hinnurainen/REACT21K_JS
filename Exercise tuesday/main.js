/* let text = document.querySelector("p");

let car = { type: "Audi", year: 2000, ownerName: "John Doe", city: "Helsinki", calcAge: function () { this.age = 2021 - this.year; return this.age; } }; //calcAge is a method, inside the object

console.log(car);

text.textContent = `Your car is ${car.type} from year ${car.year} and it is ${car.calcAge()} years old.`; */

function Car(type, year, ownerName, city) {
    this.type = type;
    this.year = year;
    this.ownerName = ownerName;
    this.city = city;
}

let anotherCar = new Car("Volvo", 2015, "Heidi", "Vantaa");

console.log(anotherCar);

let thirdCar = new Car("Mercedes", 2010, "Keke", "Mikkeli");
console.log(thirdCar);


/*console.log(car.year);
console.log(car.city);

car.color = "red";
console.log(car);
car.color = "black";
console.log(car);

delete car.city;
console.log(car);*/