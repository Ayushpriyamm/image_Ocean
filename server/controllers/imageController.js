import axios from "axios";
import dotenv from 'dotenv';
dotenv.config()
const key = process.env.PIXABAY_API_KEY;
console.log("PIXABAY_API_KEY:", key);

export const getImage = async (req, res) => {
    const { query } = req.query;
    
    try {
        var response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(query)}` );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images from Pixabay' });
    }
};