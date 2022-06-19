import React from 'react';
import { Link } from 'react-router-dom';
import './SampleMenu.css';
const SampleMenu = () => {
    return (
        <div className='w-3/4 mx-auto my-32'>
            <h1 className='fancy-font-1 text-6xl font-bold text-center my-5'>Our Menu</h1>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-11 lg:px-20'>
                

                {/* card start */}
                <div className='w-auto  bg-orange-50 p-1  rounded-md  hover:scale-105 duration-500 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400'>

                    {/* card-body  */}
                    <div className='space-y-2 py-3'>
                        <h1 className='text-5xl text-center item-name font-semibold mt-3 h-20'>Ramen</h1>
                        <h2 className='text-center text-slate-400 italic text-sm lg:text-base'>Japanese Dish</h2>
                        <h3 className='text-center text-slate-400 italic text-sm lg:text-base'>Noodle soup</h3>

                    </div>
                    {/* <div className='flex justify-center m-3'>
                        <Link to={url}><button className='bg-amber-400 px-8 py-1 rounded-full italic hover:bg-amber-500 duration-500 hover:text-white ring-2 ring-amber-500'>Details</button></Link>

                    </div> */}
                    {/* card image  */}
                    <img src='https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='rounded-md' alt="" />
                </div>
                {/* card end */}

                {/* card start */}
                <div className='w-auto  bg-orange-50 p-1  rounded-md  hover:scale-105 duration-500 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400'>

                    {/* card-body  */}
                    <div className='space-y-2 py-3'>
                        <h1 className='text-5xl text-center item-name font-semibold mt-3 h-20'>Curry</h1>
                        <h2 className='text-center text-slate-400 italic text-sm lg:text-base'>Rice Dish</h2>
                        <h3 className='text-center text-slate-400 italic text-sm lg:text-base'>Curry Rice</h3>

                    </div>
                    {/* <div className='flex justify-center m-3'>
                        <Link to={url}><button className='bg-amber-400 px-8 py-1 rounded-full italic hover:bg-amber-500 duration-500 hover:text-white ring-2 ring-amber-500'>Details</button></Link>

                    </div> */}
                    {/* card image  */}
                    <img src='https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/japaensecurry.jpg' className='rounded-md' alt="" />
                </div>
                {/* card end */}

                {/* card start */}
                <div className='w-auto  bg-orange-50 p-1  rounded-md  hover:scale-105 duration-500 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400'>

                    {/* card-body  */}
                    <div className='space-y-2 py-3'>
                        <h1 className='text-5xl text-center item-name font-semibold mt-3 h-20'>Tempura</h1>
                        <h2 className='text-center text-slate-400 italic text-sm lg:text-base'>Seafood Dish</h2>
                        <h3 className='text-center text-slate-400 italic text-sm lg:text-base'>Fried Food</h3>

                    </div>
                    {/* <div className='flex justify-center m-3'>
                        <Link to={url}><button className='bg-amber-400 px-8 py-1 rounded-full italic hover:bg-amber-500 duration-500 hover:text-white ring-2 ring-amber-500'>Details</button></Link>

                    </div> */}
                    {/* card image  */}
                    <img src='https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/tempura.jpg' className='rounded-md' alt="" />
                </div>
                {/* card end */}
            </div>
            <div className='mt-8 flex justify-center'>
                <Link to = '/menu'><button className='bg-yellow-400 text-black px-10 py-3 rounded-lg hover:shadow-2xl duration-500 kalam-font'>Go to menu<i className="fa-solid fa-arrow-right ml-2"></i></button></Link>
            </div>
        </div>
    );
};

export default SampleMenu;