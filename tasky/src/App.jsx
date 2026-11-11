import React, { useState, useEffect } from 'react';
import { getTasks, addTask, deleteTask, updateTask } from './api/tasky-api';
import Task from './assets/components/Task.jsx';
import AddTaskForm from './components/Form.jsx';
import './App.css';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';

function App() {
  const [taskState, setTaskState] = useState({ tasks: [] });

  useEffect(() => {
    getTasks().then(tasks => {
      setTaskState({ tasks: tasks });
    });
  }, []);

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Low'
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    updateTask(tasks[taskIndex]);
    setTaskState({ tasks });
  };

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    const id = tasks[taskIndex]._id;
    tasks.splice(taskIndex, 1);
    deleteTask(id);
    setTaskState({ tasks });
  };

  const formChangeHandler = (event) => {
    let form = { ...formState };

    switch (event.target.name) {
      case 'title':
        form.title = event.target.value;
        break;
      case 'description':
        form.description = event.target.value;
        break;
      case 'deadline':
        form.deadline = event.target.value;
        break;
      case 'priority':
        form.priority = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const tasks = taskState.tasks ? [...taskState.tasks] : [];
    const form = { ...formState };
    const newTask = await addTask(form);
    tasks.push(newTask);
    setTaskState({ tasks });
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f8ff', py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ background: 'linear-gradient(135deg, #1976d2, #2e7d32)', color: 'white', borderRadius: 3, py: 3, fontWeight: 700, mb: 3 }}>
          Tasky
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Chip label={`${taskState.tasks.length} total tasks`} color="primary" variant="outlined" />
          <Chip label="Stay focused" color="success" variant="filled" />
        </Stack>

        <Grid container spacing={3} justifyContent="center">
          {taskState.tasks.map((task, index) => (
            <Task key={task._id} title={task.title} description={task.description} deadline={task.deadline} priority={task.priority} done={task.done} markDone={() => doneHandler(index)} deleteTask={() => deleteHandler(index)} />
          ))}
        </Grid>

        <Box sx={{ mt: 5, maxWidth: 700, mx: 'auto' }}>
          <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} form={formState} priority={formState.priority} />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
