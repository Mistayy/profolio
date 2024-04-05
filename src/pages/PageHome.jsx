import { useState, useEffect } from 'react';
import { simpleSettings,appTitle } from '../globals/globals';
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
                    <article>
                        <h1>slide1</h1>
                    </article>
                    <article>
                        <h1>slide2</h1>
                    </article>
                    <article>
                        <h1>slide3</h1>
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
