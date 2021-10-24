
import React from 'react';
import MovieCard from "./MovieCard";
import Carousel from 'react-multi-carousel';
import './styles.css';
 
const MoviesCarousel: React.FC = (props:any) => {
 ////console.log(props)
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
                <MovieCard key={c.ShowId} movie={c} {...props} />
              );
            })}
          
          </Carousel>

  

      </>
    );
  }

export default MoviesCarousel;