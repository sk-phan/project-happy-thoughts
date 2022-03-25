import { yearsToMonths } from "date-fns";
import React from "react";


const LikedThoughts = ( {countLikes, likedThoughts, handleDeleteThoughts, setLikeThoughts} ) => {

  return <>
     <div className='liked-text-container'>
    <div className='liked-thought-header'>
     <p className='liked-thought-counter'> 
         <span aria-hidden='true' className='heart'>💜 </span> 
          Liked: {countLikes} posts
     </p>
     <button className='delete-btn' onClick={handleDeleteThoughts} type='button'>Delete</button>

    </div>
     {likedThoughts ? likedThoughts.map((item,i) => <p key={i} className='liked-text'>
         { item }
         </p>
    ) : setLikeThoughts([])}
     </div>
  </>

}

export default LikedThoughts