import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "./css/site.css"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function App() {
    return (
        <div class="container-fluid px-0">
            <div class="d-flex flex-column vh-100">
                <div class="d-flex justify-content-between fixed-top py-1 custom-header-bg">
                    <Button href="/" variant="link" className="p-2">Home</Button>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        className="justify-content-end"
                    >
                        <Nav.Item>
                            <Nav.Link href="/home" className="link-light">Already a user?</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div class="flex-grow-1 d-flex flex-wrap content-padding-top">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                    <div class="d-flex flex-wrap px-2 flex-grow-1 overflow-auto custom-bg-gray vh-100">
                        <div> Flex items1</div>
                        <div> Flex items</div>
                    </div>
                </div>

                <div class="d-flex flex-wrap custom-footer-bg">
                    <div class="p-3 bd-custom-gray">Flex item</div>
                    <div class="p-3 bd-custom-gray">Flex item</div>
                    <div class="p-3 bd-custom-gray">Flex item</div>
                </div>
            </div>
        </div>
    );
}

export default App;


