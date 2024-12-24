const { query } = require("express")


const NameandAge = (query)=>{
    return {name:query.name,age:query.age}
}

const getQuery = (query)=>{
    return {
        name:query.name,
        message:"Hello World",
        age:query.age}
}
module.exports = {
    NameandAge,getQuery
}