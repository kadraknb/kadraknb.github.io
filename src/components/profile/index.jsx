import React, { useContext } from 'react'

import './profile.css'
import IconsTec from './iconsTec'
import Contatos from './contato'
import photoProfile from '../.././images/foto.jpg'
import Context from '../../context/Context';

function Profile () {
  const { ajusteTelaWidth } = useContext(Context);


  return (
    <div className="profile efeito-vidro" style={ajusteTelaWidth}>
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
