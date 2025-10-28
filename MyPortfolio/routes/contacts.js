import express from "express";
import { 
    getAllContacts,
    createContact,
    getContactById,
    updateContactById,
    deleteContactById,
    deleteAllContacts
} from "../controllers/contacts.js";

const router = express.Router();

// REST API
router.get("/", getAllContacts);       
router.post("/", createContact);       
router.get("/:id", getContactById);    
router.put("/:id", updateContactById); 
router.delete("/:id", deleteContactById); 
router.delete("/", deleteAllContacts); 

export default router;
 