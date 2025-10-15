import express from 'express';
import TaskRoutes from '../routes/TaskRoutes.js';

const app = express();

app.use('/api/tasks', TaskRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});