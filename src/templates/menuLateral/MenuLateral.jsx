import React from "react";

import "./MenuLateral.css";
import Stric from "./title_saldo_inicio/Stric";
import Saldo from "./title_saldo_inicio/Saldo";
import Inicio from "./title_saldo_inicio/Inicio";
import linha from "../../assets/Line 2.png"
import ServicosBancarios from "./servicosBancarios/SevicosBancarios";



const Menu = (props) => {
    const user = props.user
    return (
        <div className="Menu">
            <Stric />
            <Saldo user={user} />
            <img src={linha} alt="" id="linha" />
            <Inicio user={user} />
            <ServicosBancarios />
        </div>
    )
};




export default Menu;