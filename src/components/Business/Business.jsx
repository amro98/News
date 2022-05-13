import React from 'react'
import Item from '../Item/Item';

export default function Business({newsArticles}) {

  
  return (
    <div className='container py-5'>
      <div className='row'>
        {newsArticles.map((article,index)=> <Item key={index} articleinfo={article}/>)}
      </div>
    </div >
    
  )
}
