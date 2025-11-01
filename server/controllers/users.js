import UserModel from '../models/users.js';
import generateToken from '../utils/jwt.js';

//Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: error.message }); 
    }
}

//Get user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); 
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: error.message }); 
    }
}

//Create a new user 
export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        const token = generateToken(savedUser); 

        res.status(201).json({message: "User registered successfuly", user:savedUser, token});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: error.message }); 
    }
}

//Update a user by ID
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,req.body, {
            new: true
        });

        if (!updatedUser){
            return res.status(404).json({ message: 'User not found' }); 
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
       res.status(500).json({ message: error.message }); 
    }
}

//Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);

        if (!deletedUser){
            return res.status(404).json({ message: 'User not found' }); 
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: error.message }); 
    }
}

//Login user
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body; 
        const user = await UserModel.findOne({email})

        if (!user){
            return res.status(404).json({ message: 'User not found' }); 
        }

        const isPasswordValid = await user.matchPassword(password);
        const token = generateToken(user);

        if (!isPasswordValid){
            return res.status(401).json({ message: 'Invalid password' }); 
        }

        return res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: error.message });
    }
}

//Sign out user
export const logoutUser = async (req, res) => {
  try {
    //For stateless JWT, just calling client to delete token
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({ message: error.message });
  }
};