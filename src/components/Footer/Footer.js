import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-black text-white footer-font mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:px-32 py-10'>
                <div className='text-center md:text-left pb-3'>
                <h1 className='text-4xl font-bold'>Food Hunter</h1>
                <span className='font-semibold'><span className='text-orange-400'>Healthy</span> <span className='text-blue-300'>Tasty</span> <span className='text-orange-400'>Nutritious</span></span>
                </div>
                <div className='space-x-4 text-center md:text-right'>
                <i className="fa-brands fa-facebook text-blue-600 text-4xl"></i>
                
                <i className="fa-brands fa-instagram text-pink-500 text-4xl"></i>
                <i className="fa-brands fa-facebook-messenger text-blue-400 text-4xl"></i>
                <i className="fa-brands fa-snapchat-square  text-yellow-400 text-4xl"></i>
                </div>
                </div>
            
            <div className='grid grid-cols-1 gap-10  md:grid-cols-2 px-5 lg:px-32 py-10 lg:grid-cols-3'>
                <div>
                    <h1 className='text-2xl font-semibold'>About Us</h1>
                    <p className='pt-5 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, eveniet molestias corporis unde saepe architecto non ipsa blanditiis expedita quos est libero optio veritatis perferendis totam sint quod, enim dicta.</p>
                    <h3 className='text-yellow-300 pt-6'>Read More</h3>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-semibold'>Contact Info</h1>
                    <div className='flex justify-between'>
                    <h3>Phone:</h3><span className='pl-2'>+880-1XXXXXXXXX</span>
                    </div>
                    <div className='flex justify-between'>
                    <h3>Email:</h3><span className='pl-2 truncate'>shafinmuhammad20@gmail.com</span>
                    </div>
                    <div className='flex justify-between'>
                    <h3>Address:</h3><span className='pl-2 truncate'>Thakurpara, Baganbari, Comilla</span>
                    </div>
                    
                    
                   

                </div>

                <div className='md:col-span-2 lg:col-span-1'>
                    <h1 className='text-2xl font-semibold'>Gallery</h1>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 pt-5'>
                        <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="" />
                        <img src="https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <h3 className='text-yellow-300 pt-6'>See More</h3>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:px-32 py-10'>
                <h3 className='text-center md:text-left pb-3 text-blue-300'>ALL RIGHTS RESERVED BY &copy; Shafin</h3>
                <h3 className='text-center md:text-left pb-3'>Lorem, ipsum dolor.</h3>
            </div>
        </div>
    );
};

export default Footer;