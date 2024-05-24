import React from 'react';

const Todo = () => {
    const [task, setTask] = React.useState("");
    const [tasksArray, setTasksArray] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            const newTask = { task };
            setTasksArray([...tasksArray, newTask]);
            setTask("");
        }
    };
    function handleDelete(Task){
        const newArray = tasksArray.filter((curEle)=>{
            return curEle.task!==Task
        })
        setTasksArray(newArray)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    autoComplete='off'
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                {tasksArray.map((curTask, index) => (
                    <h3 key={index}>Task: {curTask.task} <button onClick={()=>handleDelete(curTask.task)}>Delete</button></h3>

                ))}
            </div>
        </>
    );
};

export default Todo;
