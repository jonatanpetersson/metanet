import React from 'react'
import './BlogItem.scss';
import blogimage1 from '../../../assets/img/blogimg1.png';
import blogimage2 from '../../../assets/img/blogimg2.png';
export const BlogItem = () => {
    return (
        <>
            <li className="blog__item">
                <p className="blog__item-date">Monday 2021.12.06</p>
                <div className="blog__item-owner">
                    <img className="blog__item__owner-img" src={blogimage1} alt="blog post" />
                    <span>
                        <h4 className="blog__item__owner-name">Barack Obama</h4>
                        <p className="blog__item__owner-info">Dad, husband, President, Metaverse citizen</p>
                    </span>
                    <button className="blog__item__owner-follow">Follow</button>
                </div>
                <div className="blog__item-desc">
                    <h2>How to invest in Metaverse?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet nisi non tellus mollis tincidunt vitae vitae diam. Aliquam vulputate ultricies dignissim. Vestibulum maximus purus quis tristique ornare. Maecenas tempus ligula maximus maximus aliquam. Etiam et elementum nunc, id rhoncus turpis. Integer sodales hendrerit venenatis.</p>
                </div>
                <button className="blog__item-btn">Read more...</button>
            </li>
            
            <li className="blog__item">
                <p className="blog__item-date">Monday 2021.12.06</p>
                <div className="blog__item-owner">
                    <img className="blog__item__owner-img" src={blogimage2} alt="blog post" />
                    <span>
                        <h4 className="blog__item__owner-name">Barack Obama</h4>
                        <p className="blog__item__owner-name">Dad, husband, President, Metaverse citizen</p>
                    </span>
                    <button className="blog__item__owner-follow">Follow</button>
                </div>
                <div className="blog__item-desc">
                    <h2>How to invest in Metaverse?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet nisi non tellus mollis tincidunt vitae vitae diam. Aliquam vulputate ultricies dignissim. Vestibulum maximus purus quis tristique ornare. Maecenas tempus ligula maximus maximus aliquam. Etiam et elementum nunc, id rhoncus turpis. Integer sodales hendrerit venenatis.</p>
                </div>
                <button className="blog__item-btn">Read more...</button>
            </li>
            <li className="blog__item">
                <p className="blog__item-date">Monday 2021.12.06</p>
                <div className="blog__item-owner">
                    <img className="blog__item__owner-img" src={blogimage1} alt="blog post" />
                    <span>
                        <h4 className="blog__item__owner-name">Barack Obama</h4>
                        <p className="blog__item__owner-name">Dad, husband, President, Metaverse citizen</p>
                    </span>
                    <button className="blog__item__owner-follow">Follow</button>
                </div>
                <div className="blog__item-desc">
                    <h2>How to invest in Metaverse?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet nisi non tellus mollis tincidunt vitae vitae diam. Aliquam vulputate ultricies dignissim. Vestibulum maximus purus quis tristique ornare. Maecenas tempus ligula maximus maximus aliquam. Etiam et elementum nunc, id rhoncus turpis. Integer sodales hendrerit venenatis.</p>
                </div>
                <button className="blog__item-btn">Read more...</button>
            </li>
        </>
    )
}
