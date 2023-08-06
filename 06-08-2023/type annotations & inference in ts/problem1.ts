// calculateCircleArea Function:
// Write a function calculateCircleArea that takes the radius (number) as a parameter and returns the calculated area of a circle (number).


function calculateCircleArea(r:number):number{
    const area = 2*Math.PI*(r**2);
    return area;
}

console.log(calculateCircleArea(3))