import React, {useEffect} from "react";
import { formatDistance } from 'date-fns';



const ListOfThoughts = ( { id, thought, handleLikes, a } ) => {
   



    return <div>        
          <p className='thought-text'>{thought.message}</p>
          <div className='thought-interaction'>
        
          <div className='heart-btn-container'>
          <span id={id} className="hidden animate">❤️</span>
              <button onClick={() => handleLikes(thought)} className='heart-btn btn'>
                <span className='hearts'>💜</span>  
              </button> 
              <span> x {thought.hearts}</span>
          </div>

          

          <span className='thought-date'>	{formatDistance(new Date(thought.createdAt), Date.now(), {
								addSuffix: true,
							})}</span>
          </div>
        
    </div>
}

export default ListOfThoughts;