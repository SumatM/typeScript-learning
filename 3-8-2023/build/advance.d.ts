type user = [string, number, number];
declare let sumat: user;
declare let Name: string | number | boolean;
type obj = [name1: string, age: number, id: number];
declare function getInfo<type>(value: type): type;
interface users {
    name: string;
    id: number;
    role: string;
}
interface admins extends users {
    role: string;
    place: string;
}
declare let user: users;
declare let admin: admins;
declare class Car {
    car: string;
    brand: string;
    constructor(caraPara: string, brandpara: string);
}
declare let myCar: Car;
declare class Suv extends Car {
    SUV: boolean;
    constructor(car: string, brand: string, suv: boolean);
}
