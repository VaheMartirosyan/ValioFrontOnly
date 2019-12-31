import React  from "react";
import Modal from "../modal/Modal";
import WrongModal from "../modal/WrongModal";
import './QuestionFive.css'
import './MediaFive.scss'

export default ({question,answer, right,questionPage,wrong,wrongmod,description,points})=>{
    return(
        <div className={'quiz'}>
            <h2 className={'pointThrough'}>Միավոր {points}</h2>
            <div className={'questionFive'}>
                <div className="q">
                    <span className={'Squestion1'}>{question.question1}</span>
                </div>
                <div className={'questOne'}>
                    {question.answers.map(e => {
                        return(
                            <div key  = {e.id} >
                                <form action=''>
                                    <div className={'divik'}>
                                        <div className={'slk'}>
                                            <div className="">
                                                <div className="pretty p-default p-round" onClick={answer.bind(this, e)} >
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
                    <WrongModal  description={description} questionPage = {questionPage} wrong = {wrong} right = {right}/>:null}
            </div>
        </div>

    )
}