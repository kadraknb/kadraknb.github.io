import React, { useContext, useEffect } from 'react'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Context from '../../context/Context'
import listProject from '../../services/getProjectList'
import mudarUrl from '../../utils/mudarUrl'
import './preP.css'

function PreviewProject () {
  const { previewProject, setPreviewProject, modalShow, setModalShow } =
    useContext(Context)

  useEffect(() => {
    if (!modalShow) setPreviewProject('')
  }, [modalShow])

  const handleClose = () => setModalShow(false)

  const Project = () => {
    const Project = require('../../Projects')[previewProject]
    return <Project />
  }

  const { name } = listProject.find((project) => project.id === previewProject)

  return (
    <div className="preP">
      <Modal
        className="preP maxH"
        show={modalShow}
        onHide={() => {
          mudarUrl()
          handleClose()
        }}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="preP-efeito-vidro">
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="efeito-vidro p-body">
          <div className="projectPreView">
            <Project />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default PreviewProject
