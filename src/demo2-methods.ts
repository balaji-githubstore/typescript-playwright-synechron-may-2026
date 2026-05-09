// traditional methods
function addNumber(a: number, b: number,c?:number): number {
    return a + b 
}

function areaOfCircle(radius: number): number {
    return 3.14 * radius * radius * radius
}


console.log(addNumber(4, 8))
let result:number= areaOfCircle(10)
console.log(result)

// named parameters 
function addNum({ num1, num2 }: { num1: number, num2: number }): number {
    return num1 + num2
}

console.log(addNum({num2:20,num1:10}))


// areaOfTriangle
function areaOfTriangle({base,height}:{base:number,height:number}):number{
    return (base*height)/2;
}


let output:number= areaOfTriangle({base:10,height:50})
console.log(output)