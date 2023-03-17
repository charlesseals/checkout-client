import React from 'react';
import { useNavigate } from "react-router-dom"


export const Welcome = () => {
    const navigate = useNavigate()
    return <>
        <h1>
            <title>Vertical Card Example</title>
        </h1>
        <body className='flex-row'>
        <form className="propertyForm">
            {/* <h2 className="propertyRegister__name">REGISTER NEW PROPERTY</h2> */}
            <fieldset>
                <div className="form-group">
                    <label className='propertyRegister__name' htmlFor="name">VIEW ALL OF YOUR CURRENT PROPERTIES OR ADD NEW ONES</label>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                        navigate("/properties")
                }}
                className="btn btn-primary">PROPERTIES</button>
        </form>
        <form className="propertyForm">
            {/* <h2 className="propertyRegister__name">REGISTER NEW PROPERTY</h2> */}
            <fieldset>
                <div className="form-group">
                    <label className='propertyRegister__name' htmlFor="name">SCHEDULE A CLEANING APPOINTMENT FOR YOUR AIRBNB</label>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                        navigate("/cleaning")
                }}
                className="btn btn-primary">CLEANING</button>
        </form>
        <form className="propertyForm">
            {/* <h2 className="propertyRegister__name">REGISTER NEW PROPERTY</h2> */}
            <fieldset>
                <div className="form-group">
                    <label className='propertyRegister__name' htmlFor="name">ASK OUR AI ABOUT WAYS TO IMPROVE THE PERFORMANCE OF YOUR AIRBNB</label>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                        navigate("/suggester")
                }}
                className="btn btn-primary">SUGGESTER</button>
        </form>

        </body>
    </>    
}