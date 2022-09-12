import React, { useContext } from 'react'
import Context from '../../context/Context'

function PreviewProject () {
  const { previewProject, setPreviewProject } = useContext(Context)
  const Project = () => {
    const Project = require('../../services/allProject')[previewProject]
    return <Project />
  }

  return (
    <>
    <button onClick={ () => setPreviewProject('')}>X</button>
    <Project />
    </>
  )
}

export default PreviewProject
