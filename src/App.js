import React, { useState,useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Items from './data';

function App() {
  const [items,setItems] = useState(Items);
  const [categories,setCategories] = useState([]);
  const filterItems = (category) =>{
    if(category ==="All")
      setItems(Items);
    else {
      const NewItems = Items.filter((item)=> item.category===category)
      setItems(NewItems);
    }
  }
  
  useEffect(()=>{
      // const uniquecategories= Items.reduce(function(accumulator,currval)
      // {
      //     if(!accumulator.includes(currval.category))
      //     {
      //       accumulator.push(currval.category);             //to make sure we includes onlu unique value
      //     }
      //     return accumulator;
      // },["All"]);                                           //as all in not in array as category so we add it manually
      //Other way
      const uniquecategories = ["All",...new Set(Items.map((Item)=>Item.category))]
      setCategories(uniquecategories);
  },[])

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} categoryList = {categories}/>
      <Menu items= {items}/>
    </section>
  </main>;
}

export default App;
