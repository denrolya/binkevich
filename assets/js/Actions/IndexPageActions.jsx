import axios from 'axios';

export function fetchIndexPageData() {
    return axios
        .get(Routing.generate('api_get_index_page_data'))
        .then(res => res.data);
}