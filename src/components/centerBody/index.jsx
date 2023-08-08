import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './centerBody.css';
import info from '../../../public/infoCenter';

function CenterBody() {
  return (
    <Accordion
      defaultActiveKey="0"
      className="sobreMim transition sombra efeito-vidro"
    >
      <Accordion.Item eventKey="0" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className="headerFont">Sobre mim</strong>
        </Accordion.Header>
        <Accordion.Body className="fontBody">
          {info.sobre.split('\n').map((line, i) => (
            <div key={i}>
              {line}
              <br />
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className="headerFont">Conhecimentos</strong>
        </Accordion.Header>
        <Accordion.Body className="fontBody">
          {info.conhecimento.descricoes.map((descricao, i) => (
            <div key={i}>
              <strong>{descricao}: </strong>
              {info.conhecimento.conteudo[i]}
              <br />
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="buttonSM">
        <Accordion.Header className="headerSM">
          <strong className="headerFont">
            Desenvolvimento
          </strong>
        </Accordion.Header>
        <Accordion.Body className="fontBody">
        {info.desenvolvimento}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CenterBody;
