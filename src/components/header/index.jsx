import React, { useContext, useState } from 'react';

import './header.css';
import Context from '../../context/Context';
import Profile from '../profile';
import CenterBody from '../centerBody';
import ProjectList from '../projectList';

function Header() {
  const { windowWidth } = useContext(Context);
  const [nav, setNav] = useState('Perfil');

  const ajusteTelaZoom = {
    zoom: windowWidth < 700 ? `${100 - (700 - windowWidth) / 8}%` : 100 + '%',
  };

  const navSelecionada = {
    Perfil: <Profile />,
    SobreMim: <CenterBody />,
    Projetos: <ProjectList />,
  };

  return (
    <>
      <header id="header_main" style={ajusteTelaZoom}>
        <div
          className={`box_nav ${nav === 'Perfil' && 'navSelecionada'}`}
          onClick={() => setNav('Perfil')}
        >
          Perfil
        </div>
        <div
          className={`box_nav ${nav === 'SobreMim' && 'navSelecionada'}`}
          onClick={() => setNav('SobreMim')}
        >
          Sobre mim
        </div>
        <div
          className={`box_nav ${nav === 'Projetos' && 'navSelecionada'}`}
          onClick={() => setNav('Projetos')}
        >
          Projetos
        </div>
      </header>
      {navSelecionada[nav]}
    </>
  );
}

export default Header;
