import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import './centerBody.css'

function Centerbory () {
  return (
    <Accordion defaultActiveKey="0" className="sobreMim">
      <Accordion.Item eventKey="0" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className='headerFont'>Sobre mim</strong>
        </Accordion.Header>
        <Accordion.Body className='fontBody'>
          Ola, sou o Vagner. <br />
          Moro no Distrito Federal e estou em transição de carreira, onde
          trabalhei por 5 anos como operado de maquina para desenvolvedor Full Stack.
           <br /> Apaixonado por tecnologia, decidi mudar de
          carreira em busca de satisfação profissional que somente um trabalho na
          área que amo poderia me proporcionar.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className='headerFont'>Possuo conhecimento em</strong>
        </Accordion.Header>
        <Accordion.Body className='fontBody'>
          <strong>Desenvolvimento Front-end</strong>: React, Estado e Eventos,
          Componentes Controlados, Router, Testes com RTL e Jest, Redux com
          React, Context API e React Hooks, HTML e CSS. <br />
          <br />
          <strong>Desenvolvimento Back-end</strong>: NodeJS, módulo FS, SQL,
          Node.js com MySQL2, Docker e Docker-compose,Testes com Mocha, Chai,
          Sinon e Chai HTTP. <br />
          <br />
          <strong>Soft Skills</strong>: Metodologias ágeis e habilidades
          comportamentais. <br />
          <br />
          <strong>Tecnologias</strong>: Git e GitHub, Unix e Bash, TypeScript, JavaScript e
          JS ES6.
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

export default Centerbory
