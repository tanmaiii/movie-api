import React, {useEffect, useState} from 'react'

import { useParams } from 'react-router'

import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
import imgNoFile from '../../assets/nofile.jpg'

export const CastList = props => {

  const {category} = useParams()

  const [casts, setCasts] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        const response = await tmdbApi.credits(category, props.id)
        setCasts(response.cast.slice(0,5));
      }
      fetchData()
    }, [category, props.id])


  return (
    <div className='casts'>
        {
            casts.map(item => (
                <div key={item.id} className='casts__item'>
                    {/* <img src={apiConfig.w500Image(item.profile_path)} alt={item.original_name} /> */}
                    <div className='casts__item__img' style={{backgroundImage: item.profile_path ? `url(${apiConfig.w500Image(item.profile_path)})` : `url(${imgNoFile})`}}></div>
                    <h3>{item.original_name}</h3>
                </div>
            ))
        }
    </div>
  )
}
