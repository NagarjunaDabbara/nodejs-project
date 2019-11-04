const fs =require('fs')
// const book = {
//     title:'my book',
//     author:'arjun'
// }
// const bookJson=JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson)
// console.log(bookJson)

// const parseData = JSON.parse(bookJson)
// console.log(parseData.author)


const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
const dataJSON =dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
