import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { getCleaners, getProperties, getCleanings, createCleaning } from "../../managers/CleaningsManager.js"
import "./Cleaning.css"

export const CleaningList = (props) => {
    const localUser = localStorage.getItem("user_id")
    const navigate = useNavigate()
    const [ cleanings, setCleanings ] = useState([])
    const [ properties, setProperties ] = useState([])
    const [ cleaners, setCleaners ] = useState([])
    const [ currentCleaning, setCurrentCleaning ] = useState({
        cleaner_id: 0,
        property_id: 0,
        date_time: "",
        progress: false
    })

    useEffect(() => {
        getCleanings(localUser).then(res => setCleanings(res))
    }, [])
    useEffect(() => {
        getProperties(localUser).then(res => setProperties(res))
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
                        className="cleaning-form-group" name="property_id">
                        <option value={0}>SELECT PROPERTY</option>
                        {properties.map((property) => { return <option value={property.id} >{property.name}</option>})}
                    </select>
                    <select onChange={changeCleaningState} 
                        className="cleaning-form-group" name="cleaner_id">
                        <option value={0}>SELECT CLEANER</option>
                        {cleaners.map((cleaner) => { return <option value={cleaner.id} >{cleaner.name}</option>})}
                    </select>
                    <div className="form-group">
                        <label className="cleaningForm_header" htmlFor="date_time">DATE AND TIME: </label>
                        <input className="date-cleaning-form-group" type="datetime-local" name="date_time" required autoFocus 
                            placeholder="SELECT DATE AND TIME"
                            defaultValue={currentCleaning.dateTime}
                            onChange={changeCleaningState}
                            />
                    </div>
                </fieldset>    
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        const cleaning = {
                            cleaner: currentCleaning.cleaner_id,
                            property: currentCleaning.property_id,
                            date_time: currentCleaning.date_time,
                            progress: currentCleaning.progress,
                        }
                        createCleaning(cleaning)
                            .then(() => navigate("/cleaning"))
                            window.location.reload(true);

                    }}
                    className="btn btn-primary">SCHEDULE CLEANING</button>
            </form>
            <h2 className="cleaningForm__name">CLEANING APPOINTMENTS</h2>
            <article className="cleaningList">
            {
                cleanings.map(cleaning => {
                    return <section key={`cleaning--${cleaning.id}`} className="cleaning">
                        {/* some of these will need custom property decorators to access nested information like the cleaning.property_id.image_URL and the cleaning.cleaner_id.phone */}
                            <img src={`${cleaning.property.image_url}`} alt="House" className="property__imageURL"></img>
                        <div className="cleaning__information">
                            <div>
                                <div className="cleaning__progress">CLEANER:</div>
                                <div className="cleaning__name">{cleaning.cleaner.name}</div>
                            </div>
                            <div>
                                <div className="cleaning__progress">CLEANER PHONE #:</div>
                                <div className="cleaning__name">{cleaning.cleaner.phone_number}</div>
                            </div>
                            <div >
                                <div className="cleaning__progress">DATE AND TIME:</div>
                                <div className="cleaning__name">{cleaning.date_time.replace('T', ' ').replace(':00Z', '')}</div>
                            </div>
                            <div className="cleaning__progress">{cleaning.progress}</div>
                        </div>
                    </section>
                })
            }
            </article>
        </>
    )
}