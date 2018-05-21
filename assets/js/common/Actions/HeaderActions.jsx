import fetch from 'isomorphic-fetch';

export function fetchCollections() {
    return fetch('/app_dev.php/api/v1/collections', {
        method: 'GET',
        mode:   'CORS'
    }).then(res => res.json())
        .catch(error => error);
}