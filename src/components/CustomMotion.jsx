import React from 'react'
import { motion } from 'framer-motion'
import motionConfig from "../assets/motion.json"

export default function CustomMotion (props){
    return (
        <motion.div
            initial={motionConfig.initial}
            animate={motionConfig.animate}
            transition={motionConfig.duration}
            {...props}
        >
            {props.children}
        </motion.div>
    )
}
