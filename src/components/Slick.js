import React, { useState } from "react"

import Slider from "react-slick"

// Import css files
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
  }

  const [settings, setSettings] = useState(config)

  return (
    <div className="App mt-100">
      <div className="container">
        <h2 className="section-h3 text-center">Search by Categories</h2>
        <p className="text-center">
          Search your Categories opportunity with our categories
        </p>
        <Slider {...settings}>
              <div className="img-card">
                <img className="img" src={img1} alt="description" />
                <div class="card-body">
                  <div className="card-title">title</div>
                  <div className="card-text">text</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img2} alt="description" />
                <div class="card-body">
                  <div className="card-title">title</div>
                  <div className="card-text">text</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img3} alt="description" />
                <div class="card-body">
                  <div className="card-title">title</div>
                  <div className="card-text">text</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img4} alt="description" />
                <div class="card-body">
                  <div className="card-title">title</div>
                  <div className="card-text">text</div>
                </div>
              </div>

              <div className="img-card">
                <img className="img" src={img5} alt="description" />
                <div class="card-body">
                  <div className="card-title">title</div>
                  <div className="card-text">text</div>
                </div>
              </div>                                          
        
        </Slider>
      </div>
    </div>
  )
}

export default Slick
