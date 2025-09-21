import express from 'express';
import { createTask, deleteTask, getAllTask, getSpecificTask, updateTask } from '../controllers/taskControllers.js';
const router = express.Router();

router.get('/', getAllTask);
router.get('/:id', getSpecificTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;