import {APIRequestContext, request} from "playwright"
import fs from "fs"
// import assert from "assert";

//using json from file for post request
const reqBody=JSON.parse(fs.readFileSync("test-data/newpet.json","utf-8"));

const apiContext= await request.newContext()

const response=await apiContext.post(`https://petstore.swagger.io/v2/pet`,
    {data:reqBody,headers:{"Content-Type":"application/json"}})

console.log(response.status());

const responseBody=await response.json();
console.log(responseBody)
console.log(responseBody.id)

