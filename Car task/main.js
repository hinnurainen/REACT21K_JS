let formInput = document.querySelector("#userinput");
let formSearch = document.querySelector("#searching");

function Car(licence, maker, model, price, color) {
    this.licencePlate = licence;
    this.carMaker = maker;
    this.carModel = model;
    this.carPrice = price;
    this.carColor = colgitor;
    this.discount = function () {
        if (this.carPrice >= 20000) {
            this.discount = this.carPrice * 0.25;
        } else if (this.carPrice <= 5000) {
            this.discount = this.carPrice * 0.1;
        } else {
            this.discount = this.carPrice * 0.15;
        }
    };
    this.discount();
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
    formSearch.reset();

    if (carlist.length == 0) {
        text.textContent = "Try adding a car first.";
    } else {
        for (const i of carlist) {
            if (i.licencePlate == licence) {
                text.textContent = `Licence number ${i.licencePlate} is ${i.carMaker} ${i.carModel} and your discount is ${i.discount} euros.`;
                break;
            } else {
                text.textContent = "Gone for coffee";
            }
        }
    }
};

formInput.addEventListener("submit", addCar);
formSearch.addEventListener("submit", searchCar);
