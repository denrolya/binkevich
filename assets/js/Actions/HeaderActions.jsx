import axios from 'axios';

export function fetchCollectionsAndCategories() {
    return axios
        .get(Routing.generate('api_get_collections_and_categories'))
        .then(res => res.data)
        .catch(error => error);
}