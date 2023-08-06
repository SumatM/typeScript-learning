// Using Annotations and Inference:
// Experiment with a scenario where you use type annotations and inference together. Declare a variable and annotate its type, but also rely on type 


interface Person{
    name:string,
    age:number
}

type Animal = {
    foodType:string,
    maxLife:number
}


const humans: Person&Animal = {
    name:'homo sepiens',
    age:21,
    foodType:'Omnivores',
    maxLife:100
}


export default Person;