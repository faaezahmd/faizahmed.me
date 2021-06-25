import React from "react"
import Header from '../components/Header';
import Head from '../components/Head';
import Intro from '../components/Intro';

import "@fontsource/roboto"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css" 
import "@fontsource/inconsolata"

import '../styles/style.scss';

const Home = () => {

  return (
    <>
    <Head/>
      <Header />
      <div className="site-content">
        <div className="container">
          <Intro />
        </div>
      </div>
    </>
  )
}

export default Home;
