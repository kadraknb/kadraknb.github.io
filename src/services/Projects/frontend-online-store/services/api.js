export async function getCategories () {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories'
    const response = await fetch(endpoint)
    const result = await response.json()
    return result
  } catch (err) {
    console.log(err)
  }
}

export async function getProductsFromCategoryAndQuery (categoryId, query) {
  try {
    const end = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
    const response = await fetch(end)
    const result = await response.json()
    return result
  } catch (err) {
    console.log(err)
  }
}

export async function getProductItemByID (PRODUCT_ID) {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${PRODUCT_ID}`
    const response = await fetch(endpoint)
    const results = await response.json()
    return results
  } catch (err) {
    console.log(err)
  }
}
