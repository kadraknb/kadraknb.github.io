import React, { useRef, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import iconTec from '../../images';

function Contatos() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const executarPop = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  const exibirIcone = (icone) => (
    <>
      <img src={icone} alt="technology icon" className="img_contato" />
      <div className="gless_contat"></div>
    </>
  );
  return (
    <div id='contatos_main'>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/vagner-cardos-santos/"
        className="Clink"
        rel="noreferrer"
      >
        {exibirIcone(iconTec.linkedin)}
      </a>
      <a
        target="_blank"
        href="https://github.com/kadraknb"
        className="Clink"
        rel="noreferrer"
      >
        {exibirIcone(iconTec.gitHub)}
      </a>
      <a
        className="Clink"
        ref={target}
        onClick={() => {
          clipboardCopy('vagner_cardoso_s@outlook.com');
          executarPop();
        }}
      >
        <Overlay target={target.current} show={show}>
          {(props) => <Tooltip {...props}>Email copiado!</Tooltip>}
        </Overlay>
        {exibirIcone(iconTec.email)}
      </a>
    </div>
  );
}

export default Contatos;
