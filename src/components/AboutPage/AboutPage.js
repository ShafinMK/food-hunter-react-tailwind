import React from 'react';
import './AboutPage.css';
const AboutPage = () => {
    return (
        <div >
            <div>
                <div className='about-bg-image'></div>
                <h1 className='text-4xl lg:text-6xl text-center my-5 anton-font'>Our Story</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center w-3/4 mx-auto my-10'>

                    <img src="https://images.unsplash.com/photo-1542216515-4e6a586c1ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80" className='p-5' alt="" />
                    <div className='px-5 space-y-5'>
                        <h1 className='text-xs md:text-sm pt-5 '>About us</h1>
                        <h1 className='text-2xl md:text-3xl font-bold anton-font'>Founder</h1>
                        <p className='text-gray-400 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione hic dolorum sed perspiciatis. Pariatur, sint beatae. Quibusdam aspernatur dolorum explicabo non illum ullam quos porro quia? Consequatur molestias praesentium mollitia totam, ad adipisci reprehenderit facilis aut doloribus illum optio dolores velit amet debitis necessitatibus atque? Modi quibusdam saepe atque.</p>
                    </div>


                </div>


                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center w-3/4 mx-auto my-10'>
                    

                    <div className='px-5 space-y-5'>
                        
                        <h1 className='text-2xl md:text-3xl font-bold anton-font'>Our First Restaurant</h1>
                        <p className='text-gray-400 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione hic dolorum sed perspiciatis. Pariatur, sint beatae. Quibusdam aspernatur dolorum explicabo non illum ullam quos porro quia? Consequatur molestias praesentium mollitia totam, ad adipisci reprehenderit facilis aut doloribus illum optio dolores velit amet debitis necessitatibus atque? Modi quibusdam saepe atque.</p>
                    </div>

                    <img src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc4NzE1MTEwMTQxOTI4OTU5/historic-restaurants-katz-deli-new-york-gettyimages-1187622483.jpg" className='p-5' alt="" />
                </div>



                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center w-3/4 mx-auto my-10'>
                    <img src="https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1581365843264-DO7TUXG42RM2436XIX6K/Restaurant-Future-Leadership.png?format=1500w" className='p-5' alt="" />

                    <div className='px-5 space-y-5'>
                        
                        <h1 className='text-2xl md:text-3xl font-bold anton-font'>Our Staffs</h1>
                        <p className='text-gray-400 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione hic dolorum sed perspiciatis. Pariatur, sint beatae. Quibusdam aspernatur dolorum explicabo non illum ullam quos porro quia? Consequatur molestias praesentium mollitia totam, ad adipisci reprehenderit facilis aut doloribus illum optio dolores velit amet debitis necessitatibus atque? Modi quibusdam saepe atque.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;