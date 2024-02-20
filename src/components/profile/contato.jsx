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

  const elementLink = (href, icon) => (
    <a target="_blank" href={href} className="Clink" rel="noreferrer">
      <img
        draggable="false"
        src={icon}
        alt="technology icon"
        className="img_contato"
      />
    </a>
  );
  return (
    <div id="contatos">
      {elementLink(
        'https://www.linkedin.com/in/vagner-cardos-santos/',
        iconTec.linkedin
      )}
      {elementLink('https://github.com/kadraknb', iconTec.gitHub)}
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
        <img
          draggable="false"
          src={iconTec.email}
          alt="technology icon"
          className="img_contato"
        />
      </a>
    </div>
  );
}

export default Contatos;
