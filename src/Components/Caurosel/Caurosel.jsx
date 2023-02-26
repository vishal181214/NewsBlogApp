import React from 'react'
import './CauroselStyle.css'
import Carousel from 'react-bootstrap/Carousel';
function Caurosel() {
  const movieData = require('../Data/slider.json');
  console.log(movieData);
  return (
<>
<div className='latestBlockDiv'>
      <div className='latestNewsBlock'><p></p><span>the latest</span></div>
      <Carousel className='latestBlockNews'>
        {
          movieData.map((item,index)=>{
            return(
              <Carousel.Item key={index} className="contData">
                <div className='sliImg'>
                <img src={item.img} alt="" />
                </div>
                <div className='latestBlockText'>
                  <h3 className='latestTextTitle'>{item.title}</h3>
                  <p className='latestNewsPara'>{item.desc}</p>
                  <p className='latestDate'>{item.pubdate}</p>
                </div>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
</>
  )
}

export default Caurosel
