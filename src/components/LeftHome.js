import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: '../images/kenju.png' },
    { url: '../images/fishgame.png' },
    { url: '../images/flapp.png'},
    { url: '../images/game1.png'},
    { url: '../images/miney.png'},

  ];

const Slider = () => {
  return (
    <div>
        <SimpleImageSlider
        width={1200}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
        // loop={true}
      />
    </div>
  )
}

export default Slider