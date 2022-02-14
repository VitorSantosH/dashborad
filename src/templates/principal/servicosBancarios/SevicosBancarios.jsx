import React, { useState, useEffect } from 'react';

import "./SevicosBancarios.css"
import marcador from '../../../assets/Rectangle 5976.png';
import arrow from '../../../assets/arrow-edit.png';
import MinhaConta from './MinhaConta';


const ServicosBancarios = () => {

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
        <div className="servicosBancarios">
            <div className="div1" >

                <span onClick={e => dropdown()} id="labelServ" >Serviços Bancários</span>
                {display != "none" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.692" onClick={e => dropdown()} id="labelServ" id="servLogo" height="6.769" viewBox="0 0 11.692 6.769">
                        <g id="arrow-point-to-right" transform="translate(11.94) rotate(90)">
                            <path id="Path_8214" data-name="Path 8214" d="M6.526,6.425,1.42,11.452a.841.841,0,0,1-1.176,0,.81.81,0,0,1,0-1.158L4.762,5.846.244,1.4A.81.81,0,0,1,.244.24.841.841,0,0,1,1.42.24L6.526,5.267a.81.81,0,0,1,0,1.158Z" transform="translate(0 0.248)" fill="#38d2d9" />
                        </g>
                    </svg>
                )}
                {display == "none" && (
                    <img src={arrow} alt="" id="servLogo2" onClick={e => dropdown()} />
                )}

                <br />
                <br />
                <br />
                <div className="dropdown" style={{ display: display }} >
                    <div className="depositar" key={1} style={style1} >

                        <img src={marcador} alt="" className="marcador" style={{ display: style1.display }} />

                        <svg xmlns="http://www.w3.org/2000/svg" value={1} onClick={e => marcar(e.target.attributes.value)} id='depositarLogo' width="15.862" height="17.625" viewBox="0 0 15.862 17.625">
                            <g id="receive" transform="translate(0 0)" opacity="1">
                                <path id="Path_8254" data-name="Path 8254" fill={style1.color || "white"} d="M15.922,130.644H14.6v-2.2a.441.441,0,0,0-.441-.441H12.4a.441.441,0,0,0,0,.881h1.322v1.762H2.262a.881.881,0,1,1,0-1.762h2.2a.441.441,0,1,0,0-.881h-2.2A1.764,1.764,0,0,0,.5,129.762v9.694a1.764,1.764,0,0,0,1.762,1.762H15.922a.441.441,0,0,0,.441-.441v-9.694A.441.441,0,0,0,15.922,130.644ZM2.262,140.337a.882.882,0,0,1-.881-.881V131.28a1.743,1.743,0,0,0,.881.245H15.481v2.644H12.4a.441.441,0,0,0-.441.441v2.644a.441.441,0,0,0,.441.441h3.084v2.644Zm13.218-3.525H12.837V135.05h2.644Zm0,0" transform="translate(-0.5 -123.594)" />
                                <path id="Path_8255" data-name="Path 8255" fill={style1.color || "white"} d="M156.464,6.072a.442.442,0,0,0,.551,0l2.2-1.762a.441.441,0,0,0-.551-.688l-1.487,1.19V.441a.441.441,0,1,0-.881,0V4.811l-1.487-1.19a.441.441,0,1,0-.551.688Zm0,0" transform="translate(-148.809 0)" />
                            </g>
                        </svg>
                        <span className="depositarLabel" value={1} onClick={e => marcar(e.target.attributes.value)} >Depositar</span>


                    </div>

                    <div className="cobrar" key={2} style={style2}>

                        <img src={marcador} alt="" className="marcador" style={{ display: style2.display }} />

                        <svg xmlns="http://www.w3.org/2000/svg" value='2' onClick={e => marcar(e.target.attributes.value)} id='cobrarLogo' width="16" height="14" viewBox="0 0 16 14">
                            <g id="Group_5759" data-name="Group 5759" transform="translate(0 0)" opacity="1">
                                <path id="Path_8174" data-name="Path 8174" d="M23.5,26H21.833A.834.834,0,0,1,21,25.166v-3H19.5a.5.5,0,0,1-.353-.853l3.167-3.167a.5.5,0,0,1,.707,0l3.167,3.167a.5.5,0,0,1-.353.853h-1.5v3A.834.834,0,0,1,23.5,26ZM22,25h1.333V21.667a.5.5,0,0,1,.5-.5h.793l-1.959-1.959-1.959,1.959H21.5a.5.5,0,0,1,.5.5Z" transform="translate(-10.334 -12)" fill={style2.color || "white"} />
                                <path id="Path_8175" data-name="Path 8175" d="M13.5,21H7.833A1.835,1.835,0,0,1,6,19.167V10.833A1.835,1.835,0,0,1,7.833,9H20.166A1.835,1.835,0,0,1,22,10.833v4.333H21V10.833A.834.834,0,0,0,20.166,10H7.833A.834.834,0,0,0,7,10.833v8.333A.834.834,0,0,0,7.833,20H13.5Z" transform="translate(-6 -9)" fill={style2.color || "white"} />
                                <path id="Path_8176" data-name="Path 8176" d="M10.833,19.333H6.5a.5.5,0,0,1-.5-.5V14.5a.5.5,0,0,1,.5-.5h4.333a1.835,1.835,0,0,1,1.833,1.833V17.5A1.835,1.835,0,0,1,10.833,19.333ZM7,18.333h3.833a.834.834,0,0,0,.833-.833V15.833A.834.834,0,0,0,10.833,15H7Z" transform="translate(-6 -10.666)" fill={style2.color || "white"} />
                                <circle id="Ellipse_276" data-name="Ellipse 276" cx="0.667" cy="0.667" r="0.667" transform="translate(2.666 5.334)" fill={style2.color || "white"} />
                            </g>
                        </svg>

                        <span className="cobrarLabel" value='2' onClick={e => marcar(e.target.attributes.value)}>
                            Cobrar
                        </span>

                    </div>
                    



                    <div className="realizarPix">

                        <img src={marcador} alt="" className="marcador" style={{ display: style3.display }} />

                        <svg xmlns="http://www.w3.org/2000/svg" value='3' onClick={e => marcar(e.target.attributes.value)} id='pixLogo' width="16" height="15.887" viewBox="0 0 16 15.887">
                            <g id="Group_5758" data-name="Group 5758" transform="translate(308.136 -934.478)" opacity="1">
                                <path id="path2376" d="M406.124,433.624l1.8,1.8a3.192,3.192,0,0,0,.558.447l-1.582,1.582a1.236,1.236,0,0,1-1.748,0l-1.509-1.509a3.192,3.192,0,0,0,.663-.51l1.814-1.814m0-1.291a.426.426,0,0,0-.295.118l-2.253,2.253a2.185,2.185,0,0,1-1.548.644h-.071a.156.156,0,0,0-.111.267l2.576,2.576a2.274,2.274,0,0,0,3.215,0l2.851-2.851h-.276a2.185,2.185,0,0,1-1.549-.644l-2.244-2.245a.426.426,0,0,0-.295-.118Zm4.364,3.007h0Z" transform="translate(-706.146 511.509)" fill={style3.color || "white"} />
                                <path id="path2380" d="M406.325,352.158a1.227,1.227,0,0,1,.874.362l1.582,1.582a3.186,3.186,0,0,0-.556.445l-1.806,1.806-1.812-1.812a3.2,3.2,0,0,0-.665-.512l1.507-1.507,0,0a1.227,1.227,0,0,1,.874-.362m0-1.038a2.266,2.266,0,0,0-1.607.666h0l-2.53,2.529a.183.183,0,0,0,.13.313h.006a2.185,2.185,0,0,1,1.549.644l2.253,2.253a.417.417,0,0,0,.59,0l2.245-2.245a2.184,2.184,0,0,1,1.549-.644h.276l-2.851-2.851a2.266,2.266,0,0,0-1.607-.666Z" transform="translate(-706.441 583.358)" fill={style3.color || "white"} />
                                <path id="Path_8133" data-name="Path 8133" d="M371.949,394.6a.546.546,0,0,1-.4-.184c-.021-.014-1.788-1.662-1.788-1.662l-.013-.012a2.792,2.792,0,0,1,0-3.949s1.782-1.661,1.8-1.676a.538.538,0,0,1,.417-.183h.954a2.055,2.055,0,0,1,1.453.6l2.254,2.254a.561.561,0,0,0,.79,0l2.244-2.244a2.056,2.056,0,0,1,1.453-.6h.785a.57.57,0,0,1,.4.171.52.52,0,0,1,.076.059l1.714,1.6.022.021a2.8,2.8,0,0,1,0,3.948l-.013.013-1.723,1.607a.52.52,0,0,1-.078.06.557.557,0,0,1-.4.17h-.784a2.055,2.055,0,0,1-1.453-.6l-2.24-2.24a.584.584,0,0,0-.8,0L374.376,394a2.055,2.055,0,0,1-1.453.6h-.974Zm-.026-1.258a.831.831,0,0,0,.564.22h.435a1.022,1.022,0,0,0,.722-.3l2.252-2.252.009-.008a1.629,1.629,0,0,1,.31-.233,1.592,1.592,0,0,1-.318-.246l-2.253-2.253a1.022,1.022,0,0,0-.722-.3h-.514a.653.653,0,0,0-.445.175l-1.487,1.385a1.755,1.755,0,0,0,0,2.469S371.457,392.915,371.923,393.345Zm5.911-2.572a1.626,1.626,0,0,1,.31.233l.009.008,2.244,2.244a1.021,1.021,0,0,0,.722.3h.072a1.335,1.335,0,0,0,.91-.357L383.385,392a1.757,1.757,0,0,0,0-2.467l-1.289-1.2a1.335,1.335,0,0,0-.909-.357h-.072a1.023,1.023,0,0,0-.722.3l-2.243,2.243A1.589,1.589,0,0,1,377.834,390.773Z" transform="translate(-677.065 551.67)" fill={style3.color || "white"} />
                            </g>
                        </svg>

                        <span className="pixLabel" value='3' style={{ color: style3.color }} onClick={e => marcar(e.target.attributes.value)}>
                            Realizar PIX
                        </span>

                    </div>

                    <div className="pagarContas" style={{ display: style4.display }}>

                        <img src={marcador} alt="" className="marcador" style={{ display: style4.display }} />

                        <svg xmlns="http://www.w3.org/2000/svg" value='4' onClick={e => marcar(e.target.attributes.value)} id='pagarLogo' width="16" height="12.188" viewBox="0 0 16 12.188">
                            <g id="barcode_1_" data-name="barcode (1)" transform="translate(0 0)" opacity="1">
                                <path id="Path_8256" data-name="Path 8256" d="M2.969,61H1.094A1.1,1.1,0,0,0,0,62.094v1.875a.469.469,0,1,0,.938,0V62.094a.156.156,0,0,1,.156-.156H2.969a.469.469,0,1,0,0-.937Z" transform="translate(0 -61)" fill={style4.color || "white"} />
                                <path id="Path_8257" data-name="Path 8257" d="M2.969,343.5H1.094a.156.156,0,0,1-.156-.156v-1.875a.469.469,0,0,0-.938,0v1.875a1.1,1.1,0,0,0,1.094,1.094H2.969a.469.469,0,1,0,0-.937Z" transform="translate(0 -332.25)" fill={style4.color || "white"} />
                                <path id="Path_8258" data-name="Path 8258" d="M404.969,341a.469.469,0,0,0-.469.469v1.875a.156.156,0,0,1-.156.156h-1.875a.469.469,0,0,0,0,.938h1.875a1.1,1.1,0,0,0,1.094-1.094v-1.875A.469.469,0,0,0,404.969,341Z" transform="translate(-389.437 -332.25)" fill={style4.color || "white"} />
                                <path id="Path_8259" data-name="Path 8259" d="M404.344,61h-1.875a.469.469,0,0,0,0,.938h1.875a.156.156,0,0,1,.156.156v1.875a.469.469,0,1,0,.938,0V62.094A1.1,1.1,0,0,0,404.344,61Z" transform="translate(-389.437 -61)" fill={style4.color || "white"} />
                                <path id="Path_8260" data-name="Path 8260" d="M60.938,129.907v-7.438a.469.469,0,1,0-.938,0v7.438a.469.469,0,1,0,.938,0Z" transform="translate(-58.125 -120.094)" fill={style4.color || "white"} />
                                <path id="Path_8261" data-name="Path 8261" d="M120.469,122a.469.469,0,0,0-.469.469v4.938a.469.469,0,0,0,.938,0v-4.938A.469.469,0,0,0,120.469,122Z" transform="translate(-116.25 -120.094)" fill={style4.color || "white"} />
                                <path id="Path_8262" data-name="Path 8262" d="M180.469,122a.469.469,0,0,0-.469.469v7.438a.469.469,0,1,0,.938,0v-7.438A.469.469,0,0,0,180.469,122Z" transform="translate(-174.375 -120.094)" fill={style4.color || "white"} />
                                <path id="Path_8263" data-name="Path 8263" d="M240.469,122a.469.469,0,0,0-.469.469v4.938a.469.469,0,0,0,.938,0v-4.938A.469.469,0,0,0,240.469,122Z" transform="translate(-232.5 -120.094)" fill={style4.color || "white"} />
                                <path id="Path_8264" data-name="Path 8264" d="M300.469,122a.469.469,0,0,0-.469.469v4.938a.469.469,0,1,0,.938,0v-4.938A.469.469,0,0,0,300.469,122Z" transform="translate(-290.625 -120.094)" fill={style4.color || "white"} />
                                <path id="Path_8265" data-name="Path 8265" d="M360.469,122a.469.469,0,0,0-.469.469v4.938a.469.469,0,1,0,.938,0v-4.938A.469.469,0,0,0,360.469,122Z" transform="translate(-348.75 -120.094)" fill={style4.color || "white"} />
                                <path id="Path_8266" data-name="Path 8266" d="M420.938,129.907v-7.438a.469.469,0,1,0-.937,0v7.438a.469.469,0,1,0,.938,0Z" transform="translate(-406.875 -120.094)" fill={style4.color || "white"} />
                                <path id="Path_8267" data-name="Path 8267" d="M120.469,343a.469.469,0,0,0-.469.469V344a.469.469,0,0,0,.938,0v-.531A.469.469,0,0,0,120.469,343Z" transform="translate(-116.25 -334.188)" fill={style4.color || "white"} />
                                <path id="Path_8268" data-name="Path 8268" d="M240.469,343a.469.469,0,0,0-.469.469V344a.469.469,0,0,0,.938,0v-.531A.469.469,0,0,0,240.469,343Z" transform="translate(-232.5 -334.188)" fill={style4.color || "white"} />
                                <path id="Path_8269" data-name="Path 8269" d="M300.469,343a.469.469,0,0,0-.469.469V344a.469.469,0,0,0,.938,0v-.531A.469.469,0,0,0,300.469,343Z" transform="translate(-290.625 -334.188)" fill={style4.color || "white"} />
                                <path id="Path_8270" data-name="Path 8270" d="M360.469,343a.469.469,0,0,0-.469.469V344a.469.469,0,0,0,.938,0v-.531A.469.469,0,0,0,360.469,343Z" transform="translate(-348.75 -334.188)" fill={style4.color || "white"} />
                            </g>
                        </svg>

                        <span value='4' className='pagarLabel' style={{ color: style4.color }} onClick={e => marcar(e.target.attributes.value)}> Pagar Contas</span>

                    </div>

                    <div className="transferir">

                        <img src={marcador} alt="" className="marcador" style={{ display: style5.display }} />

                        <svg xmlns="http://www.w3.org/2000/svg" id='transferirLogo' width="16" height="14" viewBox="0 0 16 14">
                            <g id="Group_5750" data-name="Group 5750" transform="translate(0 0)" opacity="1">
                                <path id="Path_8174" data-name="Path 8174" d="M23.5,26H21.833A.834.834,0,0,1,21,25.166v-3H19.5a.5.5,0,0,1-.353-.853l3.167-3.167a.5.5,0,0,1,.707,0l3.167,3.167a.5.5,0,0,1-.353.853h-1.5v3A.834.834,0,0,1,23.5,26ZM22,25h1.333V21.667a.5.5,0,0,1,.5-.5h.793l-1.959-1.959-1.959,1.959H21.5a.5.5,0,0,1,.5.5Z" transform="translate(-10.334 -12)" fill={style5.color || "white"} />
                                <path id="Path_8175" data-name="Path 8175" d="M13.5,21H7.833A1.835,1.835,0,0,1,6,19.167V10.833A1.835,1.835,0,0,1,7.833,9H20.166A1.835,1.835,0,0,1,22,10.833v4.333H21V10.833A.834.834,0,0,0,20.166,10H7.833A.834.834,0,0,0,7,10.833v8.333A.834.834,0,0,0,7.833,20H13.5Z" transform="translate(-6 -9)" fill={style5.color || "white"} />
                                <path id="Path_8176" data-name="Path 8176" d="M10.833,19.333H6.5a.5.5,0,0,1-.5-.5V14.5a.5.5,0,0,1,.5-.5h4.333a1.835,1.835,0,0,1,1.833,1.833V17.5A1.835,1.835,0,0,1,10.833,19.333ZM7,18.333h3.833a.834.834,0,0,0,.833-.833V15.833A.834.834,0,0,0,10.833,15H7Z" transform="translate(-6 -10.666)" fill={style5.color || "white"} />
                                <circle id="Ellipse_276" data-name="Ellipse 276" cx="0.667" cy="0.667" r="0.667" transform="translate(2.666 5.334)" fill={style5.color || "white"} />
                            </g>
                        </svg>


                        <span value='5' className='transferirLabel' style={{ color: style5.color }} onClick={e => marcar(e.target.attributes.value)}>Transferir TED/DOC</span>

                    </div>

                </div>

            </div>
            
            <MinhaConta className="div2"/>
        </div>
    )
}



export default ServicosBancarios;