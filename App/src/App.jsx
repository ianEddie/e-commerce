import { Header } from './Components/Header'
import { Index } from './Components/Index'
import { products } from './Mocks/products.json'
import { useFilters } from './Hooks/useFilters'
import { CartProvider } from './Context/cart'
import { Footer } from './Components/Footer'
//
export function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <div className='body'>
        <Header />
        <Index products={filteredProducts} />
        <Footer />
      </div>
    </CartProvider>
  )
}
