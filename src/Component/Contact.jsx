import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../CSS/Contact.css'
export default function Contact() {

let whatsapp=()=>
{
  const message = "Hello! I am interested in this tournament.";
  const whatsappURL = `https://wa.me/91${7719000398}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}

  return (
    <div>
      <Header/>
    <div className="contct">
         <h1>Contact Us</h1>
         <div className="contact-main">
          
          <FontAwesomeIcon icon={faWhatsapp} onClick={whatsapp} id='icon'/>
          <h2>Contact on Whatspp</h2>

         </div>
         <div>
          <h5>Please click on whatsapp Logo</h5>
         </div>
    </div>

      <Footer/>
    </div>
  )
}
