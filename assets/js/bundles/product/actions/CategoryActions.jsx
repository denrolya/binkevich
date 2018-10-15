import axios from 'axios';

export function fetchCategories() {
    return axios
        .get(Routing.generate('api_get_categories'))
        .then(res => res.data)
        .catch(error => error);
}