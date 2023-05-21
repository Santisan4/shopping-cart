export const saveCart = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const deleteCart = () => {
  window.localStorage.removeItem('cart')
}
