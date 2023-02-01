import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

export const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Vocalaize</span>
                <span className='title'>Connection</span>
                <form>
                    <input type='text' placeholder='Nom'/>
                    <input type='mail' placeholder='email'/>
                    <input type='password' placeholder='mot de passe'/>
                    <input style={{display:"none"}} type='file' id='file' />
                    <label htmlFor='file'>
                        <FontAwesomeIcon icon={faImage} size="2x"/>
                        <span>Ajouter une image</span>
                    </label>
                <button>S'enregistrer</button>
                </form>
                <p>Vous avez déjà un compte ? Connectez-vous</p>
            </div>
        </div>
    )
}
