async function getHello():Promise<string> {
    return "hello"
}

let result=await getHello()
console.log(result)
// console.log(result.toUpperCase())