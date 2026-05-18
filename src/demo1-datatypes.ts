let a:number=10;
let b:boolean=true;
let c:string="welcome to the session";

a=90
a=10

let d="hello"
// let dd={}

console.log(a)
console.log(b)
console.log(typeof a)
console.log(typeof d)
console.log(c)
console.log(c.length)
console.log(c.toUpperCase())

let f:number[]=[3,4,55.5,66]

console.log(f)
console.log(f[0])
console.log(f.length)

/**
 * tuples 
 * fixed number of element
 * each poisition has a specific type
 * order must be followed
 */

let g:[string,number]

g=["bala",7887877]

// any

let e:any=10
e="king"
e=true

//unknown //check type before using it
let h:unknown ='k'
console.log((h as string).length)

// union
let i: number | string 

i='jack'

// object type
let browserDetail:{
    name:string,
    version:number,
    isMobile:boolean
}={name:"chrome",version:9.1,isMobile:true}


browserDetail={name:"firefox",version:9.1,isMobile:true}

console.log(browserDetail.name)

// custom type


let items:number[]=[3,4,55.5,66]

for(let i=0;i<items.length;i++)
{
    console.log(items[i])
}

for(const item of items)
{
    console.log(item)
}


const invalidLoginData=[
    {username:"john",password:"john123",expectedError:"Invalid credentials"},
    {username:"saul",password:"saul123",expectedError:"Invalid credentials"},
    {username:"saul222",password:"saul123",expectedError:"Invalid credentials"}
]


console.log(invalidLoginData[0]?.username)


for( const {username,password,expectedError} of invalidLoginData)
{
    console.log(username)
    console.log(password)
    console.log(expectedError)
}