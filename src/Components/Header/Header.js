// src\Components\Header\Header.js
// Navigation bar
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        // firebase login/signup token for auto login
        token: state.token,
    };
};

const Header = (props) => {
    let links = null;
    if (props.token === null) {
        // means not authenticated
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink to="/login" className="NavLink">
                        Login
                    </NavLink>
                </NavItem>
            </Nav>
        );
    } else {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink to="/" className="NavLink">
                        <img src="img/hotel_logo.png" height="50px" />
                    </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink to="/album" className="NavLink">
                        Albums
                    </NavLink>
                </NavItem> */}
                <NavItem className="ml-auto">
                    <NavLink to="/logout" className="NavLink">
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
    return (
        <div className="Navigation" style={{ marginBottom: 0 }}>
            <Navbar
                style={{
                    backgroundColor: "#8034eb",
                    height: "100px",
                }}
            >
                {/* mr == margin-right, ml==margin-left, md=medium screen */}
                {/* "Brand" className ta custom css file er class */}
                {/* <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand> */}
                {links}
            </Navbar>
        </div>
    );
};

export default connect(mapStateToProps)(Header);
