import React, { useState } from 'react'

const Detailarray = () => {
    function handleClear(){
      setArray([]);   
    }   
    var myBiodata = [
        {
            id:0, Name: "Omnath Ankush Ganapure",
        },
        {
            id:1, Name: "Abhishek Ankush Ganapure",
        },
        {
            id:2, Name: "Ankush prahlad Ganapure",
        }
    ]
    const [Array , setArray] = useState(myBiodata)   
  return (
    <>
      {
        Array.map((currElem)=> <h1>Name : {currElem.Name} , id : {currElem.id}</h1>)
      }
      <button style={{marginLeft:"20%"}} onClick={handleClear}>clear</button>
    </>
  )
}

export default Detailarray