import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import CustomMotion from '../components/CustomMotion'
import { motion } from 'framer-motion'
import motionConfig from "../assets/motion.json"
import Carousel from 'react-bootstrap/Carousel';
import Pizza1 from '../assets/pizza.jpeg'
import Pizza2 from '../assets/homeImage.jpg'
import Pizza3 from '../assets/homeImage2.jpg'
import Pizza4 from '../assets/homeImage3.jpg'
const Home = (props) => {




    return (
        <CustomMotion
            className='Home'>
            <div className='background'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Pizza4}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Pizza2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Pizza3}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Pizza1}
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="homeContainer">
                <motion.h1
                    initial={{x:100, opacity:0}}
                    animate={{ x: 0, opacity:1}}
                    transition={{ duration: 1 }}>PizzaFood</motion.h1>
                <motion.h2
                    initial={{x:100, opacity:0}}
                    animate={{ x: 0, opacity:1}}
                    transition={{ duration: 1, delay:0.5 }}>A k??rny??k legjobb pizz??i!</motion.h2>
                <motion.p
                    initial={{x:100, opacity:0}}
                    animate={{ x: 0, opacity:1}}
                    transition={{ duration: 1, delay:1 }}>??tterm??nk k??zel 150 ??ves receptjei alapj??n m??k??dnek ??s a pizz??ink kemenc??ben s??lnek! Ha csal??dias ??zekre v??gyik, t??rjen be hozz??nk!</motion.p>
                <Link to="/menu">
                    <motion.button
                    initial={{y:75, opacity:0}}
                    animate={{ y: 0, opacity:1}}
                    transition={{ duration: 0.5, delay:1.3 }}
                    >Rendel??s</motion.button>
                </Link>
            <Link to="/reservation">
                <motion.button
                    initial={{y:75, opacity:0}}
                    animate={{ y: 0, opacity:1}}
                    transition={{ duration: 0.5, delay:1.5 }}>Asztalfoglal??s</motion.button>
            </Link>
        </div>
        </CustomMotion >
    )
}

export default Home