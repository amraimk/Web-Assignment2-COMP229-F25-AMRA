import userModel from "../models/users.js";

//Read all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: error.message });
    }
};

//Read user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: error.message });
    }
};

//Create user
export const createUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
};

//Update user by ID
export const updateUserById = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: error.message });
    }
};

//Delete user by ID
export const deleteUserById = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
};

//Delete all users
export const deleteAllUsers = async (req, res) => {
    try {
        const result = await userModel.deleteMany({});
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "No users found to delete" });
        }
        res.status(200).json({ message: "All users deleted successfully" });
    } catch (error) {
        console.error("Error deleting users:", error);
        res.status(500).json({ error: error.message });
    }
};
