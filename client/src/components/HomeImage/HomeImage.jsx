import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'


function HomeImage() {
    const images = [
      'https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-para-Xiaomi_10449.jpg',
      'https://thumbs.dreamstime.com/z/web-banner-horizontal-template-design-special-offer-mobile-phones-advertising-concept-167469700.jpg',
      'https://telecomtalk.info/wp-content/uploads/2021/04/vivo-v21-5g-india-camera.jpeg',
        // Add more image URLs as needed
      ];
    
      return (
        <div>
          <ImageSlider images={images} />
        </div>
      );
}

export default HomeImage