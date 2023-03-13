import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/properties">Properties</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/cleaning">Cleaning</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/suggester">Suggester</Link>
            </li>
            {
                (localStorage.getItem("co_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("co_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }
        </ul>
    )
}
