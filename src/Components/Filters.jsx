import { useId } from 'react'
import { useFilters } from '../Hooks/useFilters'
//
export function Filters () {
  const { filters, setFilters } = useFilters()
  //
  const minPriceId = useId()
  //
  const categoryId = useId()
  //
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  //
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  //
  return (
    <section className='filters'>
      <div className='min-price'>
        <label htmlFor='price' className='w-full font-bold text-neutral-800 tracking-wide'>Min price</label>
        <div className='w-full'>
          <input
            type='range'
            id={minPriceId}
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            className='cursor-pointer appearance-none rounded-full bg-neutral-400 h-1'
          />
        </div>
        <div className='w-full'>$ {filters.minPrice}</div>
      </div>

      <div className='category'>
        <label htmlFor='category' className='font-bold text-neutral-800 tracking-wide'>Category</label>
        <select
          id={categoryId}
          onChange={handleChangeCategory}
          className='rounded-xl text-center cursor-pointer p-1 bg-1 border border-neutral-500'
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>

    </section>
  )
}
