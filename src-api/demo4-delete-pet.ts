import {APIRequestContext, request} from "playwright"

const apiContext= await request.newContext()

const petId=809;

const response=await apiContext.delete(`https://petstore.swagger.io/v2/pet/${petId}`,
  {headers:{"api_key":"special-key"}}
)

console.log(response.status());

