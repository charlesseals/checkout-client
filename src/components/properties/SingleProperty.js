import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { updateProperty, getSingleProperty } from '../../managers/PropertiesManager.js'


export const SingleProperty = () => {
    const navigate = useNavigate()
    const { propertyId } = useParams()
    // const [property, setUpdatedProperty] = useState({})

    const [currentProperty, setCurrentProperty] = useState({
        name: "",
        address: "",
        size: 0,
        imageURL: ""
    })

    useEffect(() => {
        getSingleProperty(propertyId)
            .then((singleProperty) => {
                setCurrentProperty(singleProperty)
            })
    })

const changePropertyState = (domEvent) => {
    let copy = {...currentProperty, [domEvent.target.name] : domEvent.target.value}
    setCurrentProperty(copy)
}

return (
    <form className="singleProperty">
        <h2 className="singleProperty__property">Edit Existing Property</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="imageURL">EDIT IMAGE URL: </label>
                <input type="text" name="imageURL" required autoFocus className="form-control"
                    placeholder={currentProperty.imageURL}
                    value={currentProperty.imageURL}
                    onChange={changePropertyState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">EDIT NAME: </label>
                <input type="text" name="name" required autoFocus className="form-control"
                    placeholder={currentProperty.name}
                    value={currentProperty.name}
                    onChange={changePropertyState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">EDIT ADDRESS: </label>
                <input type="text" name="address" required autoFocus className="form-control"
                    placeholder={currentProperty.address}
                    value={currentProperty.address}
                    onChange={changePropertyState}
                />
            </div>
            <div className="form-group">
                <label htmlFor="size">EDIT SQ.FT.: </label>
                <input type="number" name="size" required autoFocus className="form-control"
                    placeholder={currentProperty.size}
                    value={currentProperty.size}
                    onChange={changePropertyState}
                />
            </div>
        </fieldset>

        {/* TODO: create the rest of the input fields */}

        <button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()

                const property = {
                    imageURL: currentProperty.imageURL,
                    name: currentProperty.name,
                    address: currentProperty.address,
                    size: currentProperty.size
                }

                // Send POST request to your API
                updateProperty(propertyId, property)
                    .then(() => navigate("/properties"))
            }}
            className="btn btn-primary">SAVE PROPERTY EDITS</button>
    </form>
)
}

