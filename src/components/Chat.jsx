import React from 'react'
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEllipsisH, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import  Messages from './Messages.jsx'
import { Input } from './Input.jsx'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jeff</span>
        <div className="chatIcons">
        <FontAwesomeIcon icon={faVideo} size="md" inverse />
        <FontAwesomeIcon icon={faUserPlus} size="md" inverse />
        <FontAwesomeIcon icon={faEllipsisH} size="md" inverse />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
