import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items,img,title}) => {
  return (
    <>
      <Cover
        img={img}
        title={title}
      ></Cover>
      <div className="grid md:grid-cols-2 gap-12 my-8 mt-16">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}

      </div>
     <Link to={`/order/${title}`}>
     <button className="btn btn-outline border-0 border-b-4">Order now</button>
     </Link>

    </>
  );
};

export default MenuCategory;
