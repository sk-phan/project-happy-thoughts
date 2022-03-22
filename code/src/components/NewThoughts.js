import React from "react";

const NewThoughts = ( {newThoughts, setNewThoughts, handleFormSubmit,  newThoughtsInput, setNewThoughtsInput} ) => {

    return (
        <form className='thought-card new-thought-form' onSubmit={handleFormSubmit}>
            <label htmlFor='newThoughts'> What's making you happy right now?</label>
            <input 
            type='text'
            id='newThoughts'
            placeholder='React is making me happy'
            value = {newThoughts}
            onChange={(e) => setNewThoughts(e.target.value)}
            />


            <span id='text'></span>
            <span id='thought-length'>{newThoughtsInput}</span>

            <span>{newThoughts.length > 6 ? newThoughts.length : 'too long'}/ 140</span>
            
            <button disabled = {newThoughtsInput < 4} className='new-thought-btn btn' type='submit'>❤️ Send Happy Thoughts ❤️</button>

        </form>
    )
}

export default NewThoughts;