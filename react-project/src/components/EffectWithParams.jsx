import React, {useEffect, useState}  from 'react'

function EffectWithParams() {

const [count,setCount]=useState(0);

const compteur=()=> { setCount(count+1); }

useEffect(()=>{
document.title= `Vous avez cliqué ${count} fois`;
},[count]);

  return (
    <div>
      <p>Vous avez Cliqué {count} fois</p>
      <button onClick={compteur}>Cliquez ici</button>
    </div>
  )
}

export default EffectWithParams
