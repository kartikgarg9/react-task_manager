import React from 'react'

const ProgressTracker = ({ tasks }) => {
    const completedTasks = tasks.filter(t => t.completed).length;
    const totaltasks = tasks.length;
    // const percentage = totaltasks == 0 ? 0 : (completedTasks / totaltasks) * 100;
    return (
        <div className='progress-tracker'>
            <p>
                {completedTasks} out of {totaltasks} tasks completed
            </p>

            {/* <div className='progress-bar'>
                <div className='progress' style={{ width: `${percentage}%` }}></div>
            </div> */}
            {/* <p>{percentage.toFixed(2)}% completed</p> */}
        </div>
    )
}

export default ProgressTracker