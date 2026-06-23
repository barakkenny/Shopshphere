import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between bg-black py-3 px-4 text-white md:py-4">
      <div className="text-2xl md:hidden"><IoMenu /></div> 
      <h1 className="text-xl font-semibold">
         <Link to="/">ShopShere</Link>
       </h1>
      <form className="hidden md:block">
        <dl>
          <dd><input type="text" className="w-96 h-10 border-0 bg-white text-black rounded-full" /></dd>
        </dl>
      </form> 

       <div className="flex items-center gap-5">
       <div className="text-2xl"><IoSearchOutline /></div>
       <Link to="/cart" className="relative">
        <div className="text-2xl"><BsCart4 /></div>
        <h3 className="absolute -top-1 -right-0.5 text-[12px] bg-red-500 px-1.25 py-[.4px] rounded-full font-semibold text-white">0</h3>
       </Link>
       </div>
    </nav>
  )
}

export default Nav
