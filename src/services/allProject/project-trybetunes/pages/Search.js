import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import searchAlbumsAPI from '../services/searchAlbumsAPI'
import Carregando from '../components/caregando'

class Search extends React.Component {
  constructor () {
    super()

    this.state = {
      buttonOff: true,
      buscar: '',
      nomeBusca: '',
      artist: [],
      carregar: false
    }
  }

  change = (aa) => {
    const { value } = aa.target
    this.setState({
      buscar: value,
      buttonOff: value.length < 2
    })
  }

  submit = async (aa) => {
    const { buscar } = this.state
    aa.preventDefault()
    this.setState({ carregar: true })
    const artista = await searchAlbumsAPI(buscar)
    this.setState({
      artist: artista,
      nomeBusca: buscar,
      buscar: '',
      carregar: false
    })
  }

  render () {
    const { router, setAlbum } = this.props
    const { buscar, buttonOff, artist, nomeBusca, carregar } = this.state
    return (
      <div data-testid="page-search">
        <Header setRouter={router} />
        <form>
          {carregar
            ? (
            <Carregando />
              )
            : (
            <span>
              <input
                type="text"
                onChange={(aa) => this.change(aa)}
                value={buscar}
                data-testid="search-artist-input"
              />
              <button
                type="submit"
                onClick={(aa) => this.submit(aa)}
                disabled={buttonOff}
                data-testid="search-artist-button"
              >
                Pesquisar
              </button>
            </span>
              )}
        </form>
        {artist[0]
          ? (
          <>
            <span>{`Resultado de álbuns de: ${nomeBusca}`}</span>
            <ul>
              {artist.map((aa) => (
                <li key={aa.collectionId}>
                  <button
                    onClick={() => {
                      setAlbum(aa.collectionId)
                      router('Album')
                    }}
                  >
                    {aa.collectionName}
                  </button>
                </li>
              ))}
            </ul>
          </>
            )
          : (
              nomeBusca && <p>Nenhum álbum foi encontrado</p>
            )}
      </div>
    )
  }
}

Search.propTypes = {
  router: PropTypes.func.isRequired,
  setAlbum: PropTypes.func.isRequired
}

export default Search
