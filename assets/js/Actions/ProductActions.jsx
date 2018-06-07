import axios from 'axios';
import {parse} from 'url';

export function fetchProductsInCategory(category) {
    return axios
        .get('/app_dev.php/api/v1/categories/' + category)
        .then(res => res.data);
}

export function fetchProductById(id) {
    return axios
        .get('/app_dev.php/api/v1/products/' + id)
        .then(res => res.data);
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function extractProductIdFromURI() {
    // get URL
    const URL = window.location.href;
    // parse URL
    const parseUrl = parse(URL.toString());
    // TODO path or pathname
    const path = parseUrl.path;
    // get ID
    // split parsed url path (" " / "product" / "1") and get 3-rd piece
    return path.split('/')[2];
}

export function extractCategoryFromURI() {
    const currentPath = new URL(window.location.href).pathname;
    const categorySlug = currentPath.substr(currentPath.lastIndexOf('/') + 1);

    return capitalize(categorySlug);
}

