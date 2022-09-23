import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { loginAction } from '../redux/actions'

class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      disabled: true
    }
  }

  disabled = () => {
    const N5 = 5
    const { email, password } = this.state
    const valido = /\S+@\S+\.\S+/.test(email) && password.length > N5
    // !
    this.setState({ disabled: !valido })
  }

  change = (aa) => {
    const { value, type } = aa.target
    this.setState({ [type]: value }, () => this.disabled())
  }

  submit = () => {
    const { email } = this.state
    const { router, dispatch } = this.props
    dispatch(loginAction(email))
    router('Wallet')
  }

  render () {
    const { email, password } = this.state
    return (
      <form>
        <input
          type="email"
          autoComplete="email"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => this.change(e) }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ (e) => this.change(e) }
        />
        <button type="submit" disabled={ false } onClick={ this.submit }>
          Entrar
        </button>
      </form>
    )
  }
}

Login.propTypes = {
  router: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(Login)
