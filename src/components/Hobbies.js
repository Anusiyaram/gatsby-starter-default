import React, { useState } from "react"

import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Hobbies() {
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
      img: "/images/Hobbie.jpg",
      title: "Singing",
      text: "Lorem ipsum dolor sit amet elit.",
    },
    {
      img: "/images/Hobbie1.jpg",
      title: "Like Nature",
      text: "Lorem Ipsum adipiscing elit ipsum.",
    },
    {
      img: "/images/Hobbie2.jpg",
      title: "Grow Plants",
      text: "Orci porta non pulvinar neque laoreet.",
    },
    {
      img: "/images/Hobbie3.jpg",
      title: "Photography",
      text: "Bibendum neque egestas congue quisque.",
    },
    {
      img: "/images/Hobbie4.jpg",
      title: "Guitar",
      text: "Mattis rhoncus urna neque viverra justo.",
    },
    {
      img: "/images/Hobbie5.jpg",
      title: "Yoga",
      text: "Mattis rhoncus urna neque viverra justo.",
    },
    {
      img: "/images/Hobbie6.jpg",
      title: "Swimming",
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

export default Hobbies
