const saveCartItems = (element) => {
  localStorage.setItem('itemsCart', element)
}

if (typeof module !== 'undefined') {
  module.exports = saveCartItems
}
