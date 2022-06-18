import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';
const HomeHeader = () => {
    return (
        <div className='home-header '>
            <div className='grid grid-cols-12 h-screen'>
                <div className='bg-gradient-to-r from-gray-800 to-transparent col-span-12 md:col-span-6  text-white flex justify-center items-center'>
                    <div className='px-10'>
                        <div className='space-y-10 text-center md:text-left'>
                            <h1>Ola, New Friend</h1>
                            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>The chief ingredient in yummy food is love.</h1>
                            <h3 className='text-xs md:text-sm lg:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quidem est perferendis voluptatem aliquam perspiciatis ad inventore ut aspernatur accusantium.</h3>

                            <div className='space-x-5'>
                                <Link to ='/menu'>
                                <button className='bg-orange-400 hover:bg-orange-600 hover:text-white rounded-xl px-2 py-4 md:px-4 text-gray-800 duration-500'>Go to Menu</button>
                                </Link>
                                <button className='bg-transparent ring-2  ring-white hover:bg-white hover:text-black rounded-xl px-2 py-4 md:px-4 text-white  duration-500'>Categories</button>
                            </div>
                        </div>
                    </div>

                </div>
               


            </div>
        </div>
    );
};

export default HomeHeader;