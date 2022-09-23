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
              data-testid="checkout-fullname"
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
              data-testid="checkout-email"
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
              data-testid="checkout-cpf"
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
              data-testid="checkout-phone"
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
              data-testid="checkout-cep"
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
              data-testid="checkout-address"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default CheckOut
