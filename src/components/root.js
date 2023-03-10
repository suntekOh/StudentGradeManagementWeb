import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "../css/site.css"
import "../css/App.css"
import React from 'react';
import { useState } from 'react';
import {
    useNavigate,
    Form
} from "react-router-dom";
import { RoutingType } from "../common/data.js";


export async function action() {
    return null;
    //let contact = await createContact();
    //return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
    return null;
    //const url = new URL(request.url);
    //const q = url.searchParams.get("q");
    //const contacts = await getContacts(q);
    //return {
    //    contacts,
    //    q,
    //    firstContact: q ? contacts[0] : null,
    //};
}

export default function Root() {
    const [routingType, setRoutingType] = useState(RoutingType.AnonymousMain);
    const [user, setUser] = useState(null);

    //const navigate = useNavigate();
    //const handelGoToIdentity = () => {
    //    navigate('/identity/login')
    //}

    //const content =
    //    routingType === RoutingType.AnonymousMain ? <AnonymousMain></AnonymousMain> :
    //        routingType === RoutingType.UserMain ? <UserMain></UserMain> :
    //            routingType === RoutingType.Authentication ?
    //                <Authentication handleUserAuthenticated={(u) => setUser(u)} handleRoutingType={(r) => setRoutingType(r)}>
    //                </Authentication> : <Error></Error>

    const content = <div>test</div>;

    const isShowSideMenu = routingType === RoutingType.UserMain;

    return (
        <div className="container-fluid px-0">
            <div className="d-flex flex-column vh-100">
                <div className="d-flex justify-content-between fixed-top py-1 custom-header-bg">
                    <button onClick={() => setRoutingType(RoutingType.AnonymousMain)} className="btn btn-link p-2">Home</button>
                    {user != null && <div className="d-flex flex-nowrap text-nowrap text-white p-2">Welcome {user.userId}!</div>}
                    {user == null &&
                        <ul className="nav">
                            <li className="nav-item">
                                <Form action="/identity/login">
                                    <button type="submit" className="btn btn-link">Already a user?</button>
                                </Form>
                            </li>
                        </ul>
                    }
                </div>

                <div className="flex-grow-1 d-flex flex-wrap content-padding-top">
                    {
                        isShowSideMenu &&
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <button className="btn btn-link">Link</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link">Link</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link">Link</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link">Link</button>
                            </li>
                        </ul>
                    }
                    <div className="px-2 flex-grow-1 overflow-auto vh-100">
                        {content}
                    </div>
                </div>

                <div className="d-flex flex-wrap custom-footer-bg">
                    <div className="p-3 bd-custom-gray">Flex item</div>
                    <div className="p-3 bd-custom-gray">Flex item</div>
                    <div className="p-3 bd-custom-gray">Flex item</div>
                </div>
            </div>
        </div>
    );
}

