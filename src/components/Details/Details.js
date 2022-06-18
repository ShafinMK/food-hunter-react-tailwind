import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TableBodyRow from '../TableBodyRow/TableBodyRow';
import Footer from '../Footer/Footer';
const Details = () => {

    const { foodId } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
            .then(res => res.json())
            .then(data => setDetail(data.meals[0]))
    }, []);
    const { strArea, strCategory, strInstructions, strMeal, strMealThumb, strTags, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 } = detail;

    const ingredientMeasures = [{ ingredient: strIngredient1, amount: strMeasure1 }, 
                                { ingredient: strIngredient2, amount: strMeasure2 },
                                { ingredient: strIngredient3, amount: strMeasure3 },
                                { ingredient: strIngredient4, amount: strMeasure4 },
                                { ingredient: strIngredient5, amount: strMeasure5 },
                                { ingredient: strIngredient6, amount: strMeasure6 },
                                { ingredient: strIngredient7, amount: strMeasure7 },
                                { ingredient: strIngredient8, amount: strMeasure8 },
                                { ingredient: strIngredient9, amount: strMeasure9 },
                                { ingredient: strIngredient10, amount: strMeasure10 },
                                { ingredient: strIngredient11, amount: strMeasure11},
                                { ingredient: strIngredient12, amount: strMeasure12 },
                                { ingredient: strIngredient13, amount: strMeasure13 },
                                { ingredient: strIngredient14, amount: strMeasure14 },
                                { ingredient: strIngredient15, amount: strMeasure15 },
                                { ingredient: strIngredient16, amount: strMeasure16 },
                                { ingredient: strIngredient17, amount: strMeasure17 },
                                { ingredient: strIngredient18, amount: strMeasure18 },
                                { ingredient: strIngredient19, amount: strMeasure19 },
                                { ingredient: strIngredient20, amount: strMeasure20 },
                            ]
    // ingredientMeasure.map(item => {
        
    //     console.log(item.ingredient, item.amount);
    // })
    



    const handleYoutubelink = (link) => {
        if (typeof (link) != "undefined") {
            const youtubeLinksplit = link.split('=');
            const youtubeVideoid = youtubeLinksplit[1];
            const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoid}`;
            return youtubeUrl;
        }
    }


    return (
        <div className=''>
            <div className='w-full sm:w-3/4 mx-auto '>
                <h1 className='bg-red-400 text-white text-center text-4xl p-4 rounded'>Dish Details</h1>

                <div className='grid grid-cols-12 '>
                    <div className='col-span-12 sm:col-span-4'>
                        <img src={strMealThumb} className='p-4' alt="" />
                        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ipsam quae, qui magnam minima possimus facere ipsa labore asperiores quod!</p> */}
                    </div>
                    <div className='col-span-12 sm:col-span-8 my-auto space-y-3'>

                        <h1 className='text-4xl text-center text-red-500'>{strMeal}</h1>
                        <hr />
                        <h2 className='text-center text-gray-400'>{strCategory} Dish</h2>
                        <h2 className='text-center italic text-gray-400'>{strTags}</h2>
                        <div className=' flex justify-center'>
                            <button className='bg-slate-700 px-5 py-2 hover:bg-slate-800 text-white duration-200 my-2 rounded-md'><i className="fa-solid fa-bookmark mr-2"></i>Save recipie</button>
                        </div>


                    </div>

                    {/* https://www.youtube.com/watch?v=4aZr5hZXP_s */}
                    {/* https://www.youtube.com/embed/YuOOiSrqVeM */}
                </div>
                <div className='grid grid-cols-12 my-3 '>
                    <div className='col-span-12 lg:col-span-8'>
                        <h1 className='text-4xl text-center bg-red-400 text-white p-3 rounded'><i className="fa-solid fa-bowl-rice mr-2"></i>How to Cook</h1>
                        <p className='text-justify p-5'>{strInstructions}</p>
                    </div>
                    <div className='col-span-12 lg:col-span-4'>

                        <iframe height="315" src={handleYoutubelink(strYoutube)} className='w-full p-3' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='grid grid-cols-12 mt-16 mb-16'>

                    <div className='col-span-12 lg:col-span-5'>
                        
                        <img src={require("../../images/Chef.gif")} alt="" />

                    </div>
                    <div className='col-span-12 lg:col-span-7 lg:px-3'>
                        <h1 className='text-4xl text-center bg-red-400 text-white p-3 rounded'><i className="fa-solid fa-kitchen-set mr-2"></i>Ingredients</h1>
                        <table className='table-auto w-full border-collapse border border-red-500 p'>
                            <thead className='border border-red-600 '>
                                <tr>
                                    <th className='border border-b-4 border-red-600 p-2'>Ingridient</th>
                                    <th className='border border-b-4 border-red-600 p-2'>Measurement</th>

                                </tr>
                            </thead>
                            <tbody>
                               
                            {
                               ingredientMeasures.map(ingredientMeasure => ingredientMeasure.ingredient? <TableBodyRow ingredientMeasure ={ingredientMeasure}></TableBodyRow>: console.log('nodata')) 
                            }
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            
        </div>
        
    );
};

export default Details;