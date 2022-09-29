import React, { useState } from 'react'
import { node } from 'prop-types'

import Context from './Context'

function Provider ({ children }) {
  const [previewProject, setPreviewProject] = useState('')
  const value = { previewProject, setPreviewProject }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: node
}.isRequired

export default Provider
