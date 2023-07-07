import { Products } from './Products'
import { Filters } from './Filters'
//
export function Index ({ products }) {
  return (
    <main>
      <Filters />
      <Products products={products} />
    </main>
  )
}
