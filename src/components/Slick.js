import React, { useState } from "react"

import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Slick() {
  const config = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  const [settings, setSettings] = useState(config)

  const products = [
    {
      img: "/images/image1.jpg",
      title: "Class I to V std",
      text: "Lorem ipsum dolor sit amet elit.",
    },
    {
      img: "/images/image2.jpg",
      title: "Class VI std",
      text: "Lorem Ipsum adipiscing elit ipsum.",
    },
    {
      img: "/images/image3.jpg",
      title: "Class VII std",
      text: "Orci porta non pulvinar neque laoreet.",
    },
    {
      img: "/images/image4.jpg",
      title: "Class VIII std",
      text: "Bibendum neque egestas congue quisque.",
    },
    {
      img: "/images/image5.jpg",
      title: "Class XI std",
      text: "Mattis rhoncus urna neque viverra justo.",
    },
  ]

  return (
    <div className="App mt-100">
      <div className="container">
        <h2 className="section-h3 text-center">Search by Categories</h2>
        <p className="text-center">
          Search your Categories opportunity with our categories
        </p>
        <Slider {...settings}>
          {products.map((x, i) => {
            return (
              <div key={i} className="img-card">
                <img className="img" src={x.img} alt="description" />
                <div class="card-body">
                  <div className="card-title">{x.title}</div>
                  <div className="card-text">{x.text}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Slick
