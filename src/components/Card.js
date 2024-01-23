import React from 'react'
import { useState } from 'react'
import porlogo from '../components/img/prologo.jpg';
import facebook from '../components/img/facebook.png';
import linkedin from '../components/img/linkedin.png';
import github from '../components/img/github.png';
import instagram from '../components/img/instagram.png';
function Card() {

    // let bacColor = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,105,0.9080882352941176) 35%, rgba(0,212,255,1) 100%)';
    const [style, setStyle] = useState({
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,105,0.9080882352941176) 35%, rgba(0,212,255,1) 100%)'
    })
    const toggle = () => {
        if (style.background === 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,105,0.9080882352941176) 35%, rgba(0,212,255,1) 100%)') {
            // console.log("Color is red")
            setStyle({
                // background: 'rgb(2,0,36)',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,121,9,0.9080882352941176) 35%, rgba(0,212,255,1) 100%)'
            })
        }
        else if (style.background ==='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,121,9,0.9080882352941176) 35%, rgba(0,212,255,1) 100%)') {
            setStyle({
                background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,105,0.9080882352941176) 35%, rgba(0,212,255,1) 100%)'
                
            })
        }
    }
    return (
        <div>
            <div className="card">
                <div className="ist-col" style={style}>
                    <div id="imglogo">
                        <img src={porlogo} alt="" className="img-logo" />
                    </div>
                </div>
                <div className="sec-col">
                    <h2 className="head-ist">Sandeep</h2>
                    <h3 className="head-sec">Software Developer</h3>
                    <div className="links">
                        <div className="link">
                            <a href="https://www.instagram.com/sandeepgautam1737/"><img src={instagram} alt="" className="link-img" /></a>
                        </div>
                        <div className="link">
                            <a href="https://www.linkedin.com/in/sandeep-gautam-232a7213/"><img src={linkedin} alt="" className="link-img" /></a>
                        </div>
                        <div className="link">
                            <a href="https://github.com/sandeepgautam87637"><img src={github} alt="" className="link-img" /></a>
                        </div>
                        <div className="link">
                            <a href="https://www.facebook.com/login/"> <img src={facebook} alt="" className="link-img" /></a>
                        </div>
                    </div>
                    <div class="form-check form-switch my-4 tog">
                            <input class="form-check-input" type="checkbox" role="switch" onClick={toggle} id="flexSwitchCheckChecked" />
                            <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card
