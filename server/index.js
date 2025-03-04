import express from "express"
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"

dotenv.config({})

// call database connection here 
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

// Apis
app.use("api/v1/user", userRoute);

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
})