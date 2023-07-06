import { useCart } from '../Hooks/useCart'
//
export function CartButtons ({ hasFullCart }) {
  const { clearCart } = useCart()
  return (
    <div className='flex justify-center items-center gap-x-5 w-full h-10 self-end'>
      <button
        className='grid place-content-center p-3 rounded-3xl h-6 bg-yellow-400 text-sm hover:bg-white transition-colors duration-300'
        onClick={clearCart}
      > Clear Cart
      </button>
    </div>
  )
}
