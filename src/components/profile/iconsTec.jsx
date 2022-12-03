import React, { useContext } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'

// import './profile.css'
import Context from '../../context/Context'
import iconTec from '../../services/getTec'

function IconsTec () {
  const { iconTecFocada, setIconTecFocada } = useContext(Context)

  return (
    <ul className="ulIconTec ">
      <h6 className="text-b-b">Tecnologias e Ferramentas</h6>
      {Object.values(iconTec).map((tec, ii) => {
        const { nome, descricao, img } = tec
        return (
          <OverlayTrigger
            key={tec + ii}
            placement="right"
            overlay={
              iconTecFocada === nome
                ? (
                <Popover id={`popover-positioned-${nome}`}>
                  <Popover.Header as="h3">{nome}</Popover.Header>
                  <Popover.Body>
                    <strong>{descricao}</strong>
                  </Popover.Body>
                </Popover>
                  )
                : (
                <Tooltip id={`tooltip-${nome}`}>
                  Click para mais informação sobre minha experiência com{' '}
                  <strong>{nome}</strong>.
                </Tooltip>
                  )
            }
          >
            <li key={nome} className="liIconTec">
              <img
                onClick={() => {
                  setIconTecFocada(nome)
                }}
                src={img}
                alt="technology icon"
                className={`imgTec ${
                  iconTecFocada === nome && 'Perfil_imgTec_brilho'
                } `}
              />
            </li>
          </OverlayTrigger>
        )
      })}
    </ul>
  )
}

export default IconsTec
