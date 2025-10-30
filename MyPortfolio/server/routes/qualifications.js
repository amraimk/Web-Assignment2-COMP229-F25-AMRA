import express from "express";
import { 
    getAllQualifications, 
    createQualification, 
    getQualificationById, 
    updateQualificationById, 
    deleteQualificationById,
    deleteAllQualifications
} from "../controllers/qualifications.js";

import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

// REST API routes
router.get("/", authMiddleware, getAllQualifications);        
router.post("/", authMiddleware, createQualification);        
router.get("/:id", authMiddleware, getQualificationById);     
router.put("/:id", authMiddleware, updateQualificationById);  
router.delete("/:id", authMiddleware, deleteQualificationById); 
router.delete("/", authMiddleware, deleteAllQualifications);  

export default router;
