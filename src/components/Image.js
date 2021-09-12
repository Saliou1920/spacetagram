import React from 'react'
import '../assets/css/Image.css';
export default function Image({image}) {
    return (
        <div className="test">
            <div className="img">
            <div className="card">
                <h2>{image.title}</h2>
                <img src={image.url} alt="" width="300px"/>
                <div className="container">
                    <h4><b>John Doe</b></h4> 
                    <p>{image.explanation}</p> 
                </div>
            </div>
        </div>
        </div>
        
    )
}
