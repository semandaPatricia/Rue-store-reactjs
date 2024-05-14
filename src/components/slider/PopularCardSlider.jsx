import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import { popularProducts } from "../../data";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import '../slider/slider.css';
import imgGirl from '../../assets/images/defaultImage.jpg';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PopularCardSlider = () => {
  const [defaultImage, setDefaultImage] = useState({});

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <>
      <h1 className="flex justify-center mt-3 text-xl">Our most popular looks</h1>
      <div className='slider-app'>
        <Slider {...settings}>
          {popularProducts.map((item) => (
            <Container key={item.title}>
              <div className="slider-card">
                <div className="card-top">
                  <img
                    src={
                      defaultImage[item.title] === item.title
                        ? defaultImage.linkDefault
                        : item.img
                    }
                    alt={item.title}
                    onError={handleErrorImage}
                  />
                  <h1>{item.title}</h1>
                </div>
                <div className="card-bottom">
                  <div className='flex flex-row items-center justify-between'>
              <h3>{item.price}</h3>
              <button className='' >
             {/* <ShoppingCartIcon/>*/ } 
              <BookmarkBorderIcon/>
        </button>
        </div>
              
            </div>
              </div>
            </Container>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PopularCardSlider;
