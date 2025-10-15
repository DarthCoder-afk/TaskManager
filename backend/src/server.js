import express from 'express';
import TaskRoutes from './routes/TaskRoutes.js';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

app.use('/api/tasks', TaskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});