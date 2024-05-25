import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import useCarts from "../../../../hooks/useCarts";

const Navbar = () => {

  const [cart] = useCarts()

  // console.log(cart)
    const {userInfo,logOut}  = useContext(AuthContext)

    const handleLogout = () => {
      logOut()
      .then(() => {})
      .catch(error => console.log(error.message))
    }

    const navOptions = 
    <>
    
    <li><Link to="/"> home </Link> </li>
    <li><Link> contact us </Link> </li>
    <li><Link> dashboard </Link> </li>
    <li><Link to="/menu"> our menu </Link> </li>
    <li><Link to="/order/desserts" > our shop </Link> </li>
    <li className="border-[1px] border-gray-500"> 
    <Link to="/dashboard/cart">
    <BsCart4 className="text-xl" />
      <div className="bg-[#f28d3a] rounded-md px-2" >+{cart.length}</div>
    </Link> </li>
    {
      userInfo?.email ?
      <> 
      <span className="pt-2 mx-2 border-[1px] border-blue-500  px-3" > {userInfo.displayName} </span>
      <button onClick={handleLogout} className="btn btn-outline mt-1 btn-sm">logout!</button>
      </>
      :
      <li><Link to="/login"> login </Link> </li>
    }
    </>

  return (
    <div className="fixed z-10 bg-opacity-30 navbar text-white bg-black px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
        {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
