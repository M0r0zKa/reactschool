import {baseUrl} from "./baseUrl";

const fetchServices = (elements,set) =>{

    fetch(`https://jsonplaceholder.typicode.com/${elements}`)
        .then(responce => responce.json())
        .then(value => set(value))
}

export {fetchServices}