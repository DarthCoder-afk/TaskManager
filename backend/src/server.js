import express from 'express';
import TaskRoutes from './routes/TaskRoutes.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import rateLimiter from './middleware/RateLimiter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();


// Middleware
app.use(express.json()); // This will parse JSON request bodies
app.use(rateLimiter);


app.use('/api/tasks', TaskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});