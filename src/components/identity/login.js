import "../../css/login.css"
import { useState } from 'react';
import { AuthProcessType } from '../../common/data.js'
import { UsersInfo, RoutingType } from "../../common/data.js";
import {
    useNavigate,
    Form,
} from "react-router-dom";

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
            //handleUserAuthenticated(signedUser);
            //handleRoutingType(RoutingType.UserMain);
        } else {
            alert('wrong credentials has been entered')
        }
    }

    return (
        <div className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="card custom-card-width">
                <div className="card-header">Login
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Please enter your credentials.</p>
                    <div className="input-group d-flex justify-content-center mb-2">
                        <span className="input-group-text fixed-label-width text-right">Id</span>
                        <input
                            className="form-control custom-input-width"
                            value={credentials.userId}
                            onChange={handleIdChange}
                        />
                    </div>
                    <div className="d-flex input-group justify-content-center mb-2">
                        <span className="input-group-text fixed-label-width text-right">Password</span>
                        <input
                            type="password"
                            className="form-control custom-input-width"
                            value={credentials.Password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="d-flex justify-content-center ">
                        <button className="btn btn-primary custom-button-width" type="button" onClick={handleSignin}>Sign in</button>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-wrap justify-content-between custom-button-width">
                            <Form action="/identity/forgotpassword">
                                <button type="submit" className="btn btn-link">forgot password</button>
                            </Form>
                            <Form action="/identity/prepare-signup">
                                <button type="submit" className="btn btn-link">sign up</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}