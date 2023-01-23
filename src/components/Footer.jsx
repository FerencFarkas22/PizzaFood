import React from 'react'
import '../styles/Footer.css'
import 'boxicons'
const Footer = () => {
  const socialMediaElements = [
    {"name":"Facebook", href:"https://facebook.com", icon: "facebook"},
    {"name":"Instagram", href:"https://instagram.com", icon: "instagram"},
    {"name":"Twitter", href:"https://twitter.com", icon: "twitter"},
  ]


  return (
    <div className="Footer">
      <div className="social-media">
        {socialMediaElements.map(e => (
          <span key={e.name} style={{cursor:"pointer"}} onClick={()=> window.location.href=e.href}>
            <box-icon type='logo' name={e.icon}
             color="#fff" size="md" animation="tada-hover"></box-icon>
          </span>
        ))}
      </div>
      <p>PizzaFoot &copy; 2022, Farkas Ferenc</p>
    </div>
  )
}

export default Footer