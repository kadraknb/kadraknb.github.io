import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Context from '../../context/Context'
import './projectList.css'

function ProjectDetail ({ project }) {
  const { setPreviewProject, setModalShow, showDetalhe, setShowDetalhe } =
    useContext(Context)

  const handleClose = () => setShowDetalhe(false)

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

  return (
    <div>
      <Modal
        keyboard
        enforceFocus
        animation
        show={showDetalhe}
        className="modalPD"
        backdrop="static"
      >
        <Modal.Header
          id="modalHeader"
          closeLabel="asd"
          onHide={handleClose}
          closeButton
        >
          <Modal.Title id="modalTitle">
            <p>{name}</p>
          </Modal.Title>
        </Modal.Header>
        <hr className="Modal-hr" />
        <Modal.Body>
          <img
            src={gif}
            alt="gif do projeto"
            width="250"
            className="modalImg"
          />
          <hr />
          {tecFocus && <h6>{`Aprendizado: ${tecFocus}`}</h6> }
          {projectGroup && <h6>projeto em grupo</h6>}
          <hr />
          <div id="ProjDet_tabs">
            <Tabs
              defaultActiveKey="desenvolvido"
              id="ProjDet_tabs"
              unmountOnExit
              className="mb-3"
              fill
            >
              <Tab
                className="ProjDet_tab"
                eventKey="desenvolvido"
                title="desenvolvido"
                onClick={(e) => e.preventDefault()}
              >
                {description}
              </Tab>
              <Tab
                className="ProjDet_tab"
                eventKey="Habilidades"
                title="Habilidades"
              >
                <ul>
                  {habilidadeFocada.map((habilidade, i) => (
                    <li key={i}>
                      <h6>{habilidade}</h6>
                    </li>
                  ))}
                </ul>
              </Tab>
            </Tabs>
          </div>
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
  // showP: PropTypes.bool.isRequired,
  setSelectedProject: PropTypes.func.isRequired
}

export default ProjectDetail
