import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center w-3/4 mx-auto my-10'>
                    <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1655536287~exp=1655536887~hmac=addae4f163c741219d2bb4b075171d2f74ee17a745f736c1626c0085d31c73ef&w=826" className='p-5' alt="" />

                    <div className='px-5 space-y-5'>
                        
                        <h1 className='text-2xl md:text-3xl font-bold'>Want to reach us?</h1>
                        
                        <h3 className='text-gray-400'><i className="fa-solid fa-phone mr-6 text-green-400"></i>+880-1XXXXXXXXX</h3>
                        <h3 className='text-gray-400'><i className="fa-solid fa-envelope mr-6 text-red-400"></i>shafinmuhammad28@gmail.com</h3>
                        <h3 className='text-gray-400'><i className="fa-brands fa-whatsapp mr-6 text-black"></i>+880-1XXXXXXXXX</h3>
                        
                        
                    </div>
                </div>
        </div>
    );
};

export default Contact;