import React from 'react'
import PropTypes from 'prop-types'
import { getCategories } from '../services/api'

class Categories extends React.Component {
  constructor () {
    super()
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    const data = await getCategories()
    this.setState({ categories: data })
  }

  render () {
    const {
      categories
    } = this.state
    const {
      onCategorySelect
    } = this.props
    return (
      <>
        { categories.map(({ id, name }) => (
          <label htmlFor={ id } key={ id } data-testid="category">
            <input
              id={ id }
              type="radio"
              name="categoryId"
              value={ name }
              //  onChange={ (event) => onChangeInput(event, aa.id) }
              onClick={ () => {
                onCategorySelect(id)
              } }
            />
            { name }
          </label>
        )) }
      </>
    )
  }
}

Categories.propTypes = {
  onCategorySelect: PropTypes.func.isRequired
}

export default Categories
