import React from 'react'
import PropTypes from 'prop-types'

import Carregando from './caregando'
import { getUser } from '../services/userAPI'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      carregando: true
    }
  }

  componentDidMount () {
    this.nome()
  }

  nome = async () => {
    const { name } = await getUser()
    this.setState({ name, carregando: false })
  }

  render () {
    const { setRouter } = this.props
    const { name, carregando } = this.state
    return (
      <header >
        {carregando
          ? (
          <Carregando />
            )
          : (
          <div>
            <p>{name}</p>
            <aside>
              <button onClick={ () => setRouter('Search')}>search</button>
              <button onClick={ () => setRouter('Favorites')}>Favorites</button>
              <button onClick={ () => setRouter('Profile')}>Profile</button>
            </aside>
          </div>
            )}
      </header>

    )
  }
}

Header.propTypes = {
  setRouter: PropTypes.func.isRequired
}

export default Header
