import { Helmet } from "react-helmet-async"
import Banner from "../banner/Banner"
import Category from "../category/Category"
import ChefRecommends from "../chef recommends/ChefRecommends"
import Featured from "../featured/Featured"
import PopularMenu from "../popular menu/PopularMenu"
import Testimonials from "../testimonials/Testimonials"
import WebDetails from "../web details/WebDetails"


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Home | Bistro
        </title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <WebDetails></WebDetails>
      <PopularMenu></PopularMenu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>

    </div>
  )
}

export default Home