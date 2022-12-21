import React, { useContext } from 'react';

import './header.css';
import Context from '../../context/Context';

function Header() {
  const { setNav, nav, windowWidth } = useContext(Context);

  const ajusteTelaZoom = {
    zoom:
      windowWidth < 700
        ? `${100 - (700 - windowWidth) / 8}%`
        : 100 + '%',
  };
  
  return (
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
  );
}

export default Header;
