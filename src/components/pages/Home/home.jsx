import React from 'react'
import './home.css'
import Card from '../../../Cards/Card'
import Header from '../Header/header'
import Nav from '../../Nav/nav'

const home = () => {
  return (
    <div id='Home'>
        < Header/>
        <Nav/>
    < Card/>
     </div>
  )
}

export default home