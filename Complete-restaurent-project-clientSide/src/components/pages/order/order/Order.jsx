import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SubBanner from "../../shared/sub banner/SubBanner";
import useMenu from "../../../../hooks/useMenu"
import "./order.css"

import ourShopImage from "../../../../assets/shop/banner2.jpg";
import { useState } from "react";
import FoodCard from '../../shared/food card/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const [menu] = useMenu()
  // console.log(menu)
  const {category} = useParams()
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"]
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const pizza = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const drinks = menu.filter(item => item.category === 'drinks')
  const dessert = menu.filter(item => item.category === 'dessert')

  // console.log(category)

  return (
    <div>
      <Helmet>
        <title>Order Food | Bistro Boss </title>
      </Helmet>
      <SubBanner
        bgImage={ourShopImage}
        header={"our shop"}
        description={"would you like to try a dish?"}
      ></SubBanner>

<Tabs style={{maxWidth: '1320px', margin: '150px auto'}} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>
      <TabPanel>
        <div className='tabPanel space-y-7 '>
        {
            salad.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='tabPanel space-y-7'>
        {
            pizza.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='tabPanel space-y-7'>
        {
            soup.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='tabPanel space-y-7'>
        {
            dessert.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
        }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='tabPanel space-y-7'>
        {
            drinks.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
        }
        </div>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;
