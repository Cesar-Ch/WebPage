import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/contact.css'
import contactImg from '../assets/contact.svg'
import check from '../assets/check.svg'



const Contact = () => {


    const msgRef = useRef(null)

    const seeMsg = () => {

        msgRef.current.classList.add('show')
        msgRef.current.classList.remove('hide')

        setTimeout(function () {
            msgRef.current.classList.add('hide')
            msgRef.current.classList.remove('show')
        }, 1500);
    }




    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_elt2u96', 'template_421pa9a', event.target, '0lDePn5HKp-QSoRaD')
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="text-section">
                    <h2>Contacto</h2>
                </div>
                <div className="cont-contact">
                    <div className="img-contact">
                        <img src={contactImg} alt="" />
                    </div>
                    <div className="form-contact">
                        <form onSubmit={sendEmail}>
                            <h3>INFORMES</h3>
                            <div className="form_container">
                                <div className="form_group">
                                    <input type="text" name="nombres" id="name" className="form_input" placeholder=" " />
                                    <label htmlFor="name" className="form_label">Nombre:</label>
                                </div>
                                <div className="form_group">
                                    <input type="email" name="correo" id="email" className="form_input" placeholder=" " />
                                    <label htmlFor="email" className="form_label">Correo:</label>
                                </div>
                                <div className="form_group">
                                    <input type="tel" name="telefono" id="phone" className="form_input" placeholder=" " />
                                    <label htmlFor="phone" className="form_label">Telefono:</label>
                                </div>
                                <div className="form_group">
                                    <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder=" "></textarea>
                                    <label htmlFor="textarea" className="form_label">Comentario:</label>
                                </div>
                                <input type="submit" value="Enviar" id="send" onClick={seeMsg} />
                            </div>

                        </form>
                    </div>
                </div>

                <div className='alerta--contact  hide' ref={msgRef} >
                    <div className="alert">
                        <span className="check">
                            <img src={check} alt="" />
                        </span>
                        <span className="msg">Mensaje enviado</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact