import React from 'react'
import { useParams } from "react-router-dom";
import './Details.css';
function PostDetails() {
  const articles = require('../Data/data.json');
  const { id } = useParams();

  return (
    <div>
      {articles
        .filter((articles) => articles.source.id === parseInt(id))
        .map((article,key) => (
            <div className='postPage' key={key}>
            <h1>{article.title}</h1>
            <p className='pubDate'>{article.publishedAt}</p>
            <div className="posPageImg">
                <img src={article.image} alt=""/>
            </div>
            <div className="postPageText">
                <p>{article.description}</p>
                <p>{article.content}</p>
                <p>{article.cont}</p>
                <p className='auth'>{article.author}</p>
            </div>                        
        </div>
        ))}
    </div>
  )
}

export default PostDetails
