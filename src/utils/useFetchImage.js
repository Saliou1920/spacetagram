import axios from 'axios';
import { useEffect, useState } from 'react'

const url = process.env.REACT_APP_NASA_API;
const key = process.env.REACT_APP_NASA_KEY;


export default function useFetchImage(count) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get(`${url}${key}&count=${count}`)
        .then(res => {
            // console.log(res.data);
            setImages([...res.data])
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return [images, setImages];
}
