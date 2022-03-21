import React from "react";

const NewThoughts = ( {newThoughts, setNewThoughts, handleFormSubmit} ) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='newThoughts'> Write your thoughts</label>
            <input 
            type='text'
            id='newThoughts'
            value = {newThoughts}
            onChange={(e) => setNewThoughts(e.target.value)}
            />

        </form>
    )
}

export default NewThoughts;