import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    const navigate = useNavigate();
    const coToken = localStorage.getItem("co_token");

    if (!coToken) {
        return null; // Hide the navbar if co_token is not in local storage
    }

    return (
        <ul className="navbar">
            <h2>
                <Link className="navbar__link" to="/">CHECKOUT</Link>
            </h2>
            <h3 className="navbar__item">
                <Link className="navbar__link" to="/properties">PROPERTIES</Link>
            </h3>
            <h3 className="navbar__item">
                <Link className="navbar__link" to="/cleaning">CLEANING</Link>
            </h3>
            <h3 className="navbar__item">
                <Link className="navbar__link" to="/suggester">SUGGESTER</Link>
            </h3>
            <div className="nav-item">
                <button className="logout-property"
                    onClick={() => {
                        localStorage.removeItem("co_token");
                        navigate('/login');
                    }}
                >LOGOUT</button>
            </div>
        </ul>
    );
}







// import React from 'react';
// import { Link, useNavigate } from "react-router-dom"
// import "./NavBar.css"

// export const NavBar = () => {
//     const navigate = useNavigate()
//     return (
//         <ul className="navbar">
//             <h2>
//                 <Link className="navbar__link" to="/">CHECKOUT</Link>
//             </h2>
//             <>
//             <h3 className="navbar__item">
//                 <Link className="navbar__link" to="/properties">Properties</Link>
//             </h3>
//             <h3 className="navbar__item">
//                 <Link className="navbar__link" to="/cleaning">Cleaning</Link>
//             </h3>
//             <h3 className="navbar__item">
//                 <Link className="navbar__link" to="/suggester">Suggester</Link>
//             </h3>
//             {
//                 (localStorage.getItem("co_token") !== null) ?
//                     <div className="nav-item">
//                         <button className="logout-property"
//                             onClick={() => {
//                                 localStorage.removeItem("co_token")
//                                 navigate('/login')
//                             }}
//                         >Logout</button>
//                     </div> :
//                     <>
//                         {/* <div className="nav-item">
//                             <button className="login-property" to="/login">Login</button>
//                         </div>
//                         <div className="nav-item">
//                             <button className="register-property" to="/register">Register</button>
//                         </div> */}
//                     </>
//             }
//         </>
//         </ul>
//     )
// }
