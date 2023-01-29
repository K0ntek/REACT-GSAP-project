import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from "bootstrap";


//IMAGES
import img1 from "../images/audi/rs6.jpg"
import img2 from "../images/audi/rs6-7.jpg"
import img3 from "../images/audi/rs6-3.jpg"

const Gallery =()=>{
    return(
        <div className="container-fluid g-0 col-12">
            <div className="row">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} alt="Los Angeles" className="d-block col-12"/>
                    </div>
                <div className="carousel-item">
                    <img src={img2} alt="Chicago" className="d-block col-12"/>
                </div>
                    <div className="carousel-item">
                        <img src={img3} alt="New York" className="d-block col-12"/>
                    </div>
                </div>


                  <div className="buttons justify-content-end ">
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                  </div>
                </div>
            </div>
        </div>
    )
}


export default Gallery;