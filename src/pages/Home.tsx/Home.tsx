import Nav from '../../components/Nav'
import Shoes from '../../assets/air-jordan.png'

const Home = () => {
  return (
    <div>
      <Nav />

      <div className="mt-4 mx-3 text-white">
        <div className="w-full h-52 bg-blue-600 rounded-3xl">
          <div className='flex justify-between px-3 pt-4'>
            <div className='mt-9'>
              <h3 className="text-md">New collection</h3>
              <h2 className="text-xl font-semibold mt-2">Nike Air Jordan</h2>
              <button className="border-2 px-5 py-2 mt-2 rounded-full">Shop Now</button>
            </div>
            <div>
              <img className="w-40" src={Shoes} alt="nike shoes" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
