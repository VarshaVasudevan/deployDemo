import React from 'react'
import { SliderData } from './SliderData'
import ImageSlider from './ImageSlide'

const HomeSlide = () => {
  return (
    <ImageSlider slides={SliderData} />
  )
}

export default HomeSlide