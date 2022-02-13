import React from "react";
import "./MenuLateral.css";
import Stric from "./Stric";
import Saldo from "./Saldo";





const Menu = (props) => {
    const user = props.user
    return (
        <div className="Menu">

            <Stric/>
            <Saldo user={user} />

        </div>
    )
};




export default Menu;