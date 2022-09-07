const getSavedCartItems = () => {
  const chargeCart = localStorage.getItem('itemsCart')
  return chargeCart
}

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems
}
