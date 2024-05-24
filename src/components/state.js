import React, { useState } from 'react'


const State = () => {
    const [count , setCount] = useState(0);
    function handleonClick(){
        setCount(count+1);
        if (count==10){
            setCount(0);
        }
    }
    return (
        <div style={{marginLeft:"40%",marginTop:"200px"}}>
        
        clicked {count} times
        <button onClick={handleonClick}>click me</button>
    
    </div>
    
  )
}

export default State