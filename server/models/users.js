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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return enteredPassword === this.password; 
};

export default mongoose.model('Users', userSchema);