import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import imageRouter from './routes/imageRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();

// CORS Configuration
app.use(cors({
    origin: "https://imageocean.vercel.app", // Adjusted to match Vercel domain without trailing slash
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/server/auth', userRouter);
app.use('/server/images', imageRouter);

// Serve static files (if needed)
// app.use(express.static(path.join(__dirname, '/client/dist')));

// Catch-all route to serve the client-side application (if needed)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal server error";
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message
    });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("connected to database");
    })
    .catch((err) => {
        console.log(err);
    });

// Start the server
const PORT = process.env.PORT || 3000; // Use environment port or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
