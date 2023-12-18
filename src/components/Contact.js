import Loader from 'react-loaders';
import './contact.css';
import AnimatedLetters from './AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import { sendForm } from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Circles } from 'react-loader-spinner'

export default function Contact () {

    const [letterClass, setLetterClass] = useState('text-animate');

    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate2-hover')
        }, 1000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        sendForm(
            'service_ckorg0p', 
            'template_5hyt5o4', 
            refForm.current, 
            'cN1uhPyyRPs2_dtSf')
            .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a' , 'c', 't', ' ', 'm' , 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious opportunities or large projects.
                    However, if you have other request or question, don't hesitate to 
                    contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' 
                                name='email' 
                                placeholder='Email' 
                                required />
                            </li>
                            <li>
                                <input 
                                placeholder='Subject' 
                                type='text' 
                                name='subject' 
                                required/>
                            </li>
                            <li>
                                <textarea 
                                placeholder='Message' 
                                name='message' 
                                required></textarea>
                            </li>
                            <li>
                                <input 
                                type='submit' 
                                className='flat-button' 
                                value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Stefan Kirilov,
                <br />
                Bulgaria,
                <br />
                Stara Zagora, 6000 <br />
                Nikola Kojuharov 2 <br />
                <span>stefank5248@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[42.4320118, 25.6340487]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.4320118, 25.6340487]}>
              <Popup>Stefan lives here!</Popup>
            </Marker>
          </MapContainer>
            </div>
        </div>
        {/* <Loader type='pacman' /> */}
        <div className='loaders'>
                <Circles
                    height="80"
                    width="80"
                    color="#ffd700"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </>
    )
}
