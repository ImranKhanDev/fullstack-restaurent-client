import React from 'react';
import FoodCard from '../Shared/FoodCard/FoodCard';

const OrderFoodTab = ({items}) => {
    return (
        <div className="grid grid-cols-2 gap-10 mx-auto">

        {items.map(item=> <FoodCard item={item} key={item._id}></FoodCard>)}
        </div>
    );
};

export default OrderFoodTab;