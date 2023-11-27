import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Footer from '../Components/Footer/Footer'
import NewsLetters from '../Components/NewsLetters/NewsLetters'
import Product from '../Components/Popular/product'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Product/>
      <NewsLetters/>
    </div>
  )
}

export default Home
