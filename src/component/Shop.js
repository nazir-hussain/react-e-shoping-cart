import React, { useState } from 'react'
import list from '../Data'
import Card from './Card'
import '../styles/Shop.css'

const Shop =()=> {
  
  const [cart, setcart] = useState([]);

  const handleClick= (item) =>{
    cart.push(item);
  }

  return (
    <section>
        {list.map((item)=>(
            <Card key={item.id} item={item} handleClick={handleClick}/>
        ))}
    </section>
  )
}

export default Shop