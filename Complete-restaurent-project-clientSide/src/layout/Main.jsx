
import { Outlet } from 'react-router-dom'
import Navbar from "../components/pages/shared/navbar/Navbar"
import Footer from "../components/pages/shared/footer/Footer"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main