import React, { useEffect, useState } from 'react';
import logo from './imagens/logo.png';
import { Link } from 'react-router-dom';
import { getCookie } from '../services/cookie';

function Header() {
  const [cookie, setCookie] = useState('');

  useEffect(() => {
    setCookie(getCookie('spotifycookie') || '');
  }, []);

  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <div className='container container-sm|md|lg|xl '>
        <Link to={cookie ? '/playlists' : '/'}>
          <img className='img-fluid' id='headerlogo' src={logo} alt='logo' />
        </Link>

        <ul className='navbar-nav'>
          {cookie ? (
            ''
          ) : (
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-link'
                style={{ textDecoration: 'none' }}
              >
                Home
              </Link>
            </li>
          )}

          <li className='nav-item'>
            {cookie ? (
              <Link
                to='/profile'
                className='nav-link'
                style={{ textDecoration: 'none' }}
              >
                Perfil
              </Link>
            ) : (
              <Link
                to='/cadastro'
                className='nav-link'
                style={{ textDecoration: 'none' }}
              >
                Cadastro
              </Link>
            )}
          </li>

          {cookie ? (
            ''
          ) : (
            <li>
              <Link
                to='/login'
                className='nav-link'
                style={{ textDecoration: 'none' }}
              >
                Login
              </Link>
            </li>
          )}

          <li>
            <Link
              to='/playlists'
              className='nav-link'
              style={{ textDecoration: 'none' }}
            >
              Playlists
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/faq'
              className='nav-link'
              style={{ textDecoration: 'none' }}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
