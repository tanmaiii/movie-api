import React from 'react'
import {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router'
import './movie-grid.scss'

import MovieCard from '../movie-card/MovieCard'
import {OutlineButton, Button} from '../button/Button'
import { Input } from '../input/Input'
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi'
import { useCallback } from 'react'

export const MovieGrid = props => {
  const [items, setIems] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const {keyword} = useParams()

  useEffect(() => {
    const getList = async () => {
        let response = null;
        
        if(keyword === undefined){
            const params ={language: "vi"}
            switch(props.category){
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                    break;
                case category.tv:
                    response = await tmdbApi.getTvList(tvType.popular, {params})
                    break;
                default:
                    response ='';
                    break;
            }
        }else{
            const params = {language: "vi", query: keyword}
            response = await tmdbApi.search(props.category, {params})
        }
        setIems(response.results);
        setTotalPage(response.total_pages)
    }
    getList()
  }, [keyword, props.category])

  const loadMore = async () => {
    let response = null;
    
    if(keyword === undefined){
            const params ={language: "vi", page: page +1 }
            switch(props.category){
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                    break;
                case category.tv:
                    response = await tmdbApi.getTvList(tvType.popular, {params})
                    break;
                default:
                    response ='';
                    break;
            }
        }else{
            const params = {language: "vi", query: keyword , page: page + 1}
            response = await tmdbApi.search(props.category, {params})
        }
        setIems([...items, ...response.results]);
        setPage(page + 1)        
  }

  console.log(items.length)


  return (
    <>
        <div className='section mb-3'>
                <MovieSearch category={props.category} keyword={keyword} />
        </div>
        {
            (items.length > 0) ? (
                <div className='movie-grid'>
                        {
                            items.map(item => (
                                <MovieCard category={props.category} key={item.id} item={item} />
                            ))
                        }
                </div>
            ):
            <div className='movie-grid__khong-tim-thay'>
                Không tìm thấy
            </div>
        }
            {
                page < totalPage ? (
                    <div className='movie-grid__loadMore'>
                        <OutlineButton className='small' onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
    </>
  )
}

const MovieSearch = props => {
    const history = useHistory()
    const[keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    
    const goToSearch = useCallback(
        () => {
            if(keyword.trim().length > 0){
                history.push(``)
                history.push(`${category[props.category]}/search/${keyword}`)
            }
        },
        [keyword, props.category, history]
    )

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if(e.keyCode === 13){
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent)
        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
    },[keyword, goToSearch])

    return (
        <div className='movie-search'>
            <Input
                type='text'
                placeholder='Enter keyword...'
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
            />
            <Button className='small' onClick={goToSearch}>Search</Button>
        </div>
    )
}
