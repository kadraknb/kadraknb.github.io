import React, { useEffect, useState } from 'react'
import { node } from 'prop-types'

import Context from './Context'

function Provider ({ children }) {

  const [showDetalhe, setShowDetalhe] = useState(false)
  const [iconTecFocada, setIconTecFocada] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.screen.width)

  

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.screen.width);
    }

    window.addEventListener('resize', () => handleResize());
    return () => window.addEventListener('resize', () => handleResize());
  }, []);


  const value = {
    showDetalhe,
    setShowDetalhe,
    iconTecFocada,
    setIconTecFocada,
    windowWidth
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: node
}.isRequired

export default Provider
