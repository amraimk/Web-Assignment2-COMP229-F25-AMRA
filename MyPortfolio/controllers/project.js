import projectModel from "../models/project.js";

//Read all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await projectModel.find({});
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: error.message });
    }
};

//Read a single project by ID
export const getProjectById = async (req, res) => {
    try {               
        const project = await projectModel.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.status(200).json(project);
    } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ error: error.message });
    }
};

//Create a new project
export const createProject = async (req, res) => {
    try {
        const newProject = new projectModel(req.body);
        await newProject.save();
        res.status(200).json(newProject);
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ error: error.message });
    }
};

//Update project by ID
export const updateProjectById = async (req, res) => {
    try {
        const project = await projectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.status(200).json(project);
    } catch (error) {
        console.error("Error updating project:", error);
        res.status(500).json({ error: error.message });
    }
};

//Delete a project by ID
export const deleteProjectById = async (req, res) => {
    try {
        const project = await projectModel.findByIdAndDelete(req.params.id);    
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        console.error("Error deleting project:", error);
        res.status(500).json({ error: error.message });
    }
};