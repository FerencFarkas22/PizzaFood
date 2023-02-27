import React, {useContext} from 'react'
import { PizzaList, PizzaUnit } from '../datasources/PizzaList'
import {MeatList, MeatUnit } from '../datasources/MeatList'
import {softDrinkList, softDrinkUnit } from '../datasources/softDrinkList'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import MenuItem from '../components/MenuItem'
import CustomMotion from '../components/CustomMotion'
import '../styles/Menu.css'
import "boxicons"


const Menu = (props) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <CustomMotion className="menu">
      <Link className={cart.length == 0 ? "cartnone": "cartLink"} to="/cart"><div className="cart">
      <box-icon name='cart' color="#fff"></box-icon>
      <section>{cart.length}</section>
      </div></Link>
      <div className="menuTitle"> Pizzák</div>
      <div className="menuList">
        {PizzaList.map(c => <MenuItem food={c} key={c.name} unit={PizzaUnit}/>
        )}
      </div>

      <div className="menuTitle">Tálak</div>
      <div className="menuList">
        {MeatList.map(c => <MenuItem food={c} key={c.name} unit={MeatUnit}/>
        )}
      </div>

      <div className="menuTitle">Üdítők</div>
      <div className="menuList">
        {softDrinkList.map(c => <MenuItem food={c} key={c.name} unit={softDrinkUnit}/>
        )}

      </div>
    </CustomMotion>
  )
}

export default Menu