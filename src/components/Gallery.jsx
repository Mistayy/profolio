import { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";

const Gallery = ({ content }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <div className="slider-container-about">
            <Slider className='first-slider' 
                    asNavFor={nav2} 
                    ref={slider => (sliderRef1 = slider)} 
                    arrows={false}>
                {content.map(item => (
                    <div className="gallery-image-wrapper">
                        <img key={item.id} src={item.url} alt={item.title} />
                    </div>
                ))}
            </Slider>
            <Slider
                className='second-slider'
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {content.map(item => (
                    <div className="gallery-image-wrapper">
                        <img key={item.id} src={item.url} alt={item.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Gallery;
