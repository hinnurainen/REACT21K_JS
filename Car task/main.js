let formInput = document.querySelector("#userinput");
let formSearch = document.querySelector("#searching");

function Car(licence, maker, model, price, color) {
    this.licencePlate = licence;
    this.carMaker = maker;
    this.carModel = model;
    this.carPrice = price;
    this.carColor = color;
};

let carlist = [];

const addCar = (event) => {
    event.preventDefault();
    let licence = document.querySelector("#licenceplate").value;
    let maker = document.querySelector("#carmaker").value;
    let model = document.querySelector("#carmodel").value;
    let price = Number(document.querySelector("#carprice").value);
    let color = document.querySelector("#carcolor").value;
    let newCar = new Car(licence, maker, model, price, color);

    carlist.push(newCar);
    console.table(carlist);
    formInput.reset();
};


const searchCar = (event) => {
    event.preventDefault();

    let licence = document.getElementById("searchLicence").value;
    let text = document.querySelector("p");

    if (carlist.length == 0) {
        text.textContent = "Try adding a car first.";
    } else {
        for (let i = 0; i < carlist.length; i++) {
            if (carlist[i].licencePlate == licence) {
                text.textContent = `Licence number ${carlist[i].licencePlate} is ${carlist[i].carMaker} ${carlist[i].carModel}`;
                break;
            } else {
                text.textContent = "Gone for coffee";
            }
        }
    }
    formSearch.reset();
};



/* create a method discount() for the car object that returns a discounted price of the vehicle. If the price is over 20k, discount is 25%. If it's under 5k, it's 10% and otherwise 15%  

    let carDisc = {
        calcDiscount: function () {
            if (this.carPrice > 20000) {
                carDisc = 0.75 * this.carPrice;
            } else if (this.carPrice < 5000) {
                carDisc = 0.9 * this.carPrice;
            } else {
                carDisc = 0.85 * this.carPrice;
            }
        }
        return carDisc;
    }
};

carDisc.calcDiscount();
    
    */

formInput.addEventListener("submit", addCar);
formSearch.addEventListener("submit", searchCar);
