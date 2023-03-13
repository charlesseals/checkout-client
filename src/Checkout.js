import React from 'react';
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from './views/ApplicationViews';

export const Checkout = () => (
        <>
            <NavBar />
            <ApplicationViews />
        </>
)

// console.log("Hello World")

{/* <Route
render={() => {
if (localStorage.getItem("checkout")) {
return <>
    <NavBar />
    <ApplicationViews />
    </>
}
}
}
/>
<Route path="/login">
    <Login />
</Route>
<Route path="/register">
    <Register />
</Route> */}










        {/* <div className="main-container">
            <div className="heading-container">CHECKOUT</div>
            <div className="small-text">Airbnb Cleaning Made Easy</div>
            <div className="vision-container">NEVER WORRY ABOUT HAVING A CLEAN SPACE FOR YOUR GUESTS AGAIN</div>
            <div className="newbutton">
            <div className="button-container">
                <button className="newbutton-login" >LOGIN
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                    </Routes>
                </button>
                <div className="small-bottom-text">OR</div>
                <button className="newbutton-register">REGISTER
                    <Routes>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>
                </button>
            </div>
            </div>
        </div> */}
