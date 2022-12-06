import React from 'react'

import './profile.css'
import IconsTec from './iconsTec'
import Contatos from './contato'
import photoProfile from '../.././images/foto.jpg'

function Profile () {
  return (
    <div className="profile efeito-vidro">
      <img src={photoProfile} alt="photoProfile" className="imgProfile" />
      <div className='glassImg'></div>
      <div>
        <h5 className="nomeP">Vagner Cardoso dos Santos</h5>
      </div>
      <Contatos />
      <IconsTec />
    </div>
  )
}

export default Profile
