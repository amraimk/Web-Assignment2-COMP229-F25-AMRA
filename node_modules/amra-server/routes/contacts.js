import express from "express";
import { 
    getAllContacts,
    createContact,
    getContactById,
    updateContactById,
    deleteContactById
} from "../controllers/contacts.js";

import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

// REST API
router.get("/", authMiddleware, getAllContacts);       
router.post("/", authMiddleware, createContact);       
router.get("/:id", authMiddleware, getContactById);    
router.put("/:id", authMiddleware, updateContactById); 
router.delete("/:id", authMiddleware, deleteContactById); 

export default router;
 