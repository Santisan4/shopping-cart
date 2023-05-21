import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filtersProducts = (products) => (
    products.filter(product => (
      product.price >= filters.minPrice &&
      (
        filters.category === 'all' ||
        filters.category === product.category
      )
    ))
  )

  return { filters, setFilters, filtersProducts }
}
