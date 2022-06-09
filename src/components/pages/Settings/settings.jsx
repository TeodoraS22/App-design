import React from 'react'
import './settings.css'
import Color from './Color'
// import Card from '../../../Cards/Card'
// import App from '../../../../src/App'
import Nav from '../../Nav/nav'
const settings = (/*{setBackground, background}*/) => {
  
   return (

        <div id='Settings'>
          < Nav/>
          < Color /*setBackground={setBackground} background={background}*/ />
         </div>

  );
}

export default settings