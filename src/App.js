import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "./css/site.css"
import "./css/App.css"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { RoutingType } from "./Common/data.js";
import Authentication from './Account/Authentication.js';
import AnonymousMain from './AnonymousMain.js';
import UserMain from './UserMain.js';
import Error from './Error.js';

export default function App() {
    const [routingType, setRoutingType] = useState(RoutingType.AnonymousMain);
    const [user, setUser] = useState(null);

    const content =
        routingType == RoutingType.AnonymousMain ? <AnonymousMain></AnonymousMain> :
            routingType == RoutingType.UserMain ? <UserMain></UserMain> :
                routingType == RoutingType.Authentication ?
                    <Authentication handleUserAuthenticated={(u) => setUser(u)} handleRoutingType={(r) => setRoutingType(r)}>
                    </Authentication> : <Error></Error>

    const isShowSideMenu = routingType == RoutingType.UserMain;

    return (
        <div className="container-fluid px-0">
            <div className="d-flex flex-column vh-100">
                <div className="d-flex justify-content-between fixed-top py-1 custom-header-bg">
                    <Button onClick={() => setRoutingType(RoutingType.AnonymousMain)} variant="link" className="p-2">Home</Button>
                    {user != null && <div className="d-flex flex-nowrap text-nowrap text-white p-2">Welcome {user.userId}!</div>}
                    {user == null && 
                        <Nav
                            activeKey="/home"
                            onSelect={(selectedKey) => setRoutingType(selectedKey)}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey={RoutingType.Authentication} className="link-light d-flex flex-nowrap text-nowrap">Already a user?</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    }
                </div>

                <div className="flex-grow-1 d-flex flex-wrap content-padding-top">
                    {
                        isShowSideMenu &&
                        <Nav
                            defaultActiveKey="/home"
                            className="flex-column"
                            onSelect={(selectedKey) => setRoutingType(selectedKey)}
                        >
                            <Nav.Link eventKey="disabled" disabled>Active</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>Link</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>Link</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>Link</Nav.Link>
                        </Nav>
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

