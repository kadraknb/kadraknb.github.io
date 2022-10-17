import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import Context from '../../context/Context'
import './projectList.css'

function ProjectDetail ({ project, show, setShow }) {
  // ajust info grupo,
  const { setPreviewProject, setModalShow } = useContext(Context)

  const handleClose = () => setShow(false)
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="modalPD">
        <Modal.Header closeButton>
          <Modal.Title className='modalTitle'>
            <p>{project.name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={project.gif} alt="gif do projeto" width="250" className='modalImg'/>
          <p className='efeito-vidro'>{project.description}</p>
          <p>{`tecnologia foco ${project.tecFocus}`}</p>
          {project.projectGroup && <p>projeto em grupo</p>}
          <div className='divModalImgTec '>
          {project.listTec.map((TecIcon, index) => (
            <img key={index} src={TecIcon} alt="icone da pecnologia" className='imgTec modalImgTec'/>
          ))}
          </div>
          <div className="divButton">
            <a
              className="button"
              onClick={() => {
                setPreviewProject(project.id)
                setModalShow(true)
                handleClose()
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Rodar projeto
            </a>
            <span className='ModalSeparar'></span>
            <a target='_blank' className="button" href={project.repository} rel="noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              repositório
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
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
