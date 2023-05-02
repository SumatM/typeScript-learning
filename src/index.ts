// Data Types 


// number;

let n : number = 10;

n = 3

// string;

let Name : string = 'Sumat';

Name = 'Sumat Mallick';

// bollean;

let state : boolean = false;

state = true;

// Array;

let arr : number[] = [1,2,3,4,5] 

let arr1 : Array <number> = [0,9,8,7,6];

let arr2 : string[] = ['a','c','b','d']

let arr3 : Array <string>  = ['1','2','d'];

let arr4 : boolean[] = [true,false,true,false]


// Object {};

type bioObj = {name:string; age:number};


let bio : bioObj = {
    name: "Sumat",
    age: 27,
}


// array with obj ;

let mainBio : bioObj[] = [{name:'aman',age:21},{name:'varsah',age:20}]

type bioType = {class:number,place:string};


let newArrWithObj : Array<bioType> = [{class:12,place:'cuttact'},{class:10, place:'Kolkata'}]


// object with Array 

type forThis = {img: string[],cat: boolean[]}


let objwithArray  = {
    img : ['abc','apple'],
    cat : [true,false]
}


// `ANY`  keyword 


let mobile : string | number | boolean = 'Realme'

mobile = 2;

mobile = false;

let book : any = 'abc';

    book = 21,
    
    book = ['cat']

    book = {cat:objwithArray}



// INTERSECTION 

type obj = {}

type user = {name:string,id:number,cart?:string[]}

type admin = {name: string,id:number,inventry?: obj[]}


let sumat : user & admin = {
    name: 'Sumat',
    id:121,
    cart:['abc','bcd']
}


// function 


const sum = (a:number,b?:number) => {
    return a+b
}

sum(1,2)




export {}