import React, { useState } from 'react'

import ProjectDetail from './projectDetail'
import projectList from '../../services/getProjectList'

function ProjectList () {
  const [selectedProject, setSelectedProject] = useState('')
  const [show, setShow] = useState(false)

  return (
    <div className='listProject efeito-vidro'>
      <h2 className='pLTitle'>projetos</h2>

      <ul className='ulProj'>
        {projectList.map((project, index) => (
          <li key={index} className='liProj' onClick={() => {
            setSelectedProject(index)
            setShow(!show)
          }}>

              <img
                src={project.icon}
                width="100"
                height="100"
                alt="project icon"
                className='imgLP'
              />
              <p className='pLTitle'>{project.name}</p>

            {selectedProject === index && (
              <ProjectDetail show={show} setShow={setShow} project={project} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
