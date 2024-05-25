import { MdDeleteForever } from "react-icons/md";
import useCarts from "../../../../hooks/useCarts";
import SectionTitle from "../../../section title/SectionTitle";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch ] = useCarts()
    const axiosSecure = useAxios()
    const totalPrice = cart.reduce((total, item) => total + item.price   , 0)


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0 ){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your cart has been deleted.",
                        icon: "success"
                    });
                    refetch();
            }} )
            }
          });
    }

    return (
        <div className="max-w-[1000px] mx-auto" >

            <SectionTitle
            heading={"wanna add more"}
            subHeadeing={"my cart"}
            ></SectionTitle>


            {/* Header */}
            <div className="flex justify-between mt-24 my-16 " >
                <div className="flex space-x-12">
                <h2 className="text-2xl">Total Items: {cart.length} </h2>
                <h2 className="text-2xl">Total Price: {totalPrice} </h2>
                </div>
                <button  className="btn  transition-all  ease-linear btn-outline uppercase text-[#BB8506] rounded-lg hover:bg-[#BB8506] "> Pay</button>
            </div>
            {/* Table */}
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Item</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        cart.map((item, index) =>  
        <tr key={item._id}>
            <th>
              {index +1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar h-12">
                  <img className="rounded-md   " src={item.image} alt="" />
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-ghost ">{item.name}</span>
            </td>
            <td>{ "$" + item.price}</td>
            <th>
              <button 
              onClick={() =>handleDelete(item._id)}
              className="btn btn-ghost  "> <MdDeleteForever className="text-2xl text-red-500" />   </button>
            </th>
          </tr>)
     }
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;