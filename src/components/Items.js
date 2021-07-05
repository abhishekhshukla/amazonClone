import React from 'react'
import './Items.css'
function Items({id,title, rating, price, image}) {
    return (
        <div className="itemsMain">
            <div>
                <img  className="imageItems" src={image} alt="" />
            </div>
            <div className="itemPrice">
            <small>₹</small>
            <strong>{price}</strong>
            <div className="itemRating">
                {Array(rating).fill().map((_)=>(
                    <p>⭐</p>
                ))}
            </div>
            </div>
            <div className="itemsInfo">
            <strong>{title}</strong>
            </div>

        </div>
    )
}

export default Items
