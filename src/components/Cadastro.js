import { useEffect, useState } from 'react';
import api from '../services/api';
import { setCookie } from '../services/cookie';

function Cadastro() {
  const usuarioVazio = {
    nome: '',
    sobrenome: '',
    dataDeNascimento: '',
    genero: '',
    email: '',
    emailConf: '',
    senha: '',
    plano: 0,
  };

  const [usuario, setUsuario] = useState(usuarioVazio);
  const [validado, setValidado] = useState(false);

  useEffect(() => {
    if (Object.keys(usuario).some((campo) => !usuario[campo])) {
      setValidado(true);
    } else {
      setValidado(false);
    }
  }, [usuario]);

  const handleChange = (e) => {
    const campo = e.target.name;
    const valor = e.target.value;
    setUsuario({ ...usuario, [campo]: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosEnviados = { ...usuario };
    delete dadosEnviados.emailConf;
    api
      .post('/usuarios', dadosEnviados)
      .then((res) => {
        const data = res.data;
        setCookie('spotifycookie', data.id, 99);
        console.log(data);
        window.location.href = '/';
      })
      .catch((error) => console.log(error));
    setUsuario(usuarioVazio);
  };

  const comparaEmail = () => {
    if (usuario.email && usuario.email !== usuario.emailConf) {
      return false;
    }
    return true;
  };

  return (
    <section className='gradient-custom'>
      <div className='container py-5 h-100'>
        <div className='row justify-content-center align-items-center h-100'>
          <div className='col-12 col-lg-9 col-xl-7'>
            <div
              className='card shadow-2-strong card-registration'
              style={{ borderRadius: '15px' }}
            >
              <div className='card-body p-4 p-md-5'>
                <h3 className='mb-4 pb-2 pb-md-0 mb-md-5'>
                  Inscreva-se e escute músicas com alta qualidade.
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6 mb-4'>
                      <div className='form-outline'>
                        <input
                          type='text'
                          id='nome'
                          name='nome'
                          value={usuario.nome}
                          className='form-control form-control-lg'
                          onChange={handleChange}
                        />
                        <label className='form-label' htmlFor='nome'>
                          Nome
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className='form-outline'>
                        <input
                          type='text'
                          id='sobrenome'
                          name='sobrenome'
                          value={usuario.sobrenome}
                          className='form-control form-control-lg'
                          onChange={handleChange}
                        />
                        <label className='form-label' htmlFor='sobrenome'>
                          Sobrenome
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6 mb-4 d-flex align-items-center'>
                      <div className='form-outline datepicker w-100'>
                        <input
                          type='date'
                          className='form-control form-control-lg'
                          id='dataDeNascimento'
                          name='dataDeNascimento'
                          value={usuario.dataDeNascimento}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor='dataDeNascimento'
                          className='form-label'
                          onChange={handleChange}
                        >
                          Data de Nascimento
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <h6 className='mb-2 pb-1'>Gênero:</h6>

                      <div className='form-check form-check-inline'>
                        <input
                          onChange={handleChange}
                          className='form-check-input'
                          type='radio'
                          name='genero'
                          id='genFeminino'
                          value='feminino'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='genFeminino'
                        >
                          Feminino
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          onChange={handleChange}
                          className='form-check-input'
                          type='radio'
                          name='genero'
                          id='genMasculino'
                          value='masculino'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='genMasculino'
                        >
                          Masculino
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          onChange={handleChange}
                          className='form-check-input'
                          type='radio'
                          name='genero'
                          id='genOutro'
                          value='outro'
                        />
                        <label className='form-check-label' htmlFor='genOutro'>
                          Outro
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6 mb-4 pb-2'>
                      <div className='form-outline'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control form-control-lg'
                          value={usuario.email}
                          onChange={handleChange}
                        />
                        <label className='form-label' htmlFor='email'>
                          Email
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6 mb-4 pb-2'>
                      <div className='form-outline'>
                        <input
                          type='email'
                          id='emailConf'
                          name='emailConf'
                          className={`${
                            comparaEmail() ? '' : 'form-invalid'
                          } form-control form-control-lg`}
                          value={usuario.emailConf}
                          onChange={handleChange}
                        />
                        <label className='form-label' htmlFor='emailConf'>
                          Confirmação de Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6 mb-4 pb-2'>
                      <div className='form-outline'>
                        <input
                          type='password'
                          id='senha'
                          name='senha'
                          value={usuario.senha}
                          className='form-control form-control-lg'
                          onChange={handleChange}
                        />
                        <label className='form-label' htmlFor='senha'>
                          Crie uma senha
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-12'>
                      <label className='form-label select-label'>
                        Escolha uma opção de plano
                      </label>
                      <br />
                      <select
                        className='select form-control-lg'
                        name='plano'
                        value={usuario.plano}
                        onChange={handleChange}
                      >
                        <option value='0' disabled>
                          Tipo de plano
                        </option>
                        <option value='1'>Free</option>
                        <option value='2'>Premium</option>
                      </select>
                    </div>
                  </div>

                  <div className='mt-4 pt-2'>
                    <input
                      className='btn btn-primary btn-lg'
                      type='submit'
                      value='Cadastrar'
                      style={{
                        backgroundColor: '#1db954',
                        borderColor: 'green',
                      }}
                      disabled={validado}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
