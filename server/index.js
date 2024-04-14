import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import cookieParser from 'cookie-parser';

const app = express();


dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log("server is running on port 3000!!!")
})

app.use(express.json());

app.use(cookieParser());

app.use('/server/auth', userRouter)

app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal server error";
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message
    })
})

