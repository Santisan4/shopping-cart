export function CartItem ({ thumbnail, title, price, quantity, addToCart, lessProduct }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small> Qty: {quantity} </small>
        <button onClick={addToCart}> + </button>
        {
          quantity > 1 &&
          <button onClick={lessProduct}> - </button>
        }
      </footer>
    </li>
  )
}
