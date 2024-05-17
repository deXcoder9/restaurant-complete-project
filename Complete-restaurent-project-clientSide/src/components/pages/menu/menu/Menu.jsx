import { Helmet } from "react-helmet-async"
import SubBanner from "../../shared/sub banner/SubBanner"

import PopularMenu from "../../home/popular menu/PopularMenu"

import menuImage from "../../../../assets/menu/banner3.jpg"
import Cover from "../../shared/cover/Cover"


const Menu = () => {
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
        <PopularMenu></PopularMenu>

        <Cover
        header={"desserts"}
        description={"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit lorem ipsum dolor sit amet, consectet lorem ipsum dolor sitlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit"}
        ></Cover>
        <PopularMenu></PopularMenu>

        <Cover
        header={"pizza"}
        description={"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit lorem ipsum dolor sit amet, consectet lorem ipsum dolor sitlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit"}
        ></Cover>
        <PopularMenu></PopularMenu>

        <Cover
        header={"salads"}
        description={"lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit lorem ipsum dolor sit amet, consectet lorem ipsum dolor sitlorem ipsum dolor sit amet, consectet lorem ipsum dolor sit"}
        ></Cover>
        <PopularMenu></PopularMenu>
    </div>
  )
}

export default Menu