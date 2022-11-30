import React from 'react'

class CheckOut extends React.Component {
  constructor () {
    super()
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: ''
    }
  }

  onInputChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  render () {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address
    } = this.state
    return (
      <div>
        <form>
          <label htmlFor="fullname">
            <input
              id="fullname"
              placeholder="Nome Completo"
              type="text"
              name="fullname"
              value={ fullname }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="cpf">
            <input
              id="cpf"
              placeholder="CPF"
              type="text"
              name="cpf"
              value={ cpf }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="phone">
            <input
              id="phone"
              placeholder="Telefone"
              type="text"
              name="phone"
              value={ phone }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="cep">
            <input
              id="cep"
              placeholder="CEP"
              type="text"
              name="cep"
              value={ cep }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="address">
            <input
              id="address"
              placeholder="Endereço"
              type="text"
              name="address"
              value={ address }
              onChange={ this.onInputChange }
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default CheckOut
