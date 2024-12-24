let myData=[]
const CreateUser = (userData)=>{
    let {name,age}=userData
    let newData={id:Date.now(),name,age}
    myData.push(newData)
    return myData
}

const ReadUser = (id)=>{
    return myData.find(d => d.id === id)
}

const UpdateUsers = async (id,userData)=>{
    const data = await myData.find(d =>d.id === id)
    if (!data) return null
    const {name,age}=userData
    data.name=name
    data.age=age
    return data
}

const DeleteUsers = async(id)=>{
    const index = await myData.find(d =>d.id === id)
    if(index === -1) return null    
    myData.splice(index,1)
    return index
}

const FindByNameAndAge = (name, age) => {
    const nameData =  myData.filter((data) => data.name === name);
    if (nameData.length === 0) {
        return { message: "No data found for the given name." };
    }
    if (age < 18) {
        const under18Data = myData.filter((data) => data.age <= 18);
        return { message: "Age is below 18", data: under18Data };
    }

    const ageData = myData.filter((data) => data.age >= age);
    if (ageData.length === 0) return { message: "No data found for the given age.", data: [] };

    return { message: "Age is above 18", data: ageData };
};

module.exports = {
    CreateUser,ReadUser,UpdateUsers,DeleteUsers,FindByNameAndAge
}