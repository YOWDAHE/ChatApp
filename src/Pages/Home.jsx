import React from 'react'
import MainChat from '../components/MainChat';
import SideBar from '../components/SideBar';
import "../index.scss";

const Home = () => {
  return (
    <div className='home' >
          <SideBar />
          <MainChat />
    </div>
  )
}

export default Home;