import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    };
  }
async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=f1bf3e8928db4e4bbca1c44cc40e06de&page=1'
fetch(url).then((res)=>res.json()).then((json)=>{
  this.setState({articles:json.articles,
  loading:true
  });
});
     }

  render() {
    const {loading , articles}=this.state;
    if(!loading)
    return(
  <div>
    <h1>Please Wait Some Time....</h1>
  </div>
  );
    return (
        <>
      <div className='container my-3'>News</div>
      <h2>NewsApp - Top Headings</h2>
      <div className='row'>
     {articles.map((element)=>{
     return <div className='col-md-4'>
      <ol key={element.url}>
    <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:'public/newslogo.jpg'} newsUrl={element.url}></NewsItem>
    
    </ol></div>
  })}
   </div>
   <div className='container d-flex justify-content-between'>
   <button type="button" class="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
   <button type="button" class="btn btn-primary" onClick={this.handleNextClick}> Next &rarr;</button>
   </div>
     
   </>
    )
  }
}
