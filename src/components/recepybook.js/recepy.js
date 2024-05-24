import React from 'react';
import "../../App.css"
import { useLocation } from 'react-router-dom';

const Recipe = () => {
    const location = useLocation();
    const { title, directions, ingredients,photoUrl } = location.state || {};
    const sentences = directions.split('.').filter(sentence => sentence.trim() !== '');
  
    if (!title || !directions || !ingredients) {
        return <div>No recipe data available</div>;
    }

    return (
        <div className="container">
            <h1 className='title'>{title}</h1>
            <h2>Directions</h2>
            <ul>
                {sentences.map((sentence, index) => (
                    <li key={index}>{sentence.trim()}.</li>
                ))}
            </ul>
            <h2>Ingredients</h2>
            <p>{ingredients}</p>
        </div>
    );
};

export default Recipe;
