
import { AddIcon, CheckIcon } from '../Assets/icons.jsx'
import { useCart } from '../Hooks/useCart'
//
export function Products ({ products }) {
  const { addToCart, cart } = useCart()
  const checkProduct = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <section className='products'>
      {
products.map((product) => {
  const hasProduct = checkProduct(product)
  return (
    <section key={product.id} className='bg-2 gap-y-2 flex flex-col items-center rounded-3xl border border-neutral-500 pb-3'>
      <div className='flex justify-center w-full bg-1 p-5 rounded-t-3xl border-b border-neutral-500'><img src={product.thumbnail} alt={product.title} className='h-32 rounded-2xl' /></div>
      <div className='w-full flex justify-between px-5 '>
        <span>{product.title}</span>
        <span>$ {product.price}</span>
      </div>
      <button onClick={() => addToCart(product)} className=''>
        {
          hasProduct
            ? <CheckIcon />
            : <AddIcon />
        }
      </button>
    </section>
  )
})
        }
    </section>
  )
}
