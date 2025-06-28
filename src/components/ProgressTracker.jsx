import React from 'react';

const ProgressTracker = ({ tasks }) => {
    const completedTasks = tasks.filter(t => t.completed).length;
    const totalTasks = tasks.length;

    return (
        <div className="mt-6 text-gray-200">
            <p>{completedTasks} out of {totalTasks} tasks completed</p>
        </div>
    );
};

export default ProgressTracker;