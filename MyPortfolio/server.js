import config from "./config/config.js";
import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/project.js";
import contactRoutes from "./routes/contact.js";
import userRoutes from "./routes/user.js";
import qualificationRoutes from "./routes/qualification.js";

const app = express();

//connect to mongo db
mongoose.connect(config.mongoUri)
  .then(() => console.log("Connected to database!"))
  .catch(err => {
    console.error(`Unable to connect to database: ${config.mongoUri}`, err);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.use(express.json());
app.use("/projects", projectRoutes);
app.use("/contacts", contactRoutes);
app.use("/users", userRoutes);
app.use("/qualifications", qualificationRoutes);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
