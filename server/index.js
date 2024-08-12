import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import imageRouter from './routes/imageRouter.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

dotenv.config()

const app = express();
const key = process.env.PIXABAY_API_KEY;
console.log("PIXABAY_API_KEY:", key);

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err);
})

//const __dirname = path.resolve();

app.listen(3000, () => {
    console.log("server is running on port 3000!!!")
})

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: "https://imageocean.vercel.app/",
    credentials:true
}));

app.use('/server/auth', userRouter)
app.use('/server/images', imageRouter);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })


app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal server error";
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message
    })
})

