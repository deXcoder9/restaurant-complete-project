import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
    // tanStack query
    const {userInfo } = useAuth()
    const axiosSecure = useAxiosSecure()
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