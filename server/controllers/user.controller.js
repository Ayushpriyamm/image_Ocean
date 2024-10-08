import bcryptjs from 'bcrypt'
import User from '../models/user.model.js'
import { errorHandler } from '../utlis/error.js'
import jwt from 'jsonwebtoken'


export const test = (req, res) => {
    res.json({
    message:"Hello"
})
}

export const signup = async (req, res,next) => {
   try {
    const { username, email, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password) {
         return next(errorHandler(400, 'Username, email, and password are required'));
    } 
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json("user created successfully")
    } catch (error) {
        next(error);
    }
        
}

export const signin = async(req, res,next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return next(errorHandler(404,'User not found'))
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
            return next((errorHandler(401,'wrong credentials!')))
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;

         res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Only set `secure` flag in production
            sameSite: 'None' // Or 'None' if cross-site requests
        }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

export const logout = (req,res) => {
    try {
        res.clearCookie('access_token');
        res.status(200).json({ message: "User has been logout" });
    } catch (error) {
        next(error);
    }
}



