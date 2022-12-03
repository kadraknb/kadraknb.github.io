import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Centerbory from './components/centerBody'
import PreviewProject from './components/previewProject'
import Profile from './components/profile'
import ProjectList from './components/projectList'
import Context from './context/Context'

function App () {
  const { previewProject } = useContext(Context)
  return (
    <div id='Body_All'>
      <div className="profile-centerBody-flex">
        {!previewProject && <Profile /> }
        <div className="centerBody">
          {previewProject
            ? (
            <PreviewProject id={previewProject} />
              )
            : (
            <Centerbory />
              )}
        </div>
        {!previewProject && <ProjectList /> }
      </div>
    </div>
  )
}
// "homepage": "https://kadraknb.github.io/kadraknb.github.io",
export default App
