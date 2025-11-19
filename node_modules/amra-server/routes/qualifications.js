import express from "express";
import { 
    getAllQualifications, 
    createQualification, 
    getQualificationById, 
    updateQualificationById, 
    deleteQualificationById
} from "../controllers/qualifications.js";

import {
    authMiddleware,
    authorizeAdmin
} from '../middlewares/auth.js';

const router = express.Router();

// REST API routes
router.post("/", authMiddleware, authorizeAdmin, createQualification);        
router.put("/:id", authMiddleware, authorizeAdmin, updateQualificationById);  
router.delete("/:id", authMiddleware, authorizeAdmin, deleteQualificationById); 

router.get("/", authMiddleware, getAllQualifications);  
router.get("/:id", authMiddleware, getQualificationById);   

export default router;
