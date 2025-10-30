import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import projectRoutes from "./routes/projects.js";
import contactRoutes from "./routes/contacts.js";
import userRoutes from "./routes/users.js";
import qualificationRoutes from "./routes/qualifications.js";
import path from "path";

//The client does NOT access .env directly
//Instead, the server loads .env and uses the variables internally
dotenv.config({ path: path.resolve('../server/.env') });

//connect to mongo db
mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "Unable to connect to database: "));
connection.once('open', () => { console.log('Connected to database!'); });

const app = express();
app.use(express.json()); 

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.use(express.json());
app.use("/projects", projectRoutes);
app.use("/contacts", contactRoutes);
app.use("/users", userRoutes);
app.use("/qualifications", qualificationRoutes);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", 5000);
});
