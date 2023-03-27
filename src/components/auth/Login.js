import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import "./Auth.css"


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("co_token", res.token)
                    localStorage.setItem("user_id", res.user_id)
                    navigate("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="login-register-component">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>CHECKOUT</h1>
                    <h2>SIGN IN</h2>
                    <fieldset>
                        <label htmlFor="inputUsername"> USERNAME </label>
                        <input ref={username} type="username" id="username" className="form-control" placeholder="USERNAME" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> PASSWORD </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="PASSWORD" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="login-button" type="submit">LOGIN</button>
                    </fieldset>
            <section className="register-member">
                <Link to="/register">NOT A MEMBER YET?</Link>
            </section>
                </form>
            </section>
        </main>
    )
}
