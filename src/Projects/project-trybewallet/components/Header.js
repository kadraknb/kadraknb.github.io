import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Header extends Component {
  // constructor() {
  // super();

  // this.state = {
  //   total: 0,
  // };
  // }

  render () {
    const { store } = this.props
    // const { total } = this.state;
    return (
      <div>
        <h4>{store.user.email}</h4>
        <div>
          {store.wallet.totalBRL.toFixed(2)}
        </div>
        <p>BRL</p>
      </div>
    )
  }
}

Header.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    wallet: PropTypes.shape({
      totalBRL: PropTypes.number
    })
  }).isRequired
}

const mapStateToProps = (state) => ({ store: state })

export default connect(mapStateToProps)(Header)
