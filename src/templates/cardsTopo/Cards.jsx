import React from "react";
import "./Cards.css"



import marcador from '../../assets/Rectangle 5976.png';

const Cards = (props) => {

    const user = props.user;


    return (
        <div className="cards">

            <card className="card" style={{ backgroundColor: '#38D2D9' }}>

                <svg xmlns="http://www.w3.org/2000/svg" className="marcadorCards" width="4" height="16" viewBox="0 0 4 16">
                    <rect id="Rectangle_5987" data-name="Rectangle 5987" width="4" height="16" opacity="0.9" />
                </svg>
                <span className="labelCards">
                    Saldo na conta
                </span>

                <h1 className="valorCards">{user.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
            </card>

            <card className="card" style={{ backgroundColor: '#49D294' }} >

                <svg xmlns="http://www.w3.org/2000/svg" className="marcadorCards" width="4" height="16" viewBox="0 0 4 16">
                    <rect id="Rectangle_5987" className="marcadorCards" data-name="Rectangle 5987" width="4" height="16" />
                </svg>
                <span className="labelCards">
                    Rentabilidade do Mês
                </span>

                <h1 className="valorCards"> +{" "}{user.rentabilidadeMes.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
            </card>



            <card className="card" style={{ backgroundColor: 'white', color: '#0E1833' }} >

                <svg xmlns="http://www.w3.org/2000/svg" className="marcadorCards" width="4" height="16" viewBox="0 0 4 16">
                    <rect id="Rectangle_5987" className="marcadorCards" data-name="Rectangle 5987" width="4" height="16" />
                </svg>
                <span className="labelCards">
                    Boletos em aberto
                </span>

                <h1 className="valorCards"> {user.boletosAberto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
            </card>

            <card  id='info' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} >

                <span>
                    <h1 style={{color: 'white'}}>{user.name}{" "} {user.complementoNome}</h1>
                </span>
                <span id="cnpj">
                    {user.cnpj}
                </span>
                <p></p>
                <span>
                    Banco Stric: <span style={{color: 'white'}} id="banc">{user.banco}</span>
                    
                </span>
                <p></p>
                <span>
                    Agência: <span style={{color: 'white'}} id="agencia">{" "}{user.agencia}</span>{"\n"}
                </span>
                <p></p>
                <span>
                    Conta: <span style={{color: 'white'}} id="cont">{user.conta}</span>
                </span>

            </card>

        </div>
    )
}



export default Cards;