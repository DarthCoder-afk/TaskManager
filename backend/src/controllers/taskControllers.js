import Task from "../models/Tasks";

export async function getAllTask(_, res) {
    try {
        const tasks = await Task.find().sort({createdAt: -1});
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks: ", error);
        res.status(500).json({message: "Internal server error"}); 
    }
}

export async function createTask(req, res) {
    try {
        const {title, description, completed} = req.body;
        const newTask = new Task({title, description, completed});

        await newTask.save();
        res.status(201).json({message: "Task created successfully", note: newTask})
    } catch (error) {
        console.error("Error creating task", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateTask(req, res) {
    try {
        const {title, description, completed} = req.body;
        const updatedTask = await Task.findById(req.params.id,{title, description, completed});
        if (!updatedTask) return res.status(404).json({message: "Task not found"});

        res.status(201).json(updatedTask)
    } catch (error) {
        console.error("Error updating task", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteTask(req, res) {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({message: "Task not found"});

        res.status(201).json({message: "Note deleted successfully"})
    } catch (error) {
        console.error("Error deleting task", error);
        res.status(500).json({message: "Internal server error"});
    }
}