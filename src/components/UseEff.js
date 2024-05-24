import React,{useEffect, useState} from 'react'

const UseEff = () => {
  const [count, setcount] = useState(0)
  const handleButton =()=>{
    setcount(count+1)
  }
  useEffect(()=>{
    if(count===0){
      document.title=`chats`
    }else{
      document.title=`chats(${count})`
    }
  })
  return (
    <>
    <h2>{count}</h2>
    <button onClick={handleButton}>clickMe</button>
    </>
  )
}

export default UseEff