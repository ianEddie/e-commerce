import { useToggle } from '../Hooks/useToggle'
import { cartIcon, checkIcon, closeIcon, lessIcon, moreIcon, removeIcon } from './icons'
//
export function AddIcon () {
  return (
    <button className='border border-neutral-500 py-1 px-2 rounded-full bg-yellow-300 text-sm hover:bg-slate-100 transition-colors duration-300'>Add to Cart</button>
  )
}
//
export function CheckIcon () {
  return (
    <img src={checkIcon} alt='icon' className='h-6 cursor-default' />
  )
}
//
export function RemoveIcon () {
  return (
    <img src={removeIcon} alt='icon' className='h-5' />
  )
}
//
export function MoreIcon () {
  return (
    <img src={moreIcon} alt='icon' className='h-5' />
  )
}
//
export function LessIcon () {
  return (
    <img src={lessIcon} alt='icon' className='h-5' />
  )
}
//
export function CartIcon () {
  const { handleToggle, toggle } = useToggle()
  return (
    <img src={toggle ? closeIcon : cartIcon} alt='' onClick={handleToggle} />
  )
}
