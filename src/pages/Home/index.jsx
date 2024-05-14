import React from 'react'

import Newsletter from '../../components/Newsletter'
import PopularCardSlider from '../../components/slider/PopularCardSlider'
import Categories from '../../components/Categories'

const Home = () => {
  return (
    <>
      
   < Categories/>
   <PopularCardSlider/>
   <Newsletter/>
    </>
    
  )
}

export default Home