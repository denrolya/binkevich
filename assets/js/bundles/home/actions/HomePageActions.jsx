import axios from 'axios';

export function fetchHomePageData() {
    return axios
        .get(Routing.generate('api_get_index_page_data'))
        .then(res => res.data);
}