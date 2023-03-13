export const getCleanings = () => {
    return fetch("http://localhost:8000/cleanings", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
        .then(response => response.json())
}

export const createCleaning = (cleaning) => {
    return fetch("http://localhost:8000/cleanings", { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("co_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cleaning)
    })
        .then(response => response.json())
}

export const getProperties = () => {
    return fetch("http://localhost:8000/properties", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
    .then(response => response.json())
}

export const getCleaners = () => {
    return fetch("http://localhost:8000/cleaners", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
    .then(response => response.json())
}

