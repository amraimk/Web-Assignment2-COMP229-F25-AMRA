import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: String,
        firstname: String,
        lastname: String,
        email: String,
        completion: Date,
        description: String

    },
    { timestamps: true }
);

export default mongoose.model("Projects", projectSchema);
