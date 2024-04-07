import express from 'express'

const app = express();

const router = express.Router();

app.listen(3000, () => {
    console.log("server is running on port 3000!!!")
})
