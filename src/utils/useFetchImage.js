import axios from 'axios';
import { useEffect, useState } from 'react'

const url = process.env.REACT_APP_NASA_API;
const key = process.env.REACT_APP_NASA_KEY;


export default function useFetchImage(count) {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}${key}&count=${count}`)
        .then(res => {
            console.log(res.data);
            setImages([...res.data])
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }, [])
    return [images, setImages, isLoading];
}
