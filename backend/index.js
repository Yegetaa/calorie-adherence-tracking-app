import express from "express";
import cors from "cors";
import morgan from "morgan";

import "./localEnv.js"
import conn from "./db/conn.js"; conn();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors()); //allows front end to connect to backend 
app.use(morgan("dev")); //logger
app.use(express.json()); //so we can have data in req.body
app.use(express.urlencoded({extended: true}))

//Routes
import usersRoutes from "./routes/users.js"
import caloriesRoutes from "./routes/calories.js";
app.use("/api/users", usersRoutes);
app.use("/api/calories", caloriesRoutes);

app.get ("/", (req, res) =>{
    res.send("Welcome")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});