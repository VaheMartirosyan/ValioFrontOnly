import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = response => {


        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });

    };



    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (

              <div></div>
            );
        } else {
            fbContent = (
                <FacebookLogin
                    appId="448461735820814"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="startGame"
                    textButton={'սկսել խաղը'}
                />
            );
        }

        return <div>{fbContent}</div>;
    }
}