import React from 'react';

const Visits = () => {
    return (
        <div>
            <div className='text-center feature-body pt-10'>
            <hr />
            <h6 className='text-xs md:text-sm'>Visits</h6>
            <h1 className='text-2xl md:text-4xl p-5 font-bold' id='feature-header'>We are proud to inform you</h1>
            <p className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <div className='flex justify-evenly flex-col md:flex-row '>
                <div className='py-10 px-5'>
                    {/* <div className='flex justify-center '>
                        <img src={require("../../images/icon-serv-1.png")} className='w-20' alt="" />
                    </div> */}
                    <h1 className='text-3xl md:text-4xl lg:text-6xl mb-4'>300<span className='text-orange-400'>+</span></h1>
                    <h1 className='font-semibold py-3'>Daily Visits</h1>
                    <p  className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='py-10 px-5'>
                    {/* <div className='flex justify-center '>
                        <img src={require("../../images/icon-serv-1.png")} className='w-20' alt="" />
                    </div> */}
                    <h1 className='text-3xl md:text-4xl lg:text-6xl mb-4'>100<span className='text-orange-400'>%</span></h1>
                    <h1 className='font-semibold py-3'>Positive Review</h1>
                    <p  className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='py-10 px-5'>
                    {/* <div className='flex justify-center '>
                        <img src={require("../../images/icon-serv-1.png")} className='w-20' alt="" />
                    </div> */}
                    <h1 className='text-3xl md:text-4xl lg:text-6xl mb-4'>150<span className='text-orange-400'>+</span></h1>
                    <h1 className='font-semibold py-3'>Daily Orders</h1>
                    <p  className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='py-10 px-5'>
                    {/* <div className='flex justify-center '>
                        <img src={require("../../images/icon-serv-1.png")} className='w-20' alt="" />
                    </div> */}
                    <h1 className='text-3xl md:text-4xl lg:text-6xl mb-4'>1K<span className='text-orange-400'>+</span></h1>
                    <h1 className='font-semibold py-3'>Instagram Followers</h1>
                    <p  className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Visits;