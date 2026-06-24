
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data
}

const useFetchData = () => {
  const {data, isLoading, error, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  })
  return { data, isLoading, error, isError } 
}

export default useFetchData

