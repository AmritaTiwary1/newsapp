 import React,{ useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default function News(props) {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState([false])
useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f1bf3e8928db4e4bbca1c44cc40e06de&page=page&pagesize=100`
fetch(url).then((res)=>res.json()).then((json)=>{
  setArticles(json.articles);
  setLoading(true);
  });
})
if(!loading)
return(
<div>
<h1>Please Wait For Some Time.... </h1>
</div> 
); 
    return (
        <>
      <h2 className='text-center' >NewsApp - Top Headings of "{props.category} category"</h2>
      <div className='row' style={{backgroundColor:'grey',color:'black',margin:'auto'}}>
     {articles.map((element)=>{
     return <div className='col-md-4'>
      <ol key={element.url}>
    <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,88):""} 
    imageUrl={element.urlToImage?element.urlToImage:'public/newslogo.jpg'} 
    newsUrl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt}></NewsItem>
    
    </ol></div>
  })}
   </div>     
   </>
    )
  }

 News.defaultProps={
  country:'in',
  category :'General'
}
 News.propType={
  name:PropTypes.string,
  category:PropTypes.string

}
