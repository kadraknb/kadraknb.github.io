import React from 'react'
import PropTypes from 'prop-types'

import Carregando from '../components/caregando'
import Header from '../components/Header'
import { getUser } from '../services/userAPI'

class Profile extends React.Component {
  constructor () {
    super()

    this.state = {
      user: '',
      loading: true,
      umaVez: true
    }
  }

  componentDidMount () {
    const { umaVez } = this.state
    if (umaVez) { this.pegarId() }
  }

  pegarId = async () => {
    const { user } = this.state
    if (!user) {
      const sim = await getUser()
      this.setState({ user: sim, loading: false, umaVez: false })
    }
  }

  render () {
    const { loading, user } = this.state
    const { setRouter } = this.props

    return (
      <div>
        <Header setRouter={setRouter} />
        {loading && <Carregando />}
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        <img src={user.image} alt={user.name} />
        <h5>{user.description}</h5>
        <button type="button" onClick={() => setRouter('ProfileEdit')}>
        Editar perfil
        </button>
      </div>
    )
  }
}

Profile.propTypes = {
  setRouter: PropTypes.func.isRequired
}

export default Profile
