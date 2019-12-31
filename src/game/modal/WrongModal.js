import React from "react"
import './WrongModal.css'
import slaq from './wronanswerimg/slaq.png'
import pic from "./wronanswerimg/wrongik.png";

function Modal({wrong,description}) {


    return (
        <>
            <div className={'chisht'}>

                <div className={'chishtwindow'}>


                    <p className = {'righte'}>սխալ է <span> <img src={pic} alt=""/></span></p>


                    <div className={'desc'} >
                        <p>
                            {description}
                        </p>
                    </div>

                    <p className="hajord" onClick={wrong}>Հաջորդը <img src={slaq} alt=""/></p>


                </div>
            </div>



        </>
    );
}

export default Modal