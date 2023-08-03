// Question 4:
// Create a TypeScript interface named Shape with a property area of type number. Then, create two classes: Circle and Rectangle, both implementing the Shape interface. Implement the necessary properties and methods in each class. This will reinforce your understanding of interfaces, classes, and their relationships.

interface Shape {
  area: number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  get area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get area(): number {
    return this.width * this.height;
  }
}

//classes

/*Classes are a fundamental part of object-oriented programming (OOP) and provide a blueprint for creating objects with shared properties and methods. In TypeScript, classes allow you to define the structure and behavior of objects in a more organized and reusable manner. */

class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}




// const filterArray = <T>(array: T[], callback: (value: T) => boolean): T[] => {
//     const filteredArray: T[] = [];
  
//     for (const value of array) {
//       if (callback(value)) {
//         filteredArray.push(value);
//       }
//     }
  
//     return filteredArray;
//   };
  
//   const callBack = (value: number): boolean => {
//     if (value % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   };

