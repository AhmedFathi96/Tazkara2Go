
import React from 'react';
import Carousel from 'react-multi-carousel';
import CinemaCard from './CinemaCard';
import './styles.css';
 
const CinemasCarousel: React.FC = (props:any) => {
 const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
    return (
      <>
      
          <Carousel
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            deviceType={props.deviceType}
          >
            {props.sentdata.slice(0, 10).map((c:any) => {
              return (
                <CinemaCard cinema={c} {...props} />
              );
            })}
          
          </Carousel> 

      </>
    );
  }

export default CinemasCarousel;