import React from 'react'
import clipboardCopy from 'clipboard-copy'
import ListGroup from 'react-bootstrap/ListGroup'

import photoProfile from '../.././images/image.jpg'
import iconTec from '../../images'
import './profile.css'
import IconsTec from './iconsTec'

function Profile () {
  return (
    <div className="profile efeito-vidro">
      <img src={photoProfile} alt="photoProfile" className="imgProfile" />
      <div>
        <h5 className="nomeP">Vagner Cardoso dos Santos</h5>
      </div>
      <ListGroup className="contatos">
        <ListGroup.Item>
          <img
            src={iconTec.gitHub}
            alt="technology icon"
            className="imgC"
          />
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
          <a
            className="Clink"
            onClick={() => clipboardCopy('vagner_cardoso_s@outlook.com')}
          >
            Copiar email
          </a>
        </ListGroup.Item>
      </ListGroup>
      <IconsTec />
    </div>
  )
}

export default Profile
