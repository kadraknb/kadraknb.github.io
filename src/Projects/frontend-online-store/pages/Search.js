import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
import { getProductsFromCategoryAndQuery } from '../services/api'

const styleLi = {
  backgroundColor: 'rgb(200, 0, 0)'
}

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      queryInput: '',
      categoryId: '',
      productsList: [],
      alreadyFetched: false
    }
  }

  fetchProducts = async () => {
    const { queryInput, categoryId } = this.state
    const { results } = await getProductsFromCategoryAndQuery(categoryId, queryInput)
    this.setState({
      productsList: results,
      alreadyFetched: true
    })
  }

  onQueryButtonClick = (event) => {
    event.preventDefault()
    this.fetchProducts()
  }

  onChangeInput = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  onCategorySelect = (categoryId) => {
    this.setState({ categoryId }, this.fetchProducts)
  }

  returnProductsList = (productsList, onAddProductToCart, alreadyFetched) => {
    if (productsList.length) {
      return (
        <ul>
          { productsList.map((product) => {
            const { id, title, price, thumbnail } = product
            return (
              <li
                key={id}
                style={styleLi}
              >
                <p>{title}</p>
                <p>{price}</p>
                <img src={thumbnail} alt={title} />
                <button
                  type="button"
                  onClick={() => {
                    onAddProductToCart(product)
                    this.props.setProductDetails(id)
                    this.props.router('shoppingCart')
                  }}
                >
                  Adicionar ao carrinho
                </button>
              </li>
            )
          }) }
        </ul>
      )
    }
    if (alreadyFetched) {
      return (<p>Nenhum produto foi encontrado</p>)
    }
  }

  render () {
    const {
      productsList,
      queryInput,
      alreadyFetched
    } = this.state
    const {
      shoppingCartButton,
      isLoading,
      onAddProductToCart
    } = this.props
    return (
      <>
        <Categories
          onCategorySelect={ this.onCategorySelect }
        />
        <hr />
        { shoppingCartButton() }
        <h4>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <form>
          <input
            type="text"
            name="queryInput"
            onChange={ this.onChangeInput }
            value={ queryInput }
          />
          <button
            type="submit"
            onClick={ this.onQueryButtonClick }
          >
            Buscar
          </button>
        </form>
        { !isLoading
          ? (
              this.returnProductsList(productsList, onAddProductToCart, alreadyFetched)
            )
          : (
          <p>Carregando...</p>
            ) }

      </>
    )
  }
}

Search.propTypes = {
  onAddProductToCart: PropTypes.func.isRequired,
  shoppingCartButton: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setProductDetails: PropTypes.func.isRequired,
  router: PropTypes.func.isRequired
}

export default Search
