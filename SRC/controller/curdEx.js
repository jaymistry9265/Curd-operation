const { model } = require("mongoose")
const curdServices = require('../services/curdEx.js')

const userCreate =(req,res)=>{
    const user = curdServices.CreateUser(req.body)
    res.send(user)
    console.log("My Data",user)

}

const userRead = (req,res) => {
    // const r = myData.find(d => d.id === parseInt(req.params.id))
    const user = curdServices.ReadUser(parseInt(req.params.id))
    if(!user){
        return res.send("data not found")
    }
    res.send(user)
} 

const userUpdate = (req,res)=>{
    const user = curdServices.UpdateUsers(parseInt(req.params.id),req.body)
    if(!user)
        {
            res.send("Data not found")
        }
    res.send(user)
    console.log("Updated Data",user)            
}

const userDelete = (req,res)=>{
    const user = curdServices.DeleteUsers(parseInt(req.params.id))
    if(!user)
    {
        res.send("Data not found")
    }
    res.send("Deleted")
    console.log("Deleted Data",user)
}

const userNameandAge = (req, res) => {
    const { name } = req.params;
    const age = parseInt(req.params.age);
    const result = curdServices.FindByNameAndAge(name, age);
    
    res.json(result);
    console.log("Filtered Data:", result);
};


module.exports = {
    userCreate,userRead,userUpdate,userDelete,userNameandAge
}