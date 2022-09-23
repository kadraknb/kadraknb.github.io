import React, { useState } from 'react'
import Search from './pages/Search'
import ShoppingCart from './pages/ShoppingCart'
import ProductDetails from './pages/ProductDetails'
import CheckOut from './pages/CheckOut'

function FrontendOnlineStore () {
  const [router, setRouter] = useState('search')
  const [productDetails, setProductDetails] = useState('')
  const [state, setState] = useState({
    fullProductCart: [],
    productCart: [],
    productCountControl: {},
    cartTotal: 0,
    isLoading: false
  })

  // useEffect(() => {
  //   const fullProductCart = JSON.parse(localStorage.getItem('fullProductCart'))
  //   const productCart = JSON.parse(localStorage.getItem('productCart'))
  //   const productCountControl = JSON.parse(localStorage.getItem('productCountControl'))
  //   if (fullProductCart !== null) {
  //     setState({
  //       ...state,
  //       fullProductCart,
  //       productCart,
  //       productCountControl
  //     })
  //   }
  // }, [])

  const parseProductCart = (fullProductCart) => {
    let cartTotal = 0
    const productCountControl = {}
    localStorage.setItem('fullProductCart', JSON.stringify(fullProductCart))
    const productCart = fullProductCart.reduce((products, product) => {
      cartTotal += product.price
      cartTotal = Number(cartTotal.toFixed(2))
      if (!products.some(({ id }) => id === product.id)) {
        productCountControl[product.id] = 1
        return [...products, product]
      }
      productCountControl[product.id] += 1
      return products
    }, [])
    localStorage.setItem('productCountControl', JSON.stringify(productCountControl))
    localStorage.setItem('productCart', JSON.stringify(productCart))
    return { fullProductCart, productCart, productCountControl, cartTotal }
  }

  // const getCartFromStorage = () => {
  //   const storedProducts = localStorage.getItem('productCart')
  //   return storedProducts ? JSON.parse(storedProducts) : []
  // }

  const loadingToggler = () => setState({ ...state, isLoading: !state.isLoading })

  const updateProductCart = (callback) => {
    loadingToggler()
    const { fullProductCart } = state
    const newState = parseProductCart(callback(fullProductCart))
    setState({ ...state, ...newState })
    loadingToggler()
  }

  const onAddProductToCart = (product) => {
    console.log(product)
    updateProductCart((cart) => [...cart, product])
  }

  const onRemoveUnitOfProduct = (productCart, id) => {
    let foundFirstProduct = false
    const cartIndex = productCart.findIndex((product) => {
      if (product.id === id) {
        if (foundFirstProduct) {
          return true
        }
        foundFirstProduct = true
      }
      return false
    })
    productCart.splice(cartIndex, 1)
    return productCart
  }

  const shoppingCartButton = () => {
    const { productCountControl } = state
    const productCount = Object.values(productCountControl)
    const quantidade = productCount[0] ? productCount.reduce((aa, bb) => (aa + bb)) : 0
    return (
        <button type="button" onClick={ () => setRouter('shoppingCart')}>
          Meu carrinho
          {productCount[0] && (
            <b data-testid="shopping-cart-size">
              {` ${quantidade}`}
            </b>
          )}
        </button>
    )
  }

  const {
    productCart,
    productCountControl,
    cartTotal,
    isLoading
  } = state

  const routers = {
    search: (
      <Search
        router={setRouter}
        setProductDetails={setProductDetails}
        isLoading={state.isLoading}
        onAddProductToCart={onAddProductToCart}
        shoppingCartButton={shoppingCartButton}
        updateProductCart={updateProductCart}
      />
    ),
    shoppingCart: (
      <ShoppingCart
        setRouter={setRouter}
        isLoading={isLoading}
        productCart={productCart}
        productCountControl={productCountControl}
        cartTotal={cartTotal}
        updateProductCart={updateProductCart}
        onRemoveUnitOfProduct={onRemoveUnitOfProduct}
      />
    ),
    checkOut: <CheckOut setRouter={setRouter} />,
    productDetails: (
      <ProductDetails
        idProductDetails={productDetails}
        setRouter={setRouter}
        isLoading={isLoading}
        onAddProductToCart={onAddProductToCart}
        shoppingCartButton={shoppingCartButton}
        updateProductCart={updateProductCart}
      />
    )
  }
  return (
    <>{routers[router]}</>
  )
}

export default FrontendOnlineStore
