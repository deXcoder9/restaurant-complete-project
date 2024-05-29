import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // console.log(users)
  return (
    <div>
      <div className="flex justify-evenly my-10">
        <h1 className="text-3xl">All users</h1>
        <h1 className="text-3xl">Total users: {users.length} </h1>
      </div>
      {/* Table  */}
      <div className="overflow-x-auto max-w-[1100px] mx-auto mt-24 " >
        <table className="table  ">
          {/* head */}
          <thead className="bg-[#d1a054]  ">
            <tr className="uppercase">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user, idx) => <>
              <tr key={user._id}>
              <th>{idx +1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
              </> )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
