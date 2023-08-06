// Type Inference for Function:
// Create a function called combine that takes two values of any type and returns their concatenation as a string. Utilize type inference for function parameters and the return type.




const combine = <t>(a:t,b:t):t =>{
    return (a as any) + (b as any)
}