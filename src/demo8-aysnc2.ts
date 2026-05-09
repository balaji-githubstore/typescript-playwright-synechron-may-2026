async function getConnectToDb(): Promise<string> {

    for (let i = 1; i < 20; i++) {
        console.log(i)
        await new Promise(r => setTimeout(r, 1000));
    }

    return new Promise<string>(function (resolve) {
        resolve("connect to db and take 10 mins to return")
    })
}

console.log("demo")
let a=getConnectToDb()

console.log("other activity done")
console.log("other activity done")
console.log("other activity done")
console.log("other activity done")
console.log("other activity done")

let result=await a

console.log(result)

