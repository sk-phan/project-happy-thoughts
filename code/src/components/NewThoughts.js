import React from "react";

const NewThoughts = ( {newThoughts, setNewThoughts, handleFormSubmit} ) => {
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
            
            <button className='new-thought-btn btn' type='submit'>❤️ Send Happy Thoughts ❤️</button>

        </form>
    )
}

export default NewThoughts;