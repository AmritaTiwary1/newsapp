import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='my-3' style={{textAlign:'center',justifyContent:'center'}}>
  <div className="card">
<img src={props.imageUrl?props.imageUrl:"https://media.assettype.com/afaqs%2F2023-12%2F8a27c20a-04ff-45ff-b6f3-87f81f2e03fe%2FUntitled_design__41_.jpg?w=1200&auto=format%2Ccompress&ogImage=true"} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{props.title}...</h5>
  <p className="card-text">{props.description}...</p>
  <p className='card-text'><small className='text-muted'><strong>By {props.author} On {new Date(props.date).toGMTString()}</strong></small></p>
  <a rel="noreferrer" href={props.newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
</div>
</div>
    </div>
  )
}

 

    
 
