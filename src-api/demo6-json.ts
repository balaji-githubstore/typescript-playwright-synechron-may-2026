import fs from "fs";

const JSON_FILE = "test-data/data.json"

class JsonUtils {
    static getJson(key?: string): any {
        const data = JSON.parse(fs.readFileSync(JSON_FILE, "utf-8"))
        if(key === undefined)
        {
            return data;
        }
        return data[key]
    }
}

// const data = JSON.parse(fs.readFileSync(JSON_FILE, "utf-8"))
// console.log(data["invalidLoginData"])

const output=JsonUtils.getJson("invalidLoginData")
console.log(output)

const output1=JsonUtils.getJson()
console.log(output1)