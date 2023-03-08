import { useState } from 'react';
import {
    redirect,
    Form
} from "react-router-dom";


export default function PrepareSignUp() {
    const [credentials, setCredentials] = useState({
        userId: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const handleIdChange = (e) => {
        setCredentials({
            ...credentials,
            userId: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        setCredentials({
            ...credentials,
            password: e.target.value
        })
    }

    const handleConfirmPasswordChange = (e) => {
        setCredentials({
            ...credentials,
            confirmPassword: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        setCredentials({
            ...credentials,
            email: e.target.value
        })
    }

    return (
        <div className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="card custom-card-width">
                <div className="card-header">Sign Up
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Please enter the following information.</p>
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
                            value={credentials.password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="d-flex input-group justify-content-center mb-2">
                        <span className="input-group-text fixed-label-width">Confirm Password</span>
                        <input
                            type="password"
                            className="form-control custom-input-width"
                            value={credentials.confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    <div className="input-group d-flex justify-content-center mb-2">
                        <span className="input-group-text fixed-label-width text-right">Email</span>
                        <input
                            className="form-control custom-input-width"
                            value={credentials.email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <Form method="post" action="/identity/signup">
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary custom-button-width" type="submit">Sign Up</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
