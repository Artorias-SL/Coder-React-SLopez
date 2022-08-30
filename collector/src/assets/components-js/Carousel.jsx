import React from "react";
import sound from '../images/Sound-of-Metal-01.jpg'
import mank from '../images/Mank-023.jpg';
import no_country from '../images/no-country-for-old-men-2007-1639.png';
const Carousel=()=>{
    return(
    <div className="carousel">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={no_country} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={mank} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={sound} className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>    
    </div>
)
}
export default Carousel;