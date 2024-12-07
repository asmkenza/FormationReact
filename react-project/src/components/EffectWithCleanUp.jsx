import React, {useEffect, useState} from 'react'

function EffectWithCleanUp() {

const [count,setCount]=useState(0); 


useEffect(() => {
    const interval=setInterval(()=>{
        setCount((prevCount)=>prevCount+1);
    },1000);

    return () => clearInterval(interval);
});

  return (
    <> 
    Compteur : {count}
    </>
  )
}

export default EffectWithCleanUp
