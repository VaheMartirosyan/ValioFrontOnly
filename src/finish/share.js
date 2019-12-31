/*global FB*/
import React,{Component} from "react";

export default class Share extends Component{

    constructor(props) {
        super(props);

        this.share = this.share.bind(this);
    }

    share(){
        var points = this.props.k
        var quote = 'Ես հավաքեցի ' + points + ' միավոր <<Ամանորյա Բաղադրաթեստ>> խաում';

        FB.ui({
            method:'share',
            href:'https://prodigi.am/apps/valio2/share.php/'+'?result='+this.props.k,
            quote:quote
        } ,function (response){});
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            FB.init({
                appId    :'448461735820814',
                cookie   : true,
                xfbml    : true,
                version  : 'v2.1'
            });
        }.bind(this);

        (function (d,s,id) {
            var js,fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js'
        }(document, 'script', 'facebook-jssdk'))
    }

    render() {

        return (

                <a href='#' className={'share'} onClick={this.share}>կիսվել</a>

        );
    }
}