// enums 
let sumat = ['sumat', 121, 21];
let Name = "Sumat";
// function dynamic type
function getInfo(value) {
    return value;
}
getInfo(1);
getInfo('sumat');
getInfo(true);
let user = {
    name: 'Sumat',
    id: 123,
    role: 'student'
};
let admin = {
    name: 'sumat',
    id: 123,
    role: 'IA',
    place: 'pattamunadi'
};
// Class 
class Car {
    constructor(caraPara, brandpara) {
        this.car = caraPara;
        this.brand = brandpara;
    }
}
let myCar = new Car('Thar', "121");
class Suv extends Car {
    constructor(car, brand, suv) {
        super(car, brand);
        this.SUV = suv;
    }
}
//# sourceMappingURL=advance.js.map