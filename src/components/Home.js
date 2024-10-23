import React from 'react'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'
import FeaturedTopics from './featuredSection/FeaturedTopics'

const Home = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Banner />
        <FeaturedTopics />
    </div>
  )
}

export default Home