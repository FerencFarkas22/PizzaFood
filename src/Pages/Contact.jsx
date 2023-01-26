import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import LeftPicture from '../assets/makingpizza.jpeg'
import CustomMotion from '../components/CustomMotion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [text, setText] = useState('');
    const form = useRef();

  const notify= () => toast(`Az email sikeresen elküldve`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type:"success"
      })
      const wrongDatas= () => toast(`Minden mező kitöltése kötelező`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type:"error"
      })


    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_n8cs91q', 'template_wy8hjq5', form.current, 'JQ6mZwTuO48I8YIij')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
            return notify();
        }, (error) => {
            console.log(error.text);
        });
    };


    const handleWrong = () => {
        return wrongDatas();
    }


    function nameHandler(e){
        setName(e.target.value)
    }
    function emailHandler(e){
        setEmail(e.target.value)
    }
    function telHandler(e){
        setTel(e.target.value)
    }
    function textHandler(e){
        setText(e.target.value)
    }

    return (
        <CustomMotion className="contact">
            <div style={{ backgroundImage: `url(${LeftPicture})` }} className="contact-left"></div>
            <div className="contact-right">
                <h2>Kapcsolatfelvétel</h2>
                <form ref={form} method="POST" onSubmit={sendEmail}>

                    <label>Teljes név</label>
                    <input name='user_name' type="text" autoComplete='off' onChange={nameHandler} defaultValue={name} placeholder='Adja meg a nevét' required/>

                    <label>Email</label>
                    <input name='user_email' type="email" autoComplete='off' onChange={emailHandler}  placeholder='Adja meg az e-mail címét' required/>

                    <label>Telefonszám</label>
                    <input name='user_mobilenumber' type="text" autoComplete='off'  onChange={telHandler} placeholder='Adja meg a telefonszámát' required/>

                    <label>Miben setíthetünk?</label>
                    <textarea name='message' cols="15" rows="10"  onChange={textHandler}  placeholder='Üzenet...' required></textarea>
                    <button className='sendButton'  type="submit" onClick={name==="" || email==="" || tel==="" || text === "" ? handleWrong :  notify}>
                        Küldés
                    </button>
                    <ToastContainer/>
                    <h3>Megközelíthetőség:</h3>
                    <p>7 Carmine St, New York, NY 10014</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15347.314243079432!2d-74.01393726261298!3d40.73158134210258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259924a960df1%3A0x43b20488619b3f43!2sJoe&#39;s%20Pizza!5e0!3m2!1shu!2shu!4v1674396348252!5m2!1shu!2shu" style={{ border: 0 }} loading="lazy" ></iframe>
                </form>
            </div>
        </CustomMotion>

    )
}

export default Contact