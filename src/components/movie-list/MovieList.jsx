import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import './movieList.scss'

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {Link} from 'react-router-dom'

import apiConfig from '../../api/apiConfig';
import tmdbApi, { category } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {

 const [items, setItems] = useState([]);

 useEffect(() => {
    const getList = async () => {
        let response = null;
        const params = { language: "vi" };

        if(props.type !== 'similar') {
            switch(props.category) {
                case category.movie: 
                    response = await tmdbApi.getMoviesList(props.type, {params})
                    break;
                default: 
                    response = await tmdbApi.getTvList(props.type, {params})
                    break;
            }
        }else{
            response = await tmdbApi.similar(props.category, props.id)
        }

        setItems(response.results);
    }

    getList();
 },[])

  return (
    <div className='movie-list'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {
                    items.map((item, i)=> (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
    </div>
  )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieList
