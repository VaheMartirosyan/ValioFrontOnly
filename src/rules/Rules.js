import React from "react"
import './Rules.scss'
import '../MediaApp.scss'


function Modal({closepopup}) {


    return (
        <>
                <div className={'chisht'}>

                    <div className={'chishtwindow'}>
                        <button className={'rulesbtn'} onClick={closepopup} >x</button>
                        <p className = {'righte ruless'}>Կանոններ</p>
                        <div className={'rulestxt'}>


                            <p>
                                1. Թեստն անցնելու ժամանակ Ձեզ կտրվեն հարցեր, որոնց անհրաժեշտ է հնարավորինս արագ ու ճիշտ պատասխանել։
                            </p>
                            <p>
                                2. Ճիշտ պատասխանի դեպքում Դուք կստանաք 1 միավոր։
                            </p>
                            <p>
                                3. Խաղի ընթացքում գործում է նաև ժամանակի հաշնիչ։ Հաշվիչը հաշվում է միայն հարցը կարդալու և վերջինիս պատասխանելու վրա ծախսվող ժամանակը։
                            </p>
                            <p>
                                4. Հաղթող է ճանաչվում այն մասնակիցը, ով հնարավորինս արագ ու ճիշտ կպատասխանի բոլոր հարցերին։
                            </p>
                            <p>
                                5․ Եթե մասնակիցների ճիշտ պատասխաններն ու արագությունը համընկնեն, հաղթող է ճանաչվում նա, ով առաջինն է գրանցել արդյունքը։
                            </p>
                            <p>
                                Հաջողություն ենք մաղթում բոլոր մասնակիցներին :
                            </p>
                        </div>



                    </div>
                </div>



            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
}

export default Modal