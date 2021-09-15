import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchImage from '../utils/useFetchImage';
import Image from './Image'
import '../assets/css/Image.css';
import Loading from './Loading';


export default function Images() {
    const [count, setCount] = useState(10);
    const [images, setImages, isLoading] = useFetchImage(count);

    function ShowImages() {
        return (
            <InfiniteScroll
                dataLength={images.length} 
                next={()=> setCount(count+10)}
                className="scroll"
                hasMore={true}
            >
            {images.map((img, index) => (
            <Image image={img} index={index}/>
            ))
            }
            </InfiniteScroll>
    
        )
    }
    return (
        <div className="showImages">
            {isLoading && <Loading/>}
            <ShowImages className="test"/>
        </div>
    )
}
