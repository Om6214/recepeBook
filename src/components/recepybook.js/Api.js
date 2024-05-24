import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../App.css";

const Api = () => {
    const navigate = useNavigate();
    const [res, setRes] = useState([]);

    const handleRecipy = (title, directions, ingredients ,photoUrl) => {
        navigate('/recipe', { state: { title, directions, ingredients,photoUrl } });
    };

    const getUsers = async () => {
        const response = await fetch('https://api.sampleapis.com/recipes/recipes');
        const data = await response.json();
        console.log(data)
        setRes(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        
        <div className="container text-center">
            <div className="row">
                <h1 style={{marginTop:"30px"}}>Om Recepe Book</h1>
                {res.map((curEle, index) => (
                    <div key={index} className="card my-3 mx-3" style={{ width: "18rem" }}>
                        <img src={curEle.photoUrl} style={{ height: "250px" }} className="card-img-top my-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{curEle.title}</h5>
                            <p>CookTime - {curEle.cookTime} mins</p>
                        </div>
                        <ul style={{borderRadius:"20px"}} className="list-group list-group-flush">
                            <li className="list-group-item">Carbohydrates - {curEle.carbohydrate}</li>
                            <li className="list-group-item">Fat - {curEle.fat}</li>
                            <li className="list-group-item">Calories - {curEle.calories}</li>
                            <li className="list-group-item">Fiber - {curEle.fiber}</li>
                        </ul>
                        <div className="card-body">
                            <button className='btn' onClick={() => handleRecipy(curEle.title, curEle.directions, curEle.ingredients,curEle.photoUrl)}>Recipe</button>
                            <a className="btn" target='blank' href={curEle.source}>Source</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Api;
