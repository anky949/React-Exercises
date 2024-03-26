import {menu} from "./Menu";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const MenuComponent =()=> {
    const navs = menu.map(menuItem=><Nav.Link key={menuItem.to} as={Link} to={menuItem.to}>{menuItem.title}</Nav.Link> );

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    {navs}
                </Nav>
            </Container>
        </Navbar>
    );

}
