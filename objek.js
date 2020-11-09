// Berikut ini adalah cara membuat objek dengan javascript
// 1. Menggunakan Object litteral
// 2. Menggunakan function constructor
// 3. menggunakan class


//object litteral
const car = {
    color: 'red',
    personalCar: true,
    type: 'suv',
    detail: function() {
        return this.color + "" + this.personalCar + "" + this.type
    }
}

//using function constructor
function Car(color, type) {
    this.color = color;
    this.type = type;
    this.detail = () => {
        return this.color + "" + this.type
    }
}

const car1 = new Car("Black", "SUV")

//using class
class Car {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
    detail() {
        return this.color + "" + this.type
    }

}

const car2 = new Car("black", "SUV")