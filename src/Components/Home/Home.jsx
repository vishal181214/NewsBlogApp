import React from 'react'
import NewsPost from '../NewsBlog/NewsPost'
import Caurosel from '../Caurosel/Caurosel'
import './Style.css'
function Home({ articles }) {
  return (
    <div className='homeDiv'>
    <Caurosel/>
      <hr className='hrLineStyle'/>
      <NewsPost articles={ articles }/>
    </div>
  )
}

export default Home
