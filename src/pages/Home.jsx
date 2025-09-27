import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Support from '../components/Support'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import Plans from '../components/Plans'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Support />
      <Features />
      <Benefits />
      <Plans />
      <Footer />
    </>
  );
};

export default Home;
