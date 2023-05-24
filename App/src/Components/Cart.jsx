import { useState } from 'react'
import { cartIcon, closeIcon } from '../Assets/icons'
import { CartItem } from './CartItem'

export function Cart () {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <section>
      <img src={toggle ? closeIcon : cartIcon} alt='' onClick={handleToggle} />
      {
  toggle &&
    <CartItem />
      }
    </section>
  )
}
