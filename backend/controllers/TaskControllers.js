export const getAllTasks = (req, res) => {
    res.status(200).json({message: 'You just fetced all tasks.'})
};

export const getSpecificTask = (req, res) => {
    res.status(200).json({message: 'You just fetched a specific task.'})
};

export const createTask = (req, res) => {
    res.status(201).json({message: 'Task created successfully.'})
};

export const updateTask = (req, res) => {
    res.status(200).json({message: 'Task updated successfully.'})
};

export const deleteTask = (req, res) => {
    res.status(200).json({message: 'Task deleted successfully.'})
};