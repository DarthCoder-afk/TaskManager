import express from 'express';
import { createTask, deleteTask, getAllTasks, getSpecificTask, updateTask } from '../controllers/TaskControllers.js';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getSpecificTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;