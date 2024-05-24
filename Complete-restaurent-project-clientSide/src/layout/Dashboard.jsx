import { NavLink, Outlet } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdMenuBook, MdPayment } from "react-icons/md";
import { GoCodeReview } from "react-icons/go";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { GrContactInfo } from "react-icons/gr";
import useCarts from "../hooks/useCarts";

const Dashboard = () => {
    const [cart ] = useCarts()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] pl-5 ">
        <h3 className="text-3xl uppercase pt-5  text-black">Bistro Boss</h3>
        <h4 className="text-sm uppercase tracking-[6px] text-black ">
          restaurant
        </h4>
        <ul className="space-y-3 mt-16">
          <li className="space-x-2 text-black uppercase">
            <BiHomeAlt2 className="inline-block text-xl    " />
            <NavLink to="/dashboard/userhome">User Home</NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <FaCalendarAlt className="inline-block text-xl    " />
            <NavLink to="/dashboard/reservation">Reservation</NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <MdPayment pleFill className="inline-block text-xl    " />
            <NavLink to="/dashboard/payment">payment history</NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <PiShoppingCartSimpleFill className="inline-block text-xl    " />
            <NavLink to="/dashboard/cart">My Cart ({cart.length}) </NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <GoCodeReview className="inline-block text-xl    " />
            <NavLink to="/dashboard/review">add review</NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <BsFillJournalBookmarkFill className="inline-block text-xl    " />
            <NavLink to="/dashboard/booking">My booking</NavLink>
          </li>
        </ul>
        <div className="divider divider-neutral w-5/6 my-9 "></div>
        <ul className="space-y-3">
          <li className="space-x-2 text-black uppercase">
            <BiHomeAlt2 className="inline-block text-xl    " />
            <NavLink to="/">home</NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <MdMenuBook className="inline-block text-xl    " />
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <CiShop className="inline-block text-xl    " />
            <NavLink to="/order/salads">shop</NavLink>
          </li>
          <li className="space-x-2 text-black uppercase">
            <GrContactInfo className="inline-block text-xl    " />
            <NavLink to="/dashboard/contact">contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
