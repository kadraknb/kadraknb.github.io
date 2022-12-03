import React, { useRef, useState } from 'react'
import clipboardCopy from 'clipboard-copy'
import ListGroup from 'react-bootstrap/ListGroup'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import iconTec from '../../images'

function Contatos () {
  const [show, setShow] = useState(false)
  const target = useRef(null)

  const fechaPop = () => {
    setShow(true)
    setTimeout(() => setShow(false), 3000)
  }
  return (
    <>
      <ListGroup className="contatos">
        <ListGroup.Item>
          <img src={iconTec.gitHub} alt="technology icon" className="imgC" />
          <a
            target="_blank"
            href="https://github.com/kadraknb"
            className="Clink"
            rel="noreferrer"
          >
            GitHub
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <img src={iconTec.linkedin} alt="technology icon" className="imgC" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vagner-cardos-santos/"
            className="Clink"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="emailCopy">
          <img src={iconTec.email} alt="technology icon" className="imgC" />
          <div id="Perf_box_email">
            <p className="Perf_email">vagner_cardoso_s</p>
            <p className="Perf_email">@outlook.com</p>
            <a
              className="Copying"
              ref={target}
              onClick={() => {
                clipboardCopy('vagner_cardoso_s@outlook.com')
                fechaPop()
              }}
            >
              Copiar email
            </a>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Email copiado!
                </Tooltip>
              )}
            </Overlay>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default Contatos
