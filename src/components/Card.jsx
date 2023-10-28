import React from 'react'

const Card = ({ title, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">{price}</div>
        </header>

        <p className="item-text">{desc}</p>
      </div>
    </article>
  )
}

export default Card
