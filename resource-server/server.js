import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

app.use(express.json());

(async () => {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to db')
        app.listen(port, () => console.log('Server up'));
    } catch (error) {
        console.log(error.message);
    }
})();