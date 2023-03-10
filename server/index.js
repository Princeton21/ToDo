import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config.js";
import todoRoutes from "./routes/todo.routes.js";
import listRoutes from "./routes/list.routes.js";
import connectDB from "./config/db.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());


//Connect to DB
connectDB();


 

//Middlewares
app.use(morgan("dev")); 
app.use(bodyParser.json());
app.use(cors());


app.use("/api",todoRoutes);
app.use("/api",listRoutes) 

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 

