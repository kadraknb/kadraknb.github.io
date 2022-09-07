const fetchItem = async (id) => {
  try {
    const endPointItem = `https://api.mercadolibre.com/items/${id}`
    const itemResult = await fetch(endPointItem)
    const dataItem = await itemResult.json()
    return dataItem
  } catch (error) {
    return new Error('You must provide an url')
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem
  }
}
