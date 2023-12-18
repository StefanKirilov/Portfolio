import './about.css';
import LogoTitle from '../../src/assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from './AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { Circles } from 'react-loader-spinner'

export default function About() {

    const [letterClass, setLetterClass] = useState('text-animate');



    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate2-hover')
        }, 1000)
    }, []);



    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I'm very ambitious front-edn developer looking for a role in
                        established IT company with the opportunity to wor with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quietly confident, naturally curious and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, a sports fanatic, photography, and tech-obsessed!
                    </p>

                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>

                    </div>
                </div>
            </div>
            {/* <Loader type="pacman" /> */}
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