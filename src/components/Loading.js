import Loader from "react-loader-spinner";
import React from 'react';
import '../assets/css/Loading.css';

export default function Loading() {
    return (
        <div className="loading">
            <Loader
            type="ThreeDots"
            color="##151515"
            height={100}
            width={100}
            timeout={2000} //2 secs
        />
        </div>
        
    )
}
