import React from "react";
import select from './Select'


const ReccommendThoughts = ( {thoughtIdeas, getThoughtIdeas} ) => {

    return <select value={thoughtIdeas} onChange={(e) => getThoughtIdeas(e.target.value)}> 
       
        {select.map(item => {
            return (
            <option key={item.id}
            value={item.message}
            > 
            {item.message}
            </option>
            )
        })}
    </select>
}

export default ReccommendThoughts;