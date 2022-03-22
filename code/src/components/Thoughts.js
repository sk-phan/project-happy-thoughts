import React, {useState, useEffect} from "react";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import NewThoughts from "./NewThoughts";
import ListOfThoughts from './ListOfThoughts';

const API_KEY = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';


const Thoughts = () => {
    
    const [thoughts, setThoughts] = useState([]);
    const [newThoughts, setNewThoughts] = useState('');
    const [newThoughtsInput, setNewThoughtsInput] = useState(0);

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
    
    // Count input characters
    useEffect(() => {

        setNewThoughtsInput(newThoughts.length);

        const text = document.getElementById('text')

        newThoughts.length > 6 ? text.innerHTML = 'too long' : text.innerHTML = ''
        
    }, [newThoughts])
    
     
    // Fetch API and get 20 current thoughts 
    useEffect(() => {
        
        fetchData();
        setInterval(fetchData, 2000);
        
    }, [])

    // Send input data to API
    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch(API_KEY, options)
        .then(res => res.json)
        .then(data => setThoughts((prevThoughts) => [data, ...prevThoughts] ))
    
    }

    const handleLikes = () => {

        thoughts.map(thought => {

            fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`, {
                method: 'POST'
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Something is wrong");
                }
            })
            .then(data => console.log(data.hearts))
            .catch(error => console.log(error))
        }) 
        
    }

  
    return <div className='container'>

         <NewThoughts 
         newThoughts = {newThoughts}
         setNewThoughts = {setNewThoughts}
         handleFormSubmit = {handleFormSubmit}
         newThoughtsInput = {newThoughtsInput}
         setNewThoughtsInput = {setNewThoughtsInput}
         />

        <ListOfThoughts 
        thoughts = {thoughts} 
        handleLikes = {handleLikes}
        />
        
    </div>
}

export default Thoughts;