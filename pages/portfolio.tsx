import React from 'react';
import Head from 'next/head'

import Header from '../components/header/Header';

class Home extends React.Component<{}> {   

  render(){
    return (
      <>
        <Head>
          <title>Valerii Semash</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <iframe src='assets/pages/portfolio-slide/index.html' className='w-full h-[100vh]'/>    
        <Header/>
      </>
    );
  }
}

export default Home;