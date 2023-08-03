// Question 7:
// Write a TypeScript function called capitalizeKeys that takes an object as a parameter and returns a new object where all the keys are capitalized. You can assume that the keys are strings.



const capitalizekeys = (object : Person) => {
   let newObj = {}
   
   for (let key in object){
       newObj[key.toUpperCase()] = object[key]
   }
   return newObj;
}


interface Person {
    name : string,
    place : string,
}

const person = {name:'sumat',place:'bbsr'}


console.log(capitalizekeys(person))


export default Person;