import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors()); //allows front end to connect to backend 
app.use(morgan("dev")); //logger
app.use(express.json()); //so we can have data in req.body

app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});