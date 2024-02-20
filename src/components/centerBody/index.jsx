import React, { useEffect, useState } from 'react';
import './centerBody.css';
import info from '../../../public/infoCenter';
import iconDownLined from '../../../public/images/icon-down-lined.png';

function CenterBody() {
  const [show, setShow] = useState(0);
  const [sobre, setSobre] = useState([]);

  useEffect(() => {
    formatBody();
  }, []);

  const formatBody = () => {
    const api = Object.values(info);
    const newBody = [
      [
        'Sobre Mim',
        api[0].split('\n').map((line, i) => (
          <text key={i}>
            {line}
            <br />
          </text>
        )),
      ],
      [
        'Conhecimento',
        api[1].descricoes.map((descricao, i) => (
          <text key={i}>
            <strong>{descricao}: </strong>
            {api[1].conteudo[i]}
            <br />
          </text>
        )),
      ],
      ['Desenvolvimento', api[2]],
    ];
    setSobre(newBody);
  };

  return (
    <div id="sobre_mim_main">
      <div id="box" className="sombra efeito_vidro">
          {sobre.map(([header, body], i) => (
            <div key={header}>
              <div className="box_header">
                <text className="header">{header}</text>
                <div className="header_button" onClick={() => setShow(i)}>
                  <img src={iconDownLined} alt="icon" />
                </div>
              </div>
              <div hidden={show !== i} className="body">
                {body}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CenterBody;
