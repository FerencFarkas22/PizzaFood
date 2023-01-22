import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import Logo from '../assets/pizzaLogo.png'
import 'boxicons'
import { CartContext } from '../context/CartContext'

const Header = ({ menu }) => {
  const {cart} = useContext(CartContext)
  return (
    <div className="navbar">
      <div className='navbar-left'>
        <img src={Logo} alt="Header Logo" />
      </div>
      <div className="navbar-right">
        {menu.filter(e=> e.menubar === true).map(element => <Link to={element.path} key={element.path}>
         {element.icon === null ? null : <box-icon name={element.icon} type='solid' color='#ffffff' animation="tada-hover"></box-icon>} 
          {element.name} {element.path === "/cart" && cart.length > 0 ? <>({cart.length})</>: "" }
        </Link>)}

        <button><box-icon size="lg" color="#ffffff" name='menu'></box-icon></button>
      </div>
    </div>
  )
}

export default Header