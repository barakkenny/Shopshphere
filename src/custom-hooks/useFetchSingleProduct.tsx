import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import {type SingleProduct} from '../types/types'

// const fetchSingleProduct = async () => {
//     const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     console.log(res)

//     return res.data as Promise<SingleProduct>;
// }

const useFetchSingleProduct = () => {
  const { id } = useParams<{id: string}>()
  const { data, isLoading, error, isError } = useQuery<SingleProduct>({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
       return res.data as Promise<SingleProduct>;
  },
   enabled: !!id,
});

  return {data, isLoading, error, isError}
}

export default useFetchSingleProduct
