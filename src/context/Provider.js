import React, { useState } from 'react'
import { node } from 'prop-types'

import Context from './Context'

function Provider ({ children }) {
  const [previewProject, setPreviewProject] = useState(false)
  const [modalShow, setModalShow] = useState(false)

  const [showDetalhe, setShowDetalhe] = useState(false)
  const [iconTecFocada, setIconTecFocada] = useState('')

  const value = {
    previewProject,
    setPreviewProject,
    modalShow,
    setModalShow,
    showDetalhe,
    setShowDetalhe,
    iconTecFocada,
    setIconTecFocada
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: node
}.isRequired

export default Provider
