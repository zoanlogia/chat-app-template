import { faImage, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Saisissez votre message' />
      <div className="send">
        <FontAwesomeIcon icon={faPaperclip} />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <FontAwesomeIcon icon={faImage} />
        </label>
        <button>Envoyer</button>
      </div>
    </div>
  )
}
