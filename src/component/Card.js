import React from 'react'

const Card=({item})=> {
    const {id, title, author, publish, imge, price } = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src="{imge}" alt="Internet Problem" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>{publish}</p>
            <p>₹{price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card
