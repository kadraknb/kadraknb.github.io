import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import Context from './Context';

function Provider({ children }) {
  const [showDetalhe, setShowDetalhe] = useState(false);
  const [iconTecFocada, setIconTecFocada] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // style
  const ajusteTelaWidth = {
    height:
      windowWidth > 700 && windowWidth < 1000
        ? `1${(1100 - windowWidth) / 10}vh`
        : 100 + 'vh',
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', () => handleResize());
    return () => window.addEventListener('resize', () => handleResize());
  }, []);

  const value = {
    showDetalhe,
    setShowDetalhe,
    iconTecFocada,
    setIconTecFocada,
    windowWidth,
    ajusteTelaWidth,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
