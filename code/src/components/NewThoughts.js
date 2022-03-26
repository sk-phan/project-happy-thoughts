import React, {useState, useEffect} from "react";

import ThoughtInspo from './ThoughtInspo'




const NewThoughts = ( {newThoughts, handleFormInput, newThoughtsInput, thoughtIdeas, getThoughtIdeas } ) => {

    const [characterCounterColor, setCharacterCounterColor] = useState('');

    
    // Count input characters
  
    useEffect (() => {
        newThoughtsInput < 5 && newThoughtsInput > 0 || newThoughtsInput > 130
        ? setCharacterCounterColor('red') 
        : setCharacterCounterColor('');
    }, [newThoughts])
    

    return (
        <>
      
            <label className='thought-question' htmlFor='newThoughts'> What's making you happy right now?</label>
            <input 
            type='text'
            id='newThoughts'
            placeholder='Write positive thought here'
            value = {newThoughts}
            onChange={(e) => handleFormInput(e.target.value)}
            minLength= '5'
            maxLength= '140'
            />
           
           <div className='text-container'>

            <span className= {`${characterCounterColor} character-counter`}> 
            {
            newThoughtsInput < 5 && newThoughtsInput > 0 
            ? 'Too short to be happy' : newThoughtsInput === 0 ? 'Min 5 characters' 
            : newThoughtsInput === 140 ? 'Max 140 characters'
            : `${newThoughtsInput} / 140` 

            }
            </span>
     

            <select 
            className='background-select'
            value={thoughtIdeas} 
            onChange={(e) => getThoughtIdeas(e.target.value)}> 
            
                {ThoughtInspo.map(item => {
                    return (
                    <option key={item.id}
                    value={item.message}> 
                    {item.message}
                    </option>
                    )
                })}
            </select>
           </div>
            
            <button disabled = {newThoughtsInput < 5} className='new-thought-btn btn' type='submit'>💜 Send Happy Thoughts 💜</button>

        </>
    )
}

export default NewThoughts;