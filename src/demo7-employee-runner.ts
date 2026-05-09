import { Employee } from "./demo6-employee.js";


Employee.setCompanyName('Google')

let emp1=new Employee(101, "jack", 5000, "Excellent")
let emp2=new Employee(102, "Saul", 8000, "Average")


emp2.displayEmployeeDetail();

emp1.displayEmployeeDetail();

let myName:string= Employee.getAuthorName();
console.log(myName)

// emp1.performance="jack"
// console.log(emp1.performance)


let emp3:Employee=Employee.getEmployeeInstance()