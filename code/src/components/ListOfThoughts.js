import React from "react";


const Thoughts = ( { thoughts, handleLikes } ) => {
   
    return <>
    {thoughts.map(thought => {
        
        return( 
            
            <div className='thought-card' key={thought._id}>
          <p className='thought-text'>{thought.message}</p>
          <div className='thought-interaction'>

          <div className='heart-btn-container'><button onClick={handleLikes} className='heart-btn btn'>❤️</button> <span> x {thought.hearts}</span></div>
          <span className='thought-date'>{thought.createdAt}</span>
          </div>
          </div>
        )
        
        
    }
    )}
    </>
}

export default Thoughts;