import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import {Toolbar} from '@material-ui/core/';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Toolbar style={{backgroundColor: '#AAACCC', color: 'black' }}>
            <Navbar.Header style={{backgroundColor: '#AAACCC', color: 'black' }}>
                <Navbar.Brand style={{backgroundColor: '#AAACCC', color: 'black' }}>
                    <Link to="/" style={{backgroundColor: '#AAACCC', color: 'black' }}>PetSpace</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <IndexLinkContainer to="/CatSpace">
                    <NavItem>
                        <div style={{color:'black'}}> 
                        Cat Space 
                        </div>
                    </NavItem>
                </IndexLinkContainer>
            </Nav>
            <Nav>
                <IndexLinkContainer to="/DogSpace">
                    <NavItem>
                        <div style={{color:'black'}}> 
                        Dog Space 
                        </div>
                    </NavItem>
                </IndexLinkContainer>
            </Nav>
        </Toolbar>
    );
}