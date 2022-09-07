import React, { useEffect } from 'react'
import './pixels-art.css'

function PixelsArt () {
  useEffect(() => {
    const script = require('./script').default
    script()
  }, [])

  return (
    <div id='body'>
      <h1 className="centerFlex" id="title">Paleta de Cores</h1>
      <div className="centerFlex" id="color-palette">
        <div className="color cor1 selected"></div>
        <div className="color cor2"></div>
        <div className="color cor3"></div>
        <div className="color cor4"></div>
        <input id="corrgb" className="color " type="color" />
      </div>
      <div className="center">
        <label className="centerFlex" >
          <p>quantidade de pixel:</p>
          <input type="number" id="board-size" min="1" max="100" value="" />
          <button id="generate-board" >Aplicar</button>
        </label>
      </div>
      <div className="center" id="pixel-board">
        <button className="centerFlex" id="clear-board" >RESET</button>
        <div id="pixel-board2"></div>
      </div>
    </div>
  )
}

export default PixelsArt
