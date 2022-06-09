import React from 'react'
import Header from './components/pages/Header/header'
import Home from './components/pages/Home/home'
import Learn from './components/pages/Learn/Learn' 
import Game from './components/pages/Game/game'
import Settings from './components/pages/Settings/settings'
import StartApp from './components/pages/StartApp/startapp'
import Nav from './components/Nav/nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ErrorPage from './components/pages/ErrorPage'
import {useState} from 'react'
// import {BiHome} from 'react-icons/bi'
// import {CgReadme} from 'react-icons/cg'
// import {CgGames} from 'react-icons/cg'
// import {FiSettings} from 'react-icons/fi'
const App = () => {
  // const [background, setBackground] = useState("#fdfdfd");
  return (

    <Router>
    {/* <nav>
      <Link to="/home"><BiHome/></Link>
      <Link to="/learn"><CgReadme/></Link>
      <Link to="/game"><CgGames/></Link>
      <Link to="/settings"><FiSettings/></Link>
    </nav> */}
    <Routes>
    <Route path="/" element={<StartApp/>} />
    <Route path="/header" element={<Header/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/learn" element={<Learn/>} />
      <Route path="/game" element={<Game/>} />
      <Route path="/settings" element={<Settings /*setBackground={setBackground} background={background}*/ />} />
      <Route path="*" element = {<ErrorPage />} />
    </Routes>
  </Router>
    // <>
  
    //    <Header/>
    //    <Home />
    //    <Nav />
    //    <Learn />
    //    <Game />
    //    <Settings />
       
    // </>
    
  )
}

export default App