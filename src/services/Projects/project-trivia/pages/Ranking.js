import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { playerPerformance } from '../redux/actions'

class Ranking extends React.Component {
  constructor () {
    super()
    this.state = {
      rankings: []
    }
  }

  componentDidMount () {
    this.setState({ rankings: JSON.parse(localStorage.getItem('ranking')) })
  }

  sortRankings = () => {
    const { rankings } = this.state
    rankings.sort((a, b) => b[2] - a[2])
    return rankings.map((rank, ii) => (
      <li key={ ii } className="inlineCenter my-2">
        <div>
          <h4 className="fs-4 d-inline me-3">{ii + 1}</h4>
          <img src={ rank[0] } alt="foto do usuario" className="imgUser" />
        </div>
        <h4 data-testid={ `player-name-${ii}` } className="fs-4 d-inline">{rank[1]}</h4>
        <h3 data-testid={ `player-score-${ii}` } className="fs-4 d-inline">{rank[2]}</h3>
      </li>
    ))
  }

  render () {
    const { router } = this.props
    return (
      <div className="rankingContainer">
        <h1 data-testid="ranking-title" className="emphasisText">Ranking</h1>
        <ol className="my-5 p-0">
          { this.sortRankings() }
        </ol>
        <button
          type="button"
          data-testid="btn-go-home"
          className="btn btn-light"
          onClick={ () => router('Login') }
        >
          Go Home
        </button>
      </div>
    )
  }
}

Ranking.propTypes = {
  store: PropTypes.shape({
    game: PropTypes.arrayOf(PropTypes.shape())
  }).isRequired
}

const mapStateToProps = (store) => ({ store })

const mapDispatchToProps = (dispatch) => ({
  getplayerPerformance: (performanceData) => dispatch(playerPerformance(performanceData))
})

Ranking.propTypes = {
  router: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)
