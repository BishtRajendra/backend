import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './modules/user/routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 9000;
const MONGODBURL = process.env.MongoDBUrl;

mongoose.connect(`${MONGODBURL}`)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());


app.use('/v1/user', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
