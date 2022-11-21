import React, { useContext, useEffect } from 'react'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Context from '../../context/Context'
import './preP.css'

function PreviewProject () {
  const { previewProject, setPreviewProject, modalShow, setModalShow } = useContext(Context)

  useEffect(() => {
    if (!modalShow) setPreviewProject('')
  }, [modalShow])

  const handleClose = () => setModalShow(false)
  const Project = () => {
    const Project = require('../../services/Projects')[previewProject]
    return <Project />
  }

  return (
    <div className='preP'>
      <Modal
        className='preP maxH'
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='preP-efeito-vidro'>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className='efeito-vidro p-body'>
          <div className='projectPreView'>

        <Project />
          </div>
        </Modal.Body >
      </Modal>
    </div>
  )
}

export default PreviewProject
