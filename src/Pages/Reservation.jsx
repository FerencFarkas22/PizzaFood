import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'
import LeftPicture from '../assets/pizzaLeft.jpg'
import CustomMotion from '../components/CustomMotion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Reservation = () => {
  let [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [reserve, setReserve] = useState('');
  const [text, setText] = useState('');
  const form = useRef();


  //A naptár date értékeinek kinyerése
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());
  const [fullDate, setFullDate] = useState(`Év:${year.toString()}, Hónap:${month.toString()}, Nap:${day.toString()}`)

  //A naptár értékeit kinyerjük és stringé alakítjuk
  useEffect(() => {
    setFullDate(`Év:${year.toString()}, Hónap:${month.toString()}, Nap:${day.toString()}`);
  })


  //Minden változáskor frissül
  const onChange = date => {
    setYear(date.getFullYear())
    setMonth(date.getMonth() + 1)
    setDay(date.getDate())
    setFullDate(`Év:${year.toString()}, Hónap:${month.toString()}, Nap:${day.toString()}`);
    setDate(date)
  }

  const notify = () => toast(`Az email sikeresen elküldve`, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: "success"
  })
  const wrongDatas = () => toast(`Minden mező kitöltése kötelező`, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: "error"
  })

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n8cs91q', 'template_qkwq2pl', form.current, 'JQ6mZwTuO48I8YIij')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        return notify();
      }, (error) => {
        console.log(error.text);
      });
  };


  const handleWrong = () => {
    return wrongDatas();
  }

  function nameHandler(e) {
    setName(e.target.value)
  }
  function emailHandler(e) {
    setEmail(e.target.value)
  }
  function telHandler(e) {
    setTel(e.target.value)
  }
  function reserveHandler(e) {
    setReserve(e.target.value)
  }
  function textHandler(e) {
    setText(e.target.value)
  }




  return (
    <CustomMotion className="contact">
      <div style={{ backgroundImage: `url(${LeftPicture})` }} className="contact-left">

      </div>
      <div className="contact-right">
        <h2>Asztalfoglalás</h2>
        <form ref={form} method="POST" onSubmit={name === "" || email === "" || tel === "" || text === "" || reserve === "" ? handleWrong : sendEmail}>

          <label>Teljes név</label>
          <input name="user_name" onChange={nameHandler} type="text" autoComplete='off' placeholder='Adja meg a nevét' required />

          <label>Email</label>
          <input name='user_email' onChange={emailHandler} type="email" autoComplete='off' placeholder='Adja meg az e-mail címét' required />

          <label>Telefonszám</label>
          <input name='user_tel' onChange={telHandler} type="text" autoComplete='off' placeholder='Adja meg a telefonszámát' required />


          <label>Foglalás ennyi fő részére</label>
          <input name='user_reserve' onChange={reserveHandler} type="number" defaultValue={1} min={1} max={6} autoComplete='off' required />


          <label>Egyéb üzenetek</label>
          <textarea name='message' onChange={textHandler} cols="15" rows="10" placeholder='Üzenet...' required></textarea>
          <h3>{`Az ön foglalása: ${year}-${month}-${day}.`}</h3>
          <div className="calendar">
          
            <Calendar onChange={onChange} value={date} minDate={new Date()} calendarType="ISO 8601" />
            <input type="text" name="user_date" value={fullDate} style={{ display: "none" }} /> {/* Inputba átadtam a full date string értékét hogy emailjsbe el tudjan küldeni*/}
          </div>
          
          *Kollégáink minden esetben felveszik Önnel a kapcsolatot a pontos időpont, illetve a foglalás véglegesítése miatt!
          <hr />
          ** Amennyiben több mint 6 fő részére szeretne foglalni, kérjük vegye fel velünk a kapcsolatot telefonon keresztül!
          <button className='sendButton' type="submit" onClick={name === "" || email === "" || tel === "" || text === "" || reserve === "" ? handleWrong : notify}>
            Küldés
          </button>
          <ToastContainer />
        </form>
      </div>
    </CustomMotion>
  )
}

export default Reservation