import React, { useState } from "react";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../Shared/FoodCard/FoodCard";
import useMenu from "../../hooks/useMenu";
import OrderFoodTab from "../OrderFoodTab/OrderFoodTab";
import { useParams } from "react-router-dom";
const OrderFood = () => {
  const categories =['salad','pizza','soup','dessert','drinks',]
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    
    <div>
      <Cover
        title={"Order Food"}
        img={"/public/assets/menu/soup-bg.jpg"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel >
         <OrderFoodTab items={salad}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
        <OrderFoodTab items={pizza}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
        <OrderFoodTab items={soup}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
        <OrderFoodTab items={dessert}></OrderFoodTab>
        </TabPanel>
        <TabPanel>
        <OrderFoodTab items={drinks}></OrderFoodTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
