import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Context from '../../context/Context'

function ProjectDetail ({ project, close }) {
  // ajust info grupo,
  const { setPreviewProject } = useContext(Context)
  return (
    <div>
      <button type="button" onClick={ () => close('') } >X</button>
      <p>{project.name}</p>
      <img src={project.gif} alt="gif do projeto" width='250' />
      <p>{project.description}</p>
      <p>{`tecnologia foco ${project.tecFocus}`}</p>
      {project.projectGroup && <p>projeto em grupo</p>} {/* // ajust */}
      {project.projectGroup && <p>info grupo</p>} {/* // ajust */}
      {project.listTec.map((TecIcon, index) => (
        <img key={index} src={TecIcon} alt="icone da pecnologia" />
      ))}
      <button onClick={() => setPreviewProject(project.id)} >Rodar projeto</button>
      <button><a href={project.repository}>repositório</a></button>
    </div>
  )
}
ProjectDetail.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    gif: PropTypes.string,
    description: PropTypes.string,
    tecFocus: PropTypes.string,
    projectGroup: PropTypes.bool,
    id: PropTypes.string,
    repository: PropTypes.string,
    listTec: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  close: PropTypes.func.isRequired
}

export default ProjectDetail
