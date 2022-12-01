import React, { useContext, useState } from 'react'
import Context from '../../context/Context'

import ProjectDetail from './projectDetail'
import projectList from '../../services/getProjectList'

function ProjectList () {
  const [selectedProject, setSelectedProject] = useState(1)
  const { showDetalhe, setShowDetalhe } = useContext(Context)

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
              !showDetalhe && setShowDetalhe(!showDetalhe)
            }}
          >
            <img
              src={project.icon}
              alt="project icon"
              className="imgLP"
            />
            <p className="projListTitle p-li-title">{project.name}<hr className="p-li-hr" /></p>
            {selectedProject === index && (
              <ProjectDetail setSelectedProject={setSelectedProject} project={project} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
