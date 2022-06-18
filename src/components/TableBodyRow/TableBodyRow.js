import React from 'react';

const TableBodyRow = (props) => {
    const{ingredient, amount} =props.ingredientMeasure;
    return (
        
        
            <tr className=''>
                <td className='border border-red-600 p-2 text-center '>{ingredient}</td>
                <td className='border border-red-600 p-2 text-center '>{amount}</td>

            </tr>
        
    );
};

export default TableBodyRow;