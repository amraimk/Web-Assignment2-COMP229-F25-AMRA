import express from "express";
import { 
    getAllProjects, 
    createProject, 
    getProjectById, 
    updateProjectById, 
    deleteProjectById,
    deleteAllProjects
} from "../controllers/projects.js";

import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

//REST API
router.get("/", authMiddleware, getAllProjects);    
router.post("/", authMiddleware, createProject);
router.get("/:id", authMiddleware, getProjectById);
router.put("/:id", authMiddleware, updateProjectById);
router.delete("/:id", authMiddleware, deleteProjectById);
router.delete("/", authMiddleware, deleteAllProjects);

export default router;