

// make a function that will take object and return object ;


interface Car{
    model:string,
    varient: string,
    year:number
}


let mycar = {
    model:'desiel',
    varient:'suv',
    year:2022
}


function getNewMahindra (obj:Car) :Car{
    obj.varient = 'mahindra';
    return obj;
}