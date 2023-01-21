import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
const Content = ({routes}) => {
  const location = useLocation(); /*Használhatóak lesznek a linkek*/
  return (
    <AnimatePresence>
    <div className="Content">
      <Routes location={location} key={location.pathname}>
           {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
           ))}
      </Routes>
    </div>
    </AnimatePresence>
  )
}

export default Content