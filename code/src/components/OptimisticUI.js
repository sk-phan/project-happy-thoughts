import React from "react";

import ListOfThoughts from "./ListOfThoughts";
import DefaultThoughts from "./DefaultThoughts";

const OptimisticUI = ( { background } ) => {
    console.log(DefaultThoughts)
    return <>
      {DefaultThoughts.map(thought => {
          return (
              <div className='thought-card' key={thought._id}>
                  <ListOfThoughts      
                    thought = {thought} 
                    />
              </div>
          )
      })}
    
    </>
 
    
}

export default OptimisticUI;