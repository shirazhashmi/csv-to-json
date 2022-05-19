let fs = require('fs');
var csv = fs.readFileSync('data.csv', 'utf8').toString();
let jsonData = []
let data = csv.split('\n')
let keys = data.shift().split(",")
data.forEach(csvData=>{
    let data = csvData.split(",")
    let tempJson = {}
    keys.forEach((key, i)=>{        
        tempJson[key] = data[i]
    })
    jsonData.push(tempJson)
})
console.log(jsonData)
