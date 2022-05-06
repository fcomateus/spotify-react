import React, { useState } from 'react';
import api from '../services/api';
import { setCookie } from '../services/cookie';

function Login() {
  const [userInfo, setUserInfo] = useState({});

  const handleLogin = () => {
    const info = { ...userInfo };
    api
      .get('/usuarios')
      .then((res) => {
        res.data.forEach((usuario) => {
          if (usuario.email === info.email && usuario.senha === info.senha) {
            setCookie('spotifycookie', usuario.id, 99);
            window.location.href = '/playlists';
          }
        });
        console.log('Login invalido');
      })
      .catch((error) => console.log(error));
  };
  
  const handleChange = (e) => {
    const campo = e.target.name;
    const valor = e.target.value;
    setUserInfo({ ...userInfo, [campo]: valor });
  };

  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div
              className='card shadow-2-strong'
              style={{ bordeRadius: '1rem' }}
            >
              <div className='card-body p-5 text-center'>
                <h3 className='mb-5'>Log in</h3>

                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    name='email'
                    id='typeEmailX-2'
                    className='form-control form-control-lg'
                    onChange={handleChange}
                  />
                  <label className='form-label' htmlFor='typeEmailX-2'>
                    Email
                  </label>
                </div>

                <div className='form-outline mb-4'>
                  <input
                    type='password'
                    name='senha'
                    id='typePasswordX-2'
                    className='form-control form-control-lg'
                    onChange={handleChange}
                  />
                  <label className='form-label' htmlFor='typePasswordX-2'>
                    Senha
                  </label>
                </div>

                <hr className='my-4' />

                <button
                  className='btn btn-primary btn-lg btn-block'
                  type='submit'
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
