import React, { useState, useRef, useEffect } from 'react'
import data from '../constants/data.json'

const ImageCarousel = () => {

    const [index, setIndex] = useState(0);
    const ref = useRef(null);

    const handleNext = () => {
        setIndex((prevIndex) => {
            if(prevIndex == data.length - 1) return 0;
            return prevIndex + 1;
        });
    }

    const handlePrev = () => {
        if(index === 0) {
            setIndex(data.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    useEffect(() => {
        ref.current = setInterval(handleNext, 1000);
        console.log(ref.current);
        return () => {
            clearInterval(ref.current);
        };
    },[]);

  return (
    <>
    <div className="container"
        onMouseEnter={() => clearInterval(ref.current)}
        onMouseLeave={() => {
            ref.current = setInterval(handleNext, 1000);
        }}>
        <button onClick={handlePrev} className="nav-btn left-btn">&#8249;</button>
        <img src={data[index].download_url} alt='carousel' className='carousel-image'/>
        <button onClick={handleNext} className="nav-btn right-btn">&#8250;</button>
    </div>
    </>
  )
}

export default ImageCarousel