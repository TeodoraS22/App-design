import React from 'react'
import './startapp.css'

import logos from '../../../assets/logos.png'

const startapp = () => {
  return (
        //<div id = 'FirstPage'> home</div>
    
          <div class="startapp">
          <img src={logos} alt="logo" class="logo"></img>
          <div class="header-center">
          {/* <a href="#appdesign">AppDesign</a> */}
          <h3>AppDesign</h3>
          <h6 className="text-light">Fii propriul tau designer de interior</h6>
          {/* <a href="http://localhost:3000/Home" target="_blank">
          <buttom > Link Button </buttom> */}
{/*           
          </a> */}
                  <div className = 'container'>
                  <div className = 'centrare'>
          {/* <button > </button> */}
          <a href="http://localhost:3000/Home" className ='btn btn-startapp' role="button">Start</a>
          </div>
          </div>
          </div>
          </div>

  )
}

export default startapp