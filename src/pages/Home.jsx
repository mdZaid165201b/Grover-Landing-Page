import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Favorites from '../components/Favorites';
import HomeDeliverySection from '../components/HomeDeliverySection';
import DownloadAppSection from '../components/DownloadSection';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Feature />
        <Favorites />
        <HomeDeliverySection />
        <DownloadAppSection />
        <Footer />
    </main>
  )
}

export default Home