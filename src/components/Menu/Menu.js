import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import ItemNotFound from '../ItemNotFound/ItemNotFound';
import MenuHeader from '../MenuHeader/MenuHeader';

const Menu = () => {
    const [foods, setFoods] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [searchedText, setSearchedText]  =useState('');

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                setDisplayItems(data.meals);
                setFoods(data.meals);
            })
    }, []);
    
    
    const handleSearch = (event) =>{
        if(event.key === "Enter"){
            console.log(event.target.value);
            setSearchedText(event.target.value);
            // const matchedItems = foods.includes()
            
        }
    }
    useEffect(() =>{
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedText}`)
        .then(res =>  res.json())
        .then(data => setDisplayItems(data.meals))
        .catch( error =>{
            console.log(error.message);
        })
        
    }, [searchedText]);
console.log( displayItems);
    
    return (
        <div>
            <MenuHeader></MenuHeader>
            <h1 className='text-4xl text-center p-5 mt-3 category-font'>Menu</h1>
            <div className='mx-auto w-3/4 py-10'>
                <input onKeyPress={handleSearch} type="text" name="" id="" className='w-full border border-red-500 bg-orange-50 p-5 rounded-full' placeholder='Search any recipe by name or any ingredient'/>
            </div>

            
            <div className='w-3/4 mx-auto'>
                {/* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 */}
                {
                    displayItems? <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 '>

                        {displayItems.map(displayItem => <Food key = {displayItem.idMeal} displayItem ={displayItem}></Food>)}

                    </div>:<ItemNotFound></ItemNotFound>

                }

                {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 '>
                    {
                        
                        displayItems?displayItems.map(displayItem => <Food key = {displayItem.idMeal} displayItem ={displayItem}></Food>): <ItemNotFound></ItemNotFound>
                        
                    }
                </div> */}
            </div>
        </div>
    );
};

export default Menu;