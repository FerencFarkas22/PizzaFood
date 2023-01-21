import React from 'react'
import { Link } from 'react-router-dom'
import PizzaBg from '../assets/pizza.jpeg'
import "../styles/Home.css"
const Home = (props) => {
    return (
        <div className='Home' style={{backgroundImage:`url(${PizzaBg})`}}>
            <div className="homeContainer">
                <h1>PizzaFood</h1>
                <p>Sül már a ropogós - viszi a robogós</p>
                <Link to="/menu">
                    <button>Rendelés</button>
                </Link>
                <Link to="/reservation">
                    <button>Asztalfoglalás</button>
                </Link>
                <p></p>
            </div>
        </div>
    )
}

export default Home