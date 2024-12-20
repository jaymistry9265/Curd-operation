const { model } = require("mongoose")

let myData=[]
const userCreate =(req,res)=>{
    let {name,age}=req.body
    let newData={id:Date.now(),name,age}
    myData.push(newData)
    res.send(myData)
    console.log("My Data",myData)

}

const userRead = (req,res) => {
    const r = myData.find(d => d.id === parseInt(req.params.id))
    if(!r){
        return res.send("data not found")
    }
    res.send(r)
} 

const userUpdate = (req,res)=>{
    const data = myData.find(d =>d.id === parseInt(req.params.id))
    if(!data)
    {
        res.send("Data not found")
    }
    const {name,age}=req.body
    data.name=name
    data.age=age
    res.send(data)
    console.log("Updated Data",myData)
}

const userDelete = (req,res)=>{
    const index = myData.find(d =>d.id === parseInt(req.params.id))
    if(index === -1)
    {
        res.send("Data not deleted")
    }
    myData.splice(index,1)
    res.send("Deleted")
    console.log("Deleted Data",myData)
}

const userNameandAge = (req, res) => {
    const name = req.params.name;
    const age = parseInt(req.params.age);
    const nameData = myData.filter(data => data.name === name);
    if (nameData.length === 0) {
        return res.send("No data found for the given name.");
    }
    console.log("Data for the given name:", nameData);
    const ageData = myData.filter(data => data.age >= age);

    if (age < 18) {
        const under18Data = myData.filter(data => data.age <= 18);
        return res.json({ message: "Age is below 18", data: under18Data });
    }

    if (ageData.length === 0) {
        return res.send("No data found for the given age.");
    }
    console.log("Data for age above 18:", ageData);
    res.json({ message: "Age is above 18", data: ageData });
};


module.exports = {
    userCreate,userRead,userUpdate,userDelete,userNameandAge
}