import React, { useContext, useState } from 'react'
import {CartContext} from '../context/CartContext'



const MenuItem = ({food, unit}) => {
    const [size, setSize] = useState(food.sizes[0]);
    const {cart, setCart} = useContext(CartContext);
    
    function addToCart(){ 
        const elementsInCart = cart.filter(a => true);
        elementsInCart.push({
            name: food.name,
            image:food.image,
            other: size.size + " " + unit,
            price: size.price

        })
        setCart(elementsInCart);
    }

  return (
    <div className="menuItem"> 
    <div style={{backgroundImage: `url(${food.image})`}}></div>
        <h1>{food.name}</h1>
        <p className='description'>
            {food.description}
        </p>
      {food.sizes.map(csize => {
        return <button 
        onClick={() => {setSize(csize)}}
        key={csize.size} className={csize === size ? "active": ""}>
            {csize.size} 
            </button>
      })}
    <p className='price'>{size.price} Ft</p> 
    <button onClick={()=>addToCart()} className='addToCart'><box-icon size="sm" color="white" name='cart-add'></box-icon>Kosárba</button>
    </div>

  )
}

export default MenuItem