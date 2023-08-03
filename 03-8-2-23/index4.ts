// Question 3:
// Write a TypeScript function called getFullName that takes a parameter of type Person (from the previous question) and returns the full name as a string (concatenating firstName and lastName).


interface Person {
    firstName:string,
    lastName:string
}

const aman = {
    firstName:'aman',
    lastName:'kumar'
}


function getFullName(user:Person):string{
    return `${user.firstName} ${user.lastName}`
}



console.log(getFullName(aman))


export default Person;