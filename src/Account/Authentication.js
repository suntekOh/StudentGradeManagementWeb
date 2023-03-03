import { useState } from 'react';
import { AuthProcessType } from '../Common/data'
import Login from './Login.js';
import Signup from './Signup.js';
import ForgotPassword from './ForgotPassword.js';


export default function Authentication({ handleUserAuthenticated, handleRoutingType }) {
    const [AuthType, setAuthType] = useState(AuthProcessType.Login);

    const content =
        AuthType == AuthProcessType.ForgotPassword ? <ForgotPassword></ForgotPassword> :
            AuthType == AuthProcessType.SignUp ? <Signup></Signup> :
                <Login
                    handleAuthTypeChange={(authType) => setAuthType(authType)}
                    handleUserAuthenticated={handleUserAuthenticated}
                    handleRoutingType={handleRoutingType}
                >
                </Login>;

    return content;

}