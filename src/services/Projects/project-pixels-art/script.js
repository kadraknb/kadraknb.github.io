function script () {
  document.querySelector('#corrgb').style.backgroundColor = document.getElementById('corrgb').value
  document.addEventListener('mousemove', () => {
    document.querySelector('#corrgb').style.backgroundColor = document.getElementById('corrgb').value
  })
  const ID_BOARD = '#pixel-board2'

  function randomColorPalette () {
    for (let i3 = 0; i3 < 4; i3 += 1) {
      const nr1 = Math.floor(Math.random() * 255)
      const nr2 = Math.floor(Math.random() * 255)
      const nr3 = Math.floor(Math.random() * 255)
      const nr22 = `rgb(${nr1},${nr2},${nr3})`
      document.getElementsByClassName('color')[i3].style.backgroundColor = nr22
    }
  }
  randomColorPalette()

  function createPixelColumn (id, bb) {
    document
      .querySelectorAll('.colunaPixel')
      .forEach((coluna) => { const col = coluna; col.outerHTML = '' })
    for (let i3 = 0; i3 < bb; i3 += 1) {
      document
        .querySelector(id)
        .appendChild(document.createElement('div')).className = 'colunaPixel'
    }
    for (let i = 0; i < bb; i += 1) {
      for (let i2 = 0; i2 < bb; i2 += 1) {
        document
          .querySelectorAll('.colunaPixel')[i2]
          .appendChild(document.createElement('div')).className = 'pixel'
      }
    }
  }
  createPixelColumn(ID_BOARD, 25)

  function pintar () {
    const tabeladecor = document.querySelectorAll('.pixel')
    tabeladecor.forEach((pixel) => {
      pixel.addEventListener('click', (event) => {
        const cor = document.querySelector('.selected').style.backgroundColor
        const localPinta = event.target
        localPinta.style.backgroundColor = cor
      })
    })
  }
  pintar()

  function createPixelColumnPlus () {
    let xy = document.getElementById('board-size').value
    const valorAterado = document.getElementById('board-size').value
    if (!valorAterado) {
      alert('Board inválido!')
      return
    }
    if (valorAterado < 5) {
      xy = 5
    }
    if (valorAterado > 100) {
      xy = 100
    }
    document
      .querySelectorAll('.colunaPixel')
      .forEach((coluna) => { const col = coluna; col.outerHTML = '' })
    createPixelColumn('#pixel-board', xy)
  }
  document.getElementById('generate-board').addEventListener('click', () => {
    createPixelColumnPlus()
    pintar()
  })

  // selecionar cor
  const colorPalette = document.querySelector('#color-palette')
  colorPalette.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected')
    event.target.classList.add('selected')
    document.querySelector('#pixel-board')
      .style.backgroundColor = document.querySelector('.selected').style.backgroundColor
  })

  const limpar = document.querySelector('#clear-board')
  limpar.addEventListener('click', () => {
    const tabeladecor = document.querySelectorAll('.pixel')
    tabeladecor.forEach((pixel) => {
      pixel.style.backgroundColor = 'rgb(255,255,255)'
    })
  })
}

export default script
