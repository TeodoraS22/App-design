import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {CgReadme} from 'react-icons/cg'
import {CgGames} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'

import { Link } from "react-router-dom";
// import {useState} from 'react'
// import {MemoryRouter, Route} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const Nav = () => {
  //  const [activeNav, setActiveNav] = useState('#')
  return (

        <nav>
        <Link to="/home"><BiHome/></Link>
        <Link to="/learn"><CgReadme/></Link>
        <Link to="/game"><CgGames/></Link>
        <Link to="/settings"><FiSettings/></Link>
      </nav>
//     <nav>
//        <Link to="/"></Link>
//        <Link to="/learn"></Link>
//        <Link to="/game"></Link>
//        <Link to="/settings"><FiSettings></></Link>
// </nav>

  )
}

export default Nav