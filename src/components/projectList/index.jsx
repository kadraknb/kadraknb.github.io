import React, { useState } from 'react'

import ProjectDetail from './projectDetail'
import projectList from '../../services/getProjectList'

function ProjectList () {
  const [selectedProject, setSelectedProject] = useState('')
  const [show, setShow] = useState(false)

  return (
    <div className="listProject ">
      <h2 className="h2Title projListTitle sombra">projetos</h2>

      <ul className="ulProj">
        {projectList.map((project, index) => (
          <li
            key={index}
            className="liProj hover-proj efeito-vidro sombra "
            onClick={() => {
              setSelectedProject(index)
              setShow(!show)
            }}
          >
            <img
              src={project.icon}
              alt="project icon"
              className="imgLP"
            />
            <p className="projListTitle p-li-title">{project.name}<hr className="p-li-hr" /></p>
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
