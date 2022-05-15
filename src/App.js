import React from 'react'
import './App.scss'
import Footer from './Footer'
import Body from './Body'
import Header from './Header'
//component ==> Thành phần

const App = () =>{
  return(
    <div className='.container-app'>
      <Header/>
    <div>
      <Body/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}
export default App;