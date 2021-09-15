import React, { useState } from 'react'
import '../assets/css/Image.css';
import Like from './Like';
export default function Image({image}) {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <span>{(image.explanation).slice(150)}</span> 
    const link = <span>
        <span 
            className="readMore" 
            onClick={()=> {setReadMore(!readMore)}}
        >
            {readMore ? "" : "...  More"}
        </span>
        {readMore && extraContent}
    </span>

    return (
        <section className="container">
            <div className="card">
                <div className="author">
                    <img src={image.url} alt="" className="profile"/>
                    <h4>{image.date}</h4>
                </div>
                <div className="">
                    {image.media_type === "image" ? 
                    <img src={image.hdurl} alt="" className="card-image"/> :
                    <iframe src={image.url} title="youtube-video" className="card-image"></iframe>
                    }
                </div>
                <h3 className="image-title">{image.title}</h3>
                <p className="card-text">
                    {(image.explanation).slice(0,150)}{link}
                </p>
                {/* <ReadMore/> */}
                <div>
                <Like/>
                </div> 
            </div> 
        </section>
        
    )
}
