import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    {
        timestamps: { createdAt: "created", updatedAt: "updated" }
    }
);

export default mongoose.model('Users', userSchema);
