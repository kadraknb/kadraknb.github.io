import React from 'react'
import Propstypes from 'prop-types'
import { getFavoriteSongs } from '../services/favoriteSongsAPI'
import Carregando from './caregando'
import './components.css'
import icons from '../../../images/iconT'

class MusicCard extends React.Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      favoritos: [],
      playAtual: 0,
      onPlay: false
    }
  }

  componentDidMount () {
    this.getFavorite()
  }

  getFavorite = () => {
    const { musicas } = this.props
    this.setState({ loading: true }, async () => {
      const addFavori = await getFavoriteSongs()
      const favoritos = musicas.map((bb) =>
        addFavori.some((cc) => cc.trackId === bb.trackId)
      )
      this.setState({ favoritos, loading: false })
    })
  }

  render () {
    const { loading, favoritos, playAtual, onPlay } = this.state
    const { musicas, funOnChange } = this.props
    return (
      <>
        {loading
          ? (<Carregando />)
          : (
          <>
            <div>
              <p>{musicas[playAtual].trackName}</p>
              <audio src={musicas[playAtual].previewUrl} controls  onPlay={onPlay}>
                {/* <track kind="captions" /> */}
              </audio>
              <label htmlFor={musicas[playAtual].collectionId}>
                Favorita
                <input
                  id={musicas[playAtual].collectionId}
                  type="checkbox"
                  checked={favoritos[playAtual]}
                  onChange={(e) => {
                    const { checked } = e.target
                    funOnChange(musicas[playAtual], checked)
                  }}
                />
              </label>
            </div>
            <hr />
            <div id="espaco"></div>
            <div id="T_box_img">
              <img id="T_img_musi" src={musicas[playAtual].artworkUrl100} />
            </div>
            <div id="T_play" className="T_box">
              <div id='T_box_icon'>
                {/* <img src={icons.play} /> */}
                <img className='T_icon ' src={icons.addF} />
                <img className='T_icon ' src={icons.prev} />
                <img className='T_icon ' src={icons.next} />
                <img onClick={() => this.setState({ onPlay: !onPlay })} id='T_Icon_play' src={icons.play} />
              </div>
            </div>
            <ul>
              {/* {musicas.map((aa, ii) => (
                <li key={aa.trackId}>
                  <p>{aa.trackName}</p>
                  <audio src={aa.previewUrl} controls>
                    <track kind="captions" />
                  </audio>
                  <label htmlFor={aa.collectionId}>
                    Favorita
                    <input
                      id={aa.collectionId}
                      type="checkbox"
                      checked={favoritos[ii]}
                      onChange={(e) => {
                        const { checked } = e.target;
                        funOnChange(aa, checked);
                      }}
                    />
                  </label>
                </li>
              ))} */}
            </ul>
          </>
            )}
      </>
    )
  }
}

MusicCard.propTypes = {
  musicas: Propstypes.arrayOf(Propstypes.object).isRequired,
  funOnChange: Propstypes.func.isRequired
}

export default MusicCard
