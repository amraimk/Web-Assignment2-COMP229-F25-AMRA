import express from "express";
import { 
    getAllProjects, 
    createProject, 
    getProjectById, 
    updateProjectById, 
    deleteProjectById
} from "../controllers/projects.js";

import {
    authMiddleware,
    authorizeAdmin
} from '../middlewares/auth.js';

const router = express.Router();

//Only admins can create, update, delete
router.post("/", authMiddleware, authorizeAdmin, createProject);
router.put("/:id", authMiddleware, authorizeAdmin, updateProjectById);
router.delete("/:id", authMiddleware, authorizeAdmin, deleteProjectById);

//All logged-in users can read
router.get("/", authMiddleware, getAllProjects);    
router.get("/:id", authMiddleware, getProjectById);


export default router;