import React from 'react'
import blk from "../../images/black.jpg";

export default function Item({articleinfo}) {

    let {urlToImage,title,description} = articleinfo;



  return (
        <div className="col-md-3">
            <div className="item">
                <img src={urlToImage?urlToImage:blk} className="w-100" height={180} alt="" />
                <h2 className='h5 py-1'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
      
  )
}
