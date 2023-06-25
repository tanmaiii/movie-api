import React, { useRef ,useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../../assets/logoChill.png'
import './header.scss'
 
const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'Tv series',
    path: '/tv'
  },
]

export default function Header() {

  const {pathname} = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === pathname)

  useEffect(() => {

    const shinkHeader = () => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        console.log(document.body.scrollTop);
        headerRef.current.classList.add('shrink');
      }else{
        headerRef.current.classList.remove('shrink');
      }
      window.addEventListener('scroll', shinkHeader)
    }

    shinkHeader();
    
    return () => {
      window.removeEventListener('scroll', shinkHeader)  
    }
  }, [])

  return (
    <div className='header' ref={headerRef}>
        <div className="header__wrap container">
          <div className='logo'>
            <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <ul className='header__nav'>
              {
                headerNav.map((e, i) => (
                  <li key={i} className={`${i === active ? 'active' : ''}`}>
                    <Link to={e.path}>
                      {e.display}
                    </Link>
                  </li>
                ))
              }
          </ul>
        </div>
    </div>
  )
}
