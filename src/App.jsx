import { useState } from 'react'
import { CartContext, CartContextDefault } from './context/CartContext'
import { HashRouter as Router } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import 'boxicons'
import './App.css'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Reservation from './Pages/Reservation'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'

//2:31:43

function App() {
  const [cart, setCart] = useState(CartContextDefault.value);
  const pages = [
    {name: "Kezdőlap", path: '/', menubar: true, element: <Home/>, icon: "home"},
    {name: "Étlap", path: '/menu', menubar: true, element: <Menu/>, icon: "food-menu"},
    {name: "Kosár", path: '/cart', menubar: true, element: <Cart/>, icon: "cart"},
    {name: "Asztalfoglalás", path: '/reservation', menubar: true, element: <Reservation/> , icon:"table"},
    {name: "Kapcsolat", path: '/contact', menubar: true, element: <Contact/>, icon: "contact"},
    {name: "notFound", path: "*", menubar:false, element:<PageNotFound/>, icon: null}
  ]
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <Router>
          <Header  menu={pages}/>
          <Content routes={pages}/>
          <Footer/>
        </Router>
      </div>
    </CartContext.Provider>
  )
}

export default App
