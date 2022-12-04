import React, { useContext, useEffect, useState } from 'react'

import './body.css'
import CenterBody from '../centerBody'
import PreviewProject from '../previewProject'
import Profile from '../profile'
import ProjectList from '../projectList'
import Context from '../../context/Context'

function Body (rotaProjeto) {
  const [load, setLoad] = useState(false)

  const { previewProject, showDetalhe, setModalShow, setPreviewProject } =
    useContext(Context)

  useEffect(() => {
    if (rotaProjeto) {
      const pathname = global.location.pathname.slice(1)
      setModalShow(true)
      setPreviewProject(pathname)
      setTimeout(() => setLoad(true), 1)
    }
  }, [])

  return (
    <main id="Body_All">
      {Boolean(!rotaProjeto || load) && (
        <>
          <aside
            className="transition"
            id={previewProject ? 'ocultarProfile' : ''}
          >
            <Profile />
          </aside>
            <section
              className="transition centerBody"
              id={previewProject || showDetalhe ? 'ocultarSobreMim' : ''}
            >
              <CenterBody />
            </section>
          <aside
            className="transition"
            id={previewProject ? 'ocultarProjectList' : ''}
          >
            <ProjectList />
          </aside>
        </>
      )}
      {previewProject && <PreviewProject id={previewProject} />}
    </main>
  )
}

export default Body
