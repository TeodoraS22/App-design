import React from 'react'
import './game.css'
import Header from '../Header/header'
import Nav from '../../Nav/nav'

// image_array = [
//   '1.jpg',
//   '2.jpg',
//   '3.jpg'
// ]

// function get_random_image() {
//   //get a random index

//   random_index = Math.floor(Math.random() * image_array.length);

//   //get an image at the random_index
//   selected_image = image_array[random_index];

//   //display the image
//   document.getElementById(`image_shower`).src = `../assets/${selected_image}`
// }

const game = () => {
  return (
    <div id='Game'>
    < Header/>
    <div className='container-img'>
      <div className='content'>
           <h3>random image in every 5 seconds 🔥</h3>
           <p> click on the button for new image</p>
           <img id='image_shower'/> 
           <button className = "buttom-answer" onClick='get_random_image()'>random image</button>  
      </div>
    </div>
    <Nav/>
    </div>
  )
}

export default game