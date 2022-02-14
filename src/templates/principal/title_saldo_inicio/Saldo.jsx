import React, { useState } from "react";
import ver1 from '../../../assets/Group25748.png'
import ver2 from '../../../assets/Group 5748.png'

const Saldo = (props) => {
    const user = props.user
    const vizualizar = [ver1, ver2]
    const [num, setnum] = useState(0);
    const [estilo, setEestilo ] = useState({color: "transparent", textShadow:' 0 0 10px  rgba(56, 210, 217, 1)' })


    function blur() {
        if (num == 0) {
            setEestilo({})
            return setnum(1)
        }
        if (num == 1) {
            setEestilo({color: "transparent", textShadow:' 0 0 10px  rgba(56, 210, 217, 1)' })
            return setnum(0)
        }

        return
    }


    


    return (
        <div className="saldo">
            <span className="saldoLabel">
                Saldo na conta
            </span>
            <div className="saldoVizu">
                <span className="saldonumber" style={estilo}>
                    {user.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </span>
                <div onClick={e => blur()}>
                    <img src={vizualizar[num]} alt="" id="vizualizar" />
                </div>
            </div>
        </div>
    )
}


export default Saldo;