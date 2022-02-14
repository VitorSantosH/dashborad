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
            setStyle5({ ...Marcado });
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
                <svg xmlns="http://www.w3.org/2000/svg"  width="11.692" onClick={e => dropdown()} id="contaLogo" height="6.769" viewBox="0 0 11.692 6.769">
                    <g id="arrow-point-to-right" transform="translate(11.94) rotate(90)">
                        <path id="Path_8214" data-name="Path 8214" d="M6.526,6.425,1.42,11.452a.841.841,0,0,1-1.176,0,.81.81,0,0,1,0-1.158L4.762,5.846.244,1.4A.81.81,0,0,1,.244.24.841.841,0,0,1,1.42.24L6.526,5.267a.81.81,0,0,1,0,1.158Z" transform="translate(0 0.248)" fill="#38d2d9" />
                    </g>
                </svg>
            )}
            {display == "none" && (
                <img src={arrow} alt="" id="contaLogo2" onClick={e => dropdown()} />
            )}

            <br />
            <br />
            <br />

            <div className="dropdown" style={{ display: display }}>

                <div className="tarifas" style={style1}>

                    <img src={marcador} alt="" className="marcador" style={{ display: style1.display }} />

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" id="tarifasLogo" height="15.889" viewBox="0 0 16 15.889">
                        <path id="Path_8437" data-name="Path 8437" fill={style1.color || "white"} d="M1.008-7.847A3.354,3.354,0,0,0,4.35-4.439,3.372,3.372,0,0,0,7.713-7.847a3.391,3.391,0,0,0-3.364-3.43A3.373,3.373,0,0,0,1.008-7.847Zm1.261,0a2.112,2.112,0,0,1,2.08-2.169,2.117,2.117,0,0,1,2.1,2.169A2.111,2.111,0,0,1,4.35-5.7,2.107,2.107,0,0,1,2.269-7.847ZM10.3,1.071a3.354,3.354,0,0,0,3.342,3.408,3.372,3.372,0,0,0,3.364-3.408,3.391,3.391,0,0,0-3.364-3.43A3.373,3.373,0,0,0,10.3,1.071Zm1.261,0a2.093,2.093,0,1,1,4.183,0,2.092,2.092,0,1,1-4.183,0ZM14-11.344,3,3.793l1.018.752,11-15.137Z" transform="translate(-1.008 11.344)" opacity="1" />
                    </svg>

                    <span className="tarifasLabel" value={1} onClick={e => marcar(e.target.attributes.value)} >Tarifas</span>


                </div>

                <div id="declaracao" style={style2}>

                    <img src={marcador} alt="" className="marcador" style={{ display: style2.display }} />

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" id="declaracaoLogo" height="13.13" viewBox="0 0 16 13.13">
                        <path id="Union_313" data-name="Union 313" fill={style2.color || "white"} d="M1.833,13.13A1.822,1.822,0,0,1,0,11.324V4.431a1.821,1.821,0,0,1,1.833-1.8H3.28v.984H1.833A.828.828,0,0,0,1,4.431v6.893a.828.828,0,0,0,.834.82H14.167a.828.828,0,0,0,.834-.82V4.431a.828.828,0,0,0-.834-.82h-2.78V2.626h2.78A1.821,1.821,0,0,1,16,4.431v6.893a1.822,1.822,0,0,1-1.833,1.805ZM2.5,10.175V9.191h11v.985ZM2.15,8.384a.489.489,0,0,1-.13-.474L2.61,5.705a.485.485,0,0,1,.13-.223L8.16.144a.5.5,0,0,1,.706,0l1.65,1.625a.488.488,0,0,1,0,.7L5.1,7.8a.493.493,0,0,1-.226.128L2.63,8.513a.566.566,0,0,1-.127.015A.5.5,0,0,1,2.15,8.384Zm1.391-2.3L3.2,7.345l1.279-.332,4.972-4.9-.942-.929Zm6.291.809V5.908H13.5v.985Z" opacity="1" />
                    </svg>

                    <span className="declaracaoLabel" value={2} onClick={e => marcar(e.target.attributes.value)} >Declaração de Conta</span>

                </div>
            </div>
        </div>
    )
}



export default MinhaConta;


