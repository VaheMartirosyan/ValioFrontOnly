import React from 'react'
import './App.css'
import Game from "./game/Game";
import './MediaApp.scss'
import Rules from "./rules/Rules";
import FacebookLogin from "./game/FacebookLogin";
import axios from 'axios'
import TryLater from './Try Later/TryLater'

class App extends React.Component {
    state = {
        play: false,
        rules:false,
        time:0,
        user:''
    }

    start = () => {
        this.setState({
            play: true,
            rules:false
        })
    }
    rulesHandler = () =>{
        this.setState({
            rules:true
        })
    }
    closeRulesHandler = () =>{
        this.setState({
            rules:false
        })
    }


    render() {


        return (
            <div className="containers">
                {!this.state.play ?
                    <div className={'background'}>
                        {/*facebooky comment em arel zut vor nayem eli es taki buttony pages fbn dnes klini*/}

                        <button className={'startGame'} onClick={this.start}>սկսել խաղը</button>

                        {/*<FacebookLogin  getuser={this.getuser} className={'startGame'}/>*/}

                        <button className={'rules'}
                                onClick={this.rulesHandler}
                        >կանոններ
                        </button>
                        {/*<TryLater/>*/}
                        {this.state.rules ? <Rules closepopup={this.closeRulesHandler}/> : null}
                    </div>  :
                    <Game start={this.start} initFetch = {this.initFetch} user={this.state.user}/>
                }
            </div>
        )
    }
}

export default App
