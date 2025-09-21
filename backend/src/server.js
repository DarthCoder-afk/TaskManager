import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import { connectDB } from './config/db.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS
app.use(cors({
    origin: "http://localhost:5173"
}))

// middleware
app.use(express.json());

//routes
app.use("api/tasks", taskRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});