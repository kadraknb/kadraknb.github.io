import React from 'react'
import PropTypes from 'prop-types'
import { getProductItemByID } from '../services/api'

class ProductDetails extends React.Component {
  constructor () {
    super()
    this.state = {
      product: {},
      email: '',
      score: '1',
      comment: '',
      reviews: []
    }
  }

  componentDidMount () {
    this.fetchProductDetails()
    const reviews = JSON.parse(localStorage.getItem('reviews'))
    if (reviews) this.setState({ reviews })
  }

  saveReviewsOnStorage = () => {
    const { reviews } = this.state
    localStorage.setItem('reviews', JSON.stringify(reviews))
  }

  onInputChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  onSubmitReview = (event) => {
    event.preventDefault()
    const {
      email,
      score,
      comment,
      reviews
    } = this.state
    reviews.push({ email, score, comment })
    this.setState({
      email: '',
      score: '1',
      comment: '',
      reviews
    }, this.saveReviewsOnStorage)
  }

  fetchProductDetails = async () => {
    const { idProductDetails } = this.props
    const product = await getProductItemByID(idProductDetails)
    this.setState({ product })
  }

  render () {
    const {
      product: { title, price, thumbnail },
      email,
      score,
      comment,
      reviews,
      product
    } = this.state
    const {
      onAddProductToCart,
      shoppingCartButton
    } = this.props
    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{ title }</p>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
        </div>
        <button
          type="button"
          onClick={ () => onAddProductToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <form onSubmit={ this.onSubmitReview }>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
              data-testid="product-detail-email"
            />
          </label>
          <div>
            <label htmlFor="rating-1" data-testid="1-rating">
              <input
                id="rating-1"
                type="radio"
                name="score"
                value="1"
                onChange={ this.onInputChange }
                checked={ score === '1' }
              />
              1
            </label>
            <label htmlFor="rating-2" data-testid="2-rating">
              <input
                id="rating-2"
                type="radio"
                name="score"
                value="2"
                onChange={ this.onInputChange }
                checked={ score === '2' }
              />
              2
            </label>
            <label htmlFor="rating-3" data-testid="3-rating">
              <input
                id="rating-3"
                type="radio"
                name="score"
                value="3"
                onChange={ this.onInputChange }
                checked={ score === '3' }
              />
              3
            </label>
            <label htmlFor="rating-4" data-testid="4-rating">
              <input
                id="rating-4"
                type="radio"
                name="score"
                value="4"
                onChange={ this.onInputChange }
                checked={ score === '4' }
              />
              4
            </label>
            <label htmlFor="rating-5" data-testid="5-rating">
              <input
                id="rating-5"
                type="radio"
                name="score"
                value="5"
                onChange={ this.onInputChange }
                checked={ score === '5' }
              />
              5
            </label>
          </div>
          <label htmlFor="comment">
            Comentário
            <textarea
              id="comment"
              name="comment"
              placeholder="Digite seu comentário"
              onChange={ this.onInputChange }
              value={ comment }
              data-testid="product-detail-evaluation"
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
          >
            Avaliar
          </button>
        </form>
        { shoppingCartButton() }
        <div>
          <h4>Avaliações</h4>
          <ul>
            { reviews.map((review) => (
              <li key={ review.email }>
                <p>{ review.email }</p>
                <p>{ review.score }</p>
                <p>{ review.comment }</p>
              </li>
            )) }
          </ul>
        </div>
      </div>
    )
  }
}

ProductDetails.propTypes = {
  idProductDetails: PropTypes.string.isRequired,
  onAddProductToCart: PropTypes.func.isRequired,
  shoppingCartButton: PropTypes.func.isRequired
}

export default ProductDetails
