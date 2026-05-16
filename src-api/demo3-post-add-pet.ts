import {APIRequestContext, request} from "playwright"

const apiContext= await request.newContext()

const reqBody={
  "id": 999,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie-809",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}

const response=await apiContext.post(`https://petstore.swagger.io/v2/pet`,
    {data:reqBody,headers:{"Content-Type":"application/json"}})

console.log(response.status());

const responseBody=await response.json();
console.log(responseBody)
console.log(responseBody.id)