import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import MusicCard from '../components/MusicCard'
import getMusics from '../services/musicsAPI'
import Carregando from '../components/caregando'
import { addSong, removeSong } from '../services/favoriteSongsAPI'

class Album extends React.Component {
  constructor () {
    super()

    this.state = {
      infoAlbum: {},
      artistName: '',
      album: [],
      loading: true
    }
  }
  // 81752079

  componentDidMount () {
    this.fechGetinfoAlbums()
    this.favoriteSongs({}, false)
  }

  fechGetinfoAlbums = async () => {
    // const { id } = this.props
    const album = await getMusics(81752079)
    this.setState({
      infoAlbum: album[0],
      album,
      artistName: album[0].artistName,
      loading: false
    })
  }

  favoriteSongs = (aa, e) => {
    this.setState({ loading: true }, async () => {
      const listen = e ? addSong : removeSong
      await listen(aa)
      this.setState({ loading: false })
    })
  }

  render () {
    const { setRouter } = this.props
    const { infoAlbum, artistName, album, loading } = this.state
    return (
      <div>
        <Header setRouter={setRouter} />
        <div id='T_A'>
        <h1 className='T_album_nome'>{ artistName }</h1>
        <p >{ infoAlbum.collectionName }</p>
        { loading
          ? <Carregando />
          : (
          <MusicCard musicas={ album.slice(1) } funOnChange={ this.favoriteSongs } />
            ) }
        </div>
      </div>
    )
  }
}

Album.propTypes = {
  id: PropTypes.number,
  setRouter: PropTypes.func.isRequired
}

export default Album
