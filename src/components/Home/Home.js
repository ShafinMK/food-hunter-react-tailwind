import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import HomeHeader from '../HomeHeader/HomeHeader';
import Newsletter from '../Newsletter/Newsletter';
import SampleMenu from '../SampleMenu/SampleMenu';
import Visits from '../Visits/Visits';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <AboutUs></AboutUs>
            <SampleMenu></SampleMenu>
            <Features></Features>
            <Categories></Categories>
            <Newsletter></Newsletter>
            <Visits></Visits>
            
            
        </div>
    );
};

export default Home;