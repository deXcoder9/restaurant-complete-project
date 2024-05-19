import { Helmet } from "react-helmet-async"

import menuImage from "../../../../assets/menu/banner3.jpg"

import dessertImg from "../../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../../assets/menu/soup-bg.jpg"


import SubBanner from "../../shared/sub banner/SubBanner"
import SectionTitle from "../../../section title/SectionTitle"
import MenuCategory from "../menu category/MenuCategory"

import useMenu from "../../../../hooks/useMenu"

const Menu = () => {

  const [menu] = useMenu()

  const pizza = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const offered = menu.filter(item => item.category === 'offered')
  const dessert = menu.filter(item => item.category === 'dessert')
  // console.log(offered)


  return (
    <div>
        <Helmet>
            <title>
                Menu | Bistro Boss
            </title>
        </Helmet>
        <SubBanner
        bgImage={menuImage}
        header={"our menu"}
        description={"Would you like to try a dish?"}
        ></SubBanner>
        <SectionTitle
        heading={"today's offer"}
        subHeadeing={"don't miss"}
        ></SectionTitle>

        <MenuCategory 
        items={offered}
         ></MenuCategory>

        <MenuCategory 
        bgImage={dessertImg}
        items={dessert} 
        header={"desserts"}
        description={"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit lorem ipsum dolor sit amet, consectet lorem ipsum dolor sitlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit"} ></MenuCategory>

        <MenuCategory 
        bgImage={pizzaImg}
        items={pizza}
        header={"pizza"}
        description={"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit lorem ipsum dolor sit amet, consectet lorem ipsum dolor sitlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit"}  ></MenuCategory>

        <MenuCategory items={salad}
        bgImage={saladImg}
        header={"salads"}
        description={"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit lorem ipsum dolor sit amet, consectet lorem ipsum dolor sitlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit"} ></MenuCategory>

        <MenuCategory 
        bgImage={soupImg}
        items={soup}
        header={"soups"}
        description={"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit lorem ipsum dolor sit amet, consectet lorem ipsum dolor sitlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit"} ></MenuCategory>

    </div>
  )
}

export default Menu