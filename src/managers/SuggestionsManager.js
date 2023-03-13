export const getSuggestions = () => {
    return fetch("http://localhost:8000/suggestions", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
        .then(response => response.json())
}

export const createSuggestion = (suggestion) => {
    return fetch("http://localhost:8000/suggestions", { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("co_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(suggestion)
    })
        .then(response => response.json())
}


export const DeleteSuggestion = (suggestionId) => {
    fetch(`http://localhost:8000/suggestions/${suggestionId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
        // .then(response => response.json())
}
