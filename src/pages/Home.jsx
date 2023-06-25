import React from 'react'
import HeroSlide from '../components/hero-slide/HeroSlide'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/button/Button'
import MovieList from '../components/movie-list/MovieList'

import {category, movieType, tvType} from '../api/tmdbApi'

export default function Home() {
  return (
    <div>
      <HeroSlide/>
      <div className='container'>
        <div className='section'>
          <div className="section__header">
            <h2 >Thịnh hành</h2>
            <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>

        <div className='section'>
          <div className="section__header">
            <h2 >Phim mới</h2>
            <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming}/>
        </div>

        <div className='section'>
          <div className="section__header">
            <h2>Được đánh giá cao</h2>
            <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        
        <div className='section'>
          <div className="section__header">
            <h2 >Phim bộ được đánh giá cao</h2>
            <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>

        <div className='section'>
          <div className="section__header">
            <h2>Phim bộ đang chiếu</h2>
            <Link to="/movie">
                <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air}/>
        </div>

      </div>
    </div>
  )
}
