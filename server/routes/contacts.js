import express from "express";
import { 
    getAllContacts,
    createContact,
    getContactById,
    updateContactById,
    deleteContactById,
    deleteAllContacts
} from "../controllers/contacts.js";

import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

// REST API
router.get("/", authMiddleware, getAllContacts);       
router.post("/", authMiddleware, createContact);       
router.get("/:id", authMiddleware, getContactById);    
router.put("/:id", authMiddleware, updateContactById); 
router.delete("/:id", authMiddleware, deleteContactById); 
router.delete("/", authMiddleware, deleteAllContacts); 

export default router;
 