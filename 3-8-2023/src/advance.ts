// enums 


// TUPLE


type user = [string,number,number];


let sumat : user = ['sumat',121,21];


let Name : string| number | boolean = "Sumat"


type obj = [name1:string,age:number,id:number] 


// function dynamic type

function getInfo<type>(value:type){
    return value
}


getInfo<number>(1);
getInfo<string>('sumat');
getInfo<boolean>(true)



//Interface 


interface users  {
    name: string;
    id : number;
    role: string
}


interface admins extends users{
    role: string;
    place: string;
}



let user : users = {
    name:'Sumat',
    id:123,
    role:'student'
}

let admin : admins = {
    name: 'sumat',
    id : 123,
    role: 'IA',
    place: 'pattamunadi'
}


// Class 


 class Car {

    car : string;
    brand: string;

    constructor(caraPara:string,brandpara:string){
        this.car = caraPara;
        this.brand = brandpara;
    }
 }

 let myCar = new Car('Thar',"121") 



 class Suv extends Car {
    SUV : boolean;

     constructor(car:string,brand:string,suv:boolean){
        super(car,brand)
        this.SUV  = suv;
     }
 }