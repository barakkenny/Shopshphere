import Nav from '../../components/Nav'
import { useParams } from "react-router-dom";
import useFetchSingleProduct from '../../custom-hooks/useFetchSingleProduct'

const ProductDetails = () => {
  const {data, isLoading, error, isError} = useFetchSingleProduct();
  console.log(data)
  // if ((isLoading)) return <p>Loading...</p>;

  // if(error instance of Error){
  //   return <p>{error.message}</p>;
  // }
  

  return (
    <div>
     <Nav />

     <div className="w-full bg-[#F5F5F5]">
      <div className="py-4">
       <img className="mx-auto w-30" src={data?.image} alt="" />
      </div> 
      <div className="bg-white pt-4">     
       <h2 className="text-sm max-w-64">{data?.title}</h2>
      </div>
     </div>
    </div>
  )
}

export default ProductDetails
