import React, { useEffect, useState } from 'react'
import { node } from 'prop-types'

import Context from './Context'

function Provider ({ children }) {
  const [previewProject, setPreviewProject] = useState('')
  const [iconTecFocada, setIconTecFocada] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [showDetalhe, setShowDetalhe] = useState(true)

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
  useEffect(() => console.log(previewProject), [])

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: node
}.isRequired

export default Provider
