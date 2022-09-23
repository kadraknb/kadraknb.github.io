import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

class ShoppingCart extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.goLoading()
  }

  goLoading = () => {
    setTimeout(() => { this.setState({ loading: false }) }, 500)
  }

  onRemoveProductFromCart = (product) => {
    this.setState({ loading: true }, this.goLoading())
    const { updateProductCart } = this.props
    const callback = (productCart) => productCart.filter(({ id }) => id !== product.id)
    updateProductCart(callback)
  }

  onProductCountIncrease = (product) => {
    this.setState({ loading: true }, this.goLoading())

    console.log('s')

    const { updateProductCart } = this.props
    const callback = (productCart) => [...productCart, product]
    updateProductCart(callback)
  }

  onProductCountDecrease = ({ id }) => {
    this.setState({ loading: true }, this.goLoading())

    const {
      productCountControl,
      onRemoveUnitOfProduct,
      updateProductCart
    } = this.props
    if (productCountControl[id] === 1) return
    const callback = (productCart) => onRemoveUnitOfProduct(productCart, id)
    updateProductCart(callback)
  }

  render () {
    const {
      productCart,
      productCountControl,
      cartTotal
    } = this.props
    const { loading } = this.state
    console.log(loading)
    console.log(productCart)
    return (
      <div>
        {productCart.length && !loading
          ? (
          <div>
            <ul>
              {productCart.map((item) => {
                const { id, title, price, thumbnail } = item
                return (
                  <li key={id}>
                    <img src={thumbnail} alt={title} />
                    <p data-testid="shopping-cart-product-name">{title}</p>
                    <p>{price}</p>
                    <button
                      type="button"
                      onClick={() => this.onRemoveProductFromCart(item)}
                    >
                      X
                    </button>
                    <button
                      type="button"
                      onClick={() => this.onProductCountDecrease(item)}
                      data-testid="product-decrease-quantity"
                    >
                      -
                    </button>
                    <span data-testid="shopping-cart-product-quantity">
                      {productCountControl[id]}
                    </span>
                    <button
                      type="button"
                      onClick={() => this.onProductCountIncrease(item)}
                      data-testid="product-increase-quantity"
                    >
                      +
                    </button>
                  </li>
                )
              })}
            </ul>
            <p>
              Total da compra: R$
              {cartTotal}
            </p>
            <button type="button" onClick={ () => this.props.setRouter('checkOut')}>
              CheckOut
            </button>
          </div>
            )
          : (
          <h4 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h4>
            )}
      </div>
    )
  }
}

ShoppingCart.propTypes = {
  updateProductCart: PropTypes.func.isRequired,
  onRemoveUnitOfProduct: PropTypes.func.isRequired,
  productCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  productCountControl: PropTypes.shape({}).isRequired,
  cartTotal: PropTypes.number.isRequired,
  setRouter: PropTypes.func.isRequired
}

export default ShoppingCart
