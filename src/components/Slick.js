import React, { useState } from "react"
import Slider from "react-slick"
import './Bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../images/image1.jpg"
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
import img4 from "../images/image4.jpg"
import img5 from "../images/image5.jpg"

function Slick() {
  const config = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const [settings, setSettings] = useState(config)

  return (
    <div className="App mt-100">
      <div className="container">
        <div className="row">
        <h2 className="section-h3 text-center">Search by Categories</h2>
        <p className="text-center">
          Search your Categories opportunity with our categories
        </p>
        <Slider {...settings}>
              <div className="img-card">
                <img className="img" src={img1} alt="description" />
                <div class="card-body">
                  <div className="card-title">Class I to V</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img2} alt="description" />
                <div class="card-body">
                  <div className="card-title">Class VI</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img3} alt="description" />
                <div class="card-body">
                  <div className="card-title">Class VII</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img4} alt="description" />
                <div class="card-body">
                  <div className="card-title">Class VIII</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img5} alt="description" />
                <div class="card-body">
                  <div className="card-title">Class IX</div>
                  <div className="card-text">Lorem Ipsum</div>
                </div>
              </div>                                          
        
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Slick
