import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState, useEffect } from "react";
import MenuItem from "./../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu]=useMenu();
  const popular = menu.filter(item=>item.category==='popular');
  
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // const popularItems = data.filter((item) => item.category === "popular");
       
  //     });
  // }, []);

  return (
    <section>
      <SectionTitle
        heading={" Popular Menu"}
        subHeading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 my-8">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
