import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <h2>
                <Link className="navbar__link" to="/">CHECKOUT</Link>
            </h2>
            <h3 className="navbar__item">
                <Link className="navbar__link" to="/properties">Properties</Link>
            </h3>
            <h3 className="navbar__item">
                <Link className="navbar__link" to="/cleaning">Cleaning</Link>
            </h3>
            <h3 className="navbar__item">
                <Link className="navbar__link" to="/suggester">Suggester</Link>
            </h3>
            {
                (localStorage.getItem("co_token") !== null) ?
                    <div className="nav-item">
                        <button className="logout-property"
                            onClick={() => {
                                localStorage.removeItem("co_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </div> :
                    <>
                        <div className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </div>
                    </>
            }
        </ul>
    )
}
