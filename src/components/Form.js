import React from 'react'
import "../App.css"

const Form = () => {
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [array, setarray] = React.useState([])

    const submit = (e) => {
        e.preventDefault();
        if(email&&password){
            const newArray = { Email : email, Password : password}
                setarray([...array,newArray]);
                setemail("");
                setpassword("");
        }
        else{
            alert("fields are empty")
        }
    }

  return (
    <>
        <form className='form'>
            <div className='Email'>
                <label id='emaileb' htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete='off'
                    value={email} onChange={(e)=> setemail(e.target.value)}
                />
            </div>
            <div className='Pass'>
                <label id='passleb' htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autoComplete='off'
                    value={password} onChange={(e)=> setpassword(e.target.value)}
                />
            </div>
            <button className='btn' type="submit" onClick={submit}>Login</button>
        </form>
        <div>
            {
                array.map((curEle)=>{
                    return(
                        <div className='result'>
                            <p>Email : {curEle.Email}</p>
                            <p>Password : {curEle.Password}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
    
  )
}

export default Form