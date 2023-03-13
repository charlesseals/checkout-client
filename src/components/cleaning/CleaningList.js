import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { getCleaners, getProperties, getCleanings, createCleaning } from "../../managers/CleaningsManager.js"

export const CleaningList = (props) => {
    const navigate = useNavigate()
    const [ cleanings, setCleanings ] = useState([])
    const [ properties, setProperties ] = useState([])
    const [ cleaners, setCleaners ] = useState([])
    const [ currentCleaning, setCurrentCleaning ] = useState({
        cleaner_id: 0,
        property_id: 0,
        dateTime: "",
        progress: ""
    })

    useEffect(() => {
        getCleanings().then(res => setCleanings(res))
    }, [])
    useEffect(() => {
        getProperties().then(res => setProperties(res))
    }, [])
    useEffect(() => {
        getCleaners().then(res => setCleaners(res))
    }, [])

    const changeCleaningState = (domEvent) => {
        let copy = {...currentCleaning, [domEvent.target.name] : domEvent.target.value}
        setCurrentCleaning(copy)
    }

    return (
        <>
            <form className="cleaningForm">
                <h2 className="cleaningForm__title">SCHEDULE CLEANING</h2>
                <fieldset>
                    <select onChange={changeCleaningState} 
                        className="form-group" name="property_id">
                        <option value={0}>SELECT PROPERTY</option>
                        {properties.map((property) => { return <option value={property.id} >{property.name}</option>})}
                    </select>
                    <select onChange={changeCleaningState} 
                        className="form-group" name="cleaner_id">
                        <option value={0}>SELECT CLEANER</option>
                        {cleaners.map((cleaner) => { return <option value={cleaner.id} >{cleaner.name}</option>})}
                    </select>
                    <div className="form-group">
                        <label htmlFor="dateTime">DATE AND TIME: </label>
                        <input type="datetime-local" name="dateTime" required autoFocus className="form-control"
                            defaultValue={currentCleaning.dateTime}
                            onChange={changeCleaningState}
                            />
                    </div>
                </fieldset>    
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        const cleaning = {
                            cleaner_id: currentCleaning.cleaner_id,
                            property_id: currentCleaning.property_id,
                            dateTime: currentCleaning.dateTime,
                            progress: currentCleaning.progress,
                        }
                        createCleaning(cleaning)
                            .then(() => navigate("/cleanings"))
                    }}
                    className="btn btn-primary">SCHEDULE CLEANING</button>
            </form>
            <article className="cleaningList">
            {
                cleanings.map(cleaning => {
                    return <section key={`cleaning--${cleaning.id}`} className="cleaning">
                        {/* some of these will need custom property decorators to access nested information like the cleaning.property_id.image_URL and the cleaning.cleaner_id.phone */}
                        <div className="cleaning__imageURL">{cleaning.property_id.imageURL}</div>
                        <div className="cleaning__name">CLEANER:{cleaning.cleaner_id.name}</div>
                        <div className="cleaning__phone">CLEANER PHONE #:{cleaning.cleaner_id.phone}</div>
                        <div className="cleaning__dateTime">DATE AND TIME: {cleaning.dateTime}</div>
                        <div className="cleaning__progress">{cleaning.progress}</div>
                    </section>
                })
            }
            </article>
        </>
    )
}