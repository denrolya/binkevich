import axios from 'axios';

export function fetchCollections() {
    return axios
        .get(Routing.generate('api_get_collections'))
        .then(res => res.data)
        .catch(error => error);
}