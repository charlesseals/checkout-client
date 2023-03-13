import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { getProperties, deleteProperty, createProperty } from "../../managers/PropertiesManager.js"

export const PropertiesList = (props) => {
    const navigate = useNavigate()
    const [ properties, setProperties ] = useState([])
    const [currentProperty, setCurrentProperty] = useState({
        name: "",
        address: "",
        size: 0,
        imageURL: ""
    })

    useEffect(() => {
        getProperties()
        .then((res) => setProperties(res))
    }, [])

    const handleDelete  = (propertyId) => {
        deleteProperty(propertyId)
            getProperties().then((res) => setProperties(res))
            window.location.reload(true);
    }

    const changePropertyState = (domEvent) => {
        let copy = {...currentProperty, [domEvent.target.name] : domEvent.target.value}
        setCurrentProperty(copy)
    }
    
    return (
        <>
        <form className="propertyForm">
            <h2 className="propertyForm__name">REGISTER NEW PROPERTY</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">NAME: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        defaultValue={currentProperty.name}
                        onChange={changePropertyState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">ADDRESS: </label>
                    <input type="text" name="address" required autoFocus className="form-control"
                        defaultValue={currentProperty.address}
                        onChange={changePropertyState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">HOUSE SIZE SQ.FT.: </label>
                    <input type="number" name="size" required autoFocus className="form-control"
                        defaultValue={currentProperty.size}
                        onChange={changePropertyState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imageURL">HOUSE IMAGE URL: </label>
                    <input type="text" name="imageURL" required autoFocus className="form-control"
                        defaultValue={currentProperty.imageURL}
                        onChange={changePropertyState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    const newProperty = {
                        name: currentProperty.name,
                        address: currentProperty.address,
                        size: currentProperty.size,
                        imageURL: currentProperty.imageURL
                    }

                    // Send POST request to your API
                    createProperty(newProperty)
                        .then(() => navigate("/properties"))
                }}
                className="btn btn-primary">ADD NEW PROPERTY</button>
        </form>
        <article className="propertyList">
            {
                properties.map(property => {
                    return <section key={`property--${property.id}`} className="property">
                        <div className="property__imageURL">{property.imageURL}</div>
                        <div className="property__name">NAME:{property.name}</div>
                        <div className="property__address">ADDRESS:{property.address}</div>
                        <div className="property__size">SQ.FT. {property.size}</div>
                        <button
                            className="edit-property"
                            onClick={() => {
                                navigate({ pathname: `/properties/${property.id}` })
                            }}>EDIT
                        </button>
                        <button 
                            className="delete-property"
                            onClick={() => {
                                handleDelete(property.id)
                            }}>DELETE
                        </button>
                    </section>
                })
            }
        </article>
        </>
    )
}
