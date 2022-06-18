import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";

// import required modules
import { Pagination } from "swiper";
const Category = (props) => {
    const{strCategory, strCategoryThumb} = props.category;
    console.log(props);
    return (
        <div>

            {/* <SwiperSlide>Slide 9</SwiperSlide> */}

            {/* <h1>{strCategory}</h1>
            <img src={strCategoryThumb} alt="" /> */}
            <div>
                <div className="col-span-4 bg-orange-200 rounded-r-full rounded-bl-full p-4 hover:rounded-l-full hover:rounded-tr-none  duration-700 ">
                    <div className="flex">


                        <div className="grid grid-cols-12">
                            <div className="col-span-6 ">
                                <img src={strCategoryThumb} className="px-2" alt="" />
                            </div>
                            <div className="col-span-6  flex items-center justify-center" alt="" >
                                <h1 className="text-center category-style text-4xl p-4 font-semibold ">{strCategory}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Category;