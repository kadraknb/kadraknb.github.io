import React, { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Context from '../../context/Context';
import iconTec from '../../../public/tecs';

function IconsTec() {
  const { iconTecFocada, setIconTecFocada } = useContext(Context);

  return (
    <div id="iconsTec_mein">
      <h6 className="text-b-b">Ferramentas</h6>
      <ul className="ulIconTec ">
        {Object.values(iconTec).map((tec) => {
          const { nome, img } = tec;
          return (
            <OverlayTrigger
              key={tec.nome}
              overlay={
                <Tooltip>
                  <strong>{nome}</strong>
                </Tooltip>
              }
            >
              <li
                key={nome}
                className="liIconTec"
                onClick={() => setIconTecFocada(nome)}
              >
                <img
                  src={img}
                  alt="technology icon"
                  className={` tamanho_img_tec ${
                    iconTecFocada === nome ? 'imgTec_foco' : 'imgTec'
                  } `}
                />
                <div className="glass_iconTec tamanho_img_tec" />
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  );
}

export default IconsTec;
