export const getCleanings = (id) => {
    return fetch(`http://localhost:8000/cleanings?user=${id}`, {
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

export const getProperties = (id) => {
    return fetch(`http://localhost:8000/properties?user=${id}`, {
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

