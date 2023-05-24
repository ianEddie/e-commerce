export function CartItem () {
  return (
    <section className='open'>
      <div className='w-full  bg-emerald-600 flex justify-center rounded-3xl p-3'>
        <div className=' flex justify-center w-1/3'>
          <img src='https://i.dummyjson.com/data/products/30/2.jpg' alt='image' className='h-20 w-20 rounded-xl' />
        </div>
        <div className='w-2/3 flex-col text-center'>
          <h1>name</h1>
          <h1>priceq</h1>
        </div>
      </div>

    </section>
  )
}
