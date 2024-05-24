import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCarts = () => {
    // tanStack query
    const {userInfo } = useAuth()
    const axiosSecure = useAxios()
    const {refetch ,data: cart=[]} = useQuery({
        queryKey:['cart', userInfo?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${userInfo?.email}`) 
            return res.data
        }

    })
    return [cart, refetch] 
};

export default useCarts;