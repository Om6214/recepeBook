import React from 'react';
import '../App.css';

const UseStatewithObject = () => {
    const TodoData = [
        {
            id: 0, task: "wakeup", time: "7:00 am",
        },
        {
            id: 1, task: "breakfast", time: "11:00 am",
        },
        {
            id: 2, task: "study", time: "1:00 am",
        }
    ];
    
    const [data, setData] = React.useState(TodoData);
    
    function handleClear() {
        setData([]);
    }
    
    function handleDelete(id) {
        const newArray = data.filter((curEle)=>{
            return curEle.id!==id;
        })
        setData(newArray);
    }
    
    return (
        <div>
            {data.map((curEle) => {
                return (
                    <h1 key={curEle.id}>
                        id: {curEle.id}, task: {curEle.task}, time: {curEle.time}
                        <button onClick={() => handleDelete(curEle.id)}>Delete</button>
                    </h1>
                );
            })}
            <button onClick={handleClear}>Clear</button>
        </div>
    );
};

export default UseStatewithObject;
