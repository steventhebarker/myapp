import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">PetSpace</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <IndexLinkContainer to="/CatSpace">
                    <NavItem>CatSpace</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/DogSpace">
                    <NavItem>DogSpace</NavItem>
                </IndexLinkContainer>
            </Nav>
        </Navbar>
    );
}