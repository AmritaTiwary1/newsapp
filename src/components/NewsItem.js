import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
    <div className="card">
  <img src={imageUrl?imageUrl:"https://media.assettype.com/afaqs%2F2023-12%2F8a27c20a-04ff-45ff-b6f3-87f81f2e03fe%2FUntitled_design__41_.jpg?w=1200&auto=format%2Ccompress&ogImage=true"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
