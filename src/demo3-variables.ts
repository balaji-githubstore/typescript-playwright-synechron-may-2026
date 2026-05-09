class Demo1{

    public static aS:number=20; //static or class variable
    public static bS:number=20;

    public aNS:number=10; //non-static or instance variable
    public bNS:number=20;

}

Demo1.aS=3000;
console.log(Demo1.aS)
console.log(Demo1.bS)

let obj1:Demo1=new Demo1()
let obj2:Demo1=new Demo1()

obj1.aNS=2000
console.log(obj1.aNS)
console.log(obj1.bNS)

console.log(obj2.aNS)
console.log(obj2.bNS)

let a:string="hello"
console.log(typeof a)
console.log(typeof obj1)


