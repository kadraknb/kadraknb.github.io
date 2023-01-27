import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import './centerBody.css'

function CenterBody () {
  return (
    <Accordion defaultActiveKey="0" className="sobreMim transition sombra efeito-vidro">
      <Accordion.Item eventKey="0" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className='headerFont'>Sobre mim</strong>
        </Accordion.Header>
        <Accordion.Body className='fontBody'>
          Ola, sou o Vagner. <br />
          Moro no Distrito Federal e estou em transição de carreira,<br/> de operado de maquina onde
          trabalhei por 5 anos, para desenvolvedor Full Stack.
           <br />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className='headerFont'>Possuo conhecimento em</strong>
        </Accordion.Header>
        <Accordion.Body className='fontBody'>
          <strong>Desenvolvimento Front-end</strong>:
          React: Router, Redux, Context API e Hooks; Testes com RTL e Jest, HTML e CSS. <br />
          <br />
          <strong>Desenvolvimento Back-end</strong>: NodeJS, módulo FS, MySQL, Sequelize, Docker ,Testes com Mocha, Chai e
          Sinon. <br />
          <br />
          <strong>Soft Skills</strong>: Metodologias ágeis: Scrum, Kanban. <br />
          <br />
          <strong>Tecnologias</strong>: Git, Unix e Bash, TypeScript, JavaScript ES6.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className='headerFont'>Conhecimento em desenvolvimento</strong>
        </Accordion.Header>
        <Accordion.Body className='fontBody'>Inglês, MongoDB e Python.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default CenterBody
