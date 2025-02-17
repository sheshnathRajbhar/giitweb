import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDb from "./config/connectDb.js";
import connectCloudinary from "./config/cloudinery.js";
import userRouter from "./routes/userRoutes.js";
import adminRoute from "./routes/adminRoutes.js";



const app = express();
const port = process.env.PORT || 5000;

// Database and Cloudinary connection
connectDb();
connectCloudinary();

// Middleware
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
}));

app.get("/",(req, res)=>{
    res.send("Welcome to giit")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/user/", userRouter);
app.use("/api/admin/", adminRoute);

// Start Server
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
