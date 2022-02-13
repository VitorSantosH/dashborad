import React from "react";

import union from '../../assets/Union 2@2x.png';
import s from '../../assets/Path 2.png';
import t from '../../assets/Path 4.png';
import r from '../../assets/Path 5.png';
import i from '../../assets/Path 6.png';
import ponto from '../../assets/Ellipse 1.png'
import c from '../../assets/Path 3.png';

const Stric = () => {
    return (
        <>
            <div className="stric">
            </div>
            <div>
                <img src={union} alt="LogoMenu" id="LogoMenu" />
                <img src={s} alt="s" id="s" />
                <img src={t} alt="t" id="t" />
                <img src={r} alt="r" id="r" />
                <img src={i} alt="i" id="i" />
                <img src={ponto} alt="ponto" id="ponto" />
                <img src={c} alt="c" id="c" />
            </div>
        </>
    )
}


export default Stric;