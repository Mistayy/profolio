import { useState, useEffect } from 'react';
import { simpleSettings,appTitle } from '../globals/globals.jsx';
import Loading from '../components/Loading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = ( ) => {

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    const [isLoaded, setLoadStatus] = useState(true)
    
    return (
        <>
        { isLoaded ?
            <div className="slider-container">
                <Slider {...simpleSettings}>
                    <article className='slide-article'>
                        <div className="content">
                            <h1>Hi I am Liwen</h1>
                            <h1>Hi I am Liwen</h1>
                        </div>
                        <p>I am a Full-Sack Web Application developer!</p>
                    </article>
                    <article className='slide-article'>
                        <h1>Full-Stack Developer</h1>
                        <p>I posses a comprehensive understanding of full software development lifecycle.</p>
                    </article >
                    <article className='slide-article'>
                        <h1>Curious and Passionate</h1>
                        <p>I love solving problems and I enjoy helping others out!</p>
                    </article>
                </Slider>
            </div>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
