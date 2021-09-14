import React from 'react'
import '../assets/css/Image.css';
import Like from './Like';
export default function Image({image}) {
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
                <h3>{image.title}</h3>
                <p className="card-text">{image.explanation}</p>
                <div>
                <Like/>
                </div> 
            </div> 
        </section>
        
    )
}
