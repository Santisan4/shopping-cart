import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => (
      {
        ...prevState,
        minPrice: event.target.value
      }
    ))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => (
      {
        ...prevState,
        category: event.target.value
      }
    ))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}> From: </label>
        <input type="range" id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleChangeMinPrice}/>
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory} value={filters.category}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home - Decoration</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
        </select>
      </div>
    </section>
  )
}
