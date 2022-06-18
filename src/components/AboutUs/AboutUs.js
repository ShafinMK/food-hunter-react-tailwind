import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className='w-3/4 mx-auto about-us pt-10'>
            <h1 className='text-center text-6xl'>Food <span className='text-orange-500'>Hunter</span></h1>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
                <img src="https://images.unsplash.com/photo-1568661290695-1e23938cf5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80" alt="" />

                <div className='px-5 space-y-5'>
                    <h1 className='text-xs md:text-sm pt-5'>About us</h1>
                    <h1 className='text-2xl md:text-3xl font-bold'>Visit Our Website</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione hic dolorum sed perspiciatis. Pariatur, sint beatae. Quibusdam aspernatur dolorum explicabo non illum ullam quos porro quia? Consequatur molestias praesentium mollitia totam, ad adipisci reprehenderit facilis aut doloribus illum optio dolores velit amet debitis necessitatibus atque? Modi quibusdam saepe atque.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;