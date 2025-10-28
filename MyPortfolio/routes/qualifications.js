import express from "express";
import { 
    getAllQualifications, 
    createQualification, 
    getQualificationById, 
    updateQualificationById, 
    deleteQualificationById,
    deleteAllQualifications
} from "../controllers/qualifications.js";

const router = express.Router();

// REST API routes
router.get("/", getAllQualifications);        
router.post("/", createQualification);        
router.get("/:id", getQualificationById);     
router.put("/:id", updateQualificationById);  
router.delete("/:id", deleteQualificationById); 
router.delete("/", deleteAllQualifications);  

export default router;
