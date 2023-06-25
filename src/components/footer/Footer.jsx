import React from 'react'
import './footer.scss'
import {Link} from 'react-router-dom'

import bg from '../../assets/background.jpg'
import logo from '../../assets/logoChill.png'

export default function Footer() {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
      <div className='background-fitle'>
        <div className='footer__content container'>
          <div className='footer__content__logo' to='/'>
              <Link className='footer__content__logo__link' to='/'>
                <img src={logo} alt="" />
              </Link>
          </div>
          <div className='footer__content__menus'>
              <div className='footer__content__menu'>
                <Link to='/'>Home</Link>
                <Link to='/'>Contact us</Link>
                <Link to='/'>Term of services</Link>
                <Link to='/'>About us</Link>
              </div>
              <div className='footer__content__menu'>
                <Link to='/'>Live</Link>
                <Link to='/'>FAQ</Link>
                <Link to='/'>Premium</Link>
                <Link to='/'>Pravacy policy</Link>
              </div>
              <div className='footer__content__menu'>
                <Link to='/'>You must watch</Link>
                <Link to='/'>Recent release</Link>
                <Link to='/'>Top IMDB</Link>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}
