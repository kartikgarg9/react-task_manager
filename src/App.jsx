import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import './style.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const clearTasks = () => setTasks([]);

  const filteredTasks = tasks.filter(task => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed);

    const matchesSearch =
      task.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-gray-200 font-sans">
      <header className="bg-gray-950 py-6 px-4 shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-wide mb-2">
            Task Manager
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            Manage your tasks efficiently with ease
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <TaskForm addTask={addTask} setFilter={setFilter} setSearchQuery={setSearchQuery} />
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <TaskList
            tasks={filteredTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md text-center">
          <ProgressTracker tasks={tasks} />
        </div>

        {tasks.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={clearTasks}
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Clear All Tasks
            </button>
          </div>
        )}
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Task Manager by You
      </footer>
    </div>
  );
};

export default App;
