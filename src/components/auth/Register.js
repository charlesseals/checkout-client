import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./Auth.css"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("co_token", res.token)
                        navigate("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>PASSWORDS DO NOT MATCH</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>CLOSE</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">REGISTER</h1>
                <fieldset>
                    <label htmlFor="firstName"> FIRST NAME </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="FIRST NAME" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> LAST NAME </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="LAST NAME" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">USERNAME</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="USERNAME" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> PASSWORD </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="PASSWORD" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> VERIFY PASSWORD </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="VERIFY PASSWORD" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> EMAIL </label>
                    <input ref={email} name="email" className="form-control" placeholder="EMAIL@EMAIL.EMAIL" />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">REGISTER</button>
                </fieldset>
            </form>
            <section className="link--register">
                ALREADY REGISTERED? <Link to="/login">LOGIN</Link>
            </section>
        </main>
    )
}
