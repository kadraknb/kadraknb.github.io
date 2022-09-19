import React, { useContext } from 'react'

import './App.css'
import Centerbory from './components/centerBody'
import PreviewProject from './components/previewProject'
import Profile from './components/profile'
import ProjectList from './components/projectList'
import Context from './context/Context'

function App () {
  const styleLi = {
    backgroundColor: 'rgb(200, 0, 0)'
  }
  const { previewProject } = useContext(Context)
  // console.log(previewProject)
  return (
    <>
      <Profile />
      { previewProject ? <PreviewProject id={previewProject} styleLi={styleLi} /> : <Centerbory />}
      <ProjectList />
    </>
  )
}
// "homepage": "https://kadraknb.github.io/kadraknb.github.io",
export default App
