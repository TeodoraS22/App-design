import React from 'react'
import './header.css'
import logos from '../../../assets/logos.png'

const header = () => {
  return (
        //<div id = 'FirstPage'> home</div>
        <header>
          
          <div className="header">
          <img src={logos} alt="logo" className="logo"></img>
          <div className="header-center">
          {/* <a href="#appdesign">AppDesign</a> */}
          <h1>AppDesign</h1>
          <h5 className="text-light">Fii propriul tau designer de interior</h5>
          </div>
          </div>
           {/* <section id = 'FirstPage'>
          <div className="container home_container">
            
            <h1>AppDesign</h1>
            <h5 className="text-light">Fii propriul tau designer de interior</h5> */}
    {/*        
            <div className="about_me">
              <img src= {ME} alt="about" />
            </div> */}
          {/* </div>
          </section> */}
        </header>
        //<div id = 'home'>home</div>
        //<div  className = 'text' id = 'About' >< Card/>
        //</div>
  )
}

export default header