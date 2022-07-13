import React from 'react'
import Header from './Header';
import Dashboard from './Dashboard';
import Menu from './Menu';
import Footer from './Footer';
export default function Main() {
  return (
    <div class='wrapper'>
      <Header/>
      <Dashboard/>
      <Menu/>
      <Footer/>
    </div>
  )
}
