import { LessIcon, MoreIcon, RemoveIcon } from '../Assets/icons.jsx'
//
export function CartItem ({ thumbnail, title, price, quantity, addToCart, lessToCart, removeToCart, total }) {
  const zeroQuantity = quantity < 1
  const subTotalPrice = (price * quantity)
  return (
    <>
      <section className='w-full rounded-3xl gap-x-2 flex h-1/4 bg-1 border border-neutral-500'>
        <div className='w-[40%] grid place-content-center bg-2 rounded-l-3xl border-r border-neutral-500 '>
          <img src={thumbnail} alt={title} className='h-20 w-20 rounded-xl' />
        </div>
        <div className='flex flex-col flex-grow justify-around text-center items-center px-1 text-sm'>
          {/* title */}
          <h1>{title}</h1>
          {/* price */}
          <h1>${subTotalPrice}</h1>
          {/* buttons */}
          <section className='w-full flex justify-around items-center'>
            <div className='gap-x-2'>
              <button onClick={lessToCart} className={`${zeroQuantity ? 'hidden' : 'visible'}`}><LessIcon /></button>
              <h1>{quantity}
              </h1>
              <button onClick={addToCart}>
                <MoreIcon />
              </button>
            </div>
            <div>
              <button onClick={removeToCart}><RemoveIcon />
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
