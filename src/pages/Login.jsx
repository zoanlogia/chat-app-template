import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.js'

const Login = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/login")
        }

        catch (error) {
            setErr(true)
        }
    }
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Vocalaize</span>
                <span className='title'>Vos identifiants</span>
                <form onSubmit={handleSubmit}>
                    <input type='mail' placeholder='email' />
                    <input type='password' placeholder='mot de passe' />
                    <button>Se connecter</button>
                    {err && <span>Une erreur est survenue</span>}
                </form>
                <p>Vous n'avez pas de compte ? <Link to="/register">S'enregistrer</Link></p>
            </div>
        </div>
    )
}

export default Login
