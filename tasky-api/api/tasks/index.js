import express from 'express';
import { tasksData } from './tasksData';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router(); 

// Get all tasks
router.get('/', (req, res) => {
    res.json(tasksData);
});

// Get task details
router.get('/:id', (req, res) => {
    const { id } = req.params
    const task = tasksData.tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ status: 404, message: 'Task not found' });
    }
    return res.status(200).json(task);
});

// Create a new task
router.post('/', (req, res) => {
    const { title, description, deadline, priority, done } = req.body;
    if (!title) {
        return res.status(400).json({ status: 400, message: 'Title is required' });
    }
    const newTask = {
        id: String(tasksData.tasks.length + 1),
        title,
        description: description || '',
        deadline: deadline || '',
        priority: priority || 'medium',
        done: done !== undefined ? done : false,
    };
    tasksData.tasks.push(newTask);
    tasksData.total_results = tasksData.tasks.length;
    return res.status(201).json(newTask);
});


//Add a task
router.post('/', (req, res) => {
    const { title, description, deadline, priority, done } = req.body;
    const newTask = {
        id: uuidv4(),
        title,
        description,
        deadline,
        priority,
        done
    };
    tasksData.tasks.push(newTask);
    res.status(201).json(newTask);
    tasksData.total_results++;
});

export default router;
