import React from 'react'
import './movieCard.scss'
import {Link} from 'react-router-dom'
import { category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
import {Button} from '../button/Button'
import imgNoFile from '../../assets/nofile.jpg'

const MovieCard= props => {
    const item = props.item
    const link = '/' + category[props.category] + '/' + item.id;

    const bg = item.poster_path ? apiConfig.w500Image(item.poster_path) : imgNoFile

  return (
    <Link to={link}>
        <div className='movie-card'>
            <img src={bg} alt="" />
            <Button>
                <i className='bx bx-play'></i>
            </Button>
            <div className='movie-card-body'>
                <div className='movie-card-body-star'>
                    <i className='bx bxs-star'></i>
                    <span>{props.item.vote_average}</span>
                </div>
                <h4 className='movie-card-body-title'>
                <span>{props.item.name || props.item.title }</span>

                </h4>
            </div>
        </div>
    </Link>
  )
}

export  default MovieCard