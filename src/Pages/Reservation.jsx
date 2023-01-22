import React from 'react'
import { motion } from 'framer-motion'
import motionConfig from "../assets/motion.json"
import '../styles/Contact.css'
import LeftPicture from '../assets/pizzaLeft.jpg'
import CustomMotion from '../components/CustomMotion'
const Reservation = () => {
  return (
    <CustomMotion className="contact"
    >
      <div style={{backgroundImage:`url(${LeftPicture})`}} className="contact-left">

      </div>
      <div className="contact-right">
      <h2>Asztalfoglalás</h2>
      <form action="" method='post'>

        <label>Teljes név</label>
        <input type="text"  autoComplete='off' placeholder='Adja meg a nevét'/>

        <label>Email</label>
        <input type="email"  autoComplete='off' placeholder='Adja meg az e-mail címét'/>

        <label>Telefonszám</label>
        <input type="text"  autoComplete='off' placeholder='Adja meg a telefonszámát'/>

        
        <label>Foglalás ennyi fő részére</label>
        <input type="number" defaultValue={1} min={1} max={6} autoComplete='off'/>

        
        <label>Egyéb üzenetek</label>
        <textarea cols="15" rows="10" placeholder='Üzenet...'></textarea>

        *Kollégáink minden esetben felveszik Önnel a kapcsolatot mielőtt a foglalást véglegesítik
        <hr />
        ** Amennyiben több mint 6 fő részére szeretne foglalni, kérjük vegye fel velünk a kapcsolatot telefonon keresztül!
      <button>
        Küldés
      </button>
     
      </form>
      </div>
    </CustomMotion>
  )
}

export default Reservation