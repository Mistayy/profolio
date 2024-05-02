import { useState, useEffect } from 'react';
import { appTitle ,handleSlideChange,resetBackgroundColor} from '../globals/globals.jsx';
import Loading from '../components/Loading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import patternImage from '../images/pattern.png';


const Home = ( ) => {

    useEffect(() => {
        document.title = `${appTitle} - Home`;
        resetBackgroundColor('#4B4947');
    }, []);

    const [isLoaded, setLoadStatus] = useState(true)
    const simpleSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        afterChange: handleSlideChange,
        appendDots: dots => {
          return <ul style={{ margin: '0px',padding:'0px' }}>{dots}</ul>;
        },
        customPaging: i => (
          <div
            style={{
              width: "30px",
              height:"30px",
              color:"transparent",
              border: "3px white solid",
              borderRadius:"50%",
              backgroundImage: `url(${patternImage})`,
              backgroundSize: "cover"
            }}
          >
            {i + 1}
          </div>
        )
    
    
    };
    return (
        <>
        { isLoaded ?
            <div className="slider-container">
                <Slider {...simpleSettings} afterChange={handleSlideChange}>
                    <article className='slide-article'>
                        <div className="content">
                            <h1>Hi! I am Liwen</h1>
                            <h1>Hi! I am Liwen</h1>
                        </div>
                        <p>I am a Web Application developer 👩‍💻</p>
                    </article>
                    <article className='slide-article'>
                        <h1>Full-Stack Developer</h1>
                        <p>Comprehensive understanding of full website development lifecycle 👌</p>
                    </article >
                    <article className='slide-article'>
                        <h1 >Curious and Passionate</h1>
                        <p>Helping people solving problems brings me lots of joy 🎊</p>
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
