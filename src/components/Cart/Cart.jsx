import './Cart.css'
import { CartIcon, ClearCartIcon } from '../Icons'
import { useId } from 'react'
import { useCart } from '../../hooks/useCart'
import { CartItem } from '../CartItem/CartItem'

export function Cart () {
  const cartCheckboxId = useId()
  const { clearCart, cart, addToCart, lessProduct } = useCart()

  return (
    <>
      <div className='items-cart'>{cart.length}</div>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} className='input-cart' />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
                lessProduct={() => lessProduct(product)}
              />
            ))
          }
        </ul>

        <button className='button-clear-cart' onClick={clearCart}>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}
