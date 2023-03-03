import "../css/login.css"
import { useState } from 'react';
import { AuthProcessType } from '../Common/data.js'
import { UsersInfo, RoutingType } from "../Common/data.js";

export default function Login({ handleAuthTypeChange, handleUserAuthenticated, handleRoutingType }) {
    const [credentials, setCredentials] = useState({
        userId: '',
        Password: ''
    });

    function handleIdChange(e) {
        setCredentials({
            ...credentials,
            userId: e.target.value
        })
    }

    function handlePasswordChange(e) {
        setCredentials({
            ...credentials,
            Password: e.target.value
        })
    }

    function handleSignin() {
        const usersInfo = UsersInfo;
        const signedUser = usersInfo.filter(p => p.userId == credentials.userId && p.password == credentials.Password).shift()

        if (signedUser) {
            handleUserAuthenticated(signedUser);
            handleRoutingType(RoutingType.UserMain);
        } else {
            alert('wrong credentials has been entered')
        }
    }

    //function getUsersInfo() {
    //    return fetch('usersInfo.json')
    //        .then(response => {
    //            if (!response.ok) {
    //                throw new Error("HTTP error " + response.status);
    //            }
    //            return response.json();
    //        })
    //        .catch((e) => {
    //            throw new Error(e);
    //        });
    //}

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <p className="card-text">Please enter your credentials.</p>
                    <div className="input-group d-flex mb-2">
                        <span className="input-group-text fixed-label-width">Id</span>
                        <input
                            className="form-control custom-input-width"
                            value={credentials.userId}
                            onChange={handleIdChange}
                        />
                    </div>
                    <div className="d-flex input-group mb-2">
                        <span className="input-group-text fixed-label-width">Password</span>
                        <input
                            type="password"
                            className="form-control custom-input-width"
                            value={credentials.Password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary custom-button-width" type="button" onClick={handleSignin}>Sign in</button>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-wrap justify-content-between custom-button-width">
                            <button type="button" className="btn btn-link" onClick={() => handleAuthTypeChange(AuthProcessType.ForgotPassword)}>forgot password</button>
                            <button type="button" className="btn btn-link" onClick={() => handleAuthTypeChange(AuthProcessType.SignUp)}>sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}