import React from 'react';

const Categories = ({filterItems,categoryList}) => {
  return <div className='btn-container'>
    {categoryList.map((category,index)=>{
      return <button key={index} className='filter-btn' onClick={()=>filterItems(category)}>{category}</button>
    })}
  </div>;
};

export default Categories;
