import './NavbarElements.css';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom";


 
const Header = () => {
    return (
        
    <Navbar expand="lg">
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
        <Navbar.Brand id = "nav_label" >ED Plan Builder</Navbar.Brand>
        </NavLink>
            <Nav className="ms-auto">
                <NavLink id = 'nav_links' to="/build" style={{ textDecoration: 'none' }}>Build</NavLink>
                <NavLink id = 'nav_links' to="/blogs" style={{ textDecoration: 'none' }}>Blogs</NavLink>
                <NavLink id = 'nav_links' to="/contact" style={{ textDecoration: 'none' }}>Contacts</NavLink>
            </Nav>
    </Navbar>
    );
};
 
export default Header;