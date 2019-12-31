import React from "react";
import Modal from "../modal/Modal";
import './first.css'
import './MediaFirst.scss'
import WrongModal from "../modal/WrongModal"


export default ({question,answer, right,questionPage,wrong,wrongmod,description,points})=>{
    return(
        <div className={'quiz'}>
            <h2 className={'pointThrough'}>Միավոր {points}</h2>
            <div>

            </div>
            <div className={'questionTwo'}>
                <div className={'q'}>
                    <span className={'Squestion'}>{question.question1} {question.question2}</span>
                </div>
                <div className={'questOne'}>
                    {question.answers.map(e => {
                        return(
                            <div key  = {e.id} >
                                <form action=''>
                                    <div className={'divik'}>
                                            <div className={'slk'}  onClick={answer.bind(this, e)}>
                                                <div className="" >
                                                    <div className="pretty p-default p-round" >
                                                        <input type="checkbox" />
                                                        <div className="state p-warning">
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        <span className={'answer'}>{e.text}</span>
                                    </div>
                                </form>
                            </div>
                        )
                    })}
                </div>

                {right ? <Modal description={description} questionPage = {questionPage} wrong = {wrong} right = {right}/>: wrongmod ?
                    <WrongModal  description = {description} questionPage = {questionPage} wrong = {wrong} right = {right}/>:null}
            </div>
        </div>

    )
}