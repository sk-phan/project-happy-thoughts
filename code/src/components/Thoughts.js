import React, {useState, useEffect} from "react";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
//import NewThoughts from "./NewThoughts";



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
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setThoughts(data)});
    }


    // Send input data to API
    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
        .then(res => res.json)
        .then(data => setThoughts((prevThoughts) => [data, ...prevThoughts] ))
    
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <>


         <form onSubmit={handleFormSubmit}>
            <label htmlFor='newThoughts'> Write your thoughts</label>
            <input 
            type='text'
            id='newThoughts'
            value = {newThoughts}
            onChange={(e) => setNewThoughts(e.target.value)}
            />
            <button type="submit">Send</button>

        </form>
        
        
        {thoughts.map(thought => {
          
          return(
           
            <div key={thought._id}>
            <button>❤️ {thought.hearts}</button>
            <p>{thought.message}</p>
            <span>{thought.createdAt}</span>
            </div>
          )
         

        }
        )}
    </>
}

export default Thoughts;