import React from 'react';

function faq(){
    return(
        <div className="container mt-3" style={{marginBottom: '8.35em'}}>
        <h2>FAQs</h2>
        <div id="accordion">
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseOne">
                        Por que minha assinatura Premium mudou para gratuita?
                    </a>
                </div>
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                    <div className="card-body">
                        O motivo mais comum para sua assinatura Premium desaparecer repentinamente é devido a uma
                        segunda conta do Spotify criada usando o Facebook.
                        A melhor coisa a tentar é sair do Spotify e voltar usando seu endereço de e-mail e senha. Evite
                        usar o botão ‘Fazer login com o Facebook’, pois isso fará com que você volte à sua conta criada
                        no Facebook.
                        Se isso funcionar e agora você está vendo sua conta Premium, vale a pena fechar sua conta
                        gratuita para evitar qualquer confusão no futuro.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                        Como funciona a oferta Premium de 1 mês grátis?
                    </a>
                </div>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Entendemos que você gostaria de explorar todos os recursos exclusivos do Premium sem nenhum
                        custo antes de se comprometer com um plano recorrente. É por isso que oferecemos um teste
                        gratuito de 1 mês para quem nunca testou o Premium antes. Durante o período de teste gratuito,
                        você terá a experiência Premium completa de sua escolha, assim como qualquer outro assinante
                        pago.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                        Por que não consigo reproduzir arquivos locais?
                    </a>
                </div>
                <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Arquivos locais são arquivos de música armazenados em seu computador que podem ser reproduzidos pelo aplicativo Spotify.
                        Eles são colocados no aplicativo Spotify selecionando Sources for Local Files de dentro do aplicativo.
                        Menu de configurações.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                        O que é o Programa Spotify Star?
                    </a>
                </div>
                <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Como muitos fóruns online, a Comunidade Spotify tem seu próprio grupo de superusuários,
                        referidos e classificados como Estrelas. Suas postagens serão um pouco diferentes das de outros
                        usuários da Comunidade.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
                        Como faço para ativar ou desativar o Aleatório?
                    </a>
                </div>
                <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Embaralhar é a maneira mais fácil de obter uma mistura aleatória de músicas. Veja como ativar ou
                        desligado para seus dispositivos.
                        <br/>
                        <img src="https://community.spotify.com/t5/image/serverpage/image-id/90410iC687A12378EC09F9/image-size/medium?v=v2"
                            alt=""
                            width={400}/>

                        <br/>
                        Para desativá-lo, basta clicar nele novamente para que fique cinza.

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseSix">
                        Como faço para encontrar meus amigos no Spotify?
                    </a>
                </div>
                <div id="collapseSix" className="collapse" data-bs-parent="#accordionSix">
                    <div className="card-body">
                        Você deve conseguir encontrar qualquer usuário no Spotify usando a Pesquisa, mas às vezes essa solução alternativa pode
                         seja útil.
                        <br/>
                         Se você não conseguir encontrar outro usuário apenas digitando o nome dele, é provável que ele não tenha um
                         Nome em Exibição. Se você souber o nome de usuário, tente pesquisar spotify:user: seguido pelo Spotify
                         nome de usuário em vez disso (sem espaços).
                         <br/>
                         Se você conectar sua conta do Spotify ao Facebook, poderá ver uma lista recomendada de amigos e
                         pessoas em destaque a seguir.
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default faq;