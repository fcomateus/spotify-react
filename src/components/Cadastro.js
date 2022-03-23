import React from 'react';

function Cadastro() {
    return (
        <div id='content-form-button'>
            <h2 class='h2'>
                Inscreva-se e comece a escutar músicas com alta qualidade.
            </h2>

            <div class='container mt-3'>
                <form style={{ marginBottom: '0.5em' }}>
                    <div class='mb-3'>
                        <label for='email'>Digite seu e-mail</label>
                        <div class='row'>
                            <div class='col'></div>
                            <input
                                class='form-control col'
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Digite seu e-mail'
                            />
                            <div class='col'></div>
                        </div>
                    </div>

                    <div class='mb-3'>
                        <label for='reemail'>Digite seu email novamente:</label>
                        <div class='row'>
                            <div class='col'></div>
                            <input
                                type='email'
                                class='form-control col'
                                id='reemail'
                                placeholder='Digite seu e-mail novamente'
                                name='reemail'
                            />
                            <div class='col'></div>
                        </div>
                    </div>

                    <div class='mb-3'>
                        <label for='name'>Qual seu nome?</label>
                        <div class='row'>
                            <div class='col'></div>
                            <input
                                type='text'
                                class='form-control col'
                                name='name'
                                id='name'
                                placeholder='Informe seu nome'
                            />
                            <div class='col'></div>
                        </div>
                    </div>

                    <label>Qual sua data de nascimento?</label>

                    <div class='mb-3 row'>
                        <div class='col'></div>
                        <div class='col'></div>
                        <div class='col'></div>
                        <div class='col'></div>
                        <input
                            class='form-control col'
                            type='number'
                            name='day'
                            id='day'
                            inputmode='numeric'
                            maxlenght='2'
                            max='31'
                            min='1'
                            placeholder='DD'
                        />
                        <select name='mes' id='mes' class='form-select col'>
                            <option value='0' disabled selected>
                                Mês
                            </option>
                            <option value='1'>Janeiro</option>
                            <option value='2'>Fevereiro</option>
                            <option value='3'>Março</option>
                            <option value='4'>Abril</option>
                            <option value='5'>Maio</option>
                            <option value='6'>Junho</option>
                            <option value='7'>Julho</option>
                            <option value='8'>Agosto</option>
                            <option value='9'>Setembro</option>
                            <option value='10'>Outubro</option>
                            <option value='11'>Novembro</option>
                            <option value='12'>Dezembro</option>
                        </select>
                        <input
                            class='form-control col'
                            type='number'
                            name='year'
                            id='year'
                            inputmode='numeric'
                            maxlength='4'
                            max='2022'
                            min='1900'
                            placeholder='AAAA'
                        />
                        <div class='col'></div>
                        <div class='col'></div>
                        <div class='col'></div>
                        <div class='col'></div>
                    </div>

                    <div class='mb-3'>
                        <label>Qual o seu gênero?</label>
                        <br />
                        <label for='masc'>Masculino</label>
                        <input type='radio' name='gender' id='masc' />
                        <label for='fem'>Feminino</label>
                        <input type='radio' name='gender' id='fem' />
                        <label for='null'>Neutro</label>
                        <input type='radio' name='gender' id='null' />
                    </div>

                    <div class='mb-3'>
                        <input
                            type='button'
                            style={{
                                backgroundColor: '#1db954',
                                borderColor: 'green',
                            }}
                            value='Entre com sua conta do Google'
                            class='btn btn-primary btn-md'
                        />
                    </div>
                    <div class='mb-3'>
                        <input
                            type='button'
                            style={{
                                backgroundColor: '#1db954',
                                borderColor: 'green',
                            }}
                            value='Entre com sua conta do Facebook'
                            class='btn btn-primary btn-md'
                        />
                    </div>

                    <button
                        type='submit'
                        style={{
                            backgroundColor: '#1db954',
                            borderColor: 'green',
                        }}
                        class='btn btn-primary'
                    >
                        Inscrever-se
                    </button>

                    <br />
                    <br />
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
