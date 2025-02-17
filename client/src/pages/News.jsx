import React, { useState, useEffect, useContext } from 'react';
import './App.css'; 
import axios from "axios"


const News = () => {
  const [news, setNews] = useState({})

  const fetchNewsData = ()=>{

    useEffect(()=>{
      (async()=>{
        try {
          const {data} =await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/user/get-news')
          if(data.success){
            setNews(data.data)
            console.log(news)
          }else{
            console.log(data.message)
          }
            
        } catch (error) {
          console.log(error.message)
        }
      })()

    },[])

  }

  fetchNewsData()

  return (
    <>
    {
      news.length > 0 ? (<div className="news-marquee">
        <h2 className='font-bold'>{news[0].title}</h2>
        <p className="text-sm">{news[0].desc}</p>
      </div>):(null)
    }
    </>
   
    
  );
};

export default News;
