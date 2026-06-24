import { useState } from 'react';
import Nav from '../../components/Nav'
import Shoes from '../../assets/air-jordan.png';
import useFetchData from '@/custom-hooks/useFetchData';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {type FetchedData } from '../../types/types'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type ProductCategory = {
  id: number;
  category: string;
}
// px-6 py-2 rounded-full bg-linear-to-r from-[#95BBE7] via-[#B89EDB] to-[#CF8CD7]"

const Home: React.FC = () => {
  const [categoryBg, setCategoryBg] = useState("px-6 py-2 rounded-full bg-linear-to-r from-[#95BBE7] via-[#B89EDB] to-[#CF8CD7]")

  const handleCategoryClick = () => {

  }

  const productCategory: ProductCategory[] = [
    {id: 1, category: 'All'},
    {id: 2, category: 'Electronics'},
    {id: 3, category: 'fashion'},
    {id: 4, category: 'shoes'}
  ]

  const {data:products, isLoading, error, isError } = useFetchData();
  
  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <Nav />

      <div className="mt-4 mx-3 text-white">
        <div className={`w-full bg-linear-to-r from-[#95BBE7] via-[#B89EDB] to-[#CF8CD7] h-43 text-black rounded-3xl`}>
          <div className='flex justify-between px-3'>
            <div className='mt-7 text-white'>
              <h3 className="text-md">New collection</h3>
              <h2 className="text-xl font-semibold mt-1">Nike Air Jordan</h2>
              <button className="border-3 border-gray-300 bg-[#BFB8E3] text-white font-medium px-5 py-2 mt-3 rounded-full">Shop Now</button>
            </div>
            <div>
              <img className="w-40 mt-4" src={Shoes} alt="nike shoes" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ml-3">
        <h2 className="text-xl font-semibold">Category</h2>
        <div className="mt-4 flex items-center gap-6">

          {/* <Tabs defaultValue="All" className="w-[400px]">
            <TabsList className="flex items-center justify-between bg-none space-x-4">
              <TabsTrigger value="All" className="text-white px-7 py-4 rounded-full bg-linear-to-r from-[#95BBE7] via-[#B89EDB] to-[#CF8CD7]">All</TabsTrigger>
              <TabsTrigger value="">Password</TabsTrigger>
            </TabsList>
            className="px-6 py-2 rounded-full bg-linear-to-r from-[#95BBE7] via-[#B89EDB] to-[#CF8CD7]"
          </Tabs> */}
        {productCategory.map(({id, category}) => (
          <ul key={id}>
            <li onClick={() => handleCategoryClick()} className={`${category === 'All'? `${categoryBg} text-white shadow-none`: 'text-black px-6 py-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.25)]'} px-6 py-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.25)] cursor-pointer`}>{category}</li>
          </ul>
        ))}
        {/* className={`${category === 'All'? `${bg} text-white shadow-none`: 'text-black px-6 py-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.25)]'} px-6 py-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.25)] cursor-pointer`} */}
        </div>

        <div className="flex items-center gap-8 flex-wrap">
          {products.map(({id, title, image, price}: FetchedData) => (
            <Link to="/product-details">
            <div key={id} className="mt-9 px-2 py-2 shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-md">
              <img className="w-25 rounded" src={image || <Skeleton />} alt="" />
              <h3 className='mt-2'>{title.length > 15
                  ? `${title.slice(0, 15)}...`
                   : title}</h3>
              <h4 className="mt-1 text-sm">${price}</h4>
              {/* <button className="mt-2 bg-px-6 py-2 rounded-full bg-linear-to-r from-[#95BBE7] via-[#B89EDB] to-[#CF8CD7] py-2 px-4 text-white rounded-md">View Product</button> */}
            </div>
            </Link>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Home
