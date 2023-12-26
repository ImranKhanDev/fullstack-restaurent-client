import React from "react";

const FoodCard = ({item}) => {
    const { price, name, recipe, image } = item;
  return (
    <div >
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="w-screen"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className="absolute px-4 right-0 top-0 text-white text-2xl bg-blue-400 border-spacing-6 p-1">${price}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
