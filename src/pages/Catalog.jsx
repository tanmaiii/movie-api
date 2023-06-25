import React from 'react'
import { useParams } from 'react-router';

import { PageHeader } from '../components/page-header/PageHeader';
import { MovieGrid } from '../components/movie-grid/MovieGrid';
import { category as cate} from '../api/tmdbApi'

export default function Catalog() {

  const {category} = useParams()

  return (
    <div>
      <PageHeader>
        {
          category === cate.movie ? 'Movies' : 'TV Series'
        }
      </PageHeader>
      <div className='container'>
            <div className='section mb-3'>
                <MovieGrid category={category} />
            </div>
      </div>
    </div>
  )
}
