import qualificationModel from "../models/qualifications.js";

//Read all qualifications
export const getAllQualifications = async (req, res) => {
    try {
        const qualifications = await qualificationModel.find({});
        res.status(200).json(qualifications);
    } catch (error) {
        console.error("Error fetching qualifications:", error);
        res.status(500).json({ error: error.message });
    }
};

//Read qualification by ID
export const getQualificationById = async (req, res) => {
    try {
        const qualification = await qualificationModel.findById(req.params.id);
        if (!qualification) {
            return res.status(404).json({ error: "Qualification not found" });
        }
        res.status(200).json(qualification);
    } catch (error) {
        console.error("Error fetching qualification:", error);
        res.status(500).json({ error: error.message });
    }
};

//Create qualification
export const createQualification = async (req, res) => {
    try {
        const newQualification = new qualificationModel(req.body);
        await newQualification.save();
        res.status(200).json({ message: "Qualification created successfully", qualification: newQualification });
    } catch (error) {
        console.error("Error creating qualification:", error);
        res.status(500).json({ error: error.message });
    }
};

//Update qualification
export const updateQualificationById = async (req, res) => {
    try {
        const qualification = await qualificationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!qualification) {
            return res.status(404).json({ error: "Qualification not found" });
        }
        res.status(200).json({ message: "Qualification updated successfully", qualification });
    } catch (error) {
        console.error("Error updating qualification:", error);
        res.status(500).json({ error: error.message });
    }
};

//Delete qualification by ID
export const deleteQualificationById = async (req, res) => {
    try {
        const qualification = await qualificationModel.findByIdAndDelete(req.params.id);
        if (!qualification) {
            return res.status(404).json({ error: "Qualification not found" });
        }
        res.status(200).json({ message: "Qualification deleted successfully" });
    } catch (error) {
        console.error("Error deleting qualification:", error);
        res.status(500).json({ error: error.message });
    }
};

//Delete all qualifications
export const deleteAllQualifications = async (req, res) => {
    try {
        const result = await qualificationModel.deleteMany({});
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "No qualifications found to delete" });
        }
        res.status(200).json({ message: "All qualifications deleted successfully" });
    } catch (error) {
        console.error("Error deleting qualifications:", error);
        res.status(500).json({ error: error.message });
    }
};
