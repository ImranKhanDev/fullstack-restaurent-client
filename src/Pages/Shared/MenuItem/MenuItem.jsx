import React from "react";

const MenuItem = ({ item }) => {
  const { price, name, recipe, image } = item;
  return (
    <div className="flex space-x-4">
      <img src={image} className="w-[120px]" style={{borderRadius:"0 200px 200px 200px"}} alt="" />

      <div>
        <h2>{name}</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
