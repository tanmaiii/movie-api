import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './detail.scss'

import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
import imgNoFile from '../../assets/nofile.jpg'
import { CastList } from './CastList'
import VideoList from './VideoList'
import MovieList from '../../components/movie-list/MovieList'

export default function Detail() {
  const {category , id} = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
      const params = {language: "vi"}
      const getDetail = async () => {
        const response = await tmdbApi.detail(category, id, {params});
        setItem(response);
        window.scrollTo(0,0);
      }
      getDetail();
    }, [category,id]);
  
  const bg = item && ( apiConfig.originalImage(item.backdrop_path || item.poster_path))
  const poster = item &&( item.poster_path ? ( apiConfig.originalImage(item.poster_path)) : imgNoFile )
  return (
    <>
      {item && (
        <>
          <div className='banner' style={{backgroundImage: `url(${bg})`}}>
          </div>
          <div className='mb-3 movie-content container'>
              <div className='movie-content__poster'>
                  <img className='movie-content__poster__img' src={`${poster}`} alt={item.title} />
              </div>
              <div className='movie-content__info'>
                  <div className='title'>
                    {item.title || item.name}
                  </div>
                  <div className='genres'>
                    {
                      item.genres && item.genres.slice(0,5).map((genre, i)=> (
                        <span key={i}>{genre.name}</span>
                      ))
                    }
                  </div>
                  <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <span>{item.vote_average}</span>
                  </div>
                  <div className='overview'>{item.overview}</div>
                  <div className='cast'>
                        <div className='cast-header'>
                          <h2>Diễn viên</h2>
                        </div>
                        {
                          <CastList id={item.id}/>
                        }
                  </div>
              </div>
          </div>
          <div className='container'>
            <div className='section mb-3'>
                <VideoList id={item.id} />
            </div>
            <div className='section mb-3'>
                <div className='section__header'>
                  <h2>Liên quan</h2>
                </div>
                <MovieList category={category} type='similar' id={item.id}/>
            </div>
          </div>
        </>
      )
      }
    </>
  )
}
