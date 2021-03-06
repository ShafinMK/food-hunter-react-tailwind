import React from 'react';
import { Link } from 'react-router-dom';
import './MenuHeader.css';
const MenuHeader = () => {
    return (
        <div className='menu-header '>
            <div className='grid grid-cols-12 h-full'>
                <div className='bg-gradient-to-r from-gray-800 to-transparent col-span-12 md:col-span-6  text-white flex justify-center items-center'>
                    <div className='px-10'>
                        <div className='space-y-10 text-center md:text-left'>
                            <h1>Check our awesome menu below</h1>
                            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>Eat, drink and live free. There’s no telling what might happen tomorrow.</h1>
                            <h3 className='text-xs md:text-sm lg:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quidem est perferendis voluptatem aliquam perspiciatis ad inventore ut aspernatur accusantium.</h3>

                            <div className='flex justify-center md:justify-start space-x-5'>
                                <Link to = '/home'>
                                <button className='bg-lime-400 hover:bg-green-500 kalam-font font-bold  rounded-xl px-4 py-4  text-gray-800 duration-500 hover:scale-105'>Back to Home</button>
                                </Link>
                                <button className='bg-transparent ring-2  ring-white kalam-font font-bold hover:bg-white hover:text-black rounded-xl px-4 py-4  text-white  duration-500 hover:scale-105'>Reservation</button>
                            </div>
                        </div>
                    </div>

                </div>
               


            </div>
        </div>
    );
};

export default MenuHeader;