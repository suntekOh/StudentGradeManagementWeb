import { useState } from 'react';
import { AuthProcessType } from '../../common/data'
import Login from './login';
import Signup from './prepare-signup';
import ForgotPassword from './forgot-password';
import {
    Outlet
} from "react-router-dom";

export async function action() {
    return null;
}

export async function loader({ request }) {
    return null;
}


export default function IdentityRoot({ handleUserAuthenticated, handleRoutingType }) {
    const [AuthType, setAuthType] = useState(AuthProcessType.Login);

    //const content =
    //    AuthType == AuthProcessType.ForgotPassword ? <ForgotPassword></ForgotPassword> :
    //        AuthType == AuthProcessType.SignUp ? <Signup></Signup> :
    //            <Login
    //                handleAuthTypeChange={(authType) => setAuthType(authType)}
    //                handleUserAuthenticated={handleUserAuthenticated}
    //                handleRoutingType={handleRoutingType}
    //            >
    //            </Login>;

/*    return content;*/

    return (
        <>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
    

}