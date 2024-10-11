import { useState } from "react";
import prevArrow from "../../assets/images/previous.svg";
import nextArrow from "../../assets/images/next.svg";  

export default function Slideshow(props) {

    const images = props.images;
    const [currentSlide, setCurrentSlide] = useState(0);

    const displayImage = () => (
        <img src={images[currentSlide]} alt={`Images ${currentSlide + 1}`} />
    );
    
    const nextSlide = () => setCurrentSlide((currentSlide + 1) % images.length);
    const prevSlide = () => setCurrentSlide((currentSlide - 1 + images.length) % images.length);

    return (
        <div className="carousel">{displayImage()}
            <img className="prevArrow" src={prevArrow} alt="prevArrow" onClick={prevSlide} />
            <img className="nextArrow" src={nextArrow} alt="nextArrow" onClick={nextSlide} />
        </div>
    );
}