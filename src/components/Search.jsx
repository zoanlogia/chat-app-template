import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Chercher un contact' />
      </div>
      <div className="userChat">
        <img src="https://img.freepik.com/photos-gratuite/portrait-taille-beau-homme-serieux-mal-rase-garde-mains-jointes-vetu-chemise-bleu-fonce-parle-interlocuteur-se-tient-contre-mur-blanc-freelance-homme-confiant_273609-16320.jpg?w=1480&t=st=1675334716~exp=1675335316~hmac=64285f49612b7ca959776bad8c8264c718e596c0d92a813f0cf640c9ec64eddc" alt="" />
        <div className="userChatInfo">
          <span>Christophe</span>
          <p>Hello world !</p>
        </div>
      </div>
    </div>
  )
}

export default Search
