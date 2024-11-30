import React, {useState} from 'react'



function MyHook() {

const [count, setCount] = useState(0); 

const incrementer = () => { setCount(count + 1) }

const decrementer = () => { setCount(count - 1) }

  return (
    <div>
    <p>Compteur: {count}</p>
    <button onClick={incrementer}>Incrementation</button>
    <button onClick={decrementer}>Décrimentation</button>
    </div>
  )
}

export default MyHook
