// printUser Function:
// Define a function printUser that takes an object with name (string) and email (string) properties as a parameter.

type Student = {
    name:string,
    email:string
}


function printUser(student:Student){
    return (student.name)
}


const aman = {name:'aman',email:"a@email.com"}

console.log(printUser(aman))