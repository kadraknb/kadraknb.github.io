import React, { useContext } from 'react';

import './profile.css';
import IconsTec from './iconsTec';
import Contatos from './contato';
import photoProfile from '../.././images/foto.jpg';
import Context from '../../context/Context';

function Profile() {
  const { ajusteTelaWidth } = useContext(Context);

  return (
    <div id="box_profile_main" className="sombra" style={ajusteTelaWidth}>
      <div id="box_img_perf">
        <img
          draggable="false"
          src={photoProfile}
          alt="photoProfile"
          className="img_Profile"
        />
      </div>
      <div>
        <h5 className="nome_perf flax_center">Vagner Cardoso dos Santos</h5>
      </div>

      <Contatos />
      <IconsTec />
    </div>
  );
}

export default Profile;
