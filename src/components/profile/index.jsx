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
      <div>
      <img src={photoProfile} alt="photoProfile" className="imgProfile tamanho_img_perf" />
      <div className='glassImg tamanho_img_perf'></div>
      <div>
        <h5 className="nome_perf">Vagner Cardoso dos Santos</h5>
      </div>
      <Contatos />
      </div>
      <IconsTec />
    </div>
  )
}

export default Profile
