import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase.js'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Vocalaize</span>
        <div className="user">
            <img src="https://img.freepik.com/photos-gratuite/portrait-taille-beau-homme-serieux-mal-rase-garde-mains-jointes-vetu-chemise-bleu-fonce-parle-interlocuteur-se-tient-contre-mur-blanc-freelance-homme-confiant_273609-16320.jpg?w=1480&t=st=1675334716~exp=1675335316~hmac=64285f49612b7ca959776bad8c8264c718e596c0d92a813f0cf640c9ec64eddc" alt="" />
            <span>John</span>
            <button onClick={()=>signOut(auth)}>Déconnexion</button>
        </div>
    </div>
  )
}

export default Navbar
