import express from "express";
import { 
    getAllProjects, 
    createProject, 
    getProjectById, 
    updateProjectById, 
    deleteProjectById,
    deleteAllProjects
} from "../controllers/projects.js";

const router = express.Router();

//REST API
router.get("/", getAllProjects);    
router.post("/", createProject);
router.get("/:id", getProjectById);
router.put("/:id", updateProjectById);
router.delete("/:id", deleteProjectById);
router.delete("/", deleteAllProjects);

export default router;