import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

import Context from '../../context/Context'
import './projectList.css'

function ProjectDetail ({ project, show, setShow }) {
  // ajust info grupo,
  const { setPreviewProject, setModalShow } = useContext(Context)
  const {
    name,
    description,
    gif,
    tecFocus,
    projectGroup,
    id,
    repository,
    preview,
    habilidadeFocada
  } = project

  const handleClose = () => setShow(false)
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="modalPD">
        <Modal.Header className='modalHeader' closeButton>
          <Modal.Title className="modalTitle">
            <p>{name}</p>
          </Modal.Title>
        </Modal.Header>
        <hr className='Modal-hr'/>
        <Modal.Body>
          <img
            src={gif}
            alt="gif do projeto"
            width="250"
            className="modalImg"
          />
          <hr />
          <h6>{`Foco de aprendizado: ${tecFocus}`}</h6>
          {projectGroup && <h6>projeto em grupo</h6>}
          <hr />
          <h4>
            O que foi desenvolvido
            <h6 className="margin-description">{description}</h6>
          </h4>
          <hr />
          <h4>
            Habilidades desenvolvida
            <ul className="">
              {habilidadeFocada.map((habilidade, i) => (
                <li key={i}><h6>{habilidade}</h6></li>
              ))}
            </ul>
          </h4>
          <hr />
          <div className="divButton">
            {preview && (
              <a
                className="button modalButton"
                onClick={() => {
                  setPreviewProject(id)
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
            )}
            <span className="ModalSeparar"></span>
            <a
              target="_blank"
              className="button modalButton"
              href={repository}
              rel="noreferrer"
            >
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
    preview: PropTypes.bool,
    repository: PropTypes.string,
    habilidadeFocada: PropTypes.arrayOf(PropTypes.string),
    listTec: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
}

export default ProjectDetail
