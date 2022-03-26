import React, {useState, useEffect} from "react";

import NewThoughts from "./NewThoughts";
import ListOfThoughts from './ListOfThoughts';
import LikedThoughts from "./LikedThoughts";
import white from './img/white-background.png';
import Background from './Background';
import OptimisticUI from './OptimisticUI';
import Logo from './img/logo.png'


const API_KEY = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';


const Thoughts = () => {
    
    const [thoughts, setThoughts] = useState([]);
    const [newThoughts, setNewThoughts] = useState('');
    const [newThoughtsInput, setNewThoughtsInput] = useState(0);
    const [loading, setLoading] = useState(true);
    const [countLikes, setCountLikes] = useState(JSON.parse(localStorage.getItem('liked'))+ 0);
    const [likedThoughts, setLikeThoughts] = useState(JSON.parse(localStorage.getItem('message')));
    const [background, setBackground] = useState(white);
    const [thoughtIdeas, setThoughtIdeas] = useState('');
     
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({ message: newThoughts}),
    }


    const getThoughtIdeas = (thoughts) => {
        setThoughtIdeas(thoughts);
        setNewThoughts(thoughts)
        setNewThoughtsInput(thoughts.length);
    }

    const fetchData = () => {

        setLoading(true);
        try {
        fetch(API_KEY)
        .then(res => res.json())
        .then(data => {
            setThoughts(data);
            setLoading(false);
        });
        }
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    }
     
     // Fetch API and get 20 current thoughts when the component get mounted
     useEffect(() => {
            fetchData();   
            setInterval(fetchData, 10000);
        }, [])
        
 
    // SEND INPUT DATA TO API
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    
        fetch(API_KEY, options)
        .then(res => res.json())
        .then(data => fetchData())
        .catch(error => console.log(error))
        .finally(() => {
            setNewThoughts('');
            setNewThoughtsInput(0);
        })
    
    }
 

    //Save array to local storage
    const handleLikes = (thought) => {
  
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`, {
                method: 'POST'          
        })
        .then(res => res.json()) 
        .then(((data) => {
            fetchData();            
            setCountLikes(countLikes+1);
            setLikeThoughts((prevMess) => ([data.message,...prevMess]))     
        }))
    
    }

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(countLikes))
    }, [countLikes])


    useEffect(() => {
        localStorage.setItem('message', JSON.stringify(likedThoughts))
        if (likedThoughts && likedThoughts.length > 10)
        setLikeThoughts([])
    }, [likedThoughts])


    // HANDLE DELETE BUTTON
    const handleDeleteThoughts = () => {

        if (window.confirm('Do you want to delete all liked thoughts ?')) {
            setLikeThoughts([]);
            setCountLikes(0);      
        }

    }
    
 
    
    // HANDLE FORM INPUT
    const handleFormInput = (thoughtInput) => {
        setNewThoughtsInput(thoughtInput.length);
        setNewThoughts(thoughtInput);
    }
  

    return <div className='container'>

        <img className='logo' src={Logo} alt='logo'/>

        <LikedThoughts 
         countLikes = {countLikes} 
         likedThoughts= {likedThoughts}
         setLikeThoughts = {setLikeThoughts}
         handleDeleteThoughts = {handleDeleteThoughts}
        />

        <form className= 'thought-card new-thought-form background-size' style={{background: `url(${background})`}}  onSubmit={handleFormSubmit}>
        <Background 
        background = {background}
        setBackground = {setBackground}
        />

        <NewThoughts 
        newThoughts={newThoughts}
        handleFormInput = {handleFormInput}
        newThoughtsInput = {newThoughtsInput}
        thoughtIdeas = {thoughtIdeas}
        getThoughtIdeas = {getThoughtIdeas}
        />
        </form>

        {loading ? <OptimisticUI background = {background} />  
        
        : (thoughts.map(thought => (
                <div className='thought-card' style={{background: `url(${background})`}} key={thought._id}>
                <ListOfThoughts 
                thought = {thought} 
                handleLikes = {handleLikes}
                />
            </div>
            ))     
        )}  


    </div>
}

export default Thoughts;

