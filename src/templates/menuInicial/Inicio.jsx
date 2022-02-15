import React from "react";
import "./Inicio.css"


const Inicio = (props) => {
    const user = props.user;
    return (
        <div className="inicioMenu">

            <div className="part1">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path id="home_2_" data-name="home (2)" d="M16.07,6.959h0L9.541.432a1.473,1.473,0,0,0-2.083,0L.934,6.955l-.007.007a1.472,1.472,0,0,0,.98,2.51l.046,0h.26v4.8A1.726,1.726,0,0,0,3.937,16H6.491a.469.469,0,0,0,.469-.469V11.766a.787.787,0,0,1,.787-.786H9.253a.787.787,0,0,1,.787.786v3.766a.469.469,0,0,0,.469.469h2.554a1.726,1.726,0,0,0,1.724-1.724v-4.8h.241A1.473,1.473,0,0,0,16.07,6.959Zm-.664,1.419a.532.532,0,0,1-.379.157h-.71A.469.469,0,0,0,13.848,9v5.272a.787.787,0,0,1-.787.786H10.977v-3.3a1.726,1.726,0,0,0-1.724-1.724H7.746a1.726,1.726,0,0,0-1.724,1.724v3.3H3.937a.787.787,0,0,1-.787-.786V9a.469.469,0,0,0-.469-.469h-.72a.535.535,0,0,1-.369-.913h0L8.121,1.094a.535.535,0,0,1,.757,0L15.4,7.619l0,0A.537.537,0,0,1,15.406,8.379Zm0,0" transform="translate(-0.499)" fill="#38d2d9" />
                    </svg>

                    <span className="spanInicio">Início</span>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.976" height="20" viewBox="0 0 17.976 20">
                        <g id="_28" data-name="28" transform="translate(-3.415 -2)">
                            <path id="Path_8443" data-name="Path 8443" d="M21.022,16.755,19.8,15a1.428,1.428,0,0,1-.257-.814V9.142a7.142,7.142,0,0,0-14.283,0v5.042A1.428,1.428,0,0,1,5,15L3.783,16.755A1.428,1.428,0,0,0,4.84,19.14H8.9a3.571,3.571,0,0,0,7,0h4.064a1.428,1.428,0,0,0,1.057-2.385ZM12.4,20.568a2.142,2.142,0,0,1-2.014-1.428h4.028A2.142,2.142,0,0,1,12.4,20.568ZM4.84,17.711a.578.578,0,0,0,.086-.1l1.25-1.8a2.857,2.857,0,0,0,.514-1.628V9.142a5.713,5.713,0,0,1,11.427,0v5.042a2.857,2.857,0,0,0,.514,1.628l1.25,1.8a.579.579,0,0,0,.086.1Z" transform="translate(0 0)" fill="#38d2d9" />
                        </g>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" id="notificacoes" width="13" height="13" viewBox="0 0 13 13">
                        <g id="Group_5762" data-name="Group 5762" transform="translate(-1185 -26)">
                            <rect id="Rectangle_5977" data-name="Rectangle 5977" width="13" height="13" rx="2" transform="translate(1185 26)" fill="#e74c3c" />
                            <text id="_2" data-name="2" transform="translate(1189 36)" fill="#fff" font-size="10" font-family="Soleil-Bold, Soleil" font-weight="700"><tspan x="0" y="0">8</tspan></text>
                        </g>
                    </svg>

                </div>
            </div>

            <div className="accountName">
                <div className="dados">
                    <span className="name">{user.name}</span>
                    <span className="cnpj">{user.cnpj}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.692" height="6.769" viewBox="0 0 11.692 6.769">
                    <g id="arrow-point-to-right" transform="translate(11.94) rotate(90)">
                        <path id="Path_8214" data-name="Path 8214" d="M6.526,6.425,1.42,11.452a.841.841,0,0,1-1.176,0,.81.81,0,0,1,0-1.158L4.762,5.846.244,1.4A.81.81,0,0,1,.244.24.841.841,0,0,1,1.42.24L6.526,5.267a.81.81,0,0,1,0,1.158Z" transform="translate(0 0.248)" fill="#38d2d9" />
                    </g>
                </svg>

            </div>


        </div>
    )

}


export default Inicio;