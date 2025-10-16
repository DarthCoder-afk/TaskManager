import Task from '../models/Task.js';

export async function getAllTasks(req, res){
    try {
        const tasks = await Task.find().sort({createdAt: -1});;
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message: 'Error fetching tasks'});
    }
}

export async function createTask(req, res){
    try {
       const {title, description, status} = req.body;
       const newTask = new Task({title, description, status});
       await newTask.save();
       res.status(201).json({message: 'Task created successfully', task: newTask});

    } catch (error) {
        res.status(500).json({message: 'Error creating task'});
    }
}

export async function getSpecificTask(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        if (!task){
            return res.status(404).json({message: 'Task not found'});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: 'Error fetching task'});
    }
    
}

export async function updateTask(req, res) {
    try {
       
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updateTask){
            return res.status(404).json({message: 'Task not found'});
        }
        res.status(200).json({message: 'Task updated successfully', task: updateTask});
    } catch (error) {
        res.status(500).json({message: 'Error updating task'});
    }
    
}

export async function deleteTask(req, res) {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        if (!deleteTask){
            return res.status(404).json({message: 'Task not found'});
        }
        res.status(200).json({message: 'Task deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Error deleting task'});
    }
    
}