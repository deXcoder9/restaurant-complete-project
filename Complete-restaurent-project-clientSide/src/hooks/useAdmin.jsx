import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { userInfo } = useAuth();
  const axiosSecure = useAxiosSecure()
  const { data: isAdmin , isPending: isAdminLoading } = useQuery({
    queryKey: [userInfo?.email, "isAdmin"],
    queryFn: async() => {
        const res = await axiosSecure.get(`/users/admin/${userInfo.email}`)
        return res.data?.admin;
    }
  });
  return [isAdmin, isAdminLoading]
};

export default useAdmin;
