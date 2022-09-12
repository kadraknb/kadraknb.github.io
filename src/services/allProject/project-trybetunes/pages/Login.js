import React from 'react'
import PropTypes from 'prop-types'

import Carregando from '../components/caregando'
import { createUser } from '../services/userAPI'

const N3 = 3
class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      id: '',
      buttonOff: true,
      loading: false,
      logado: false
    }
  }

  salvarId = (e) => {
    const { value } = e.target
    if (value.length >= N3) {
      this.setState({
        id: value,
        buttonOff: false
      })
    }
  }

  submitF = (e) => {
    e.preventDefault()
    const { router } = this.props
    const { id } = this.state
    this.setState({ loading: true }, async () => {
      await createUser({ name: id })
      router('Search')
    })
  }

  render () {
    const { buttonOff, loading } = this.state
    return (
      <div>
        { loading && <Carregando /> }
        <form>
          <input
            type="text"
            data-testid="login-name-input"
            onChange={ this.salvarId }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ buttonOff }
            onClick={ this.submitF }
          >
            Entrar
          </button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  router: PropTypes.func.isRequired
}

export default Login
