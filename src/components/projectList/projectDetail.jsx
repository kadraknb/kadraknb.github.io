import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import Context from '../../context/Context'

function ProjectDetail ({ project, show, setShow }) {
  // ajust info grupo,
  const { setPreviewProject } = useContext(Context)

  const handleClose = () => setShow(false)
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p>{project.name}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={project.gif} alt="gif do projeto" width="250" />
            <p>{project.description}</p>
            <p>{`tecnologia foco ${project.tecFocus}`}</p>
            {project.projectGroup && <p>projeto em grupo</p>} {/* // ajust */}
            {project.projectGroup && <p>info grupo</p>} {/* // ajust */}
            {project.listTec.map((TecIcon, index) => (
              <img key={index} src={TecIcon} alt="icone da pecnologia" />
            ))}
            <a className="button" onClick={() => setPreviewProject(project.id)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Rodar projeto
            </a>
            <a className="button" href={project.repository}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              repositório
            </a>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
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
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
}

export default ProjectDetail
