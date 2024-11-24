import React from 'react';
import './About.css'; 
import Image from './aaaa.png'; 


const index = ({name,age}) => {
   
  return (
    <div className='about-us'>
        <h2>A propos de nous</h2>
        <p>Bienvenue à {name} qui a l'age de {age} ans sur notre site web</p>
        {/* <img src="./aaaa.png" alt="Image Indisponible" /> */}
        <img src={Image} alt="Image Indisponible" />
    </div>
  )
}

export default index
