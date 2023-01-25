import React, { useContext, useState } from 'react'
import CustomMotion from '../components/CustomMotion'
import { CartContext } from '../context/CartContext'
import Pepperoni from '../assets/pepperoni.jpg'
import '../styles/Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  function remove(element) {
    let newCart = cart.filter(a => true);
    newCart.splice(element, 1);
    console.log(element);
    setCart(newCart)

  }

  return (
    <CustomMotion className="cart">
      <h1>Kosár tartalma</h1>
      {cart.length === 0 && <div className="empty"><h2>Nincs semmi a kosárban, <Link to="/menu">Vissza az étlaphoz</Link></h2></div> }
      {cart.length !== 0 && (<table className='cartList'>
        <thead>
          <th align='left'>Megnevezés</th>
          <th align='center'>Egyéb</th>
          <th align='center'>Törlés</th>
          <th align='right'>Ár</th>
        </thead>
        <tbody>
          {cart.map((element, index) => (
            <tr>
              <td>{element.name}</td>
              <td align='center'>{element.other}</td>
              <td align='center'><button className='cartButton' onClick={() => remove(index)}>Törlés</button></td>
              <td align='center'>{element.price} Ft</td>
            </tr>
          ))}

        </tbody>
        <tfoot>
          <th colSpan={3}></th>
          <th align="right">Fizetendő: {cart.map(a => a.price).reduce((a, b) => a + b, 0)} Ft</th>
        </tfoot>
      </table>)
}
      

    </CustomMotion>
  )
}

export default Cart