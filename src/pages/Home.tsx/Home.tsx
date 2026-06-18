import { useState, useEffect } from 'react'
import Nav from '../../components/Nav'
import Shoes from '../../assets/air-jordan.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Home = () => {

  return (
    <div>
      <Nav />

      <div className="mt-4 mx-3 text-white">
        <div className={`w-full bg-gradient-to-r from-[#95BBE7] via-[#B89EDB] to-[#CF8CD7] h-43 text-black rounded-3xl`}>
          <div className='flex justify-between px-3'>
            <div className='mt-7 text-white'>
              <h3 className="text-md">New collection</h3>
              <h2 className="text-xl font-semibold mt-1">Nike Air Jordan</h2>
              <button className="border-2 border-[#B9BDED] bg-[#BFB8E3] text-white font-medium px-5 py-2 mt-3 rounded-full">Shop Now</button>
            </div>
            <div>
              <img className="w-40 mt-4" src={Shoes} alt="nike shoes" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ml-3">
        <h2 className="text-xl font-semibold">Category</h2>

        <div>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>

    </div>
  )
}

export default Home
// #95BBE7
// #B89EDB
// #CF8CD7
