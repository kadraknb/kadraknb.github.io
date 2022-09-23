import React, { useState } from 'react'

import ProjectDetail from './projectDetail'
import projectList from '../../services/getProjectList'

function ProjectList () {
  const [selectedProject, setSelectedProject] = useState('')
  const [show, setShow] = useState(false)

  return (
    <>
      <p>lista de projeto</p>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <div
              onClick={() => {
                setSelectedProject(index)
                setShow(!show)
              }}
            >
              <img
                src={project.icon}
                width="100"
                height="100"
                alt="project icon"
              />
              <p>{project.name}</p>
            </div>
            {selectedProject === index && (
              <ProjectDetail show={show} setShow={setShow} project={project} />
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProjectList
