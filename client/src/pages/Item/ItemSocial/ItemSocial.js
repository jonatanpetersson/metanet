import React from 'react'
import './ItemSocial.scss'

const ItemSocial = () => {
  return (
    <section className="item__social">
      <div className="item__social-metaverse" >
        <span>Decentraland</span>
        <span className="verified-icons-color material-icons-outlined">verified</span>
      </div>
      <div className="item__social-links" >
        <button className="item__social-btn" >
          <span className="material-icons-outlined">share</span>
        </button >
        <div className="item__social-content" >
          <a href="/"><span className="material-icons-outlined">content_copy</span>Copy link</a>
          <a href="/"><span className="material-icons-outlined">psychology</span>Share on Facebook</a>
          <a href="/"><span className="material-icons-outlined">sports_basketball</span>Share on Twitter</a>
        </div>
      </div>
    </section>
  )
}

export default ItemSocial
