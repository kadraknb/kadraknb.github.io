import React, { useContext } from 'react'

import './profile.css'
import IconsTec from './iconsTec'
import Contatos from './contato'
import photoProfile from '../.././images/foto.jpg'
import Context from '../../context/Context';

function Profile () {
  const { windowWidth } = useContext(Context);

  const ajusteTela = {
    height: windowWidth < 1000 ? `1${(1100 - windowWidth) / 10}%` : 100 + '%'
};
  return (
    <div className="profile efeito-vidro" style={ajusteTela}>
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
