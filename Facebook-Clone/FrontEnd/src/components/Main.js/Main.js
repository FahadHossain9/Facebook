import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Widgets from '../Widgets';
import './Main.css'
function Main() {
  return (
    <div className="main">
      <Header/>
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    </div>
  )
}

export default Main