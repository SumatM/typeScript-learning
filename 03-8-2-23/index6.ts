// Question 6:
// Write a TypeScript function called filterByType that takes an array of items of type T and a filter function. The filter function should take an item of type T as a parameter and return a boolean indicating whether the item should be included in the filtered array. The filterByType function should return an array containing only the items that satisfy the filter condition


function filterByType<t>(arr:t[] ,CB) : t[]{
  let newarr:t[] = []
   
    for (let i=0; i<arr.length; i++){
        if(CB(i)){
            newarr.push(arr[i])
        }
    }
    return newarr;
}


function filter(num : number):boolean{
    if(num%2){
        return true;
    }
    return false
}



console.log(filterByType([1,2,3,4],filter))