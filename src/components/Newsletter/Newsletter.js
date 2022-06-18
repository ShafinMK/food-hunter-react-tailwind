import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className='news-letter text-white md:w-3/4 mx-auto flex items-center justify-center my-10'>
            <div className='text-center'>
                <h6 className=''>NEWSLETTER</h6>
                <h1 className='text-3xl md:text-6xl'>Subscribe our newsletter</h1>
                <p className='pt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis.</p>
                <div className='p-7  flex items-center justify-center'>
                    <div className='grid grid-cols-12 gap-4'>
                        <input type="text" className='text-black col-span-12 md:col-span-9 px-4 py-3 rounded-lg border border-orange-400 focus:outline-none focus:ring focus:ring-2 focus:ring-orange-500 bg-white/80' name="" id="" placeholder='Enter your Email here' />
                        <button className='bg-orange-400 hover:bg-orange-600 hover:text-white w-min col-span-12 md:col-span-3 rounded-3xl px-8 py-2 text-gray-800 duration-500'>Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Newsletter;