import './App.css'
import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Products } from './components/Products/Products'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart/Cart'
import { CartProvider } from './context/cart'

function App () {
  const [products] = useState(initialProducts)
  const { filtersProducts } = useFilters()

  const filteredProducts = filtersProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
