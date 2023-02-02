import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on((error) => {setErr(true)}, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateProfile(res.user, {
                            displayName: displayName,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName: displayName,
                            email: email,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "usersChat", res.user.uid), {})
                        navigate('/')
                    });
                }
            );

        } catch (error) {
            setErr(true)
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Vocalaize</span>
                <span className='title'>Vos informations</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Nom' />
                    <input type='mail' placeholder='email' />
                    <input type='password' placeholder='mot de passe' />
                    <input style={{ display: "none" }} type='file' id='file' />
                    <label htmlFor='file'>
                        <FontAwesomeIcon icon={faImage} size="2x" />
                        <span>Ajouter une image</span>
                    </label>
                    <button>S'enregistrer</button>
                    {err && <span>Une erreur est survenue</span>}
                </form>
                <p>Vous avez déjà un compte ? Connectez-vous</p>
            </div>
        </div>
    )
}

export default Register