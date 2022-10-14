import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'devicon'
import 'react-devicon'
import 'react-devicons'
import 'redux-devtools-extension'
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
      <div className="profile-centerBody-flex">
      <link rel="stylesheet" href="devicon.min.css"></link>

        <Profile />
        <div className="centerBody">
          {previewProject
            ? (
            <PreviewProject id={previewProject} />
              )
            : (
            <Centerbory />
              )}
        </div>
        <ProjectList />
      </div>
    </>
  )
}
// "homepage": "https://kadraknb.github.io/kadraknb.github.io",
export default App
