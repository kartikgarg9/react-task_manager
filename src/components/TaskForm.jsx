import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

function TaskForm({ addTask, setFilter, setSearchQuery }) {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [activeFilter, setActiveFilter] = useState("All");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        const createdAt = new Date().toISOString();

        addTask({
            text: task,
            description,
            priority,
            completed: false,
            createdAt
        });

        setTask("");
        setDescription("");
        setPriority("Medium");
    };

    const handleFilterChange = (type) => {
        setActiveFilter(type);
        setFilter(type);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-10 space-y-6">
            {/* Task & Description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="px-6 py-4 w-full text-white bg-gray-800 rounded-full shadow-inner border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                />

                <input
                    type="text"
                    placeholder="Short description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="px-6 py-4 w-full text-white bg-gray-800 rounded-full shadow-inner border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                />

                <button
                    type="submit"
                    className="flex justify-center items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold border border-black hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                >
                    <FaPlus /> Add Task
                </button>
            </div>

            {/* Filters + Search + Priority */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                    {["All", "Completed", "Pending"].map((type) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => handleFilterChange(type)}
                            className={`px-4 py-2 rounded-md font-medium text-sm transition ${activeFilter === type
                                ? "bg-yellow-400 text-black"
                                : "bg-gray-200 text-gray-800"
                                } hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="flex flex-1 gap-4">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                        />
                        <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
                    </div>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="px-4 py-2 text-base border border-gray-500 rounded-md bg-white text-gray-800 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300"
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
