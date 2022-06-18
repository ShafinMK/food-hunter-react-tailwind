import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = (props) => {
  const { idMeal, strArea, strCategory, strMealThumb } = props.displayItem;
  let {strMeal} = props.displayItem;
  if(strMeal.length> 30){
    strMeal = strMeal.slice(0,31)+"..."
  };
  const url = `/menu/${idMeal}`;
  return (
    <div>
      {/* card start */}
      <div className='w-auto  bg-orange-50 p-1  rounded-md  hover:scale-105 duration-500 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400'>

        {/* card-body  */}
        <div className='space-y-2 '>
          <h1 className='text-5xl text-center item-name font-semibold mt-3 h-20'>{strMeal}</h1>
          <h2 className='text-center text-slate-400 italic'>{strArea} Dish</h2>
          <h3 className='text-center text-slate-400 italic'>{strCategory}</h3>

        </div>
        <div className='flex justify-center m-3'>
          <Link to={url}><button className='bg-amber-400 px-8 py-1 rounded-full italic hover:bg-amber-500 duration-500 hover:text-white ring-2 ring-amber-500'>Details</button></Link>
          
        </div>
        {/* card image  */}
        <img src={strMealThumb} className='rounded-md' alt="" />
      </div>
      {/* card end */}
    </div>
  );
};

export default Food;