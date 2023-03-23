import React from 'react';
import { useNavigate } from "react-router-dom"
import "./Welcome.css"



export const Welcome = () => {
    const navigate = useNavigate()
    return <>
        {/* <h1>
            <title>Vertical Card Example</title>
        </h1> */}
        <body className='welcomeCards'>
            <div className='welcomeProperty'>
                <form className="welcomeForm">
                    <fieldset>
                        <div className="form-group">
                            <label className='welcomeRegister__name' htmlFor="name">VIEW ALL OF YOUR CURRENT PROPERTIES OR ADD NEW ONES</label>
                        </div>
                    </fieldset>
                    <button type="submit"
                        onClick={evt => {
                            evt.preventDefault()
                                navigate("/properties")
                        }}
                        className="btnbtn-primary">PROPERTIES</button>
                </form>
            </div>
            <div className='welcomeCleaning'>
                <form className="welcomeForm">
                    <fieldset>
                        <div className="form-group">
                            <label className='welcomeRegister__name' htmlFor="name">SCHEDULE A CLEANING APPOINTMENT FOR YOUR AIRBNB</label>
                        </div>
                    </fieldset>
                    <button type="submit"
                        onClick={evt => {
                            evt.preventDefault()
                                navigate("/cleaning")
                        }}
                        className="btnbtn-primary">CLEANING</button>
                </form>
            </div>
            <div className='welcomeSuggester'>
                <form className="welcomeForm">
                    <fieldset>
                        <div className="form-group">
                            <label className='welcomeRegister__name' htmlFor="name">ASK OUR AI ABOUT WAYS TO IMPROVE THE PERFORMANCE OF YOUR AIRBNB</label>
                        </div>
                    </fieldset>
                    <button type="submit"
                        onClick={evt => {
                            evt.preventDefault()
                                navigate("/suggester")
                        }}
                        className="btnbtn-primary">SUGGESTER</button>
                </form>
            </div>
        </body>
    </>    
}