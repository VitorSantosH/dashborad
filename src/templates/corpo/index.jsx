import React from "react";
import "./Index.css"

import UltimosLancamentos from "./ultimosLancamentos";

const Corpo = (props) => {

    const user = props.user;

    return (
        <div className="corpo">
            <UltimosLancamentos user={user} />
        </div>
    )
}


export default Corpo;