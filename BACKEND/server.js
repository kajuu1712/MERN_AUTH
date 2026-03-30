import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./Config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000
connectDB();
const allowedOrigins = ['http://localhost:5173']


app.use(express.json());    //to parse every request
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

// Serve frontend
app.use(express.static(path.join(__dirname, "../FRONTEND/dist"))); 

//API End points
app.get('/', (req, res) => {
    res.send("API working");
})

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "../FRONTEND/dist/index.html")); 
});

app.listen(PORT, () =>{
    console.log(`Server started on port : ${PORT}`);
})