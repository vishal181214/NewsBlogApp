import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './NewsPostStyle.css';
function NewsPost() {

    const [newsPost,setNewsPost] = useState([]);

    const handlePost = (item) =>{

        const data = JSON.parse(localStorage.getItem('postdata'));
        
        const viewNews = data.filter((i) => i.source.id === item.source.id);
        viewNews[0].status = 'read'; 

        const notRead = data.filter((item)=>item.status === "not read");

        const readPost = data.filter((item)=> item.status === "read");

        const latestNews = [...notRead, ...readPost];
        const sortByStatus = latestNews.sort((a,b)=> a.status < b.status ? -1 : 1);

        setNewsPost(sortByStatus);
        localStorage.setItem("postdata",JSON.stringify(sortByStatus));
    }

    const getData = () =>  {
        const data = JSON.parse(localStorage.getItem('postdata'));
        console.log(data);
        let result;
        if(data)
        {
            result = data;
        }
        else{
            let newsData = require('../Data/data.json');
            result = newsData.map((article) => ({
                status: "not read",
                ...article,
              }));
            localStorage.setItem('postdata',JSON.stringify(result));
        }
        setNewsPost(result);
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <div className='SecNewsBlock'>
    {
        newsPost.map((item, index) => {
            console.log();
            return (
                <div className='SecNewsLeftBlock' onClick={()=>handlePost(item)} key={index}>
                <Link to={`/${item.source.id}`} style={{textDecoration:"none"}}>
                    <div className='imgNewsBlock'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='imgNewsText'>
                        <p className='imgNewsTitle'>{item.title.slice(0, 100)}</p>
                        <p className='imgNewsTextPara'>{item.description}</p>
                        <button className='readBtn'>Read More &#62;&#62;</button>
                        <p className='secNewsDate'>{item.publishedAt}</p>
                    </div>
                </Link>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default NewsPost
