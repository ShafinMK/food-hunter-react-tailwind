import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            {/* <h1>A header</h1> */}
            <header className="bg-slate-800 acme-font">
               <ul className='list-none flex justify-center text-white '>
                   <li className='py-1 px-1 md:px-3 md:py-3 text-xs sm:text-sm md:text-base hover:bg-red-500 hover:text-white duration-700 sm:mx-1 lg:mx-5 font-bold hover:underline hover:underline-offset-4'><Link to ='/home'>HOME</Link></li>
                   <li className='py-1 px-1 md:px-3 md:py-3 text-xs sm:text-sm md:text-base hover:bg-red-500 hover:text-white duration-700 sm:mx-1 lg:mx-5 font-bold hover:underline hover:underline-offset-4'><Link to ='/about'>ABOUT</Link></li>
                   <li className='py-1 px-1 md:px-3 md:py-3 text-xs sm:text-sm md:text-base hover:bg-red-500 hover:text-white duration-700 sm:mx-1 lg:mx-5 font-bold hover:underline hover:underline-offset-4'><Link to ='/menu'>MENU</Link></li>
                   <li className='py-1 px-1 md:px-3 md:py-3 text-xs sm:text-sm md:text-base hover:bg-red-500 hover:text-white duration-700 sm:mx-1 lg:mx-5 font-bold hover:underline hover:underline-offset-4'><Link to ='/contact'>CONTACT</Link></li>
                   {/* <li className='p-3 hover:bg-red-500 hover:text-white duration-700 mx-1 font-bold hover:underline hover:underline-offset-4'><Link to ='/address'>ADDRESS</Link></li> */}
               </ul>
            </header>
        </div>
    );
};

export default Header;