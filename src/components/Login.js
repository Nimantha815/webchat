import React from 'react'

import { GoogleOutlined} from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';


const Login = () => {
    return(
        

        <div id="head-page">
            <div id="login-car">
                WEBCHAT
            </div>
            <br></br>
            <br></br>
            <div id="login-card">
                <h2>Welocome To Web Chat........</h2>
               


                <div className="login-button google"
                     onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign In With Google
                </div>
                <br></br>
                <br></br>
                {/* <div className="login-button facebook"
                    onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined/> Sign In With Facebook
                </div> */}
            </div>
        </div>
    )

}
export default Login;
