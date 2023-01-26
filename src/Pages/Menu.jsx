import React from 'react'
import { PizzaList, PizzaUnit } from '../datasources/PizzaList'
import {MeatList, MeatUnit } from '../datasources/MeatList'
import {softDrinkList, softDrinkUnit } from '../datasources/softDrinkList'
import MenuItem from '../components/MenuItem'
import CustomMotion from '../components/CustomMotion'
import '../styles/Menu.css'



const Menu = (props) => {
  return (
    <CustomMotion className="menu">
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