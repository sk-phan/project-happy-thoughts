import React from "react";
import party from './img/party-background.png'
import spring from './img/spring-background.png'
import nature from './img/nature-background.png'
import love from './img/love-background.png'
import white from './img/white-background.png'


// Store background colors
 const color = [
    { name: 'white',
      img: white
    },
    { name: 'party',
      img: party
    },
    { name: 'spring',
      img: spring
    },
    {
      name: 'nature',
      img: nature
    },
    {
       name: 'love',
       img: love
    }

]

 const Background = ( {background, setBackground} ) => {
  return <div> 
    {color.map(item => { 
      return (
      <label key={item.name} className='radio-label' htmlFor={item.name}>
          <input 
              type='radio'
              value={item.img}
              checked = {background === item.img}
              onChange={e => setBackground(e.target.value)}
          />
          <img className='radio-img' src={item.img} alt={item.name} />
      </label>
      )    
    })
  }
  </div>
 }

 export default Background;