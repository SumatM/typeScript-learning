// Declare an array of numbers using TypeScript. Write a function that takes this array as a parameter and calculates the sum of all elements. Ensure proper type annotations.

let arrr = [1,2,3,4,5]

function findSum(array:number[]):number{
    let sum :number=0;
    for (let ele of array){
        sum+=ele;
    }
    return sum;
}

console.log(findSum(arrr))