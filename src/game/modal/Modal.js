import React from "react"
import './Modal.scss'
import pic from './rightanswerimg/ptichka.png'
import patil from './rightanswerimg/patil.png'
import slaq from './wronanswerimg/slaq.png'
function Modal({wrong,description}) {


    return (
        <>
            {/*<div className={'rightall'}>*/}
            {/*    <div className={'rightModal'}>*/}
            {/*        <div className={'description'}>{description}</div>*/}
            {/*        <button className={'closemodal'} onClick={wrong}>Հաջորդը <i className="fa fa-arrow-right"></i></button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'chisht'}>

                <div className={'chishtwindow'}>
                   <div className={'flexik'}>
                       <div className={'patil1 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                       <div className={'patil2 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                       <div className={'patil3 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                       <div className={'patil4 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                       <div className={'patil5 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                       <div className={'patil6 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                       <div className={'patil7 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                       <div className={'patil8 snowflake'}>
                           <img src={patil} alt=""/>
                       </div>
                   </div>
                        <p className = {'righte'}>Ճիշտ է <span> <img src={pic} alt=""/></span></p>

                   
                    <div className={'desc'} >
                        <p>
                        {description}
                        </p>
                    </div>

                        <p className="hajord" onClick={wrong}>Հաջորդը <img src={slaq} alt=""/></p>


                </div>
            </div>


            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal