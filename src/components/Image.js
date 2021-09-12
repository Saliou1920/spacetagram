import React from 'react'
import '../assets/css/Image.css';
export default function Image({image}) {
    return (
        
        <section className="container">
            <div className="card">
                <h2>{image.title}</h2>
                <div className="">
                    <img src={image.url} alt="" className="card-image"/>
                </div>
                <p className="card-text">{image.explanation}</p> 
            </div> 
        </section>
        
    )
}
