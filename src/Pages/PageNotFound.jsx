import React from 'react'
import CustomMotion from '../components/CustomMotion'
import '../styles/PageNotFound.css'
import { Link } from 'react-router-dom'

export default function PageNotFound(props) {
    return (
        <CustomMotion className="NotFound">
            <h2>Ajjajj, Az oldal nem található. </h2>
            <Link to="/">Vissza a kezdőlapra🍕</Link>
       </CustomMotion>
    )
}
