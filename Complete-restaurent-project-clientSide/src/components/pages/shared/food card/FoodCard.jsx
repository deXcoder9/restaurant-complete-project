import PropTypes from "prop-types";
import useAuth from "../../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "../../../../hooks/useAxios";
import useCarts from "../../../../hooks/useCarts";

const FoodCard = ({ item }) => {
  const { userInfo } = useAuth();
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const [, refetch] = useCarts();

  const handleAddToCard = () => {
    // console.log(item, userInfo.email)
    if (userInfo && userInfo.email) {
      // todo send cart item to database\
      const cartItem = {
        menuId: _id,
        email: userInfo.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast("successfully addded to the cart");
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "YOU ARE NOT LOGIN",
        text: "please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-[#f3f3f311] shadow-xl rounded-md relative">
      <p className="absolute right-4 top-2 rounded-md bg-black text-white py-1 px-5">
        {" "}
        {"$" + price}
      </p>
      <figure>
        <img className="tabPanelImage  " src={image} alt="salad" />
      </figure>
      <div className="card-body flex justify-center items-center text-center">
        <h2 className="text-2xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions ">
          <button
            onClick={() => handleAddToCard()}
            className="btn  transition-all  ease-linear btn-outline uppercase text-[#BB8506] rounded-lg border-0 border-b-4 "
          >
            add to cart
          </button>
        </div>
      </div>
          <ToastContainer />
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FoodCard;
