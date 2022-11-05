import React, { useState } from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <meta name="description" content="AirBnb Clone" />
        <meta itemprop="name" content="AirBnb" />
        <meta
          itemprop="description"
          content="AirBnb Clone created with Next JS and Tailwind CSS"
        />
        <meta itemprop="image" content="AirBnb Props" />
        <link rel="icon" href="/airbnbFavicon.png" />
      </Head>

      <nav>
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
      </nav>

      <main>
        <Hero />
        <Card />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
