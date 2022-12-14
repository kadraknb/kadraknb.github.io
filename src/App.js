import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Body from './components/body'
import validarRota from './utils/validarRota'

function App () {
  const [rotaProjeto, setRotaProjeto] = useState(false)
  useEffect(() => setRotaProjeto(validarRota()), [])
  return (
    <div >
    <Body rotaProjeto={rotaProjeto} />
    </div>
  )
}

export default App
