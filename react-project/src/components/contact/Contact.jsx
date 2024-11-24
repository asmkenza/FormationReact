import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
  <form className='form'>
    <label >Votre Nom</label>
    <input type="text" />
    <br />  
    <label>Votre Prénom</label>
    <input type="text" />
    <br />
    <label>Votre Mot de Passe</label>
    <input type="password" name='' id=''/>
    <br />
    <label>Votre Email</label>
    <input type="email" name="" id="" />
    <br />
    <input type="submit" name='envoyer'/>
  </form>
  )
}

export default Contact
