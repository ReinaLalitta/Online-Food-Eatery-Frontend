import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
    const state = useSelector((state) => state.handleCart);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        // Check if a token is present in localStorage
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            // Decode token to extract email or user information
            const decodedToken = jwtDecode(token);
            setUserEmail(decodedToken.email); // Assuming email is stored in the token
        }
    }, []);

    const handleLogout = () => {
        // Remove token from storage
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUserEmail("");
    };

    const navbarStyle = {
        background: "linear-gradient(90deg, #00aaff, #ff7f50, #32cd32)",
        padding: "10px 0",
        color: "#fff"
    };

    const linkStyle = {
        color: "#fff",
        fontSize: "1.2rem",
        margin: "0 15px",
    };

    const buttonStyle = {
        border: "1px solid #fff",
        backgroundColor: "transparent",
        color: "#fff",
        margin: "0 10px",
        padding: "5px 15px",
        borderRadius: "25px",
    };

    return (
        <nav className="navbar navbar-expand-lg" style={navbarStyle}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/" style={{ color: "#fff" }}>
                    Online-Food-Store-Eatery
                </NavLink>
                <button
                    className="navbar-toggler mx-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" style={linkStyle}>
                                Main
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product" style={linkStyle}>
                                Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" style={linkStyle}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" style={linkStyle}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        {isLoggedIn ? (
                            <>
                                <span className="nav-link" style={linkStyle}>
                                    Welcome, {userEmail}
                                </span>
                                <button onClick={handleLogout} className="btn" style={buttonStyle}>
                                    <i className="fa fa-sign-out-alt mr-1"></i> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="btn" style={buttonStyle}>
                                    <i className="fa fa-sign-in-alt mr-1"></i> Login
                                </NavLink>
                                <NavLink to="/register" className="btn" style={buttonStyle}>
                                    <i className="fa fa-user-plus mr-1"></i> SignUp
                                </NavLink>
                            </>
                        )}
                        <NavLink to="/cart" className="btn" style={buttonStyle}>
                            <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;