import React, { useContext } from 'react'

import './App.css'
import Centerbory from './components/centerBody'
import PreviewProject from './components/previewProject'
import Profile from './components/profile'
import ProjectList from './components/projectList'
import Context from './context/Context'

function App () {
  const { previewProject } = useContext(Context)
  return (
    <>
      <Profile />
      { previewProject ? <PreviewProject id={previewProject} /> : <Centerbory />}
      <ProjectList />
    </>
  )
}
// "homepage": "https://kadraknb.github.io/kadraknb.github.io",
export default App
