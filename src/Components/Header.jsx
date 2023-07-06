import { Cart } from './Cart'
//
export function Header () {
  return (
    <header>
      <h1 className='font-logo text-[1em] text-neutral-800 tracking-widest'>Eshop</h1>
      <Cart />
    </header>
  )
}
