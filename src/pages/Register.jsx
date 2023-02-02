import React from 'react'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Vocalaize</span>
                <span className='title'>Vos identifiants</span>
                <form>
                    <input type='mail' placeholder='email' />
                    <input type='password' placeholder='mot de passe' />
                    <button>Se connecter</button>
                </form>
                <p>Vous n'avez pas de compte ? S'enregistrer</p>
            </div>
        </div>
    )
}

export default Register
