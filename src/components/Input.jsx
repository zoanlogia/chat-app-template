import { faFileUpload, faImage, faImagePortrait, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Saisissez votre message' />
      <div className="send">
        <FontAwesomeIcon icon={faPaperclip} size="md"/>
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <FontAwesomeIcon icon={faImage} size="md"/>
        </label>
        <button>Envoyer</button>
      </div>
    </div>
  )
}
