// const userModel = require("../models/users.js");
const userServices = require('../services/users.js')

const getUser = async (req, res) => {
    try {
        const users = await userServices.createUser(req.body);
        res.json(users);
    } catch (err) {
        res.json({ message: err.message });
    }
}

const getUserRead =async (req, res) => {
    try {
        const users = await userServices.getAllUsers({});
        res.json(users);
    } catch (err) {
        res.json({ message: err.message });
    }
}

const getUserFindById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userServices.getUserById(id);
        res.json(user);
    } catch (err) {
        res.json({ message: err.message });
    }
}

const getUserUpdateById = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await userServices.updateUserById(id, req.body);
        if (!users) {
            res.json({ message: "User not found" });
        }
        const updateduser = await userServices.getUserById(id);
        res.json(updateduser);
    } catch (err) {
        res.json({ message: err.message });
    }
}

const getUserDeleteById = async (req, res) => {
    try {
        const { id } = req.params
        const users = await userServices.deleteUserById(id)
        if (!users) {
            res.json({ message: "User not found" })
        }
        res.json(users)
    }
    catch (err) {
        res.json({ message: err.message })
    }
}


module.exports={
    getUser,getUserRead,getUserFindById,getUserUpdateById,getUserDeleteById
}