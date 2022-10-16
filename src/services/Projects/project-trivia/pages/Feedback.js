import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { withRouter } from 'react-router-dom'

import Header from '../components/Header'
import FeedbackMessage from '../components/FeedbackMessage'

class Feedback extends React.Component {
  render () {
    const { store: { player: { assertions, score } }, router } = this.props
    return (
      <>
        <Header />
        <main className="gameContainer">
          <h1 className="title-trivia title-trivia-animated">Trivia</h1>
          <div className="">
            <p className="fs-4 d-inline me-2">Score:</p>
            <p data-testid="feedback-total-score" className="fs-4 d-inline">{score}</p>
          </div>
          <div className="">
            <p className="fs-4 d-inline me-2">Acertos:</p>
            <p data-testid="feedback-total-question" className="fs-4 d-inline">
              {assertions}
            </p>
          </div>
          <FeedbackMessage />
          <button
            type="button"
            onClick={ () => router('Login') }
            data-testid="btn-play-again"
            className="btn btn-light mx-1"
          >
            Play Again
          </button>
          <button
            type="button"
            onClick={ () => router('Ranking') }
            data-testid="btn-ranking"
            className="btn btn-light mx-1"
          >
            Ranking
          </button>
        </main>
      </>
    )
  }
}

Feedback.propTypes = {
  router: PropTypes.func.isRequired,
  store: PropTypes.shape({
    player: PropTypes.shape({
      score: PropTypes.number,
      assertions: PropTypes.number
    })
  }).isRequired
}

const mapStateToProps = (store) => ({ store })

export default connect(mapStateToProps)(Feedback)
