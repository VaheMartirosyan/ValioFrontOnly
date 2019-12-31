import React from 'react'

import './Finish.scss'
import slaq from './finishimg/slaq2.png'
import Share from './share'




export default ({points,Leaders,Leader,close,time,user}) => {
    return(
        <div>


            <div className={'finish'}>
                <p>Դուք հավաքեցիք  <span>{points}</span>  միավոր</p>
                <div>

                    <Share k={points} />
                    <button className={'leaders'} onClick={Leaders}>առաջատարներ
                    </button>

                </div>
                {Leader ?  <div className={'chisht'}>

                    <div className={'chishtwindow'}>
                        <button onClick={close} className={'backto'}><img src={slaq}  alt=""/>Նախորդը</button>
                        <h3 className={'leaderstitle'} >Առաջատարների ցանկ</h3>


                        <table className={'leaderstable'}>
                            <tr >
                                <th className={'firstTR'}>ԱՆՈՒՆ ԱԶԳԱՆՈՒՆ</th>
                                <th>ՄԻԱՎՈՐՆԵՐ</th>
                                <th>ԺԱՄԱՆԱԿ</th>
                            </tr>
                            <tr>
                                <td className={'tiv'}>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>2</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>3</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>4</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>5</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>6</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>7</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>8</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>9</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className={'tiv'}>10</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>

                    </div>
                </div>:null}

            </div>
            }




        </div>

    )
}