import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { updateProperty, getSingleProperty } from '../../managers/PropertiesManager.js'
import "./Properties.css"


export const SingleProperty = () => {
    const navigate = useNavigate()
    const { propertyId } = useParams()

    const [currentProperty, setCurrentProperty] = useState({
        name: "",
        address: "",
        size: currentProperty,
        image_url: ""
    })

    useEffect(() => {
        getSingleProperty(propertyId)
            .then((singleProperty) => {
                setCurrentProperty(singleProperty)
            })
    }, [])

const changePropertyState = (domEvent) => {
    let copy = {...currentProperty, [domEvent.target.name] : domEvent.target.value}
    setCurrentProperty(copy)
}

return (
    <form className="singlePropertyForm">
        <h2 className="singleProperty__property">Edit Existing Property</h2>
        <fieldset>
            <div className="form-group">
                <img src={`${currentProperty.image_url}`} alt="House" className="property__imageURL"></img>
                <label htmlFor="image_url">EDIT IMAGE URL: </label>
                <input type="text" name="image_url" required autoFocus className="form-control"
                    placeholder={currentProperty.image_url}
                    defaultValue={currentProperty.image_url}
                    onChange={changePropertyState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">EDIT NAME: </label>
                <input type="text" name="name" required autoFocus className="form-control"
                    placeholder={currentProperty.name}
                    defaultValue={currentProperty.name}
                    onChange={changePropertyState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">EDIT ADDRESS: </label>
                <input type="text" name="address" required autoFocus className="form-control"
                    placeholder={currentProperty.address}
                    defaultValue={currentProperty.address}
                    onChange={changePropertyState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="size">EDIT SQ.FT.: </label>
                <input type="number" name="size" required autoFocus className="form-control"
                    // placeholder={currentProperty.size}
                    Value={currentProperty.size}
                    onChange={changePropertyState}
                />
            </div>
        </fieldset>
        <button type="submit"
            onClick={evt => {
                evt.preventDefault()

                const property = {
                    image_url: currentProperty.image_url,
                    name: currentProperty.name,
                    address: currentProperty.address,
                    size: currentProperty.size
                }

                updateProperty(propertyId, property)
                    .then(() => navigate("/properties"))
            }}
            className="btn btn-primary">SAVE PROPERTY EDITS</button>
    </form>
)
}

