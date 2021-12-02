import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

const corsOptions = {
  exposedHeaders: '*'
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);

const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

(async () => {
  try {
      await mongoose.connect(connectionString);
      console.log('Connected to auth db')
      app.listen(port, () => console.log('Server up'));
  } catch (error) {
      console.log(error.message);
  }
})();