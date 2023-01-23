import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import CustomMotion from '../components/CustomMotion'

const Home = (props) => {




    return (
        <CustomMotion
        className='Home'>
            <div className='background'></div>
            <div className="homeContainer">
                <h1>PizzaFood</h1>
                <p>A legjobb pizzéria!</p>
                <Link to="/menu">
                    <button>Rendelés</button>
                </Link>
                <Link to="/reservation">
                    <button>Asztalfoglalás</button>
                </Link>
                <p></p>
            </div>
        </CustomMotion>
    )
}

export default Home