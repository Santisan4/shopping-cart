import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import { useCart } from '../../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      {
        products.map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id} className='product'>
              <img src={product.thumbnail} alt="" />
              <div className='product-info'>
                <strong>{product.title}</strong> - {product.price}
              </div>
              <div>
                <button className={`${isProductInCart ? 'product-in-cart' : ''}`} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon/>
                      : <AddToCartIcon/>
                  }
                </button>
              </div>
            </li>
          )
        })
      }
    </main>
  )
}
