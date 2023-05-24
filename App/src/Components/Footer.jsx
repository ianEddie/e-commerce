import { useCart } from '../Hooks/useCart'

export function Footer () {
  const { cart } = useCart()
  return (
    <footer className='bg-white/50 w-1/3 absolute bottom-1 left-1 text-center'>
      {
      JSON.stringify(cart, null, 2)
     }
    </footer>
  )
}
