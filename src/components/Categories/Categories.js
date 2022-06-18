import React, { useEffect, useState, useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Categories.css";

// import required modules
import { Pagination } from "swiper";
import Category from '../Category/Category';


const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, [])
    return (
        <div className='pt-10'>
            <hr />
            <div className='text-center py-10'>
                <span className='text-center text-2xl md:text-4xl font-bold  py-3 px-10 category-font'>Categories</span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 lg:gap:11 w-3/4 mx-auto'>
                {
                    categories.map(category => <Category category={category}></Category>)
                }
            </div>



        </div>
    );
};

export default Categories;