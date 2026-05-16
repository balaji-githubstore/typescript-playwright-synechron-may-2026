import {APIRequestContext, request} from "playwright"

const apiContext= await request.newContext()

const petId=5;

const response=await apiContext.get(`https://petstore.swagger.io/v2/pet/${petId}`)

console.log(response.status());

const responseBody=await response.json()
console.log(responseBody)
console.log(responseBody.id)
console.log(responseBody.category.id)

//deserialize to Pet class - model or pojo class
//data driven framework (taking from json or excel)