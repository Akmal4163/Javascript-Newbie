// access modifier pada javascript
// 1. public
// 2. private

function Barang(name, price, weight) {
    //public properties
    this.name = name;
    this.price = price;
    //private properties
    var weight = weight;
    //public method
    this.detail = () => {
        return this.name + "" + this.price
    }

    //private method
    function showWeightBarang() {
        return weight
    }

}
// instansiasi objek
const barang1 = new Barang("Lenovo", 100, 2)

console.log(barang1)