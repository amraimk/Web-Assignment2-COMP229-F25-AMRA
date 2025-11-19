import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        contactnumber: String,
        email: String,
        message: String
    }
);

export default mongoose.model('Contacts', contactSchema);
