import Loader from "react-loader-spinner";
import React from 'react';
import '../assets/css/Loading.css';

export default function Loading() {
    return (
        <div className="loading">
            <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
        </div>
        
    )
}
