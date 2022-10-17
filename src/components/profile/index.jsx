import React from 'react'
import clipboardCopy from 'clipboard-copy'
import ListGroup from 'react-bootstrap/ListGroup'

import './profile.css'
import photoProfile from '../.././images/image (1).jpg'
import iconTec from '../../images'

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
            src={iconTec.tec.gitHub}
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
      <ul className="ulIconTec">
        <h6 className='text-b-b'>Tecnologias e Ferramentas</h6>
        {Object.entries(iconTec.tec).map((technology) => (
          <li key={technology[0]} className="liIconTec">
            <img src={technology[1]} alt="technology icon" className="imgTec" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile
