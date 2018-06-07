import axios from 'axios';

export function fetchCollections() {
    return axios
        .get('/app_dev.php/api/v1/collections')
        .then(res => res.data)
        .catch(error => error);
}