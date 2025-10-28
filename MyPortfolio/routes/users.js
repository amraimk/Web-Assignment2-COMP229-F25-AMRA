import express from "express";
import { 
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    deleteAllUsers
} from "../controllers/users.js";

const router = express.Router();

// REST API
router.get("/", getAllUsers);          
router.post("/", createUser);          
router.get("/:id", getUserById);       
router.put("/:id", updateUserById);   
router.delete("/:id", deleteUserById); 
router.delete("/", deleteAllUsers);    

export default router;
