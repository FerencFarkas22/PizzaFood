import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import Logo from '../assets/pizzaLogo.png'
import 'boxicons'
import { CartContext } from '../context/CartContext'



const Header = ({ menu }) => {
const [navStyle, setNavStyle] = useState("navbar-right-none")


function handleNavbarMobile() {
    if(navStyle === "navbar-right-none"){
      setNavStyle("navbar-right")
    }else{
      setNavStyle("navbar-right-none")
    }
}
function handleMenuItemClick(){
  setNavStyle("navbar-right-none")
}


  const {cart} = useContext(CartContext)
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Header Logo" />
        <button onClick={handleNavbarMobile} className="HamburgerButton"><box-icon size="lg" color="#ffffff" name='menu'></box-icon></button>
      </div>
      <div className={navStyle}>
        {menu.filter(e=> e.menubar === true).map(element => <Link to={element.path} key={element.path} onClick={handleMenuItemClick}>
         {element.icon === null ? null : <box-icon name={element.icon} type='solid' color='#ffffff' animation="tada-hover"></box-icon>} 
          {element.name} {element.path === "/cart" && cart.length > 0 ? <>({cart.length})</>: "" }
        </Link>)}

       
      </div>
    </div>
  )
}

export default Header