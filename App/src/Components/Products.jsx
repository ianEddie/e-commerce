import { addIcon } from '../Assets/icons'
import { useCart } from '../Hooks/useCart'
//
export function Products ({ products }) {
  const { addToCart } = useCart()
  return (
    <section className='products'>
      {
products.map((item) => (
  <section key={item.id} className='bg-purple-300 p-3 gap-y-2 flexed text-center rounded-3xl'>
    <div className='flex justify-center w-full'><img src={item.thumbnail} alt={item.title} className='h-28 rounded-2xl' /></div>
    <div className='w-full'><h1>{item.title}</h1></div>
    <div className='w-full'><h1>${item.price}</h1></div>
    <button onClick={() => addToCart(products)}><img src={addIcon} alt='icon' /></button>
  </section>
))
        }
    </section>
  )
}
