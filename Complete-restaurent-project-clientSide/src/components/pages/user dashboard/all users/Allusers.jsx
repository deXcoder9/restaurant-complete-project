import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { HiUserGroup } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  // console.log(users)

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your cart has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast(`${user.name} is an Admin Now `);
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-10">
        <h1 className="text-3xl">All users</h1>
        <h1 className="text-3xl">Total users: {users.length} </h1>
      </div>
      {/* Table  */}
      <div className="overflow-x-auto max-w-[1100px] mx-auto mt-24 ">
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
            {users.map((user, idx) => (
              <>
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "ADMIN"
                    ) : (
                      <button onClick={() => handleMakeAdmin(user)}>
                        <HiUserGroup className="text-2xl bg-[#d1a054]  w-[40px] h-[30px] p-1  my-1  rounded-md " />
                      </button>
                    )}
                    <ToastContainer />
                  </td>
                  <td>
                    <button onClick={() => handleDeleteUser(user)} className="">
                      <MdDeleteOutline className="text-2xl bg-red-700 w-[40px] h-[30px] p-1  my-1  rounded-md" />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
