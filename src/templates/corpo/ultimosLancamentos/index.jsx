import React from "react";
import './index.css'

const UltimosLancamentos = () => {

    function createNotify(obj) {
        const notific = obj.map(lancamento => {
            return (
                <div className="pagamento">
                    <div className="svg">{lancamento.svg}</div>
                    <div className="metodoPag">{lancamento.metodoPag}</div>
                    {lancamento.saida &&  <div className="valorSaida"> -{lancamento.valor}</div> }
                    {lancamento.entrada &&  <div className="valorEntrada"> + {lancamento.valor}</div> }
                </div>
            )
        })
    }

    return (
        <div className="ultimosLancamentos">

            <div className="titulo">
                <svg xmlns="http://www.w3.org/2000/svg" className="marcadorLancamentos" width="4" height="16" viewBox="0 0 4 16">
                    <rect id="Rectangle_5997" data-name="Rectangle 5997" width="4" height="16" fill="#38d2d9" />
                </svg>

                <span className="tituloLancamentos">
                    Últimos Lançamentos
                </span>

                <span className="Extrato">
                    ver extrato completo
                </span>
            </div>

            <hr id="hrLancamentos"></hr>

        </div>
    )
}

export default UltimosLancamentos;