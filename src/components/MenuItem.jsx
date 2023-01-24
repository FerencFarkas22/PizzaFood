import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuItem = ({ food, unit }) => {
  const [size, setSize] = useState(food.sizes[0]);
  const { cart, setCart } = useContext(CartContext);
  const notify = () => toast(`${food.name} a kosárba került!`, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type:"success",
    zIndex:6,
  });


  function addToCart() {
    const elementsInCart = cart.filter(a => true);
    elementsInCart.push({
      name: food.name,
      image: food.image,
      other: size.size + " " + unit,
      price: size.price

    })
    setCart(elementsInCart);
    return notify();
  }

  return (
    <div className="menuItemPage">
      <ToastContainer style={{width:"350px"}}/>
      <div className="menuItem">
        <div className='foodImage' style={{ backgroundImage: `url(${food.image})` }}></div>
        <div className="foodName"><h2>{food.name}</h2></div>
        <p className='description'>
          {food.description}
        </p>
        {food.sizes.map(csize => {
          return <button
            onClick={() => { setSize(csize) }}
            key={csize.size} className={csize === size ? "active" : ""}>
            {csize.size} {unit}
          </button>
        })}
        <p className='price'>{size.price} Ft</p>
        <button onClick={() => addToCart()} className='addToCart'><box-icon size="sm" color="white" name='cart-add'></box-icon>Kosárba</button>

      </div>
    </div>

  )
}

export default MenuItem