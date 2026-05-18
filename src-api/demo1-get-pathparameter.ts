import {APIRequestContext, request} from "playwright"
import { Pet } from "./Pet.js";

const apiContext= await request.newContext()

const petId=5;

const response=await apiContext.get(`https://petstore.swagger.io/v2/pet/${petId}`)

console.log(response.status());

const responseBody=await response.json()
console.log(responseBody)
console.log(responseBody.id)
console.log(responseBody.category.id)

//deserialize to Pet class - model or pojo class
const responsePet=await response.json() as Pet
console.log(responsePet.id)
console.log(responsePet.category.id)
console.log(responsePet.tags[0]?.id)