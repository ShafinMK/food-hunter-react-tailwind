import React from 'react';
import './Features.css';
const Features = () => {
    return (
        <div className='text-center feature-body pt-10'>
            <hr />
            <h6 className='text-xs md:text-sm'>Features</h6>
            <h1 className='text-2xl md:text-4xl p-5 font-bold' id='feature-header'>Why People Choose Us?</h1>
            <p className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <div className='flex justify-evenly flex-col md:flex-row '>
                <div className='py-10 px-5'>
                    <div className='flex justify-center '>
                        <img src={require("../../images/icon-serv-1.png")} className='w-20' alt="" />
                    </div>
                    <h1 className='font-semibold py-3'>Menu for every taste</h1>
                    <p  className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='py-10 px-5'>
                    <div className='flex justify-center '>
                        <img src={require("../../images/icon-serv-2.png")} className='w-20' alt="" />
                    </div>
                    <h1 className='font-semibold py-3'>Always fresh ingredients</h1>
                    <p  className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className='py-10 px-5'>
                    <div className='flex justify-center '>
                        <img src={require("../../images/icon-serv-3.png")} className='w-20' alt="" />
                    </div>
                    <h1 className='font-semibold py-3'>Experienced chefs</h1>
                    <p  className='text-xs md:text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;