import React from 'react'
import { Header } from '../Header/Header'
import HomeImage from '../HomeImage/HomeImage'
import OfferImage1 from '../OfferImage1/OfferImage1'
import OfferImage2 from '../OfferImage2/OfferImage2'
import ListProducts from '../ListProducts/ListProducts'
import Brands from '../Brands/Brands'

import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Header />
      <HomeImage />
      {/* <HomeSlide /> */}
      <div className="offer-images-container">
        <div className="offer-image1"><OfferImage1 /></div>
      
        <div className="offer-image2"><OfferImage2 /></div>
    </div>
    <div className='home-list-product'>
    <ListProducts />
    <Brands />
    <Footer />
    </div>
    </div>
  )
}

export default Home