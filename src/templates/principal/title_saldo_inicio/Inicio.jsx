import React, { useEffect, useState } from "react";
import './Inicio.css';

import marcador from '../../../assets/Rectangle 5976.png';

const Inicio = () => {

    const [impotante, setimp] = useState('1')
    const [style1, setStyle1] = useState({ color: "white" });
    const [style2, setStyle2] = useState({ color: "white" });
    const [style3, setStyle3] = useState({ color: "white" });

    const Marcado = { color: "#38D2D9", display: 'block' }
    const desmarcado = { color: "white", display: 'none' }

    function marcar(value) {
        console.log(value)
        if (value.value == 1) {
            return setimp(1)
        }
        if (value.value == 2) {
            return setimp(2)
        }
        if (value.value == 3) {
            return setimp(3)
        }
        return
    }
    useEffect(() => {
        console.log(impotante)
        if (impotante == 1) {
            console.log('imp')
            setStyle1({ ...Marcado });
            setStyle2({ desmarcado });
            setStyle3({ desmarcado })
        }
        if (impotante == 2) {
            console.log('imp')
            setStyle2({ ...Marcado });
            setStyle1({ desmarcado });
            setStyle3({ desmarcado })
        }
        if (impotante == 3) {
            console.log('imp')
            setStyle3({ ...Marcado });
            setStyle2({ desmarcado });
            setStyle1({ desmarcado })
        }
    }, [impotante])

    return (
        <div className="inicio">

            <div className="home" style={{color: style1.color}} >

                <img src={marcador} alt="" className="marcador"  style={{display: style1.display}} />

                <svg className="logoHome" value='1' onClick={e => marcar(e.target.attributes.value)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path id="home_2_" data-name="home (2)" d="M16.07,6.959h0L9.541.432a1.473,1.473,0,0,0-2.083,0L.934,6.955l-.007.007a1.472,1.472,0,0,0,.98,2.51l.046,0h.26v4.8A1.726,1.726,0,0,0,3.937,16H6.491a.469.469,0,0,0,.469-.469V11.766a.787.787,0,0,1,.787-.786H9.253a.787.787,0,0,1,.787.786v3.766a.469.469,0,0,0,.469.469h2.554a1.726,1.726,0,0,0,1.724-1.724v-4.8h.241A1.473,1.473,0,0,0,16.07,6.959Zm-.664,1.419a.532.532,0,0,1-.379.157h-.71A.469.469,0,0,0,13.848,9v5.272a.787.787,0,0,1-.787.786H10.977v-3.3a1.726,1.726,0,0,0-1.724-1.724H7.746a1.726,1.726,0,0,0-1.724,1.724v3.3H3.937a.787.787,0,0,1-.787-.786V9a.469.469,0,0,0-.469-.469h-.72a.535.535,0,0,1-.369-.913h0L8.121,1.094a.535.535,0,0,1,.757,0L15.4,7.619l0,0A.537.537,0,0,1,15.406,8.379Zm0,0" transform="translate(-0.499)" fill={style1.color || "white"} />
                </svg>
                <span id="inicioLabel" value='1' onClick={e => marcar(e.target.attributes.value)} >Início</span>
            </div>

            <div className="extrato" value='2' style={{ color: style2.color }}>
                
                <img src={marcador} alt="" className="marcador" style={{display: style2.display}} />

                <svg className="extratoLogo" value='2' onClick={e => marcar(e.target.attributes.value)} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                    <g id="receipt" transform="translate(-2.79 0)" opacity="1">
                        <path id="Union_315" data-name="Union 315" d="M7.4,15.883,6,14.924l-1.4.959a.666.666,0,0,1-.753,0l-1.4-.959-1.4.959A.667.667,0,0,1,0,15.333v-12A3.337,3.337,0,0,1,3.333,0H8.666A3.338,3.338,0,0,1,12,3.334v12a.667.667,0,0,1-1.042.549l-1.4-.958-1.4.959a.665.665,0,0,1-.754,0ZM6.379,13.565l1.4.959,1.4-.959a.666.666,0,0,1,.754,0l.734.5V3.334a2,2,0,0,0-2-2H3.333a2,2,0,0,0-2,2V14.066l.739-.5a.666.666,0,0,1,.753,0l1.4.959,1.4-.959a.666.666,0,0,1,.754,0ZM3.333,9.333A.667.667,0,0,1,3.333,8h4a.667.667,0,0,1,0,1.334Zm0-2.667a.667.667,0,1,1,0-1.333H8.666a.667.667,0,1,1,0,1.333Z" transform="translate(2.79 0)" fill={style2.color || "white"} />
                    </g>
                </svg>
                <span className="extratoLabel" value='2' onClick={e => marcar(e.target.attributes.value)} >Extrato</span>
            </div>

            <div className="comprovantes" value='3' style={{ color: style3.color }} >

                <img src={marcador} alt="" className="marcador" style={{display: style3.display}}/>

                <svg className="comprovantesLogo" value='3' onClick={e => marcar(e.target.attributes.value)} xmlns="http://www.w3.org/2000/svg" width="16" height="14.667" viewBox="0 0 16 14.667">
                    <path id="Union_311" data-name="Union 311" d="M0,14.667v-1H1.333V6.5A1.168,1.168,0,0,1,2.5,5.333h3v1h-3a.166.166,0,0,0-.167.166v7.167H13.667V9.833h1v3.834H16v1ZM7.333,4.333a4.333,4.333,0,1,1,4.333,4.333A4.338,4.338,0,0,1,7.333,4.333Zm1,0A3.333,3.333,0,1,0,11.666,1,3.337,3.337,0,0,0,8.333,4.333ZM11.166,7V6.38h-.833v-1h1.472c.092,0,.194-.112.194-.274s-.1-.274-.194-.274h-.278a1.238,1.238,0,0,1-1.195-1.274,1.269,1.269,0,0,1,.834-1.214V1.667h1v.619H13v1H11.528c-.092,0-.194.112-.194.273s.1.274.194.274h.278A1.238,1.238,0,0,1,13,5.107a1.269,1.269,0,0,1-.834,1.214V7Z" fill={style3.color || "white"} opacity="1" />
                </svg>
                <span className="comprovantesLabel" value='3' onClick={e => marcar(e.target.attributes.value)} >Comprovantes</span>
            </div>
            


        </div>



    )
}


export default Inicio;