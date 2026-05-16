import {APIRequestContext, request} from "playwright"

const apiContext= await request.newContext()

const status='sold';

const response=await apiContext.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)

console.log(response.status());

const responseBody=await response.json()
// console.log(responseBody)

console.log(responseBody[0].id)
console.log(responseBody[0].status)

//total pet retrieved
console.log(responseBody.length)