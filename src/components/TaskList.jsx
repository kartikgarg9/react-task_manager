import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function TaskList({ tasks, updateTask, deleteTask }) {
    const toggleComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
        updateTask(updatedTask, index);
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High":
                return "text-red-400";
            case "Medium":
                return "text-yellow-300";
            case "Low":
                return "text-green-400";
            default:
                return "text-gray-300";
        }
    };

    return (
        <ul className="list-none p-0 space-y-4">
            {tasks.map((task, index) => (
                <li
                    key={index}
                    className={`flex justify-between items-start p-4 rounded-lg shadow-md border transition-all transform hover:scale-[1.02]
          ${task.completed ? 'bg-green-900/30 border-green-500' : 'bg-gray-800 border-gray-600'}`}
                >
                    <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2 mb-1">
                            {task.completed && (
                                <FaCheckCircle className="text-green-400 text-lg" title="Completed" />
                            )}
                            <h3
                                className={`text-xl font-semibold ${task.completed ? 'text-green-300 italic' : 'text-white'}`}
                            >
                                {task.text}
                            </h3>
                        </div>
                        {task.description && (
                            <p className={`text-sm ${task.completed ? 'text-green-200' : 'text-gray-400'} mb-1`}>
                                {task.description}
                            </p>
                        )}
                        <div className="flex items-center gap-2 text-sm">
                            <span className={`${getPriorityColor(task.priority)} font-medium`}>
                                {task.priority} Priority
                            </span>
                            {task.createdAt && (
                                <span className="text-gray-400">
                                    • {new Date(task.createdAt).toLocaleDateString()}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                        <button
                            onClick={() => toggleComplete(index)}
                            className={`px-3 py-1 rounded-md font-medium transition
              ${task.completed
                                    ? 'bg-gray-300 text-gray-900 hover:bg-gray-200'
                                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                                }`}
                        >
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                        <button
                            onClick={() => deleteTask(index)}
                            className="px-3 py-1 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
