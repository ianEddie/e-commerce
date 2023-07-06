import { CartItem } from './CartItem'
import { useCart } from '../Hooks/useCart'
import { CartButtons } from './CartButtons'
import { EmptyCart } from './EmptyCart'
import { useToggle } from '../Hooks/useToggle'
import { cartIcon, closeIcon } from '../Assets/icons.js'
//
export function Cart () {
  const { cart, addToCart, lessToCart, remove } = useCart()
  const { toggle, handleToggle } = useToggle()
  const hasCart = cart?.length >= 1
  const emptyCart = cart.length === 0
  return (
    <section>
      <div>
        <img src={toggle ? closeIcon : cartIcon} alt='' onClick={handleToggle} />
        <span className={`${emptyCart ? 'hidden' : 'visible bg-yellow-400 font-bold border border-neutral-500'}`}>{cart.length}</span>
      </div>
      {
  toggle &&
    <section className='open'>
      {cart.map(product =>
        <CartItem
          key={product.id}
          {...product}
          addToCart={() => (addToCart(product))}
          lessToCart={() => (lessToCart(product))}
          removeToCart={() => (remove(product))}
        />
      )}
      {
      hasCart
        ? <CartButtons />
        : <EmptyCart />
     }
    </section>
      }
    </section>
  )
}
