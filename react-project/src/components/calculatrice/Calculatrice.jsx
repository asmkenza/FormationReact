import React from 'react'
function Calculatrice({note1,note2}) {
  
  return (
    <div >
     <h1>Calculatrice</h1>
      Votre Première note est {note1} <br />
      Votre deuxième note est {note2} <br />

      Votre Moyenne est {(note1+note2)/2}
    </div>
  )
}

export default Calculatrice
