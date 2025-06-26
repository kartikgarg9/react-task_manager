import React from 'react'

function TaskList({ tasks, updateTask, deleteTask }) {
    const toggleComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
        updateTask(updatedTask, index);
        // Update the task in the tasks array


    }
    return (
        <ul className='task-list'>
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : ""}>
                    <div>
                        <span>{task.text}</span>
                        <small>({task.priority})</small>
                    </div>

                    <button onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
                    <button onClick={() => deleteTask(index)} >Delete</button>
                </li>
            ))}

        </ul>
    )
}

export default TaskList