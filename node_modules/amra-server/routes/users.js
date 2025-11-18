import express from "express";
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser 
} from "../controllers/users.js";

import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

// REST API
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.post('/', createUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
router.post('/login', loginUser)
router.post('/logout', authMiddleware, logoutUser);

export default router;