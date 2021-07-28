import Head from 'next/head'
import { products } from '../data/products';
import { Rating } from '../components/Rating';

const ProductCard = ({product}) => (
  <div className="py-6">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center">
            <img src={product.imageUrl} alt="" />
          </div> 
          <div className="p-4">
            <h1 className="text-gray-900 font-bold text-xl lg:text-2xl">{product.name}</h1>
            <p className="mt-2 text-gray-600 text-sm"></p>
            <div className="flex item-center mt-2">
              <Rating />
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">{product.price} грн</h1>
              <button className="px-3 py-2 bg-yellow-600 text-white text-xs font-bold uppercase rounded">Купить</button>
            </div>
          </div>
        </div>
      </div>
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProductCard product={products[0]} />
          <ProductCard product={products[1]} />
          <ProductCard product={products[2]} />
          <ProductCard product={products[3]} />
          <ProductCard product={products[4]} />
        </div>
      </div>
    </div>
  )
}
