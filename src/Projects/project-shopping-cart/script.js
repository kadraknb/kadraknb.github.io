const { fetchProducts } = require('./helpers/fetchProducts')
const getSavedCartItems = require('./helpers/getSavedCartItems')
const saveCartItems = require('./helpers/saveCartItems')
const { fetchItem } = require('./helpers/fetchItem')

const mainList = document.querySelector('section.items')
const cartItemsElements = document.querySelector('.cart__items')
const totalPrice = document.querySelector('.total-price')

// Criando função que adiciona texto "carregando" na página: //
function addLoading () {
  if (mainList.innerHTML === '') {
    const loading = document.createElement('p')
    loading.className = 'loading'
    loading.innerText = 'carregando...'
    mainList.append(loading)
  }
}
addLoading()

// Função que remove o "carreganddo...": //
function removeLoading () {
  const loading = document.querySelector('.loading')
  if (mainList.innerHTML !== loading && loading) {
    loading.outerHTML = null
  }
}

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img')
  img.className = 'item__image'
  img.src = imageSource
  return img
}

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element)
  e.className = className
  e.innerText = innerText
  return e
}

// Criando função que contrói lista de produtos (computadores) e suas características: //
async function listOfProducts () {
  const list = await fetchProducts('computador')
  return list.results.map((product) => {
    const { id, title, thumbnail, price } = product
    return { sku: id, name: title, image: thumbnail, salePrice: price }
  })
}

// Função que cria os elementos para inserção dos items na Lista Master no HTML: //
const createProductItemElement = ({ sku, name, image, salePrice }) => {
  const section = document.createElement('section')

  section.className = 'item'
  section.appendChild(createCustomElement('span', 'item__sku', sku))
  section.appendChild(createCustomElement('span', 'item__title', name))
  section.appendChild(createProductImageElement(image))
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${(salePrice).toFixed(2)}`))
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))

  return section
}

// Criando função que mostra/renderiza os produtos na tela (Lista Master): //
async function productsOnScreen () {
  const chargingItems = document.querySelector('.items')
  const products = await listOfProducts()

  products.forEach((product) => {
    const item = createProductItemElement(product)
    chargingItems.appendChild(item)
  })
  removeLoading()
}

// Função que salva os items do carrinho no localStorage: //
function savingCart () {
  const itemsList = cartItemsElements.innerHTML
  saveCartItems(itemsList)
}

// Função que faz a totalização dos items colocados no carrinho de compras: //
const sumPrice = () => {
  const totalItems = Object.values(cartItemsElements.childNodes)
  const total = totalItems.reduce((acc, curr) => acc + parseFloat(curr.innerText.split('$')[1]), 0)
  totalPrice.innerHTML = Math.round(total * 100) / 100
}

// Função que pega os preços dos itens e salva no localStorage: //
const updateInfo = () => {
  sumPrice()
  saveCartItems(cartItemsElements.innerHTML)
  localStorage.setItem('totalPrice', totalPrice.innerHTML)
}

// Função que remove os items se os mesmos são clicados: //
const cartItemClickListener = (event) => {
  cartItemsElements.removeChild(event.path[1])
  savingCart()
  updateInfo()
}

// Função que cria os elementos para inserção do item escolhido na Lista Menor de produtos: //
const createCartItemElement = ({ image, name, salePrice }) => {
  const button = document.createElement('button')
  button.innerText = 'X'
  button.addEventListener('click', cartItemClickListener)
  button.className = 'cart__item_button'

  const img = document.createElement('img')
  img.src = image
  img.className = 'cart__item_img'

  const p = document.createElement('p')
  p.innerText = `${name} 
    PRICE: $${salePrice}`

  const li = document.createElement('li')
  li.className = 'cart__item'
  li.appendChild(button)
  li.appendChild(img)
  li.appendChild(p)
  return li
}

// Criando função que monta detalhes do item selecionado dentre os produtos mostrados na tela: //
async function itemDetails (sku) {
  const itemSelected = await fetchItem(sku)
  const { id, title, thumbnail, price } = itemSelected
  return { sku: id, name: title, image: thumbnail, salePrice: price }
}

// Função que adiciona os itens no Carrinho de Compras: //
function addItemsCart () {
  const itemsCartList = document.querySelector('.items')
  itemsCartList && (
    itemsCartList.addEventListener('click', async (event) => {
      if (event.target.className === 'item__add') {
        const sku = event.target.parentNode.querySelector('span.item__sku').innerText
        const namedItem = await itemDetails(sku)
        const listCart = createCartItemElement(namedItem)
        cartItemsElements.appendChild(listCart)
        savingCart()
        updateInfo()
      }
    })
  )
}

// Função que limpa todos os items do carrinho de compras: //
function cleanCart () {
  const buttonClearCart = document.querySelector('.empty-cart')
  buttonClearCart && (
    buttonClearCart.addEventListener('click', () => {
      cartItemsElements.innerHTML = ''
      savingCart()
      updateInfo()
    })
  )
}

// Função que mostra na tela menor os items armazenados no localStorage ao reiniciar aplicação: //
function loadListCart () {
  totalPrice.innerHTML = localStorage.getItem('totalPrice')
  const list = getSavedCartItems()
  cartItemsElements.innerHTML = list
  const itemsCart = cartItemsElements.childNodes
  itemsCart.forEach((li) => {
    li.addEventListener('click', cartItemClickListener)
  })
}
productsOnScreen()
loadListCart()
addItemsCart()
updateInfo()
cleanCart()
