import './home.css';
import LogoTitle from '../../src/assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from './AnimatedLetters';
import Logo from './Logo';
import myImage from '../../src/assets/images/stefan.jpg';
import { Circles } from 'react-loader-spinner'


export default function Home () {

    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['t', 'e', 'f', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd','e', 'v', 'e','l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);
    
    return (
        <div className='container home-page'>
            <div className='text-zone'>
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={20}/>
                </h1>
                <h2>Frontend Developer / JavaScript</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            {/* <Logo /> */}
            <img className='myImg' src={myImage}/>
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
        </div>
    );
}