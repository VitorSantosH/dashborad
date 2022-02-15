import React, { useState, useEffect } from "react";
import "./MinhaConta.css"
import marcador from '../../../assets/Rectangle 5976.png';
import arrow from '../../../assets/arrow-edit.png';


const MinhaConta = () => {

    const [importante, setimp] = useState('1');
    const [display, setDisplay] = useState({ value: "block" });


    const [style1, setStyle1] = useState({ color: "white", value: '1' });
    const [style2, setStyle2] = useState({ color: "white", value: '2' });
    const [style3, setStyle3] = useState({ color: "white", value: '3' });
    const [style4, setStyle4] = useState({ color: "white", value: '4' });
    const [style5, setStyle5] = useState({ color: "white", value: '5' });

    const Marcado = { color: "#38D2D9", display: 'block' }
    const desmarcado = { color: "white", display: 'none' }

    function dropdown() {

        if (display == "block") {
            setDisplay("none");
        } else (
            setDisplay('block')
        )
    }


    function marcar(value) {
        return setimp(value.value)
    }

    useEffect(() => {





        if (importante == 1) {
            console.log('imp')
            setStyle1({ ...Marcado });
            setStyle2({ desmarcado });
            setStyle3({ desmarcado });
            setStyle4({ desmarcado });
            setStyle5({ desmarcado });
        }
        if (importante == 2) {
            console.log('imp')
            setStyle2({ ...Marcado });
            setStyle1({ desmarcado });
            setStyle3({ desmarcado });
            setStyle4({ desmarcado });
            setStyle5({ desmarcado });
        }
        if (importante == 3) {
            console.log('imp')
            setStyle3({ ...Marcado });
            setStyle2({ desmarcado });
            setStyle1({ desmarcado });
            setStyle4({ desmarcado });
            setStyle5({ desmarcado });
        }
        if (importante == 4) {
            console.log('imp')
            setStyle4({ ...Marcado });
            setStyle2({ desmarcado });
            setStyle3({ desmarcado });
            setStyle1({ desmarcado });
            setStyle5({ desmarcado });
        }
        if (importante == 5) {
            console.log('imp')
            setStyle5({ ...Marcado })
            setStyle2({ desmarcado });
            setStyle3({ desmarcado });
            setStyle4({ desmarcado });
            setStyle1({ desmarcado });
        }


    }, [importante]);


    return (
        <div className="minhaConta">
            <span onClick={e => dropdown()} id="contaLabel" >Minha Conta</span>
            {display != "none" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="11.692" onClick={e => dropdown()} id="contaLogo" height="6.769" viewBox="0 0 11.692 6.769">
                    <g id="arrow-point-to-right" transform="translate(11.94) rotate(90)">
                        <path id="Path_8214" data-name="Path 8214" d="M6.526,6.425,1.42,11.452a.841.841,0,0,1-1.176,0,.81.81,0,0,1,0-1.158L4.762,5.846.244,1.4A.81.81,0,0,1,.244.24.841.841,0,0,1,1.42.24L6.526,5.267a.81.81,0,0,1,0,1.158Z" transform="translate(0 0.248)" fill="#38d2d9" />
                    </g>
                </svg>
            )}
            {display == "none" && (
                <img src={arrow} alt="" id="contaLogo2" onClick={e => dropdown()} />
            )}



            <div className="dropdown" style={{ display: display }}>

                <div className="item" style={{ color: style1.color }}>

                    <img src={marcador} alt="" className="marcador" style={{ display: style1.display }} />

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="itemLogo" height="15.889" viewBox="0 0 16 15.889">
                        <path id="Path_8437" data-name="Path 8437" fill={style1.color || "white"} d="M1.008-7.847A3.354,3.354,0,0,0,4.35-4.439,3.372,3.372,0,0,0,7.713-7.847a3.391,3.391,0,0,0-3.364-3.43A3.373,3.373,0,0,0,1.008-7.847Zm1.261,0a2.112,2.112,0,0,1,2.08-2.169,2.117,2.117,0,0,1,2.1,2.169A2.111,2.111,0,0,1,4.35-5.7,2.107,2.107,0,0,1,2.269-7.847ZM10.3,1.071a3.354,3.354,0,0,0,3.342,3.408,3.372,3.372,0,0,0,3.364-3.408,3.391,3.391,0,0,0-3.364-3.43A3.373,3.373,0,0,0,10.3,1.071Zm1.261,0a2.093,2.093,0,1,1,4.183,0,2.092,2.092,0,1,1-4.183,0ZM14-11.344,3,3.793l1.018.752,11-15.137Z" transform="translate(-1.008 11.344)" opacity="1" />
                    </svg>

                    <span className="itemLabel" value={1} onClick={e => marcar(e.target.attributes.value)} >Tarifas</span>


                </div>

                <div className="item" style={{ color: style2.color }}>

                    <img src={marcador} alt="" className="marcador" style={{ display: style2.display }} />

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="itemLogo" height="13.13" viewBox="0 0 16 13.13">
                        <path id="Union_313" data-name="Union 313" fill={style2.color || "white"} d="M1.833,13.13A1.822,1.822,0,0,1,0,11.324V4.431a1.821,1.821,0,0,1,1.833-1.8H3.28v.984H1.833A.828.828,0,0,0,1,4.431v6.893a.828.828,0,0,0,.834.82H14.167a.828.828,0,0,0,.834-.82V4.431a.828.828,0,0,0-.834-.82h-2.78V2.626h2.78A1.821,1.821,0,0,1,16,4.431v6.893a1.822,1.822,0,0,1-1.833,1.805ZM2.5,10.175V9.191h11v.985ZM2.15,8.384a.489.489,0,0,1-.13-.474L2.61,5.705a.485.485,0,0,1,.13-.223L8.16.144a.5.5,0,0,1,.706,0l1.65,1.625a.488.488,0,0,1,0,.7L5.1,7.8a.493.493,0,0,1-.226.128L2.63,8.513a.566.566,0,0,1-.127.015A.5.5,0,0,1,2.15,8.384Zm1.391-2.3L3.2,7.345l1.279-.332,4.972-4.9-.942-.929Zm6.291.809V5.908H13.5v.985Z" opacity="1" />
                    </svg>

                    <span className="itemLabel" value={2} onClick={e => marcar(e.target.attributes.value)} >Declaração de Conta</span>

                </div>

                <div className="item" value='3' style={{ color: style3.color }}>

                    <img src={marcador} alt="" className="marcador" style={{ display: style3.display }} />

                    <svg xmlns="http://www.w3.org/2000/svg" value={3} onClick={e => marcar(e.target.attributes.value)} className="itemLogo" width="16" height="16" viewBox="0 0 16 16">
                        <path id="messenger" d="M8,0A8,8,0,0,0,1.061,11.982L.03,15.183a.625.625,0,0,0,.786.786l3.2-1.031A8,8,0,1,0,8,0ZM8,14.75a6.73,6.73,0,0,1-3.573-1.023.625.625,0,0,0-.523-.065l-2.311.744L2.338,12.1a.625.625,0,0,0-.065-.523A6.75,6.75,0,1,1,8,14.75ZM8.781,8A.781.781,0,1,1,8,7.219.781.781,0,0,1,8.781,8Zm3.125,0a.781.781,0,1,1-.781-.781A.781.781,0,0,1,11.906,8ZM5.656,8a.781.781,0,1,1-.781-.781A.781.781,0,0,1,5.656,8Zm0,0" fill={style3.color || "white"} opacity="1" />
                    </svg>

                    <span className="itemLabel" className="itemLabel" value={3} onClick={e => marcar(e.target.attributes.value)}>
                        Ajuda
                    </span>

                </div>

                <div className="item" style={{ color: style4.color }} >

                    <img src={marcador} alt="" className="marcador" style={{ display: style4.display }} />

                    <svg xmlns="http://www.w3.org/2000/svg" value={4} onClick={e => marcar(e.target.attributes.value)} className="itemLogo" width="15.97" height="15.973" viewBox="0 0 15.97 15.973">
                        <g id="sign-out" opacity="1">
                            <path id="Path_8439" data-name="Path 8439" d="M16.862,7.777,14.28,5.2a.665.665,0,1,0-.941.941l2.582,2.582a1.369,1.369,0,0,1,.2.26c-.01,0-.018-.005-.028-.005h0L5.655,8.993a.666.666,0,1,0,0,1.331h0L16.089,10.3c.019,0,.034-.009.052-.011a1.331,1.331,0,0,1-.222.307l-2.582,2.582a.665.665,0,1,0,.941.941l2.582-2.582a2.662,2.662,0,0,0,0-3.764Z" transform="translate(-1.669 -1.672)" fill={style4.color || "white"} opacity="1" />
                            <path id="Path_8440" data-name="Path 8440" d="M4.659,14.642H3.328a2,2,0,0,1-2-2V3.328a2,2,0,0,1,2-2H4.659A.666.666,0,1,0,4.659,0H3.328A3.332,3.332,0,0,0,0,3.328v9.317a3.332,3.332,0,0,0,3.328,3.328H4.659a.666.666,0,1,0,0-1.331Z" fill={style4.color || "white"} opacity="1" />
                        </g>
                    </svg>

                    <span className="itemLabel" value={4} onClick={e => marcar(e.target.attributes.value)} >
                        Sair
                    </span>

                </div>

            </div>
        </div>
    )
}



export default MinhaConta;


