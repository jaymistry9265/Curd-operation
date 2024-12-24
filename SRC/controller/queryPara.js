const { query } = require('express')
const queryServices = require('../services/queryPara.js')

const queryNameAndAge = (req,res) =>{
    const result =  queryServices.NameandAge(req.query)
    res.send(result)
    console.log(result)
}

const queryGet = (req,res) => {
    const result = queryServices.getQuery(req.query) 
    
    console.log(result)
    return res.json(result)
    
}

module.exports = {
    queryNameAndAge,queryGet
}
