import React, {useState, useEffect} from "react";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import NewThoughts from "./NewThoughts";
//import NewThoughts from "./NewThoughts";

const API_KEY = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';



const Thoughts = () => {
    
    const [thoughts, setThoughts] = useState([]);
    const [newThoughts, setNewThoughts] = useState('');

    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({ message: newThoughts}),
    }

    const fetchData = () => {
        fetch(API_KEY)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setThoughts(data)});
    }


    // Send input data to API
    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch(API_KEY, options)
        .then(res => res.json)
        .then(data => setThoughts((prevThoughts) => [data, ...prevThoughts] ))
    
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <div className='container'>


         <NewThoughts 
         newThoughts = {newThoughts}
         setNewThoughts = {setNewThoughts}
         handleFormSubmit = {handleFormSubmit}
         />

        
        {thoughts.map(thought => {
          
          return( 
            <div className='thought-card' key={thought._id}>
            <p className='thought-text'>{thought.message}</p>
            <div className='thought-interaction'>

            <div className='heart-btn-container'><button className='heart-btn btn'>❤️</button> <span> x {thought.hearts}</span></div>
            <span className='thought-date'>{thought.createdAt}</span>
            </div>
            </div>
          )
         

        }
        )}
    </div>
}

export default Thoughts;