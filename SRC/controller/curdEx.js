const { model } = require("mongoose")
const curdServices = require('../services/curdEx.js')

const userCreate =async(req,res)=>{
    const user = await curdServices.CreateUser(req.body)
    res.send(user)
    console.log("My Data",user)

}

const userRead = async(req,res) => {
    const user = await curdServices.ReadUser(parseInt(req.params.id))
    if(!user){
        return res.send("data not found")
    }
    res.send(user)
} 

const userUpdate = async (req,res)=>{
    const user = await curdServices.UpdateUsers(parseInt(req.params.id),req.body)
    if(!user)
        {
            res.send("Data not found")
        }
    res.send(user)
    console.log("Updated Data",user)            
}

const userDelete = async (req,res)=>{
    const user = await curdServices.DeleteUsers(parseInt(req.params.id))
    if(!user)
    {
        res.send("Data not found")
    }
    res.send("Deleted")
    console.log("Deleted Data",user)
}

const userNameandAge = async (req, res) => {
    const { name } = req.params;
    const age = parseInt(req.params.age);
    const result = await curdServices.FindByNameAndAge(name, age);
    
    res.json(result);
    console.log("Filtered Data:", result);
};


module.exports = {
    userCreate,userRead,userUpdate,userDelete,userNameandAge
}