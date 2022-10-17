import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Context from '../../context/Context'
import './preP.css'

function PreviewProject () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { previewProject, setPreviewProject } = useContext(Context)
  const Project = () => {
    const Project = require('../../services/Projects')[previewProject]
    return <Project />
  }

  return (
    <div className='preP'>
    <button onClick={ () => setPreviewProject('')}>X</button>

    <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        className='preP maxH'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='preP-efeito-vidro'>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='efeito-vidro p-body'>
          <div className='project'>

        <Project />
          </div>
        </Modal.Body >
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  )
}

export default PreviewProject
