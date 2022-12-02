import React, { useState } from 'react'
import clipboardCopy from 'clipboard-copy'
import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'

import './profile.css'
import photoProfile from '../.././images/image (1).jpg'
import iconTec from '../../images'

function Profile () {
  const [exibiCard, setExibiCard] = useState(100)
  // const cardIconTec = (technology) => (
  //   <OverlayTrigger
  //   trigger="click"
  //   key={technology}
  //   placement={'right'}
  //   overlay={
  //     <Popover id={`popover-positioned-${technology}`}>
  //       <Popover.Header as="h3">{`Popover ${technology}`}</Popover.Header>
  //       <Popover.Body>
  //         <strong>Holy guacamole!</strong> Check this info.
  //       </Popover.Body>
  //     </Popover>
  //   }
  // >
  //   <ul className="ulIconTec ">
  //     <li key={technology[0]} className="liIconTec">
  //       <img
  //         src={technology[1]}
  //         alt="technology icon"
  //         className="imgTec"
  //       />
  //     </li>
  //   </ul>
  // </OverlayTrigger>
  // )
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
      <ul className="ulIconTec ">
        <h6 className="text-b-b">Tecnologias e Ferramentas</h6>
        {Object.entries(iconTec.tec).map((technology, ii) => (
          <OverlayTrigger
            key={technology[0]}
            placement="right"
            overlay={
              exibiCard === ii
                ? (
                <Popover id={`popover-positioned-${technology[0]}`}>
                  <Popover.Header as="h3">{technology[0]}</Popover.Header>
                  <Popover.Body>
                    <strong>Holy guacamole!</strong> Check this info.
                  </Popover.Body>
                </Popover>
                  )
                : (
                <Tooltip id={`tooltip-${technology[0]}`}>
                  Click para mais informação sobre minha experiência com{' '}
                  <strong>{technology[0]}</strong>.
                </Tooltip>
                  )
            }
          >
            <li key={technology[0]} className="liIconTec">
              <img
                onClick={() => {
                  setExibiCard(ii)
                }}
                src={technology[1]}
                alt="technology icon"
                className="imgTec"
              />
            </li>
          </OverlayTrigger>
        ))}
      </ul>
    </div>
  )
}

export default Profile
