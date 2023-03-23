
export const createSuggestion = (newInput) => {
    return fetch("http://localhost:8000/suggestions", { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("co_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInput)
    })
        .then(response => response.json())
}

