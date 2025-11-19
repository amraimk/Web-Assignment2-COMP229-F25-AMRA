import contactModel from "../models/contacts.js";

// Read all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find({});
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ error: error.message });
    }
};

// Read a single contact by ID
export const getContactById = async (req, res) => {
    try {
        const contact = await contactModel.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (error) {
        console.error("Error fetching contact:", error);
        res.status(500).json({ error: error.message });
    }
};

// Create a new contact
export const createContact = async (req, res) => {
    try {
        const newContact = new contactModel(req.body);
        await newContact.save();
        res.status(200).json({ message: "Message sent successfully", contact: newContact });
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: error.message });
    }
};

// Update contact by ID
export const updateContactById = async (req, res) => {
    try {
        const contact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        res.status(200).json({ message: "Contact updated successfully", contact });
    } catch (error) {
        console.error("Error updating contact:", error);
        res.status(500).json({ error: error.message });
    }
};

// Delete contact by ID
export const deleteContactById = async (req, res) => {
    try {
        const contact = await contactModel.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({ error: error.message });
    }
};
