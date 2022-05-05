import { React, useState, useEffect } from "react";
import { getCookie } from "../services/cookie";
import api from "../services/api";

function Profile() {
  const [carregando, setCarregando] = useState(true);
  const [profile, setProfile] = useState({});
  const cookie = getCookie("spotifycookie");

  const [confimacao, setConfirmacao] = useState("");
 
  useEffect(() => {
    fetchProfile(parseInt(cookie));
  }, []);

  const fetchProfile = () => {
    setCarregando(true);
    api
      .get(`/usuarios/${cookie}`) // porta do json-server
      .then((res) => {
        setProfile(res.data);
        setCarregando(false);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  const handleChange = (e) => {
    const campo = e.target.name;
    const valor = e.target.value;
    setProfile({ ...profile, [campo]: valor });
  };

  const handleChangeConf = (e) => {
    const campo = e.target.name;
    const valor = e.target.value;
    setConfirmacao({ ...confimacao, [campo]: valor });
  };

  const comparaSenha = () => {
    if (confimacao.senha !== profile.senha) {
      return false;
    }
    return true;
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            ></img>
            <span className="font-weight-bold">{profile.nome}</span>
            <span className="text-black-50">{profile.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-7 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="text-right">Perfil</h1>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nome"
                  value={profile.nome}
                  onChange={handleChange}
                  name="nome"
                ></input>
              </div>
              <div className="col-md-6">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="sobrenome"
                  value={profile.sobrenome}
                  onChange={handleChange}
                  name="sobrenome"
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Data de Nascimento</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="dataDeNascimento"
                  value={profile.dataDeNascimento}
                  onChange={handleChange}
                  name="dataDeNascimento"
                ></input>
              </div>

              <div className="col-md-12">
                <label className="labels genero">Gênero:</label>
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

              <div className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  value={profile.email}
                  onChange={handleChange}
                  name="email"
                ></input>
              </div>
              <div className="col-md-12">
                <label className="labels">Tipo do Plano</label>
                <select
                        className='select form-control'
                        name='plano'
                        value={profile.plano}
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
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Senha Atual</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  value="Senha Atual"
                  onChange={handleChangeConf}
                  name="senha"
                ></input>
              </div>
              <div className="col-md-6">
                <label className="labels">Nova senha</label>
                <input
                  type="text"
                  className={`${
                    comparaSenha() ? '' : 'form-invalid'
                  } form-control`}                  
                  placeholder=""
                  value="Nova Senha"
                  onChange={handleChange }
                  name="novaSenha"
                ></input>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
