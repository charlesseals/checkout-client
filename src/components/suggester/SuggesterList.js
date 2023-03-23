// import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { createSuggestion } from "../../managers/SuggestionsManager"
// import { suggestionResponse } from "../../managers/SuggestionsManager"
import "./Suggester.css"


export const SuggesterList = () => {
    const [newResponse, setNewResponse] = useState({
        response: ""
    })

    const [currentSuggestion, setCurrentSuggestion] = useState({
        user_input: ""
    })

    const changeSuggesterState = (domEvent) => {
        let copy = {...currentSuggestion, [domEvent.target.name] : domEvent.target.value}
        setCurrentSuggestion(copy)
    }

    return (
        <>
        <div className="suggester-component">
            <h2 className="suggester-heading">SUGGESTER</h2>
            <form method="post" className="suggester-input">
                {/* {% csrf_token %} */}
                <input type="text" className="form_control" name="user_input" 
                    defaultValue={currentSuggestion.user_input}
                    onChange={changeSuggesterState}
                ></input>
                <button type="submit"  
                    onClick={evt => {
                        evt.preventDefault()
                        const newInput = {
                            user_input: currentSuggestion.user_input
                        }

                        createSuggestion(newInput)
                            .then((res) => setNewResponse(res))
                    }} 
                    className="suggester-button">SUBMIT</button>
            </form>
            <h3 className="suggester-response">{newResponse.response}</h3>
        </div>
        </>
    )
}