import React from 'react';
import logo from './imagens/logo.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='container container-sm|md|lg|xl '>
                <Link to='/'>
                    <img
                        className='img-fluid'
                        id='headerlogo'
                        src={logo}
                        alt='logo'
                        
                    />
                </Link>
                
                <ul className='navbar-nav'>
                    <li className='nav-item'>  
                        <a className='nav-link' >
                            <Link to='/'>
                                Home
                            </Link>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' >
                            <Link to='/faq'>
                                FAQ
                            </Link>
                            
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' >
                            <Link to='/cadastro'>
                                Cadastro
                            </Link>
                            
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
