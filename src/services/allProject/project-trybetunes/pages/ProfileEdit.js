import React from 'react'
import PropTypes from 'prop-types'

import Carregando from '../components/caregando'
import Header from '../components/Header'
import { getUser, updateUser } from '../services/userAPI'

const N4 = 4

class ProfileEdit extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      description: '',
      image: '',
      loading: true,
      disabled: true,
      sub: false
    }
  }

  componentDidMount () {
    this.infoUser()
  }

  infoUser = async () => {
    const { name, email, description, image } = await getUser()
    this.setState({ name, email, description, image, loading: false }, () => {
      this.disabled()
    })
  }

  disabled = () => {
    const { state } = this
    const test = !Object.values(state).slice(0, N4).every((aa) => aa)
    this.setState({ disabled: test })
  }

  submit = async () => {
    const { setRouter } = this.props
    const { name, email, description, image } = this.state
    await updateUser({ name, email, description, image })
    setRouter('Profile')
  }

  change = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value }, () => this.disabled())
  }

  render () {
    const { name, email, description, image, disabled, loading, sub } = this.state
    const { setRouter } = this.props

    return (
      <div data-testid="page-profile-edit">
        <Header setRouter={setRouter} />
        {loading
          ? (
          <Carregando />
            )
          : (
          <form>
            <input
              data-testid="edit-input-name"
              placeholder="nome"
              type="text"
              value={name}
              name="name"
              onChange={(e) => this.change(e)}
            />
            <input
              data-testid="edit-input-email"
              placeholder="email"
              type="email"
              value={email}
              name="email"
              onChange={(e) => this.change(e)}
              required
            />
            <input
              data-testid="edit-input-description"
              placeholder="description"
              type="text"
              value={description}
              name="description"
              onChange={(e) => this.change(e)}
            />
            <input
              data-testid="edit-input-image"
              placeholder="UrlImage"
              type="text"
              value={image}
              name="image"
              onChange={(e) => this.change(e)}
            />
            <button
              data-testid="edit-button-save"
              type="submit"
              disabled={disabled}
              onClick={() => this.submit()}
            >
              {sub ? <Carregando /> : 'Salvar'}
            </button>
          </form>
            )}
      </div>
    )
  }
}

ProfileEdit.propTypes = {
  setRouter: PropTypes.func.isRequired
}

export default ProfileEdit
