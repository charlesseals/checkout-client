export const getProperties = () => {
    return fetch("http://localhost:8000/properties", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
        .then(response => response.json())
}



export const createProperty = (property) => {
    return fetch("http://localhost:8000/properties", { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("co_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(property)
    })
        .then(response => response.json())
}


export const getSingleProperty = (propertyId) => {
    return fetch(`http://localhost:8000/properties/${propertyId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
    .then(response => response.json())
}

export const updateProperty = (propertyId, property) => {
    return fetch(`http://localhost:8000/properties/${propertyId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("co_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(property)
    })
    // .then(response => response.json())
}

export const deleteProperty = (propertyId) => {
    return fetch(`http://localhost:8000/properties/${propertyId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("co_token")}`
        }
    })
}

