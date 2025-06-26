import React, { useEffect } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import ProgressTracker from './components/ProgressTracker.jsx'
import { useState } from 'react'
import './style.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks]
    newtask[index] = updatedTask;
    setTasks(newtask);

  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 classname="title">Task Manager</h1>
        <p className='tagline'>Manage your tasks efficiently</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (<button className='clear-btn'
        onClick={clearTasks}>Clear All Tasks</button>)}

    </div>
  )
}

export default App